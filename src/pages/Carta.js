import React, {useState, useEffect} from 'react';
import Filter from '../components/Filter';
import CardProduct from "../components/CardProduct";
import "../styles/sass/_carta.scss";

const Carta = () => {
  const [producto, setProducto] = useState([]);
  useEffect(() => {
    fetch("https://mariaalmenara.herokuapp.com/api/products/tortas")
      .then((response) => response.json())
      .then((data) => setProducto(data));
  }, []);

  return (
    <>
      <Filter/>
      <section className="carta-products">
        {producto.map((productos) => (
          <CardProduct product={productos} />
        ))}
      </section>
    </>
  );
};
export default Carta;