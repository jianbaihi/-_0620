<script setup>
import { storeToRefs } from 'pinia'
import { useItemStore } from '../stores/item.js'

const { itemName, price } = storeToRefs(useItemStore())
const { submitAdd } = useItemStore()
</script>

<template>
  <div class="container">
    <h1>添加商品</h1>
    商品名：<input type="text" v-model="itemName" /> <br />
    商品价格：<input type="text" v-model.number="price" /><br />
    <button @click="submitAdd">提交添加</button>
  </div>
</template>

<style scoped>
.container {
  width: 300px;
  height: 100px;
  display: flex;
  flex-direction: column;
  padding: 200px;
}
</style>
