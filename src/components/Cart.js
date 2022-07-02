import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateStatusAction } from "../redux/actions/cartActions";
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

  const dispatch = useDispatch();
  
  
  useEffect(() => {

    const obtener = async () => {
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
        const data = await axios.get('https://immense-lowlands-06812.herokuapp.com/shoppingCart', config)
        setProducts(data.data.items)
        setValor(data.data.prices)
        console.log(data.data.items)
        console.log(data.data.prices )
      } catch (error) {
        console.log(error);
        console.log('sdassxcxc');
      }
    };
    obtener();
  }, [status]);

  console.log(products)

  const handleCartShow = () => {
      document.getElementById("cartItems").classList.toggle("active")
      const nav = document.getElementById('nav')
      nav.classList.toggle("active");
  }

  const removeProductCart = async (id) => {
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
        const respuesta = await axios.delete(`https://immense-lowlands-06812.herokuapp.com/shoppingCart/${id}`,config);
        console.log(respuesta);
      //dispatch(cartProductAddAction(date))
        dispatch(updateStatusAction("dd"))
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
