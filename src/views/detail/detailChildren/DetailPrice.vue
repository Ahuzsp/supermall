<template>
<div class="box">
  <div class="price">
    <h2>{{prices.price}}</h2>
    <del>{{prices.oldPrice}}</del>
    <div class="yprice">活动价</div>
  </div>
  <div class="coll">
      <div v-for="(item,i) in columns" :key="i">{{item}}</div>
  </div>
  <div class="shopServe">
      <div v-for="(v,i) in shopServe" :key="i">
        <img :src="v.icon" alt="">
        <span>{{v.name}}</span>
      </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'DetailPrice',
  props: {
    prices: {
      type: Object,
      default () {
        return {}
      }
    },
    columns: {
      type: Array,
      default () {
        return []
      }
    },
    shopServe: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
.box {
    padding: 0 10px;
}
.price {
  display: flex;
  justify-content: start;
  margin-top: 5px;
}
h2 {
  color: var(--color-tint);
  margin: 0 8px 0 0;
}
del {
  display: flex;
  align-items: flex-end;
}
.yprice {
  width: 48px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  background-color: var(--color-tint);
  border-radius: 10px;
  margin: 0 8px;
}
.coll {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-top: 20px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
}
.shopServe {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #ccc;
    padding-bottom: 20px;
    margin: 20px 0;
}
.shopServe img {
    width: 11px;
    height: 11px;
}
.shopServe span {
    font-size: 14px;
}
</style>
