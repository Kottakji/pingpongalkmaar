import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const properties = {
  prevArrow: <button className={"hidden"}></button>,
  nextArrow: <button className={"hidden"}></button>,
};

export default function Slideshow({ slides }) {
  return (
    <>
      <div className="slide-container h-[36rem]">
        <Slide {...properties}>
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
        </Slide>
      </div>
    </>
  );
}
