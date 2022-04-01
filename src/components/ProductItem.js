const ProductItem = ({ data, addToCart }) => {
    let { id, name, price, img } = data;
    return (
      <div style={{ border: "thin solid gray", padding: "1rem" }}>
        <img src={img} alt="img" />
        <h4>{name}</h4>
        <h5>${price}.00</h5>
        <button onClick={() => addToCart(id)}>Agregar al carrito</button>
      </div>
    );
  };
  
  export default ProductItem;