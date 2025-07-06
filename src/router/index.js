import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth' // pastikan path sesuai

import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'
import Pasien from '../components/Pasien.vue'
import Dokter from '../components/Dokter.vue'
import Pendaftaran from '../components/Pendaftaran.vue'
import RekamMedis from '../components/RekamMedis.vue'
import Laporan from '../components/Laporan.vue'

const routes = [
  { path: '/', redirect: '/dashboard' },

  { path: '/login', name: 'Login', component: Login },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/pasien',
    name: 'Pasien',
    component: Pasien,
    meta: { requiresAuth: true }
  },
  {
    path: '/dokter',
    name: 'Dokter',
    component: Dokter,
    meta: { requiresAuth: true }
  },
  {
    path: '/pendaftaran',
    name: 'Pendaftaran',
    component: Pendaftaran,
    meta: { requiresAuth: true }
  },
  {
    path: '/rekammedis',
    name: 'RekamMedis',
    component: RekamMedis,
    meta: { requiresAuth: true }
  },
  {
    path: '/laporan',
    name: 'Laporan',
    component: Laporan,
    meta: { requiresAuth: true }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Navigation Guard (Proteksi rute)
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  // Cek status login dari localStorage
  authStore.checkLoginStatus()

  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    // Jika butuh login dan belum login, redirect ke login
    next({ name: 'Login' })
  } else if (to.path === '/login' && authStore.isLoggedIn) {
    // Jika sudah login dan mencoba akses halaman login, arahkan ke dashboard
    next({ name: 'Dashboard' })
  } else {
    next()
  }
})

export default router
