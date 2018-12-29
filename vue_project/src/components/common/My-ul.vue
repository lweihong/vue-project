<template>
  <ul>
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'my-ul',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  margin: 10px 0;
  padding: 0;
}

</style>
