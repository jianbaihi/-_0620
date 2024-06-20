<script setup>
import { onMounted } from 'vue'
import { useItemStore } from '../stores/item.js'

const { getItem, handleAdd, handleLogout, handleManage } = useItemStore()

onMounted(async () => {
  getItem()
})
</script>

<template>
  <header>
    <h1>主页</h1>
    <button @click="handleLogout">退出登录</button>
  </header>
  <div class="container">
    <section>
      <button @click="handleManage">商品管理</button>
      <button @click="handleAdd">添加商品</button>
    </section>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
header {
  background-color: #328fe2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  color: white;
}
header button {
  height: 30px;
}
header h1 {
  padding-left: 700px;
}
section {
  flex: 0.2;
  margin: 0;
  display: flex;
  row-gap: 50px;
  flex-direction: column;
  align-items: center;
  border: 1px solid #777;
  background-color: #eee;
}
section button {
  width: 100%;
  height: 50px;
  margin-top: 10px;
  border-style: groove;
  font-size: 20px;
}
.container {
  height: 630px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  justify-content: center;
}
main {
  flex: 0.8;
  background-color: #eee;
}
</style>
