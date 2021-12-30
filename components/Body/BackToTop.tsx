import React from "react";

const BackToTop = () => {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  };

  return (
    <div className="h-96 relative">
      <button onClick={backToTop} className="fixed right-0 bottom-0 m-12 w-max flex flex-col items-center space-y-2">
        <BTTButton />
        <span className="font-semibold text-purple-500 mix-blend-difference">
        Back To Top
        </span>
      </button>
    </div>
  );
};

export default BackToTop;

const BTTButton = () => {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="13.5" cy="13.5" r="13.5" fill="#8B12FC" />
      <path
        d="M13.589 6.39323C13.6812 6.14734 14.029 6.14734 14.1212 6.39323L18.9108 19.1656C19.0039 19.4138 18.7367 19.643 18.5056 19.5132L13.9942 16.9805C13.9078 16.932 13.8024 16.932 13.7159 16.9805L9.20455 19.5132C8.97347 19.643 8.70626 19.4138 8.79931 19.1656L13.589 6.39323Z"
        fill="white"
      />
    </svg>
  );
};
