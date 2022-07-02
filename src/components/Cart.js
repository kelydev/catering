import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {useNavigate, NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import "../styles/sass/_cart.scss"

import axios from 'axios';

const Cart = () => {
  const status = useSelector((state) => {
    return state.cartReducer;
  });
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [valor, setValor] = useState([]);

  

  useEffect(() => {

    const obtener = async () => {
      try {
        /*const token = localStorage.getItem('token');
        if(!token) return 
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization:`Bearer ${token}`
          }
        } */
        const data = await axios.get('http://localhost:8000/shoppingCart')
        setProducts(data.data.items)
        setValor(data.data.prices)
        console.log(data.data.items)
        console.log(data.data.prices )
      } catch (error) {
        console.log(error);
        console.log('sdass');
      }
    };
    obtener();
  }, [status]);

  const dispatch = useDispatch();

  console.log(products)
  /*console.log(valor)

  const datass = await axios.get('http://localhost:8000/shoppingCart');
  setProducts(datass.data.items)
  setValor(datass.data.prices)*/

  const handleCartShow = () => {
      document.getElementById("cartItems").classList.toggle("active")
      const nav = document.getElementById('nav')
      nav.classList.toggle("active");
      //dispatch(cartProductAddAction(date))*/
  }

  const removeProductCart = async (id) => {
    try {
        const respuesta = await axios.delete(`http://localhost:8000/shoppingCart/${id}`);
        console.log(respuesta);
      //dispatch(cartProductAddAction(date))
    } catch (error) {
      setError(error.message);
    }
  }
  
  return (
    <>
      <div id="cartItems" className="cart__items">
        {
          products.length > 0
          ?
          products.map((product, index) => (
            <div className="cart__items-item" key={index} >
              <span>
                {product.product.name}
              </span>
              <span>
                {product.quantity}
              </span>
              <br></br>
              <button className="cart__items-alert">mod</button>
              <button onClick={() => removeProductCart(product.product_id)} className="cart__items-alert">x</button>
            </div>
            
          ))
          :
          <div className="cart__items-alert">No a agregado nada al carrito</div>
        }
        <br></br>
        <label>Subtotal {valor.subtotal}</label>
        <label>Total {valor.total}</label>
        <div className="cart__items-alert">
          <NavLink to="/orden" className="nav__menu-hidden-link">Realizar compra</NavLink>
        </div>
      </div>
      <button onClick={() => {
        handleCartShow()
      }} className="cart__button" ><FontAwesomeIcon icon={solid("cart-shopping")} /></button>
    </>
  );
};

export default Cart;
