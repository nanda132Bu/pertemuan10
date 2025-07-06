<template>
  <div class="app-container">
 

    <!-- Main Content -->
    <div class="main-content">
      <header class="top-bar">
        <div class="search-bar">
          <i class="fas fa-search"></i>
          <input type="text" placeholder="Cari pasien, dokter, atau layanan...">
        </div>
        <div class="user-info">
          <span>Admin Klinik</span>
          <i class="fas fa-user-circle"></i>
        </div>
      </header>

      <div class="content">
        <h2>Dashboard Klinik - {{ currentDate }}</h2>

        <!-- Stats Cards -->
        <div class="stats-row">
          <div class="stat-card">
            <div class="stat-icon" style="background-color: #4CAF50;">
              <i class="fas fa-user-injured"></i>
            </div>
            <div class="stat-info">
              <h3>Pasien Hari Ini</h3>
              <p class="stat-number">15 <span class="stat-change up">↑ 20%</span></p>
              <div class="progress-bar">
                <div class="progress" style="width: 75%;"></div>
              </div>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon" style="background-color: #2196F3;">
              <i class="fas fa-user-md"></i>
            </div>
            <div class="stat-info">
              <h3>Dokter Aktif</h3>
              <p class="stat-number">5</p>
              <div class="progress-bar">
                <div class="progress" style="width: 50%;"></div>
              </div>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon" style="background-color: #FF9800;">
              <i class="fas fa-calendar-check"></i>
            </div>
            <div class="stat-info">
              <h3>Jadwal Pemeriksaan</h3>
              <p class="stat-number">8 <span class="stat-warning">(3 segera)</span></p>
              <div class="progress-bar">
                <div class="progress" style="width: 40%;"></div>
              </div>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon" style="background-color: #9C27B0;">
              <i class="fas fa-procedures"></i>
            </div>
            <div class="stat-info">
              <h3>Ruangan Tersedia</h3>
              <p class="stat-number">2/5</p>
              <div class="progress-bar">
                <div class="progress" style="width: 40%;"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Charts Row -->
        <div class="charts-row">
          <div class="chart-container">
            <h3>Kunjungan Pasien 7 Hari Terakhir</h3>
            <div class="chart-placeholder">
              <!-- Ini akan diganti dengan chart library seperti Chart.js -->
              <img src="https://via.placeholder.com/500x250?text=Line+Chart+Kunjungan" alt="Line Chart">
            </div>
          </div>

          <div class="chart-container">
            <h3>Distribusi Poli</h3>
            <div class="chart-placeholder">
              <!-- Ini akan diganti dengan chart library seperti Chart.js -->
              <img src="https://via.placeholder.com/300x250?text=Pie+Chart+Poli" alt="Pie Chart">
            </div>
          </div>
        </div>

        <!-- Schedule Table -->
        <div class="schedule-container">
          <h3>Jadwal Hari Ini</h3>
          <div class="table-responsive">
            <table class="schedule-table">
              <thead>
                <tr>
                  <th>Waktu</th>
                  <th>Nama Pasien</th>
                  <th>Dokter</th>
                  <th>Poli</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>08:00</td>
                  <td>Andi Wijaya</td>
                  <td>Dr. Sarah</td>
                  <td>Umum</td>
                  <td><span class="status-badge waiting">Menunggu</span></td>
                  <td><button class="action-btn"><i class="fas fa-ellipsis-v"></i></button></td>
                </tr>
                <tr>
                  <td>09:30</td>
                  <td>Rina Santoso</td>
                  <td>Dr. Adi</td>
                  <td>Gigi</td>
                  <td><span class="status-badge in-progress">Diproses</span></td>
                  <td><button class="action-btn"><i class="fas fa-ellipsis-v"></i></button></td>
                </tr>
                <tr>
                  <td>10:15</td>
                  <td>Budi Hartono</td>
                  <td>Dr. Maya</td>
                  <td>Anak</td>
                  <td><span class="status-badge completed">Selesai</span></td>
                  <td><button class="action-btn"><i class="fas fa-ellipsis-v"></i></button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Notifications -->
        <div class="notifications">
          <h3>Notifikasi Penting</h3>
          <div class="notification-item warning">
            <i class="fas fa-pills"></i>
            <span>2 resep perlu konfirmasi apoteker</span>
            <span class="badge">2</span>
          </div>
          <div class="notification-item danger">
            <i class="fas fa-flask"></i>
            <span>1 hasil lab belum diinput</span>
            <span class="badge">1</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../css/Dashboard.css'
export default {
  name: 'DashboardKlinik',
  data() {
    return {
      currentDate: new Date().toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
}
</script>
