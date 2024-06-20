import { ref } from 'vue'
import { defineStore } from 'pinia'
import {
  getItemsApi,
  addItemApi,
  getItemByIdApi,
  updateItemApi,
  deleteItemApi,
} from '../api/itemInfo'
import { useRoute, useRouter } from 'vue-router'

export const useItemStore = defineStore('item', () => {
  const items = ref([])
  const id = ref('')
  const itemName = ref('')
  const price = ref('')
  const route = useRoute()
  const router = useRouter()
  const index = route.params.id

  const submitAdd = async () => {
    const item = {
      itemName: itemName.value,
      price: price.value,
    }
    addItem(item)
    itemName.value = ''
    price.value = ''
    addItemApi(item)
    getItem()
    router.push('/')
  }
  const addItem = (item) => {
    items.value.push(item)
  }
  const getItem = async () => {
    items.value = await getItemsApi()
  }

  const handleAdd = () => {
    router.push('/add')
  }
  const handleLogout = () => {
    // islogin.value = false
    router.push({ name: 'login' })
  }
  const handleUpdate = (id) => {
    router.push({name:'update',params:{id}})
  }
  const handleDelete = async (id) => {
    await deleteItemApi(id)
    getItem()
  }
  const handleManage = () => {
    router.push('/')
  }
  const UpdateBtn = (id) => {
    router.push({ name: 'update', params: { id } })
  }
  const DeleteBtn = async (id) => {
    await deleteItemApi(id)
    getItem()
  }

  return {
    items,
    id,
    itemName,
    price,
    route,
    router,
    index,
    addItem,
    getItem,
    submitAdd,
    handleAdd,
    handleLogout,
    handleUpdate,
    handleDelete,
    handleManage,
    UpdateBtn,
    DeleteBtn,
  }
})
