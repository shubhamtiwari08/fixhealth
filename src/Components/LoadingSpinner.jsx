import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-t-4 border-blue-500 border-solid rounded-full h-12 w-12 animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
