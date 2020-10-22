<template>
<div class="goods">
  <div class="goodsList">
    <goods-list-item v-for="(item,i) in data" :key="i" :goodsItem="item"></goods-list-item>
  </div>
</div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: 'GoodsList',
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    GoodsListItem
  }
}
</script>

<style scoped>
.goods {
  margin: 10px 0;
}
.goodsList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

</style>
