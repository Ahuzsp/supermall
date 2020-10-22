<template>
  <scroll class="aa">
  <div class="detail">
      <div class="item" v-for="(val,i) in categoryInfo" :key="i">
        <img :src="val.image" alt="">
        <p>{{val.title}}</p>
      </div>
  </div>
  <tab-control :titles="['综合','新品','销量']"/>
  </scroll>
</template>

<script>
import Scroll from 'components/common/bscroll/Scroll'
import TabControl from 'components/content/tabControl/TabControl'
export default {
    props:['categoryInfo'],
    name:'CategoryList',
    components: {
        Scroll,
        TabControl
      }
}
</script>

<style scoped>
  .detail {
      display: flex;
      flex-wrap: wrap ;
      justify-content: space-evenly; 
      font-size: 14px;
      text-align: center;
      align-items: center;
  }
  .aa {
    height: calc(100vh - 93px);
    overflow: hidden;
  }
  .item {
      width: 30%;
      margin: 5px 0;
  }
  .item img {
      width: 65px;
      height: 65px;
      margin: 5px 0;
  }
</style>