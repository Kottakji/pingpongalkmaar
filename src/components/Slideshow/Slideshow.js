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
    <div className="slide-container h-[36vw] overflow-hidden">
      <div
        className="whitespace-nowrap h-[36vw] duration-1000 transition ease-in-out"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slides.map((slide, index) => (
          <div
            className="inline-block w-full h-[36vw] bg-no-repeat bg-cover bg-top bg-black"
            key={index}
            style={{
              backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${slide.details.image})`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
