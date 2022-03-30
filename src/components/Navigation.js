import "../styles/sass/Navigation.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Navigation() {
  const [menuSatus, setMenuSatus] = useState(false);

  const openMenu = (e) => {
    const body = document.getElementById("body");
    const buttonMenu = document.getElementById("navMenu");
    const navMenu = document.getElementById("navMenu");

    buttonMenu.classList.toggle("active");

    body.classList.toggle("menu-open");
    navMenu.classList.toggle("open");

    menuSatus ? setMenuSatus(false) : setMenuSatus(true);
  };

  return (
    <>
      <nav className="nav">
        <button className="nav__button-menu" onClick={(e) => openMenu(e)} id="buttonMenu">
          {
            menuSatus
            ?
            <FontAwesomeIcon icon={solid("xmark")} />
            :
            <FontAwesomeIcon icon={solid("bars")} />
          }
        </button>
        <div className="nav__logo-container">
          <img
            className="nav__logo"
            src="https://www.mariaalmenara.pe/_nuxt/img/163c1e9.svg"
            alt="Logo"
          />
        </div>
        <section className="nav__menu" id="navMenu">
          <div className="nav__menu-image-container">
            <img
              className="nav__menu-image"
              src="https://www.mariaalmenara.pe/_nuxt/img/163c1e9.svg"
              alt="Logo"
            />
          </div>
          <ul className="nav__menu-list">
            <li className="nav__menu-list-item">
              <a className="nav__menu-link" href="/">
                home
              </a>
            </li>
            <li className="nav__menu-list-item">
              <a className="nav__menu-link" href="/">
                nosotros
              </a>
            </li>
            <li className="nav__menu-list-item">
              <a className="nav__menu-link" href="/">
                nuestra carta
              </a>
            </li>
            <li className="nav__menu-list-item">
              <a className="nav__menu-link" href="/">
                nuestras tiendas
              </a>
            </li>
            <li className="nav__menu-list-item">
              <a className="nav__menu-link" href="/">
                terminos y condiciones
              </a>
            </li>
            <li className="nav__menu-list-item">
              <a className="nav__menu-link" href="/">
                blog
              </a>
            </li>
          </ul>
          <div className="nav__menu-recognitin">
            <h3 className="nav__menu-recognitin-title">reconocimientos:</h3>
            <ul className="nav__menu-recognitin-list">
              <li className="nav__menu-recognitin-list-item">
                <a className="nav__menu-recognitin-link" href="/">
                  <img
                    className="nav__menu-recognitin-link-image"
                    src="https://www.mariaalmenara.pe/_nuxt/img/e2a73c2.svg"
                    alt=""
                  />
                </a>
              </li>
              <li className="nav__menu-recognitin-list-item">
                <a className="nav__menu-recognitin-link" href="/">
                  <img
                    className="nav__menu-recognitin-link-image"
                    src="https://www.mariaalmenara.pe/_nuxt/img/adb9293.svg"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="nav__menu-follow">
            <h3 className="nav__menu-follow-title">siguenos:</h3>
            <ul className="nav__menu-follow-list">
              <li className="nav__menu-follow-list-item">
                <a className="nav__menu-follow-link" href="/">
                <FontAwesomeIcon icon={brands("facebook-f")} />
                </a>
              </li>
              <li className="nav__menu-follow-list-item">
                <a className="nav__menu-follow-link" href="/">
                <FontAwesomeIcon icon={brands("twitter")} />
                </a>
              </li>
              <li className="nav__menu-follow-list-item">
                <a className="nav__menu-follow-link" href="/">
                <FontAwesomeIcon icon={brands("instagram")} />
                </a>
              </li>
            </ul>
          </div>
        </section>
        <button className="nav__button-login">
          <span className="nav__button-login-text">¡pide aqui!</span>
        </button>
      </nav>
    </>
  );
}
