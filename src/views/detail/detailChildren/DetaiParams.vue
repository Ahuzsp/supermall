<template>
  <div class="goodsParam">
    <!--  -->
      <table width='100%'>
        <tr v-for="(item,i) in sizes" :key="i" class="tr1">
          <td v-for="(td,j) in item" :key="j" higth='40px'>{{td}}</td>
        </tr>
      </table>
      <table width='100%' class="tab2">
        <tr v-for="(v,i) in infos" :key="i" class="tr2">
          <td width='100px '>{{v.key}}</td>
          <td class="value">{{v.value}}</td>
        </tr>
      </table>
  </div>
</template>

<script>
export default {
  name: 'DetailParam',
  props: {
    sizes: {
      type: Array,
      default () {
        return []
      }
    },
    infos: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
.goodsParam {
  padding: 0 10px;
  border-bottom: 8px solid rgba(204, 200, 200, 0.4);
  font-size: 12px;
}
  .tr1,.tr2 {
    height: 30px;
  }
  .tab2 {
    margin: 15px 0;
  }
  td {
    border-bottom: 1px solid rgba(204, 200, 200, 0.4);
  }
  .value {
    color: var(--color-tint);
  }
</style>
