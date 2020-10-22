<template>
  <div class="images">
      <div v-if="detailImg.desc" class="desc">{{detailImg.desc}}</div>
      <div class="key">{{detailImg.key}}</div>
      <div v-for="(item,i) in detailImg.list" :key="i" class="detailImg">
          <img :src="item" alt="" @load="imgLoad">
      </div>
  </div>
</template>

<script>
export default {
  name: 'DetailImg',
  props: {
    detailImg: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      counter: 0,
      imgsLength: 0
    }
  },
  methods: {
    imgLoad () {
      if (++this.counter === this.imgsLength) {
        this.$emit('imgsLoad')
      }
    }
  },
  watch: {
    detailImg () {
      this.imgsLength = this.detailImg.list.length
    }
  }
}
</script>

<style scoped>
    .images {
        border-bottom: 2px solid rgba(204, 200, 200, 0.4);
        padding-bottom: 10px;
    }
    .key,.desc {
        margin: 10px 0 20px 10px;
        background-color: #fff;
    }
    .detailImg img {
        width: 100%;
    }
</style>
