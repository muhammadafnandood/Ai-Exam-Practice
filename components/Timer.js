import React from 'react';

export default function Timer({ totalSeconds, questionSeconds, isUrgent }) {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed top-20 right-4 z-40 flex flex-col space-y-2">
      {/* Total Timer */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 min-w-[120px] border-2 border-primary-500">
        <div className="text-xs text-gray-500 dark:text-gray-400 text-center mb-1">Total Time</div>
        <div className={`text-2xl font-bold text-center ${isUrgent ? 'timer-urgent' : 'text-gray-900 dark:text-white'}`}>
          {formatTime(totalSeconds)}
        </div>
      </div>

      {/* Question Timer */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 min-w-[120px] border-2 border-green-500">
        <div className="text-xs text-gray-500 dark:text-gray-400 text-center mb-1">Question</div>
        <div className={`text-2xl font-bold text-center ${questionSeconds <= 10 ? 'timer-urgent' : 'text-gray-900 dark:text-white'}`}>
          {formatTime(questionSeconds)}
        </div>
      </div>
    </div>
  );
}
