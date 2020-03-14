<template>
  <el-button @click="handleClick" :type="type" :plain="plain" :size="size"
             :class="[fill !== undefined ? 'is-fill' : '']" :icon="icon">
    <slot></slot>
  </el-button>
</template>
<script>
  import _ from 'lodash'
  export default {
    props: ['size', 'type', 'icon', 'plain', 'fill'],
    methods: {
      handleClick: _.debounce(
        function () {
          // 这边做一个防抖立即执行操作
          this.$emit('click');
        },
        300,
        {leading: true, trailing: false},
      ),
    },
  };
</script>
<style lang="less" scoped>
</style>
