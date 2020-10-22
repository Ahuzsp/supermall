import { debounce } from './utils'
export const itemListenerMixin = {
  data () {
    return {
      itemImgListener: null
    }
  },
  mounted () {
    // 监听图片加载完成,加入防抖动函数减少服务器请求速度
    const refresh = debounce(this.$refs.scroll.refresh, 200)
    // 对监听事件进行保存
    this.itemImgListener = () => {
      refresh()
    }
    this.$bus.$on('reComputeHeight', this.itemImgListener)
  }
}
