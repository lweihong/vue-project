<template>
  <li>
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'my-li',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{
  width: 33.3%;
  float: left;
  font-size: 12px;
  /* background: #42b983; */
  margin: 0;
  height: 80px;
  line-height: 30px;
  text-align: center;
}

</style>
