<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'
import '../css/Login.css'

export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  setup() {
    const authStore = useAuthStore()
    const router = useRouter()

    const handleLogin = () => {
      // Siapa pun bisa login tanpa validasi
      authStore.login({
        email: 'anonymous', // atau this.email kalau tetap ingin simpan input
        password: 'any',
      })

      router.push('/dashboard')
    }

    return {
      handleLogin,
    }
  }
}
</script>
