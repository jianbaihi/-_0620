<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';


const router = useRouter()
console.log(useUserStore())
const {username,password,islogin} = storeToRefs(useUserStore())
// const {login} = useUserStore()
const login = () => {
        console.log(username.value, password.value)
        if (username.value === 'admin' && password.value === 123) {
          router.push({ name: 'item' })
          localStorage.setItem('islogin', true)
          // islogin.value = true
        } else {
          alert('您输入的用户名或密码有误，请重新输入')
        }
      }
</script>

<template>
  <div class="login">
    <h1>登录</h1>
    用户名：<input
      type="text"
      v-model="username"
      placeholder="请输入用户名"
      class="input"
    />
    密码：<input
      type="password"
      v-model.number="password"
      placeholder="请输入密码"
      class="input"
    />
    <button @click="login" class="btn">登录</button>
  </div>
</template>

<style scoped>
.login {
  width: 500px;
  height: 350px;
  background-color: #eee;
  margin: 200px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 10px #888888;
}
.login .input {
  width: 200px;
  height: 30px;
  margin-top: 20px;
  outline: none;
}
.login .btn {
  width: 100px;
  height: 30px;
  margin-top: 40px;
}
</style>
