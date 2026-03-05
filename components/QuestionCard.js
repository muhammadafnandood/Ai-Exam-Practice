import React from 'react';

export default function QuestionCard({ question, questionNumber, selectedAnswer, onSelectAnswer, isTimeUp, showResult }) {
  const typeColors = {
    basic: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
    conceptual: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
    advanced: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
    practice: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
  };

  const typeLabels = {
    basic: 'Basic',
    conceptual: 'Conceptual',
    advanced: 'Advanced',
    practice: 'Practice'
  };

  const isCorrect = selectedAnswer === question.correct;
  const isTimeout = selectedAnswer === -1;

  return (
    <div className="card w-full max-w-4xl mx-auto overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${typeColors[question.type] || typeColors.basic}`}>
          {typeLabels[question.type] || 'Question'}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Question {questionNumber}
        </span>
      </div>

      <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-6 leading-relaxed">
        {question.question}
      </h2>

      {/* Result Feedback */}
      {showResult && selectedAnswer !== null && (
        <div className={`mb-4 p-3 rounded-lg flex items-center space-x-3 ${
          isTimeout
            ? 'bg-orange-100 dark:bg-orange-900/30 border-2 border-orange-500'
            : isCorrect
              ? 'bg-green-100 dark:bg-green-900/30 border-2 border-green-500'
              : 'bg-red-100 dark:bg-red-900/30 border-2 border-red-500'
        }`}>
          {isTimeout ? (
            <>
              <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <span className="text-base font-semibold text-orange-700 dark:text-orange-300 block">Time's Up!</span>
                <span className="text-xs text-orange-600 dark:text-orange-400">
                  Correct answer: <strong>Option {String.fromCharCode(65 + question.correct)}</strong>
                </span>
              </div>
            </>
          ) : isCorrect ? (
            <>
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-base font-semibold text-green-700 dark:text-green-300">Correct! Well done!</span>
            </>
          ) : (
            <>
              <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <span className="text-base font-semibold text-red-700 dark:text-red-300 block">Wrong Answer</span>
                <span className="text-xs text-red-600 dark:text-red-400">
                  Correct answer: <strong>Option {String.fromCharCode(65 + question.correct)}</strong>
                </span>
              </div>
            </>
          )}
        </div>
      )}

      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrectAnswer = question.correct === index;

          let optionStyle = 'option-btn ';

          if (showResult && selectedAnswer !== null) {
            if (isCorrectAnswer) {
              optionStyle += 'border-green-500 bg-green-100 dark:bg-green-900/30 ';
            } else if (isSelected && !isCorrectAnswer) {
              optionStyle += 'border-red-500 bg-red-100 dark:bg-red-900/30 ';
            } else {
              optionStyle += 'opacity-50 ';
            }
          } else {
            if (isSelected) {
              optionStyle += 'selected ';
            }
          }

          return (
            <button
              key={index}
              onClick={() => onSelectAnswer(index)}
              disabled={showResult || isTimeUp}
              className={`${optionStyle} ${
                (showResult || isTimeUp) ? 'cursor-not-allowed' : ''
              } p-3`}
            >
              <div className="flex items-start space-x-3">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-semibold transition-colors text-sm ${
                  showResult && selectedAnswer !== null
                    ? isCorrectAnswer
                      ? 'bg-green-500 text-white'
                      : isSelected
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    : isSelected
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}>
                  {String.fromCharCode(65 + index)}
                </div>
                <span className="text-gray-900 dark:text-white text-left flex-1 pt-0.5 text-sm md:text-base">
                  {option}
                </span>
                {showResult && selectedAnswer !== null && isCorrectAnswer && (
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {showResult && selectedAnswer !== null && isSelected && !isCorrectAnswer && (
                  <svg className="w-5 h-5 text-red-600 dark:text-red-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
