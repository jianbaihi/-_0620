<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getItemByIdApi, updateItemApi } from '../api/itemInfo.js'

const itemName = ref('')
const price = ref('')
const route = useRoute()
const router = useRouter()
const index = route.params.id
const backShow = async () => {
  const itemById = await getItemByIdApi(index)
  // console.log(itemById)
  itemName.value = itemById.itemName
  price.value = itemById.price
}
const submitUpdate = async () => {
  await updateItemApi(index, { itemName: itemName.value, price: price.value })
  router.push({ name: 'item' })
}
onMounted(async () => {
  backShow()
})
// const editItem = ref({
//   itemName:itemName.value,
//   price:price.value
// })
</script>

<template>
  <div class="container">
    <h1>修改商品</h1>
    商品名：<input type="text" v-model="itemName" /> <br />
    商品价格：<input type="text" v-model.number="price" /><br />
    <button @click="submitUpdate">提交修改</button>
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
