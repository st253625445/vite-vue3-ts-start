<!--
 * @Author: Shao Tao
 * @Date: 2021-10-13 14:50:40
 * @LastEditTime: 2021-10-13 15:29:14
 * @LastEditors: Shao Tao
 * @Description: 
 * @FilePath: \vite-start\src\views\Vuex.vue
-->
<template>
  <div class="vuex-container page-container">
    <div class="page-title">Vuex Test Page</div>
    <p>store Root is: {{ text }}</p>
    <p>store doubleCount is: {{ count }}</p>
    <a-button type="primary" @click="double">double</a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, toRefs } from 'vue'
import { useStore } from '../store'

export default defineComponent({
  name: 'Vuex',

  setup() {
    const store = useStore()
    const reactiveData = reactive({
      text: computed(() => store.state.text),
      count: computed(() => store.state.numFactoryModule.count)
    })

    const double = () => {
      store.commit('numFactoryModule/DOUBLE_COUNT')
    }

    return {
      ...toRefs(reactiveData),
      double
    }
  }
})
</script>

<style scoped lang="scss"></style>
