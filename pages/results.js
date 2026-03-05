import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getUser } from '../utils/auth';
import Header from '../components/Header';
import ResultCard from '../components/ResultCard';
import LoadingScreen from '../components/LoadingScreen';

export default function Results() {
  const router = useRouter();
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  // Auth check
  useEffect(() => {
    const user = getUser();
    if (!user) {
      router.push('/login');
      return;
    }
    setIsCheckingAuth(false);
  }, [router]);

  // Load results from sessionStorage
  useEffect(() => {
    if (isCheckingAuth) return;

    const storedResults = sessionStorage.getItem('examResults');
    console.log('Stored results:', storedResults);

    if (!storedResults) {
      console.log('No results found, redirecting to dashboard');
      router.push('/dashboard');
      return;
    }

    try {
      const parsedResults = JSON.parse(storedResults);
      console.log('Parsed results:', parsedResults);
      setResults(parsedResults);
      setIsLoading(false);
    } catch (error) {
      console.error('Error parsing results:', error);
      router.push('/dashboard');
    }
  }, [router, isCheckingAuth]);

  // Loading state
  if (isCheckingAuth || isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <LoadingScreen message="Loading results..." />
      </div>
    );
  }

  // No results
  if (!results) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ResultCard
          score={results.score}
          total={results.total}
          correct={results.correct}
          wrong={results.wrong}
          percentage={results.percentage}
          level={results.level}
          levelColor={results.levelColor}
          chapterTitle={results.chapterTitle}
          mode={results.mode}
        />

        {/* Detailed Analysis */}
        <div className="mt-12 card">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Performance Analysis
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Score Breakdown</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Correct Answers</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">{results.correct}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Wrong Answers</span>
                  <span className="font-semibold text-red-600 dark:text-red-400">{results.wrong}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Total Questions</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{results.total}</span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-600 pt-3 flex justify-between items-center">
                  <span className="font-semibold text-gray-900 dark:text-white">Percentage</span>
                  <span className="font-bold text-xl" style={{ color: results.levelColor }}>
                    {results.percentage.toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Performance Level</h4>
              <div className="text-center py-4">
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: results.levelColor }}
                >
                  {results.level}
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {results.percentage >= 90 && 'Outstanding performance! You have mastered this topic.'}
                  {results.percentage >= 70 && results.percentage < 90 && 'Great job! You have a good understanding.'}
                  {results.percentage >= 50 && results.percentage < 70 && 'Good effort! Review and practice more.'}
                  {results.percentage < 50 && 'Keep practicing! Review the material and try again.'}
                </p>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Recommendations
            </h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              {results.percentage < 50 && (
                <>
                  <li>• Review the chapter material thoroughly before retaking</li>
                  <li>• Try Practice Mode for targeted learning</li>
                  <li>• Focus on understanding basic concepts first</li>
                </>
              )}
              {results.percentage >= 50 && results.percentage < 70 && (
                <>
                  <li>• Review questions you got wrong</li>
                  <li>• Practice more to improve retention</li>
                  <li>• Focus on conceptual understanding</li>
                </>
              )}
              {results.percentage >= 70 && results.percentage < 90 && (
                <>
                  <li>• Great work! Review any remaining weak areas</li>
                  <li>• Try the Mixed Test to challenge yourself</li>
                  <li>• Help others understand the concepts</li>
                </>
              )}
              {results.percentage >= 90 && (
                <>
                  <li>• Excellent mastery! Consider taking the Mixed Test</li>
                  <li>• Help peers understand difficult concepts</li>
                  <li>• Explore advanced topics in this area</li>
                </>
              )}
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>&copy; 2026 AI Exam Platform. Keep learning and improving!</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
