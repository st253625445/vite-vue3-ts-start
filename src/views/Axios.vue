<!--
 * @Author: Shao Tao
 * @Date: 2021-08-30 22:59:16
 * @LastEditTime: 2021-10-13 15:54:25
 * @LastEditors: Shao Tao
 * @Description:
 * @FilePath: \vite-start\src\views\Axios.vue
-->
<template>
  <div class="axios-container page-container">
    <div class="page-title">Axios Test Page</div>
    <div class="user-info-container">
      <a-card class="box-card">
        <div class="card-header">
          <span>XPoet</span>
          <a-button class="button" type="text" @click="getUserInfo"
            >点击获取XPoet信息
          </a-button>
        </div>
        <div class="info-list-box">
          <div class="text item" v-if="userInfo?.name">name: {{ userInfo?.name }}</div>
          <div class="text item" v-if="userInfo?.bio">bio: {{ userInfo?.bio }}</div>
          <div class="text item" v-if="userInfo?.blog">blog: {{ userInfo?.blog }}</div>
        </div>
      </a-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import axios from '@/utils/axios'

export default defineComponent({
  name: 'Axios',
  setup() {
    const userInfo: Ref = ref(null)
    const loading = ref(false)

    const getUserInfo = () => {
      loading.value = true
      axios
        .get('/users/XPoet')
        .then((response) => {
          console.log('response: ', response.data)
          userInfo.value = response.data
          loading.value = false
        })
        .catch((error) => {
          loading.value = false
          console.error(error)
        })
    }

    return {
      userInfo,
      loading,
      getUserInfo
    }
  }
})
</script>

<style scoped lang="scss">
.axios-container {
  .user-info-container {
    display: flex;
    justify-content: center;
    width: 100%;
    .info-list-box {
      padding: 10px;
      .text {
        font-size: 14px;
      }
      .item {
        margin-bottom: 18px;
      }
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .box-card {
      width: 480px;
    }
  }
}
</style>
