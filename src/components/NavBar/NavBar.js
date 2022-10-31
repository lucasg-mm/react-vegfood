import React, {useState} from "react";
import "./NavBar.css";

function NavBar() {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const activateBurger = () => setIsBurgerActive((prev) => !prev);

  return (
    <>
      <nav
        id="nav-vegfood"
        className="navbar"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img
              src="http://localhost:3000/logo.png"
              alt="Vegfood's logo: a pig with a heart on the background"
              id="logo-vegfood"
            />
          </a>

          <a
            onClick={activateBurger}
            role="button"
            className={`navbar-burger ${isBurgerActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${isBurgerActive ? "is-active" : ""}`}>
          <div id="search-item" className="navbar-item">
            <p id="search-field" className="control has-icons-left">
              <input
                className="input is-rounded"
                type="text"
                placeholder="Buscar restaurantes ou pratos..."
              />
              <span className="icon is-small is-left">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
            </p>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <a className="button is-primary" id="login-btn">
              <strong>Entrar</strong>
            </a>
          </div>
          <div className="navbar-item" >
            <a id="cart-btn">
              <span className="material-icons" id="cart-icon">
                shopping_cart
              </span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
