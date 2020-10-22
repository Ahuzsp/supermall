<template>
  <div id="detail">
    <nav-bar class="navBar">
      <div slot="left" class="back" @click="goback">
        <img src="~assets/img/common/back.svg" alt />
      </div>
      <div slot="center" class="titles">
        <li
          v-for="(item,i) in titles"
          :key="i"
          @click="navBarchange(i)"
          :class="{active:currentIndex==i}"
        >{{item}}</li>
      </div>
    </nav-bar>
    <scroll class="dd" ref="scroll" :probe-type='3' @scroll="getScrollPosition">
      <!-- 图片轮播 -->
      <swiper class="detail-swiper">
        <swiper-item v-for="(item,i) in swiperData" :key="i">
          <img :src="item" alt />
        </swiper-item>
      </swiper>
      <!-- 商品信息 -->
      <detail-title :title="title" />
      <detail-price :prices="prices" :columns="columns" :shopServe="shopServe"></detail-price>
      <!-- 店铺详情 -->
      <detail-shop :shopInfo="shopInfo" />
      <!-- 详细图片信息 -->
      <detail-img :detailImg="detailImg" @imgsLoad="refreshScroll" />
      <!-- 商品参数数据 -->
      <detail-params :sizes="sizes" :infos="infos" ref="params" />
      <!-- 商品评论 -->
      <detail-comment :content="content" :user="user" ref="comment"/>
      <!-- 推荐商品 -->
      <goods-list :data="recommends" ref="recommends"/>
    </scroll>
    <back-top @click.native="toTop" v-show="isShow"/>
    <detail-bottom-bar @addToCart='toCart'/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import { Swiper, SwiperItem } from 'components/common/swiper/index'
import GoodsList from 'components/content/goodsList/GoodsList'
import Scroll from 'components/common/bscroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import DetailTitle from './detailChildren/DetailTitle'
import DetailPrice from './detailChildren/DetailPrice'
import DetailShop from './detailChildren/DetailShop'
import DetailImg from './detailChildren/DetailImg'
import DetailParams from './detailChildren/DetaiParams'
import DetailComment from './detailChildren/DetailComment'
import DetailBottomBar from './detailChildren/DetailBottomBar'
import { itemListenerMixin } from 'common/mixin'

import { getDetailData, Shop, GoodsParam, getRecommend } from 'network/detail'
import { mapActions } from 'vuex'
export default {
  name: 'Detail',
  components: {
    NavBar,
    Swiper,
    SwiperItem,
    DetailTitle,
    DetailPrice,
    DetailShop,
    DetailImg,
    DetailParams,
    DetailComment,
    Scroll,
    GoodsList,
    BackTop,
    DetailBottomBar
  },
  mixins: [itemListenerMixin],
  data () {
    return {
      iid: null,
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0,
      swiperData: [],
      title: '',
      desc: '',
      prices: {
        price: 0,
        oldPrice: 0,
        lowNowPrice: 0
      },
      columns: [],
      shopServe: [],
      // 店铺信息
      shopInfo: {},
      // 参数信息
      // goodsParam: {},
      sizes: [],
      infos: [],
      // 图片详情
      detailImg: {},
      // 商品评论
      content: {},
      user: {},
      // 推荐数据
      recommends: [],
      // 是否隐藏回到顶部按钮
      isShow: false,
      // 保存四个组件的offsetTop值
      themeTopYS: []
    }
  },
  created () {
    // 获取传过来的id值
    this.iid = this.$route.params.iid
    // 获取详情数据
    this.getDetailData(this.iid)
    // 获取推荐数据
    this.getRecommend()
  },
  destroyed () {
    this.$bus.$off('reComputeHeight', this.itemImgListener)
  },
  methods: {
    ...mapActions(['addCart']),
    navBarchange (i) {
      this.currentIndex = i
      this.$refs.scroll.scrollTo(0, -this.themeTopYS[i], 300)
    },
    goback () {
      this.$router.go(-1)
    },
    async getDetailData (iid) {
      const res = await getDetailData(iid)
      //   console.log(res);
      this.swiperData = res.result.itemInfo.topImages
      this.title = res.result.itemInfo.title
      this.prices.price = res.result.itemInfo.price
      this.prices.oldPrice = res.result.itemInfo.oldPrice
      this.prices.lowNowPrice = res.result.itemInfo.lowNowPrice
      this.desc = res.result.itemInfo.desc
      this.columns = res.result.columns
      this.shopServe = res.result.shopInfo.services
      // 图片详情
      this.detailImg = res.result.detailInfo.detailImage[0]
      // 店铺信息
      this.shopInfo = new Shop(res.result.shopInfo)
      // 参数信息
      const goodsParam = new GoodsParam(
        res.result.itemParams.info,
        res.result.itemParams.rule
      )
      this.sizes = goodsParam.sizes[0]
      this.infos = goodsParam.infos
      // 评论信息
      this.content = res.result.rate.list[0]
      this.user = res.result.rate.list[0].user
    },
    refreshScroll () {
    //   console.log("图片加载完成");
      this.$refs.scroll.refresh()
      this.themeTopYS = []
      this.themeTopYS.push(0)
      this.themeTopYS.push(this.$refs.params.$el.offsetTop)
      this.themeTopYS.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYS.push(this.$refs.recommends.$el.offsetTop)
      this.themeTopYS.push(Number.MAX_VALUE)
      // console.log(this.themeTopYS);
    },
    async getRecommend () {
      const res = await getRecommend()
      this.recommends = res.data.list
    },
    toTop () {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    getScrollPosition (position) {
      this.isShow = (-position.y) > 1000
      const positionY = -position.y
      for (let i = 0; i < this.themeTopYS.length - 1; i++) {
        if (this.currentIndex !== i && positionY >= this.themeTopYS[i] && positionY < this.themeTopYS[i + 1]) {
          this.currentIndex = i
        }
      }
    },
    // 添加到购物车点击事件
    toCart () {
      // console.log('添加到购物车');
      const cartInfo = {}
      cartInfo.iid = this.iid
      cartInfo.desc = this.desc
      cartInfo.image = this.swiperData[0]
      cartInfo.title = this.title
      cartInfo.price = this.prices.lowNowPrice
      cartInfo.isChecked = true
      console.log(cartInfo)

      this.addCart(cartInfo).then(res => {
        // console.log(res);
        this.$toast.show(res)
      })
    }
  }
}
</script>

<style acoped>
#detail {
  position: relative;
  z-index: 101;
  background-color: #fff;
  height: 100vh;
}
.navBar {
  position: relative;
  z-index: 10;
  background-color: #fff;
}
.dd {
  position: absolute;
  top: 44px;
  bottom: 0;
  left: 0;
  right: 0;
}
.content {
  padding-bottom: 58px;
}
.titles {
  display: flex;
  justify-content: space-around;
}
.titles > li {
  list-style: none;
}
.active {
  color: var(--color-tint);
}
.back img {
  vertical-align: middle;
}
.detail-swiper {
  height: 300px;
}
</style>
