<!--
 * @Author: Shao Tao
 * @Date: 2021-10-13 14:50:40
 * @LastEditTime: 2021-10-13 14:53:07
 * @LastEditors: Shao Tao
 * @Description: 
 * @FilePath: \vite-start\src\views\Test.vue
-->
<template>
  <div class="test-container page-container">
    <div class="page-title">Unit Test Page</div>
    <p>count is: {{ count }}</p>
    <button @click="increment">increment</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Vuex',
  setup() {
    const count = ref<number>(0)
    const increment = () => {
      count.value += 1
    }
    return { count, increment }
  }
})
</script>

<style scoped lang="scss">
button {
  cursor: pointer;
  font-size: 20px;
  padding: 5px;
}
</style>
