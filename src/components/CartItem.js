const CartItem = ({ data, delFromCart }) => {
    let { _id, price, name, description, urlImage, quantity } = data;
  
    return (
      <div className="carrito">
        <div>
        <img src={urlImage} alt="img" />
        <h4>{description}</h4>
        <h4>{name}</h4>
        </div>
        <div>
        <h2>
          s/.{price}.00 x {quantity} = ${price * quantity}.00
        </h2>
        </div>
        <div className="botones">
        <button onClick={() => delFromCart(_id)}>Eliminar Uno</button>
        
        <button onClick={() => delFromCart(_id, true)}>Eliminar Todos</button>
        </div>
  
      </div>
    );
  };
  
  export default CartItem;