<template>
  <div class="tab-control">
    <div v-for="(item,i) in titles" :key="i" class="tab-control-item">
        <span :class="{active:currentIndex==i}" @click="itemChange(i,item)">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemChange (i, item) {
      this.currentIndex = i
      this.$emit('getIndex', i)
    }
  }
}
</script>

<style scoped>
.tab-control {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 45px;
    line-height: 45px;
}
.tab-control-item {
    flex: 1;
}
.tab-control-item span {
    padding: 3px
}
.active {
    color: var(--color-high-text);
    border-bottom: 2px solid var(--color-high-text);
}
</style>
