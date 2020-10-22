export default {
  cartLength (state) {
    return state.cartList.length
  },
  cartList (state) {
    return state.cartList
  },
  selectedLength (state) {
    return state.cartList.filter(item => {
      return item.isChecked
    }).reduce((prve, v) => {
      return prve + v.count
    }, 0)
  }
}
