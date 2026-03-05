import React from 'react';

export default function ProgressBar({ current, total }) {
  const percentage = ((current / total) * 100).toFixed(1);

  return (
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
      <div
        className="bg-gradient-to-r from-primary-500 to-primary-700 h-full rounded-full transition-all duration-300 ease-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}

export function ProgressIndicator({ current, total }) {
  return (
    <div className="flex items-center space-x-4 w-full">
      <div className="flex-1">
        <ProgressBar current={current} total={total} />
      </div>
      <div className="text-sm font-medium text-gray-700 dark:text-gray-300 min-w-[100px] text-right">
        Question {current} / {total}
      </div>
    </div>
  );
}
