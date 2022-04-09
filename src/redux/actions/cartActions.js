export const cartProductAdd = 'cart/product-add'
export const cartProductUpdate = 'cart/product-update'

export const cartProductAddAction = (product) => {
  return ({
    type: cartProductAdd,
    payload: product
  })
}

export const cartProductUpdateAction = (products) => {
  return ({
    type: cartProductUpdate,
    payload: products
  })
}