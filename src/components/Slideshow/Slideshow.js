import React, { useState, useEffect, useRef, useCallback } from "react";

const delay = 5000;

export default function Slideshow({ slides }) {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  if (!slides) {
    return <></>;
  }

  return (
    <div className="slide-container h-[36rem] overflow-hidden">
      <div
        className="whitespace-nowrap duration-1000 transition ease-in-out"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slides.map((slide, index) => (
          <div
            className="inline-block w-full h-[36rem] bg-no-repeat bg-cover"
            key={index}
            style={{
              backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${slide.details.image})`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <div className="slide-container h-[36rem]">
        {slides.map((slide, index) => (
          <div className="each-slide" key={index}>
            <div
              style={{
                backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${slide.details.image})`,
              }}
              className={
                "bg-cover bg-center flex justify-start items-center h-[36rem] w-full p-12"
              }
            >
              <span className={"text-7xl"}>{slide.details.title}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
