import React, { useState, useEffect } from "react";
import "./navigation.scss";
import { NavLink, useLocation } from "react-router-dom";

const Navigation = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [widthMenu, setWidthMenu] = useState(window.innerWidth);
  const [showNavlinks, setShowNavlinks] = useState(false);

  const closeBurger = () => {
    const input = document.getElementById(
      "burger-menu"
    ) as HTMLInputElement | null;

    setBurgerMenu(false);

    if (input != null) {
      input.checked = false;
    }
  };

  //On change location close burger
  const location = useLocation();
  useEffect(() => {
    if (location) {
      closeBurger();
    }
  }, [location]);

  window.addEventListener("resize", () => setWidthMenu(window.innerWidth));
  console.log(`widthMenu`, widthMenu);

  return (
    <>
      {burgerMenu ? (
        <div onClick={() => closeBurger()} className="burger-overlay" />
      ) : null}
      <nav style={{ backgroundColor: `${burgerMenu ? "white" : ""}` }}>
        <div className="menu-icon">
          <input
            onClick={() => setBurgerMenu(!burgerMenu)}
            className="menu-icon-cheeckbox"
            type="checkbox"
            id="burger-menu"
          />
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
        <NavLink className="logo" to="/home">
          Tygrys
        </NavLink>
        {burgerMenu || widthMenu >= 500 ? (
          <ul className="burger-active">
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
        ) : null}
      </nav>
    </>
  );
};

export default Navigation;
