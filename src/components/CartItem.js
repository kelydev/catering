const CartItem = ({ data, delFromCart }) => {
    let { id, price, img, quantity } = data;
  
    return (
      <div className="carrito">
        <div>
        <img src={img} alt="img" />
        </div>
        <div>
        <h2>
          ${price}.00 x {quantity} = ${price * quantity}.00
        </h2>
        </div>
        <div className="botones">
        <button onClick={() => delFromCart(id)}>Eliminar Uno</button>
        
        <button onClick={() => delFromCart(id, true)}>Eliminar Todos</button>
        </div>
  
      </div>
    );
  };
  
  export default CartItem;