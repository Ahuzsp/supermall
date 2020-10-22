<template>
  <div>
    <div v-for="(item,i) in cartList" :key="i" class="item">
      <input type="checkbox" :checked='cartList[i].isChecked' @click="checkboxClick(item.iid)">
      <img :src="item.image" alt="">
      <div class="itemInfo">
        <div class="title">{{item.title}}</div>
        <div class="desc">{{item.desc}}</div>
        <div class="price">
          <p>￥{{item.price}}</p>
          <p>x{{item.count}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  name: 'ListItem',
  props: {
    cartList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    checkboxClick (iid) {
      const clickItem = this.cartList.find(item => {
        return item.iid === iid
      })
      clickItem.isChecked = !clickItem.isChecked
      console.log(clickItem)
    }
  }
}
</script>

<style scoped>
.item {
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid rgba(204, 200, 200, 0.4);
  margin-bottom: 10px;
}
  .item>input {
    margin: 3px;
  }
  .item img {
    width: 80px;
    height: 110px;
    border-radius: 10px;
  }
  .itemInfo {
    height: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px 3px;
  }
  .itemInfo>div {
    margin: 5px;
   }
  .title {
    font-size: 16px;
  }
  .desc {
    font-size: 14px;
    color: #999;
  }
  .price {
    display: flex;
    justify-content: space-between;
  }
  .price p:nth-child(1) {
    color:  var(--color-tint)
  }
</style>
