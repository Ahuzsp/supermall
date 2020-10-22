<template>
  <div id="app">
    <MainTabBar class="tab-bar" />
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'
export default {
  name: 'app',
  components: {
    MainTabBar
  }
}
</script>
<style>
@import "./assets/css/base.css";
.tab-bar {
  z-index: 100;
}
</style>
