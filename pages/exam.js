import { useState, useEffect, useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';
import { chapters, practiceQuestions } from '../data';
import Header from '../components/Header';
import Timer from '../components/Timer';
import QuestionCard from '../components/QuestionCard';
import { ProgressIndicator } from '../components/ProgressBar';
import LoadingScreen from '../components/LoadingScreen';

const TOTAL_EXAM_TIME = 50 * 60; // 50 minutes in seconds
const QUESTION_TIME = 60; // 60 seconds per question
const FEEDBACK_DELAY = 2000; // 2 seconds to show feedback

// Utility functions (defined outside component to avoid re-creation)
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function shuffleQuestionOptions(question) {
  const indices = [0, 1, 2, 3];
  const shuffledIndices = shuffleArray(indices);
  const newOptions = shuffledIndices.map(i => question.options[i]);
  const newCorrect = shuffledIndices.indexOf(question.correct);
  return {
    ...question,
    options: newOptions,
    correct: newCorrect
  };
}

export default function Exam() {
  const router = useRouter();
  const { chapter, mode } = router.query;
  const { isAuthenticated, loading } = useAuth();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [totalTimeLeft, setTotalTimeLeft] = useState(TOTAL_EXAM_TIME);
  const [questionTimeLeft, setQuestionTimeLeft] = useState(QUESTION_TIME);
  const [isExamActive, setIsExamActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [isRedirecting, setIsRedirecting] = useState(false);

  // Auth check
  useEffect(() => {
    if (!loading && !isAuthenticated && !isRedirecting) {
      setIsRedirecting(true);
      router.push('/login');
    }
  }, [loading, isAuthenticated, router, isRedirecting]);

  // Load questions based on mode and chapter
  useEffect(() => {
    if (!router.isReady || loading) return;

    const loadQuestions = () => {
      setIsLoading(true);
      setError(null);

      try {
        let loadedQuestions = [];

        if (mode === 'mixed') {
          chapters.forEach(chap => {
            loadedQuestions = [...loadedQuestions, ...chap.questions];
          });
        } else if (mode === 'practice' && chapter) {
          const chapterNum = parseInt(chapter);
          loadedQuestions = practiceQuestions.practiceQuestions[chapterNum] || [];
        } else if (chapter) {
          const chapterNum = parseInt(chapter);
          const chapterData = chapters.find(c => c.chapter === chapterNum);
          if (!chapterData) {
            setError('Chapter not found');
            setIsLoading(false);
            return;
          }
          loadedQuestions = [...chapterData.questions];
        }

        // Shuffle questions
        if (mode === 'mixed') {
          loadedQuestions = shuffleArray(loadedQuestions);
        } else {
          const basic = shuffleArray(loadedQuestions.filter(q => q.type === 'basic'));
          const conceptual = shuffleArray(loadedQuestions.filter(q => q.type === 'conceptual'));
          const advanced = shuffleArray(loadedQuestions.filter(q => q.type === 'advanced'));
          loadedQuestions = [...basic, ...conceptual, ...advanced];
        }

        // Shuffle options for each question
        loadedQuestions = loadedQuestions.map(q => shuffleQuestionOptions(q));

        setQuestions(loadedQuestions);
        setTotalTimeLeft(mode === 'practice' ? 30 * 60 : TOTAL_EXAM_TIME);
        setIsLoading(false);
        setIsExamActive(true);
      } catch (err) {
        console.error('Error loading questions:', err);
        setError('Failed to load questions');
        setIsLoading(false);
      }
    };

    loadQuestions();
  }, [router.isReady, chapter, mode, loading]);

  // Move to next question
  const moveToNextQuestion = useCallback(() => {
    setSelectedAnswer(null);
    setShowResult(false);
    setQuestionTimeLeft(QUESTION_TIME);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Submit exam
      setIsSubmitting(true);
      setTimeout(() => {
        const score = answers.filter(a => a.isCorrect).length;
        const correct = score;
        const wrong = answers.length - correct;
        const percentage = answers.length > 0 ? (correct / answers.length) * 100 : 0;

        let level = 'Beginner';
        let levelColor = 'text-blue-600 dark:text-blue-400';
        if (percentage >= 90) {
          level = 'Expert';
          levelColor = 'text-green-600 dark:text-green-400';
        } else if (percentage >= 75) {
          level = 'Advanced';
          levelColor = 'text-purple-600 dark:text-purple-400';
        } else if (percentage >= 60) {
          level = 'Intermediate';
          levelColor = 'text-yellow-600 dark:text-yellow-400';
        }

        const chapterTitle = mode === 'mixed'
          ? 'Mixed Test'
          : chapters.find(c => c.chapter === parseInt(chapter))?.title || 'Unknown';

        const resultsData = {
          score,
          total: answers.length,
          correct,
          wrong,
          percentage,
          level,
          levelColor,
          chapterTitle,
          mode: mode || 'main'
        };

        console.log('Submitting exam with results:', resultsData);
        sessionStorage.setItem('examResults', JSON.stringify(resultsData));
        router.push('/results');
      }, 1000);
    }
  }, [currentQuestionIndex, questions.length, answers, chapter, mode, router]);

  // Handle answer selection
  const handleSelectAnswer = useCallback((answerIndex) => {
    if (selectedAnswer !== null || showResult) return;

    setSelectedAnswer(answerIndex);
    setShowResult(true);

    const currentQuestion = questions[currentQuestionIndex];
    setAnswers(prev => [...prev, {
      questionId: currentQuestion.id,
      selectedAnswer: answerIndex,
      correctAnswer: currentQuestion.correct,
      isCorrect: answerIndex === currentQuestion.correct
    }]);

    const delay = answerIndex === -1 ? 1000 : FEEDBACK_DELAY;
    setTimeout(() => {
      moveToNextQuestion();
    }, delay);
  }, [selectedAnswer, showResult, currentQuestionIndex, questions, moveToNextQuestion]);

  // Timer effect
  useEffect(() => {
    if (!isExamActive || isLoading || isSubmitting) return;

    const timer = setInterval(() => {
      setTotalTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          moveToNextQuestion();
          return 0;
        }
        return prev - 1;
      });

      setQuestionTimeLeft(prev => {
        if (prev <= 1) {
          handleSelectAnswer(-1);
          return QUESTION_TIME;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isExamActive, isLoading, isSubmitting, handleSelectAnswer, moveToNextQuestion]);

  // Check if time is urgent
  const isUrgent = totalTimeLeft < 300; // Less than 5 minutes

  // Get current question
  const currentQuestion = questions[currentQuestionIndex];

  // Loading states
  if (loading || (isLoading && questions.length === 0)) {
    return <LoadingScreen message="Loading exam..." />;
  }

  // Show error if chapter not found
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 text-center">
            <p className="text-red-600 dark:text-red-400 text-lg mb-4">{error}</p>
            <button
              onClick={() => router.push('/dashboard')}
              className="btn-primary"
            >
              Go Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  // No questions available
  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">No questions available</h2>
            <button
              onClick={() => router.push('/dashboard')}
              className="btn-primary"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <Header />

      {/* Timers */}
      {isExamActive && (
        <Timer
          totalSeconds={totalTimeLeft}
          questionSeconds={questionTimeLeft}
          isUrgent={isUrgent}
        />
      )}

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-[calc(100vh-80px)] flex flex-col">
        {/* Progress */}
        <div className="mb-6 flex-shrink-0">
          <ProgressIndicator current={currentQuestionIndex + 1} total={questions.length} />
        </div>

        {/* Question Card */}
        {currentQuestion && (
          <div className="flex-1 flex items-center justify-center">
            <QuestionCard
              question={currentQuestion}
              questionNumber={currentQuestionIndex + 1}
              selectedAnswer={selectedAnswer}
              onSelectAnswer={handleSelectAnswer}
              isTimeUp={questionTimeLeft === 0 && selectedAnswer === null}
              showResult={showResult}
            />
          </div>
        )}

        {/* Info Footer */}
        <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400 flex-shrink-0">
          <p>Select an answer to see feedback • Next question loads automatically</p>
        </div>
      </main>
    </div>
  );
}
