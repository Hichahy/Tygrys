import React, { useEffect, useState } from "react";
import "./products.scss";
import slidersPhoto from "../../layout/photoSlider/sliderdata";
import PhotoSlider from "../../layout/photoSlider/PhotoSlider";
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom'

const Products = () => {
  const [sliders] = useState(slidersPhoto);
  const [indexSlider, setIndexSlider] = useState(0);

  return (
    <div className="products-container">
      <div className="slider">
        {sliders.map((slide, photoIndex) => {
          return (
            <PhotoSlider
              key={slide.id}
              {...slide}
              photoIndex={photoIndex}
              indexSlider={indexSlider}
              setIndexSlider={setIndexSlider}
              sliders={sliders}
            />
          );
        })}
      </div>
      <button className="prev" onClick={() => setIndexSlider(indexSlider - 1)}>
        <i className="bi bi-arrow-left"></i>
      </button>
      <button className="next" onClick={() => setIndexSlider(indexSlider + 1)}>
        <i className="bi bi-arrow-right"></i>
      </button>
      <section className="shop-carts">
        {sliders.map((i) => (
          <Link key={i.id} to={`/produkt/${i.id}`}>
            <Fade triggerOnce={true} >
              <div className="cart">
                <img
                  src={i.image}
                  onMouseEnter={(e) => (e.currentTarget.src = i.imageHover)}
                  onMouseLeave={(e) => (e.currentTarget.src = i.image)}
                  alt={i.title}
                />
                <h1>{i.title}</h1>
                <p>{i.quote}</p>
              </div>
            </Fade>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Products;
