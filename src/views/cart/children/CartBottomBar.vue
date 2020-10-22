<template>
  <div>
    <div class="bottombar">
      <div class="left">
        <input type="checkbox" :checked='isSelectAll' @click="selectedAll">
        <span>全选</span>
        <span>合计:{{totalPrice}}</span>
      </div>
      <div class="calculate" @click="toCalculate">去计算({{selectedLength}})</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CartBottomBar',
  computed: {
    ...mapGetters(['cartList', 'selectedLength']),
    totalPrice () {
      return this.$store.getters.cartList.filter(item => {
        return item.isChecked
      }).reduce((prve, item) => {
        return prve + item.price * item.count
      }, 0).toFixed(2)
    },
    //一种写法
    // isSelectAll () {
    //   if (this.cartList.length === 0) return false
    //   return !(this.cartList.find(item => !item.isChecked))
    // }
    //另一种写法
    isSelectAll () {
      if (this.cartList.length === 0) return false
      return (this.cartList.every(item =>item.isChecked))
    }
  },
  methods: {
    selectedAll () {
      console.log(111)
      if (this.isSelectAll) {
        this.cartList.map(item => item.isChecked = false)
      } else {
        this.cartList.map(item => item.isChecked = true)
      }
    },
    toCalculate () {
      this.cartList.length === 0 ? this.$toast.show('请先添加商品到购物车') : this.$toast.show('计算界面还没做好呢')
    }
  }
}
</script>

<style scoped>
  .bottombar {
    height: 40px;
    background-color: #ccc;
    position: relative;
    bottom: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 0 10px;

  }
  .calculate {
    width: 80px;
    height: 100%;
    line-height: 40px;
    text-align: center;
    background-color: red;
    color: #fff;
  }
  .left span:nth-child(2) {
    margin: 0 20px 0 5px;
  }
</style>
