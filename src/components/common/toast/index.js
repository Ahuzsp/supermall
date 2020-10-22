import Toast from './Toast'
const obj = {

}
obj.install = function (Vue) {
  // console.log('toast调用了',Vue);

  // 1.创建组件构造器
  const ToastConstructor = Vue.extend(Toast)

  // 2.创建组件对象
  const toast = new ToastConstructor()

  // 3.将组件对象手动挂载到某个元素上
  toast.$mount(document.createElement('div'))

  // 4.将该div追加到body内
  document.body.appendChild(toast.$el)

  // 5.将$toast挂在Vue的原型上
  Vue.prototype.$toast = toast
}
export default obj
