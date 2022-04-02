const ProductItem = ({ data, addToCart }) => {
    let { _id, name, price, urlImage, description } = data;
    return (
      <div style={{ border: "thin solid gray", padding: "1rem" }}>
        <img src={urlImage} alt="img" />
        <h4>{name}</h4>
        <h4>{description}</h4>
        <h5>s/.{price}.00</h5>
        <button onClick={() => addToCart(_id)}>Agregar al carrito</button>
      </div>
    );
  };
  
  export default ProductItem;