import { cartProductAdd, cartProductUpdate } from "../actions/cartActions";

const initialCartState = {
  products : []
}

export const cartReducer = (state = initialCartState, action) => {
  const { products } = state;
  const { type, payload } = action;

  switch (type) {
    case cartProductAdd:
      const newDate = products
      newDate.push(payload)
      return {
        products: newDate
      }
    case cartProductUpdate:
      return {
        ...state,
        products: payload
      }
    default:
      return state;
  }
}