import React from "react";
const LoadingSpinner = () => (
  <div className="loading-spinner h-[100svh] w-full flex justify-center items-center relative">
    <div className="h-48 w-48 border-t-8 rounded-full border-[#ffba00] flex justify-center items-center animate-spin"></div>
    <div className="h-32 w-32 border-t-8 rounded-full  flex justify-center items-center absolute translate-y-[-50px] animated-border "></div>
    <h1 className="text-8xl absolute top-[50%] translate-y-[-50px] ">J</h1>
  </div>
);

export default LoadingSpinner;
// animate-spin
// animated - border
