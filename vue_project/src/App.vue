<template>
  <div id="app">
    <mt-header fixed title="固定在顶部"></mt-header>
    <router-view/>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="Home">
        <img slot="icon" src="./assets/icons/home.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="Member">
        <img slot="icon" src="./assets/icons/members.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="ShopCar">
        <img slot="icon" src="./assets/icons/shop-cart.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="Search">
        <img slot="icon" src="./assets/icons/search.png">
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: ''
    }
  },
  watch: {
    selected (newV, oldV) {
      this.$router.push(newV)
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
