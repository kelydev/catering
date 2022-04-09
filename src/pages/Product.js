import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/sass/_product.scss";

export default function Product() {
  let location = useLocation()
  return (
    <section className="product">
      <figure className="product__image-container">
        <img
          className="product__image"
          src={location.state.urlImage}
        />
      </figure>
      <div className="product__shop-container">
        <h1 className="product__shop-title">
        {location.state.name}
        </h1>
        <h5 className="product__shop-subtitle">descripción</h5>
        <p className="product__shop-info">
        {location.state.description}
        </p>
        <form className="product__shop-form">
          <label className="shop-form__question">
            ¿deseas colocar una dedicatoria?
          </label>
          <div className="shop-form__answer-contianer">
            <input
              className="shop-form__answer"
              type="text"
              maxLength="30"
              placeholder="Dedicatoria"
            />
            <span className="shop-form__answer-reference">
              máximo 30 caracteres
            </span>
          </div>
          <div className="shop-form__amount-contianer">
            <h5 className="shop-form__amount-reference">cantidad</h5>
            <button className="shop-form__amount-button" type="buttom">
              -
            </button>
            <span className="shop-form__amount">1</span>
            <button className="shop-form__amount-button" type="buttom">
              +
            </button>
          </div>
          <h4 className="shop-form__price">
            precio:<strong className="shop-form__price-number">s/ {Number(location.state.price).toFixed(2)}</strong>
          </h4>
          <button className="shop-form__button" type="submit">
            agregar al carrito
          </button>
        </form>
      </div>
    </section>
  );
}
