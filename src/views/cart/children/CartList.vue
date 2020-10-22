<template>
  <div class="cartList">
    <scroll class="cartScroll" ref="scroll">
      <list-item :cart-list='cartList'/>
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Scroll from 'components/common/bscroll/Scroll'
import ListItem from './ListItem'

export default {
  name: 'CartList',
  components: {
    Scroll,
    ListItem
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  activated () {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
  .cartList {
    height: calc(100% - 93px);
  }
  .cartScroll {
    height: 100%;
    overflow: hidden;
  }
</style>
