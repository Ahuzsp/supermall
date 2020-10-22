<template>
<div class="recommend" >
    <div class="content" v-for="item in recommends" :key="item.sort">
        <a href="#"><img :src="item.image" alt=""></a>
        <div>{{item.title}}</div>
    </div>
</div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: {
    recommends: {
      type: Array,
      default () {
        return []
      }
    }

  }
}
</script>

<style scoped>
    .recommend {
        display: flex;
        justify-content: space-around;
        text-align: center;
        font-size: 12px;
        padding: 20px 0;
        border-bottom: 8px solid #ccc;
    }
    .content {
        flex: 1;
    }
    .content img {
        width: 70px;
        border-radius: 50%;
        margin-bottom: 10px;
    }
</style>
