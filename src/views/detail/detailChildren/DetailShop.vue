<template>
  <div>
      <div class="shopInfo">
          <img :src="shopInfo.logo" alt="">
          <span class="name">{{shopInfo.name}}</span>
      </div>
      <div class="shopDetail">
          <div class="sell">
              <div>
                  <p class="sellnum" style="font-size:20px">{{shopInfo.sells}}</p>
                  <p>总销量</p>
              </div>
              <div>
                  <p style="font-size:18px">{{shopInfo.goodsCount}}</p>
                  <p>全部宝贝</p>
              </div>
          </div>
          <div class="score">
              <div v-for="(item,i) in shopInfo.score" :key="i" class="words">
                  <p>{{item.name}}</p>
                  <p>{{item.score}}</p>
                  <p v-if="item.isBetter==true" style="background:green">高</p>
                  <p v-else style="background:red">低</p>
              </div>
          </div>
      </div>
    <div class="toStore">
        <div>
            进店逛逛
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShop',
  props: {
    shopInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
    .shopInfo {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-left: 10px;
    }
    .shopInfo img {
        width: 48px;
        height: 48px;
        border-radius: 24px;
        box-shadow: 0 0 4px rgba(80, 74, 74,0.5);
        margin-right: 10px;
    }
    .shopInfo span {
        font-size: 20px;
    }
    .shopDetail {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }
    .sell {
        display: flex;
        justify-content: space-around;
        flex-grow: 1;
        border-right: 1px solid #ccc;
    }
    .score {
        flex-grow: 1;
        padding: 0 15px;
    }
    .score >div{
        display: flex;
        justify-content: space-between;
    }
    .words p:nth-child(3) {
        color: #fff;
    }
    .sell >div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    p {
        margin: 5px 0;
    }
    .toStore {
        display: flex;
        justify-content: center;
        margin: 15px 10px 20px 0;
    }
    .toStore>div {
        width: 120px;
        height: 32px;
        background: #ccc;
        border-radius: 10px;
        text-align: center;
        line-height: 32px;
    }
</style>
