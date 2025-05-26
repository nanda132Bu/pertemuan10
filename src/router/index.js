import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../views/user/Dashboard.vue'
import Pasien from '../views/user/Pasien.vue'
import Dokter from '../views/user/Dokter.vue'
import Pendaftaran from '../views/user/Pendaftaran.vue'
import RekamMedis from '../views/user/RekamMedis.vue'
import Laporan from '../views/user/Laporan.vue'

const routes = [
  { path: '/', redirect: '/dashboard' },
  { path: '/dashboard', component: Dashboard },
  { path: '/pasien', component: Pasien },
  { path: '/dokter', component: Dokter },
  { path: '/pendaftaran', component: Pendaftaran },
  { path: '/rekammedis', component: RekamMedis },
  { path: '/laporan', component: Laporan }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
