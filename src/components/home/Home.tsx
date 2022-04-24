import React, { useRef } from "react";
import "./home.scss";
import { NavLink } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  // onClick go to description
  const infoRef: any = useRef(null);
  const executeScroll = () => {
    infoRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-container">
      <div className="photo">
        <div>
          <h1>TYGRYS</h1>
          <h2>Unikalne drzwi do twojego wnętrza</h2>
        </div>
        <button onClick={executeScroll}>czytaj więcej...</button>
      </div>
      <section ref={infoRef} className="info-1">
        <div className="description-box">
          <Fade triggerOnce={true} direction={"left"}>
            <h2>U nas możesz spodziewać się najwyższej jakośći</h2>
          </Fade>
        </div>

        <div className="tittle-1">
          <img
            src="https://images.pexels.com/photos/6873894/pexels-photo-6873894.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="loftowe meble"
          />
        </div>
        <div className="paragraph-1">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id magnam
            ab quibusdam. Alias maiores, assumenda debitis ipsam necessitatibus,
            minus voluptates voluptatum accusantium ipsa nesciunt fugiat quasi
            nulla sit molestias adipisci!
          </p>
        </div>
      </section>
      <section className="info-2">
        <div className="description-box">
          <Fade triggerOnce={true} direction={"right"}>
            <h2>Dostosujemy się do twojej framugi</h2>
          </Fade>
        </div>

        <div className="tittle-2">
          <img
            src="https://images.pexels.com/photos/9934462/pexels-photo-9934462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="loftowe meble"
          />
        </div>
        <div className="paragraph-2">
          <p>
            Wersja Beta dolor sit amet consectetur adipisicing elit. Id magnam
            ab quibusdam. Alias maiores, assumenda debitis ipsam necessitatibus,
            minus voluptates voluptatum accusantium ipsa nesciunt fugiat quasi
            nulla sit molestias adipisci!
          </p>
        </div>
      </section>
      <section className="info-3">
        <div className="description-box">
          <Fade triggerOnce={true} direction={"up"}>
            <h2>Skontaktuj się z nami. Jesteśmy dostępni chetnie pomozemy</h2>
          </Fade>
        </div>

        <div className="tittle-3">
          <img
            src="https://images.pexels.com/photos/3987032/pexels-photo-3987032.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="loftowe meble"
          />
        </div>
        <div className="paragraph-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id magnam
            ab quibusdam. Alias maiores, assumenda debitis ipsam necessitatibus,
            minus voluptates voluptatum accusantium ipsa nesciunt fugiat quasi
            nulla sit molestias adipisci!
          </p>
        </div>
        <NavLink className="nav-link" to="/products">
          Kontakt
        </NavLink>
      </section>
    </div>
  );
};

export default Home;
