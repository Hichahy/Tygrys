import React, { useState, useEffect } from "react";
import slidersPhoto from "./sliderdata";
import "./photoSlider.scss";
import { Fade } from "react-awesome-reveal";

interface IProps {
  id: number;
  image: string;
  title: string;
  quote: string;
  photoIndex: number;
  indexSlider: number;
  sliders: any;
  setIndexSlider: React.Dispatch<React.SetStateAction<number>>;
}

const PhotoSlider = ({
  setIndexSlider,
  indexSlider,
  photoIndex,
  image,
  id,
  title,
  quote,
  sliders,
}: IProps) => {

  //auto slide
  useEffect(() => {
    const lastIndex = sliders.length - 1;
    if (indexSlider < 0) {
      setIndexSlider(lastIndex);
    }
    if (indexSlider > lastIndex) {
      setIndexSlider(0);
    }
  }, [indexSlider, sliders]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndexSlider(indexSlider + 1);
    }, 10000);
    return () => clearInterval(slider);
  }, [indexSlider]);

  //change style for hide no active slides
  let position = "next-slide";
  if (photoIndex === indexSlider) {
    position = "active-slide";
  }
  if (
    photoIndex === indexSlider - 1 ||
    (indexSlider === 0 && photoIndex === slidersPhoto.length - 1)
  ) {
    position = "last-slide";
  }

  return (
    <>
      <article className={position} key={id}>
        <img src={image} alt={title} className="slide-img" />
        <div className="product-info">
          <Fade triggerOnce={true} direction={"left"}>
            <h2 className="title">{title}</h2>
            <p className="text">{quote}</p>
          </Fade>
        </div>
      </article>
    </>
  );
};

export default PhotoSlider;
