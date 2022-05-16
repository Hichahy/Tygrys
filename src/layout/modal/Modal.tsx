import React from "react";
import "./modal.scss";

interface IProps {
  handleClose: () => void;
  show: boolean;
  product: {
    image: string;
    imageHover: string;
    title: string;
  };
  clickedImg: string;
}

const Modal = ({ handleClose, show, product, clickedImg }: IProps) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const displayImg = () =>
    ({
      ["1"]: <img src={product.image} alt={product.title} />,
      ["2"]: <img src={product.imageHover} alt={product.title} />,
    }[clickedImg]);

  return (
    <div className={showHideClassName}>
      <div className="overlay" onClick={handleClose} />
      <section className="modal-main">
        {displayImg()}
        <div className="close-wrapper">
          <i className="bi bi-x" onClick={handleClose}></i>
        </div>
      </section>
    </div>
  );
};

export default Modal;
