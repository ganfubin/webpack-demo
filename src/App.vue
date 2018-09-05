<template>
  <div id="app">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'webpack Vue.js'
    }
  },
}
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;

  h1 {
    color: green;
  }
}
</style>