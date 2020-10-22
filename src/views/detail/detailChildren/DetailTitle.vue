<template>
  <!-- 商品标题 -->
  <div class="title">{{title}}</div>
</template>

<script>
export default {
  name: 'DetailTitle',
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style scoped>
    /* 商品详情页标题 */
    .title {
        font-size: 14px;
        color: #000;
        padding: 8px;
    }
</style>
