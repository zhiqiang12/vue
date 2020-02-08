<template>
  <div id="app">
     <router-view/>
     <router-view class="right" name='img'></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='scss' scoped>
#app{
  .right{
   border: 1px solid gray;
  }
}
</style>
