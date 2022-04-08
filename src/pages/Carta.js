import React, { useState, useEffect } from "react";
import Filter from "../components/Filter";
import CardProduct from "../components/CardProduct";
import "../styles/sass/_carta.scss";
import { useParams } from "react-router-dom";

const Carta = () => {
  const [productsList, setProductsList] = useState([]);
  const [products, setProducts] = useState([]);
  
  let params = useParams()

  useEffect(() => {
    fetch(`https://mariaalmenara.herokuapp.com/api/products/${ params.type ? params.type : "tortas"}`)
      .then((response) => response.json())
      .then((data) => {
        setProductsList(data);
        setProducts(data);
      });
  }, [params]);

  
  return (
    <>
      <Filter productsList={productsList} setProducts={setProducts} products={products}/>
      <section className="carta-products">
        {products.map((product) => (
          <CardProduct key={product._id} product={product} />
        ))}
      </section>
    </>
  );
};
export default Carta;
