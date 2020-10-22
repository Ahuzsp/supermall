<template>
<div class="box">
    <left-nav-bar-item :left-list='leftList'/>
</div>

</template>

<script>
import LeftNavBarItem from './LeftNavBarItem'
export default {
  name: 'LeftNavBar',
  components: {
    LeftNavBarItem
  },
  props: {
    leftList: {
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
        width: 100px;
    }
</style>
