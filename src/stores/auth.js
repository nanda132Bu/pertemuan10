import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false,
    userEmail: '',
  }),
  actions: {
    login({ email }) {
      this.isLoggedIn = true
      this.userEmail = email
      localStorage.setItem('isLoggedIn', 'true')
      localStorage.setItem('userEmail', email)
    },
    logout() {
      this.isLoggedIn = false
      this.userEmail = ''
      localStorage.removeItem('isLoggedIn')
      localStorage.removeItem('userEmail')
    },
    checkLoginStatus() {
      this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
      this.userEmail = localStorage.getItem('userEmail') || ''
    }
  }
})
