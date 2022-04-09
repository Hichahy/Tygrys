import React from "react";
import "./footer.scss";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="section-box">
        <section className="info-section">
          <h2>tygrys</h2>
          <span>
            <i className="bi bi-phone"></i>
            +48 111 111 111
          </span>
          <span>
            <i className="bi bi-envelope"></i>
            stasiu94pro@icloud.com
          </span>
          <span>
            <i className="bi bi-geo-alt"></i>
            Kanada, Bobrowa 25 25/25
          </span>
          <span>NIP 111-111-1-111</span>
          <span>Godziny otwarcia pon-pt 9-17</span>
          <span>
            <a
              target="_blank"
              href="https://www.instagram.com/"
              rel="noreferrer"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/"
              rel="noreferrer"
            >
              <i className="bi bi-facebook"></i>
            </a>
          </span>
        </section>
        <section>
          <h2>o nas</h2>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            repellat modi magni aliquam? Dolorem, delectus alias fuga natus
            laborum culpa veniam cumque non voluptate, nam sit quas pariatur,
            dicta unde!
          </span>
        </section>
        <section>
          <h2>idz do</h2>
          <ul>
            <li>
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/products">
                Produkty
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/products">
                Kontakt
              </NavLink>
            </li>
          </ul>
        </section>
      </div>
      <span className="company">© 2022 by TYGRYS</span>
    </footer>
  );
};

export default Footer;
