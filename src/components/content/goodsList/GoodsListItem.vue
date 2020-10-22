<template>
  <div class="goodsItem" @click.prevent="toDetail">
    <a href="" class="pic">
      <img :src="showImg" alt='' @load="imgLoad" />
    </a>
    <div class="goodsInfo">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span>★</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    imgLoad () {
      // console.log('图片加载完成');
      this.$bus.$emit('reComputeHeight')
    },
    toDetail () {
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  },
  computed: {
    showImg () {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  }
}
</script>

<style scoped>
.goodsItem {
    width: 48%;
}
.goodsItem a img {
    width: 100%;
    border-radius: 5px;
}
.goodsInfo {
    text-align: center;
    font-size: 14px;
    padding: 10px 0;
}
.goodsInfo p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
}
.price {
    color: var(--color-tint);
    margin-right: 10px;
}
.collect {
    margin-left: 5px;
}
</style>
