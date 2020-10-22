<template>
  <nav-bar>
      <template slot="center" class="title">
          <span v-for="(item,i) in titles" :key="i">{{item}}</span>
      </template>
  </nav-bar>

</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data () {
    return {
      titles: ['商品', '推荐', '评论', '参数']
    }
  }
}
</script>

<style scoped>
    .title {
        display: flex ;
        justify-content: space-around;
    }
    .title>li {
        list-style: none;
    }
</style>
