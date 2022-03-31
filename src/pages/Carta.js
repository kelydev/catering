import React, {useState, useEffect} from 'react';

const Carta = () => {

    const [producto, setProducto] = useState([]);

    useEffect (()=>{
        fetch('https://mariaalmenara.herokuapp.com/api/products')
        .then(response=> response.json())
        .then(data => setProducto(data));
    },[]);

    return (
      <section className="api">
        <div className="container">
          <h2>Lista de Productos</h2>
            <div className="container__card row text-center">
              {producto.map(productos => (
                  <div className="col-md-6 col-lg-3">
                  <div className="card api__card">
                      <img className="card__img" src={productos.urlImage} alt="mortarboard"/>
                      <div className="card-body">
                          <h4 className="card-title">{productos.name}</h4>
                          <p className="card-text">{productos.description}</p>
                      </div>
                  </div>
              </div>   
              ))}
          </div>
        </div>
      </section>
    );
}
export default Carta;