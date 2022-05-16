import React, { useState } from "react";
import slidersPhoto from "../../layout/photoSlider/sliderdata";
import { useParams } from "react-router-dom";
import "./product.scss";
import Modal from "../../layout/modal/Modal";

const Product = () => {
  const [show, setShow] = useState(false);
  const [clickedImg, setClickedImg] = useState("");

  const { id } = useParams();
  const findProduct = () => {
    return slidersPhoto.find((x) => x.id === id);
  };
  const product = findProduct()!;

  if (slidersPhoto.length < 1) {
    return <div>loading...</div>;
  }

  const hideModal = () => {
    setShow(false);
  };

  const showModal = (imgNumber: string) => {
    setShow(true);
    setClickedImg(imgNumber);
  };

  return (
    <div className="product-container">
      <Modal
        show={show}
        handleClose={hideModal}
        product={product}
        clickedImg={clickedImg}
      />
      <section className="product-s-1">
        <div className="page-title">
          <label>0{product.id.slice(7)}</label>
          <label className="title">{product.title}</label>
        </div>
        <div className="quote">
          <p>{product.quote}</p>
        </div>
      </section>
      <section className="presentation-s-2">
        <label>Take a look</label>
        <div className="img-wrapper">
          <div onClick={() => showModal("1")}>
            <img src={product.image} alt={product.title} />
            <label>01</label>
          </div>
          <div onClick={() => showModal("2")}>
            <img src={product.imageHover} alt={product.title} />
            <label>02</label>
          </div>
        </div>
      </section>
      <section className="precise-description">
        <label>Something about it</label>
        <p>{product.preciseDescription}</p>
      </section>
    </div>
  );
};

export default Product;
