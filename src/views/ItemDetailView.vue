<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useItemStore } from '../stores/item.js'

const { items, id, itemName, price } = storeToRefs(useItemStore())
const { UpdateBtn, DeleteBtn, getItem } = useItemStore()

onMounted(async () => {
  getItem()
})
</script>

<template>
  <table>
    <tr>
      <th>商品ID</th>
      <th>商品名称</th>
      <th>商品价格</th>
      <th>操作</th>
    </tr>
    <tr v-for="item in items" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.itemName }}</td>
      <td>{{ '￥' + item.price }}</td>
      <td>
        <button @click="UpdateBtn(item.id)">修改</button>
        <button @click="DeleteBtn(item.id)">删除</button>
      </td>
    </tr>
  </table>
</template>

<style scoped>
table {
  width: 80%;
  min-height: 200px;
  margin: 60px auto;
  border-collapse: collapse;
}
tr,
th,
td {
  border: 3px solid #777;
  padding: 10px;
  text-align: center;
  font-size: 20px;
}
td button {
  width: 80px;
  height: 30px;
  border-radius: 10px;
  border-color: #777;
  margin-right: 30px;
  font-size: 18px;
}
</style>
