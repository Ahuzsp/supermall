<template>
  <div class="cart">
    <!-- 顶部导航 -->
    <nav-bar>
      <div slot="center" class="cart">
        购物车({{cartLength}})
      </div>
    </nav-bar>
    <!-- 商品数据 -->
    <cart-list/>
    <!-- 底部汇总 -->
    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import CartList from './children/CartList'
import CartBottomBar from './children/CartBottomBar'

import { mapGetters } from 'vuex'
export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    ...mapGetters(['cartLength'])
  }
}
</script>

<style scoped>
.cart {
  height: 100vh;
}
  .navbar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
