import React, {useState, useEffect} from 'react';
import "../styles/sass/_carta.scss";
const Carta = () => {
    const [producto, setProducto] = useState([]);
    useEffect (()=>{
        fetch('https://mariaalmenara.herokuapp.com/api/products')
        .then(response=> response.json())
        .then(data => setProducto(data));
    },[]);

    return (
      <section className="productos">
        <div className="container">
          <h2>Lista de Productos</h2>
          <div className="container__card row">
            {producto.map(productos => (
              <div className="card-product col-md-4 col-lg-3">
                <img src={productos.urlImage} alt="helado" class="card-product__img"/>
                <div class="card-product__body">
                  <h4 class="card-product__title"><b>{productos.name}</b></h4> 
                  <span class="card-product__candidad">1{productos.rating} porciones aproximadamente</span>
                  <p class="card-product__precio">S/{productos.price}.00</p>
                  <button class="btn__product">comprar ahora</button>
                </div>     
              </div>   
            ))}
          </div>
        </div>
      </section>
    );
}
export default Carta;