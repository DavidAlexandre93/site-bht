import React, {
  useContext,
  useRef,
  useEffect,
  useState,
  useCallback,
} from "react";
import { MouseContext } from "../context/mouse-context";
import {
  SliderImage1,
  SliderImage2,
  SliderImage3,
  SliderImage4,
} from "../utils/Images";
import "../css/SlideAbout.scss";

// Assuming Images is static and defined outside the component to avoid re-creation on each render
const Images = [SliderImage1, SliderImage2, SliderImage3, SliderImage4];

const SliderAbout = () => {
  const { cursorChangeHandler } = useContext(MouseContext);
  const [imageIndex, setImageIndex] = useState(0);
  const controlContainerRef = useRef();
  const buttonSlider = useRef();
  const imageSliderRef = useRef();

  // Define removeAllActiveDot first, as it will be used in handleChangeImage
  const removeAllActiveDot = useCallback(() => {
    if (controlContainerRef.current) {
      Array.from(controlContainerRef.current.children).forEach((cur) => {
        cur.classList.remove("active-slider");
      });
    }
  }, []);

  // Now define handleChangeImage, which depends on removeAllActiveDot
  const handleChangeImage = useCallback(() => {
    const newIndex = imageIndex + 1 < Images.length ? imageIndex + 1 : 0;
    setImageIndex(newIndex);
    if (imageSliderRef.current) {
      imageSliderRef.current.src = Images[newIndex];
    }
    removeAllActiveDot();
    if (controlContainerRef.current) {
      [...controlContainerRef.current.children][newIndex].classList.add(
        "active-slider"
      );
    }
  }, [imageIndex, removeAllActiveDot]); // Include removeAllActiveDot in the dependency array

  useEffect(() => {
    const button = buttonSlider.current;
    const handleChangeButtonState = () => handleChangeImage();

    button && button.addEventListener("click", handleChangeButtonState);

    return () => {
      button && button.removeEventListener("click", handleChangeButtonState);
    };
  }, [handleChangeImage]); // Depend on the memoized version of handleChangeImage

  return (
    <div className="container-slide">
      <div className="image-slider">
        {/* Image Slider Views */}
        <div className="view-slider view-slider-1">
          <img src={SliderImage1} alt="Slide 1" />
        </div>
        <div className="view-slider view-slider-2">
          <img src={SliderImage2} alt="Slide 2" />
        </div>
        <div className="view-slider view-slider-3">
          <img src={SliderImage3} alt="Slide 3" />
        </div>
        <div className="view-slider view-slider-4">
          <img src={SliderImage4} alt="Slide 4" ref={imageSliderRef} />
        </div>
        {/* Slider Control Container */}
        <div className="control-container" ref={controlContainerRef}>
          <span className="slider-1 active-slider" data-slider-index="1"></span>
          <span className="slider-2" data-slider-index="2"></span>
          <span className="slider-3" data-slider-index="3"></span>
          <span className="slider-4" data-slider-index="4"></span>
        </div>
      </div>
      <span
        ref={buttonSlider}
        className="slider-next-btn"
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
      >
        <i className="bx bx-right-arrow"></i>
      </span>
    </div>
  );
};

export default SliderAbout;
