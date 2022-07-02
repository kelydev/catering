import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import "../styles/sass/_product.scss";
import { updateStatusAction } from "../redux/actions/cartActions";
import axios from 'axios';

export default function Product() {
  const [error, setError] = useState("");
  let location = useLocation()
  const dispatch = useDispatch()
  console.log(location)

  const productBuy = {
    name: location.state.name,
    description: location.state.description,
    price: Number(location.state.price),
    urlImage: location.state.urlImage
  }
  const [amount, setAmount] = useState(1)
  const [price, setPrice] = useState(productBuy.price)

  useEffect(() => {
    setPrice(productBuy.price * amount)
  }, [amount])

  const handleAmountMore = () => {
    setAmount(amount + 1)
  }
  
  const handleAmountLess = () => {
    if (amount > 1) {
      setAmount(amount - 1)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem('token');

    let config = {};

      if(token) {
        config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }
      }
    console.log(config);
     
    try {
      let data = {
        product_id:6,
        quantity:amount
      }
      const respuesta = await axios.put('https://immense-lowlands-06812.herokuapp.com/shoppingCart',data, config);
      console.log(respuesta);

      dispatch(updateStatusAction("dd"))
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <section className="product">
      <figure className="product__image-container">
        <img
          className="product__image"
          src={productBuy.urlImage}
        />
      </figure>
      <div className="product__shop-container">
        <h1 className="product__shop-title">
        {productBuy.name}
        </h1>
        <h5 className="product__shop-subtitle">descripción</h5>
        <p className="product__shop-info">
        {productBuy.description}
        </p>
        <form onSubmit={handleSubmit} className="product__shop-form">
          <label className="shop-form__question">
            ¿deseas colocar una dedicatoria?
          </label>
            <input
              className="shop-form__answer"
              type="text"
              maxLength="30"
              placeholder="Dedicatoria"
              name="dedicatoria"
            />
          <div className="shop-form__answer-contianer">
            <span className="shop-form__answer-reference">
              máximo 30 caracteres
            </span>
          </div>
          <div className="shop-form__amount-contianer">
            <h5 className="shop-form__amount-reference">cantidad</h5>
            <button onClick={handleAmountLess} className="shop-form__amount-button" type="button">
              -
            </button>
            <span className="shop-form__amount">{amount}</span>
            <button onClick={handleAmountMore} className="shop-form__amount-button" type="button">
              +
            </button>
          </div>
          <h4 className="shop-form__price">
            precio:<strong className="shop-form__price-number">s/ {price.toFixed(2)}</strong>
          </h4>
          <button className="shop-form__button" type="submit" >
            agregar al carrito
          </button>
        </form>
      </div>
    </section>
  );
}
