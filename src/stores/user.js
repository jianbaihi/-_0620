import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore('user',()=>{
    const username = ref('')
    const password = ref('')
    const islogin = ref(false)
    
      return {
        username,
        password,
        islogin,
        
      }
})