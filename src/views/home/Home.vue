<template>
  <div id="home">
    <!-- 顶部导航栏 -->
    <nav-bar class="home-nav">
      <template slot="center">购物季</template>
    </nav-bar>
        <!-- 虚假的吸顶效果 -->
      <tab-control
      :titles="['流行','新品','精选']"
      @getIndex='controlChange'
      ref="tabControl1"
      v-show="isShowTabControl"
      class="fakeTabControl"
      />
    <scroll class="content"
    ref="scroll"
    :probe-type='3'
    @scroll="getScrollPosition"
    :pull-up-load='true'
    @pullingUp="loadMore"
    >
      <!-- 轮播图 -->
      <home-swiper :banners="banners" @swiperImgLoad.once='swiperImgLoad'/>
      <!-- 推荐页 -->
      <recommend-view :recommends="recommends" />
      <!-- 本周流行页 -->
      <feature-view />
      <tab-control
      :titles="['流行','新品','精选']"
      @getIndex='controlChange'
      ref="tabControl2"
      />
      <goods-list :data="showData"/>
    </scroll>
    <back-top @click.native="clickTop" v-show="isShow"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goodsList/GoodsList'
import Scroll from 'components/common/bscroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import HomeSwiper from './children/HomeSwiper'
import RecommendView from './children/RecommendView'
import FeatureView from './children/FeatureView'

import { getHomeMultidata, getHomeData } from 'network/home/'
import { itemListenerMixin } from 'common/mixin'
export default {
  name: 'Home',
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    RecommendView,
    FeatureView,
    GoodsList,
    Scroll,
    BackTop
  },
  mixins: [itemListenerMixin],
  data () {
    return {
      // 轮播图
      banners: [],
      // 推荐栏
      recommends: [],
      // 分类数据
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      // 接收子组件传递过来的菜单值
      currentType: 'pop',
      // 是否隐藏回到顶部按钮
      isShow: false,
      // tabControl与顶部的距离
      tabControlOffsetTop: 0,
      // 是否吸顶
      isShowTabControl: false,
      // 保存停留的scroll的y值
      saveY: 0
    }
  },
  activated () {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated () {
    // 获取scroll的y坐标并保存
    this.saveY = this.$refs.scroll.getScrollY()
    // console.log(this.saveY);
    this.$bus.$off('reComputeHeight', this.itemImgListener)
  },
  created () {
    this.getHomeMultidata()
    // 获取主页商品数据
    this.getHomeData('pop')
    this.getHomeData('new')
    this.getHomeData('sell')
  },
  methods: {
    // 网络请求
    async getHomeMultidata () {
      const { data: res } = await getHomeMultidata()
      this.banners = res.banner.list
      this.recommends = res.recommend.list
      // console.log(this.banners);
      // console.log(this.recommends);
    },
    async getHomeData (type) {
      const page = this.goods[type].page + 1
      const { data: res } = await getHomeData(type, page)
      this.goods[type].list.push(...res.list)
      // console.log(this.goods[type].list);
      this.goods[type].page++
      this.$refs.scroll.finishPullUp()
    },
    // 监听事件
    controlChange (i) {
      switch (i) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl1.currentIndex = i
      this.$refs.tabControl2.currentIndex = i
    },
    clickTop () {
      this.$refs.scroll.scrollTo(0, 0)
    },
    getScrollPosition (position) {
      // 实现回到顶部按钮隐藏和显示
      this.isShow = -position.y > 1000
      // 实现tabControl吸顶效果
      this.isShowTabControl = -position.y > this.tabControlOffsetTop
    },
    loadMore () {
      this.getHomeData(this.currentType)
    },
    // 监听轮播图加载完成
    swiperImgLoad () {
      // console.log(this.$refs.tabControl2.$el.offsetTop);
      this.tabControlOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
  },
  computed: {
    showData () {
      return this.goods[this.currentType].list
    }
  }
}

</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.fakeTabControl {
  position: relative;
  background-color: #fff;;
  z-index: 10;
}
</style>
