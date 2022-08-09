import React from 'react';
import {ThreeDots} from 'react-loader-spinner';

export function Loading() {
  return (
    <>
    <div className="flex flex-col items-center justify-center">
    <span className="text-2xl sm:text-4xl font-medium text-white">Loading...</span>
    <ThreeDots
      height={100}
      width={100}
      timeout={5000}
      color={"white"}
      />
      </div>
    </>
  );
}
