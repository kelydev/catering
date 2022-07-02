export const statusUpadate = 'status/update'
export const cartProductUpdate = 'cart/product-update'

export const updateStatusAction = (product) => {
  return ({
    type: statusUpadate,
    payload: product
  })
}

export const cartProductUpdateAction = (products) => {
  return ({
    type: cartProductUpdate,
    payload: products
  })
}