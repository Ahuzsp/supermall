<template>
  <div class="toast" v-show="isShow">
      <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data () {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show (message, durition = 1500) {
      this.message = message
      this.isShow = true
      setTimeout(() => {
        this.message = ''
        this.isShow = false
      }, durition)
    }
  }
}
</script>

<style acoped>
    .toast{
        width: 200px;
        height: 40px;
        background-color: rgba(0, 0, 2, .7);
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        text-align: center;
        line-height: 40px;
        color: #fff;
        border-radius: 5px;
        z-index: 999;
    }
</style>
