import { statusUpadate } from "../actions/cartActions";

const initialCartState = false

export const cartReducer = (state = initialCartState, action) => {
  const status = state;
  const { type, payload } = action;

  switch (type) {
    case statusUpadate:
      const newStatus = !status
      return {
        status: newStatus
      }
    // case cartProductUpdate:
    //   return {
    //     ...state,
    //     products: payload
    //   }
    default:
      return state;
  }
}