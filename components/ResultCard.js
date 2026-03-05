import React from 'react';
import Link from 'next/link';

export default function ResultCard({ score, total, correct, wrong, percentage, level, levelColor, chapterTitle, mode }) {
  return (
    <div className="card w-full max-w-2xl mx-auto text-center">
      <div className="mb-8">
        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {mode === 'mixed' ? 'Mixed Final Test' : chapterTitle}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          {mode === 'practice' ? 'Practice Mode' : mode === 'mixed' ? 'All Chapters Combined' : 'Chapter Exam'}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{score}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Total Score</div>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">{correct}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Correct</div>
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
          <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-1">{wrong}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Wrong</div>
        </div>
      </div>

      <div className="mb-8">
        <div className="text-6xl font-bold mb-2" style={{ color: levelColor }}>
          {percentage.toFixed(1)}%
        </div>
        <div className={`inline-block px-6 py-2 rounded-full text-lg font-semibold ${levelColor} bg-opacity-10`}>
          <span style={{ color: levelColor }}>{level}</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/dashboard" className="btn-secondary flex-1 text-center">
          Back to Dashboard
        </Link>
        {mode !== 'mixed' && (
          <Link href={`/exam?chapter=${chapterTitle.split(' ')[1]}&mode=practice`} className="btn-primary flex-1 text-center">
            Practice Mode
          </Link>
        )}
      </div>
    </div>
  );
}
