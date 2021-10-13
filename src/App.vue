<!--
 * @Author: Shao Tao
 * @Date: 2021-10-13 14:24:20
 * @LastEditTime: 2021-10-13 15:12:22
 * @LastEditors: Shao Tao
 * @Description: 
 * @FilePath: \vite-start\src\App.vue
-->
<template>
  <Main />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Main from '@/components/Main.vue'

export default defineComponent({
  name: 'App',
  components: {
    Main
  }
})
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
