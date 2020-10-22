<template>
  <div class="leftnav">
    <scroll class="leftscroll">
      <ul>
        <li
          v-for="(item, i) in leftList"
          :key="item.maitKey"
          @click="itemClick(item,i)"
          :class="currentIndex == i ? 'active' : ''"
        >
          {{ item.title }}
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/bscroll/Scroll'
export default {
  name: 'LeftNavBarItem',
  components: {
    Scroll
  },
  props: {
    leftList: {
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
    itemClick (item,i) {
      this.currentIndex = i
      this.$bus.$emit('transId',item.maitKey,item.miniWallkey)
    }
  }
}
</script>

<style scoped>
.leftnav {
  width: 100px;
  height: calc(100vh - 93px);
  background-color: #f6f6f6;
}
.leftscroll {
    height: 100%;
    overflow: hidden;
}
.leftnav li {
  width: 100%;
  height: 45px;
  text-align: center;
  line-height: 45px;
  font-size: 14px;
  color: var(--color-text);
}
.active {
  background-color: #fff;
  color: var(--color-tint) !important;
  border-left: 2px solid var(--color-tint);
}

</style>
