import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartProductAddAction, cartProductUpdateAction } from "../redux/actions/cartActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import "../styles/sass/_cart.scss"

const Cart = () => {
  const { products } = useSelector((state) => {
    return state.cartReducer;
  });

  const [productList, setProductList] = useState([])

  useEffect(() => {
    setProductList(products)
  }, [products])

  const dispatch = useDispatch();

  const handleCartShow = () => {
    document.getElementById("cartItems").classList.toggle("active")
    const nav = document.getElementById('nav')
    nav.classList.toggle("active");
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
                {product.name}
              </span>
              <span>
              s/ {product.priceTotal.toFixed(2)}
              </span>
            </div>
          ))
          :
          <div className="cart__items-alert">No a agregado nada al carrito</div>
        }
      </div>
      <button onClick={() => {
        handleCartShow()
      }} className="cart__button" ><FontAwesomeIcon icon={solid("cart-shopping")} /></button>
    </>
  );
};

export default Cart;
