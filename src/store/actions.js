import { ADD_COUNTER, ADD_TO_CART } from './mutations-type'
export default {

  addCart (context, payload) {
    return new Promise((resolve, reject) => {
      const oldProduct = context.state.cartList.find(item => {
        return item.iid === payload.iid
      })
      if (oldProduct) {
        context.commit(ADD_COUNTER, oldProduct)
        resolve('商品数量加1')
      } else {
        payload.count = 1
        context.commit(ADD_TO_CART, payload)
        resolve('新增了商品')
      }
    })
  }
}
