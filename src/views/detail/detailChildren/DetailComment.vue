<template>
<div class="comment">
    <div class="title">
        <p>用户评价</p>
        <p>更多</p>
    </div>
  <div class="userInfo">
      <img :src="user.avatar" alt="">
      <p>{{user.uname}}</p>
  </div>

  <div class="content">
      <p>{{content.content}}</p>
      <div class="ccc">
        <p>{{content.created|dateFormat}}</p>
        <p>{{content.style}}</p>
      </div>
      <div class="bot">
        <span v-for="(item,i) in content.extraInfo" :key="i">{{item}}</span>
        <div class="imgInfo">
            <img v-for="(item,i) in content.images" :key="i" :src="item" alt="">
        </div>
        <p v-if="content.explain">{{content.explain}}</p>
      </div>

  </div>
</div>
</template>

<script>
export default {
  name: 'DetailComment',
  props: {
    content: {
      type: Object,
      default () {
        return {}
      }
    },
    user: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.comment {
    padding: 0 15px 20px 15px;
    background-color: #fff;
   border-bottom: 8px solid rgba(204, 200, 200, 0.4);
}
    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid rgba(204, 200, 200, 0.4);
        padding: 10px 0;
    }
    .title p:nth-child(2) {
        font-size: 12px;
    }
    .userInfo {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .userInfo img {
        width: 48px;
        height: 48px;
        border-radius: 24px;
        box-shadow: 0 0 2px rgba(22, 22, 22, .5);
        margin: 15px 10px 15px 0;
    }
    .content {
        font-size: 12px;
    }
    .content p {
        margin: 5px 0;
        line-height: 1.5;
    }
    .content span {
        margin-right: 5px;
    }
    .ccc {
        display: flex;
        justify-content: flex-start;
        color: #999;
    }
    .ccc p {
        margin-right: 10px;
    }
    .bot {
        color: #999;
    }
    .imgInfo {
        display: flex;
        justify-content: flex-start;
    }
    .imgInfo img {
        width: 75px;
        height: 75px;
        margin: 10px 10px 10px 0;
    }
</style>
