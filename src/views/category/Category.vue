<template>
  <div>
    <nav-bar class="navbar">
      <div slot="center">
        商品分类
      </div>
    </nav-bar>
    <div class="content">
      <left-nav-bar :left-list='leftList' />
      <category-list :categoryInfo='subcategoryList' />
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
// import Scroll from 'components/common/bscroll/Scroll'
import CategoryList from './children/categoryList/CategoryList'

import LeftNavBar from './children/leftNavBar/LeftNavBar'

import { getCategory, getSubcategory, getCategoryDetail } from 'network/category'
export default {
  name: 'Category',
  components: {
    NavBar,
    LeftNavBar,
    CategoryList,
  },
  data () {
    return {
      leftList: [],
      maitKey: null,
      miniWallkey: null,
      subcategoryList: [],
      goodsDetail:{
       'pop': {list:[]},
       'new': {list:[]},
       'pop': {list:[]},
      }
    }
  },
  created() {
    this.$bus.$on('transId',(maitKey,miniWallkey)=>{
      this.maitKey = maitKey
      this.miniWallkey = miniWallkey
      console.log(this.maitKey,this.miniWallkey);
      this.getSubcategory(this.maitKey)
    })
  },
  mounted () {
    this.getCategory() 
  },
  methods: {
    async getCategory () {
      const res = await getCategory()
      this.leftList = res.data.category.list
      console.log(this.leftList)
      this.getSubcategory(this.leftList[0].maitKey)
    },
    async getSubcategory(key) {
      const res = await getSubcategory(key) 
      this.subcategoryList = res.data.list
      console.log(this.subcategoryList);
    },
    async getCategoryDetail(miniWallkey, type) {
      const res = await getCategoryDetail(miniWallkey, type)
    }
  }
}
</script>

<style scoped>
  .navbar {
    background-color: var(--color-tint);
    color: #fff;
    font-size: 16px;
  }
  .content {
    display: flex;
    justify-content: flex-start;
  }

</style>
