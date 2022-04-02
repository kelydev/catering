import { TYPES } from "../actions/shoppingAction";
import axios from 'axios';




/*let cart= [];

 export const shoppingInitialState = async () => {
    try {
      const response = await axios.get(`https://mariaalmenara.herokuapp.com/api/products`);
      const data = response.data;
      data.forEach((elemento) => {
        products.push(elemento);});
        } catch (error) {
            console.log(error);
        } finally {
            console.log('Se consultó al API de pokemones');
        }
    };*/
/*fetch('https://mariaalmenara.herokuapp.com/api/products')
.then ((respuesta) => respuesta.json())
.then ((data) => {
    data.forEach((elemento) =>{
        products.push(elemento)
    })
});*/
let products=[];
let products1 = async () => {
    try {
      const response = await axios.get(`https://mariaalmenara.herokuapp.com/api/products`);
      const data = response.data;
      data.forEach((elemento) => {
        products.push(elemento);});
        } catch (error) {
            console.log(error);
        } finally {
            console.log('Se consultó al API de pokemones');
        }
    };
export const shoppingInitialState = {
    
  products:[products],
  cart: [],
};
products1();
export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product._id === action.payload
      );
      //console.log(newItem);

      let itemInCart = state.cart.find((item) => item._id === newItem._id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item._id === newItem._id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item._id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item._id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item._id !== action.payload),
          };
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload),
      };
    }
    case TYPES.CLEAR_CART:
      return shoppingInitialState;
    default:
      return state;
  }
  
}