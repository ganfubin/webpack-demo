<template>
  <div id="app">
    <v-button @click="a += 1">第一个{{a}}</v-button>
    <v-button @click="b += 1">第一个{{b}}</v-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        a: 1,
        b: 1,
      }
    },
  }
</script>
