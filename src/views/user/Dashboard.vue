<template>
  <div class="app-container">
    <!-- Sidebar Navigation -->
    <div class="sidebar">
      <div class="clinic-header">
        <h1><i class="fas fa-clinic-medical"></i> KLINIK SEHAT</h1>
      </div>
      <nav>
        <ul>
          <li class="active"><i class="fas fa-tachometer-alt"></i> Dashboard</li>
          <li><i class="fas fa-user-injured"></i> Pasien</li>
          <li><i class="fas fa-user-md"></i> Dokter</li>
          <li><i class="fas fa-clipboard-list"></i> Pendaftaran</li>
          <li><i class="fas fa-file-medical"></i> Rekam Medis</li>
          <li><i class="fas fa-chart-bar"></i> Laporan</li>
        </ul>
      </nav>
    </div>

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

<style scoped>
/* Base Styles */
:root {
  --primary-color: #2A5C8F;
  --secondary-color: #4CAF50;
  --accent-color: #2196F3;
  --warning-color: #FF9800;
  --danger-color: #F44336;
  --light-gray: #F5F7FA;
  --dark-gray: #333;
  --text-color: #444;
}

body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: var(--text-color);
}

.app-container {
  display: flex;
  min-height: 100vh;
}

/* Sidebar Styles */
.sidebar {
  width: 250px;
  background-color: var(--primary-color);
  color: white;
  padding: 20px 0;
}

.clinic-header {
  padding: 0 20px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.clinic-header h1 {
  margin: 0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
}

.clinic-header i {
  margin-right: 10px;
  font-size: 1.2rem;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

nav li {
  padding: 12px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 0.3s;
}

nav li:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

nav li.active {
  background-color: rgba(255, 255, 255, 0.2);
  border-left: 4px solid var(--secondary-color);
}

nav li i {
  margin-right: 10px;
  width: 20px;
  text-align: center;
}

/* Main Content Styles */
.main-content {
  flex: 1;
  background-color: var(--light-gray);
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.search-bar {
  display: flex;
  align-items: center;
  background-color: var(--light-gray);
  border-radius: 20px;
  padding: 8px 15px;
  width: 400px;
}

.search-bar i {
  color: #777;
  margin-right: 10px;
}

.search-bar input {
  border: none;
  background: transparent;
  outline: none;
  width: 100%;
}

.user-info {
  display: flex;
  align-items: center;
}

.user-info i {
  font-size: 1.5rem;
  margin-left: 10px;
  color: var(--primary-color);
}

.content {
  padding: 30px;
}

h2 {
  margin-top: 0;
  color: var(--primary-color);
}

/* Stats Cards */
.stats-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.stat-card {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  display: flex;
}

.stat-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  margin-right: 15px;
}

.stat-info {
  flex: 1;
}

.stat-info h3 {
  margin: 0 0 5px;
  font-size: 1rem;
  color: #666;
}

.stat-number {
  margin: 0 0 5px;
  font-size: 1.5rem;
  font-weight: bold;
}

.stat-change {
  font-size: 0.8rem;
  margin-left: 5px;
}

.stat-change.up {
  color: var(--secondary-color);
}

.stat-change.down {
  color: var(--danger-color);
}

.stat-warning {
  font-size: 0.8rem;
  margin-left: 5px;
  color: var(--warning-color);
}

.progress-bar {
  height: 5px;
  background-color: #eee;
  border-radius: 3px;
  margin-top: 10px;
}

.progress {
  height: 100%;
  border-radius: 3px;
  background-color: var(--secondary-color);
}

/* Charts */
.charts-row {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  margin: 30px 0;
}

.chart-container {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.chart-container h3 {
  margin-top: 0;
  font-size: 1rem;
  color: #666;
}

.chart-placeholder {
  margin-top: 15px;
  text-align: center;
}

.chart-placeholder img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

/* Schedule Table */
.schedule-container {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin: 30px 0;
}

.schedule-container h3 {
  margin-top: 0;
  font-size: 1rem;
  color: #666;
}

.table-responsive {
  overflow-x: auto;
}

.schedule-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
}

.schedule-table th {
  background-color: var(--light-gray);
  padding: 12px 15px;
  text-align: left;
  font-weight: 600;
  color: #555;
}

.schedule-table td {
  padding: 12px 15px;
  border-bottom: 1px solid #eee;
}

.schedule-table tr:hover {
  background-color: #f9f9f9;
}

.status-badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
}

.status-badge.waiting {
  background-color: #FFEBEE;
  color: var(--danger-color);
}

.status-badge.in-progress {
  background-color: #FFF8E1;
  color: var(--warning-color);
}

.status-badge.completed {
  background-color: #E8F5E9;
  color: var(--secondary-color);
}

.action-btn {
  background: none;
  border: none;
  color: #777;
  cursor: pointer;
  padding: 5px;
}

/* Notifications */
.notifications {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.notifications h3 {
  margin-top: 0;
  font-size: 1rem;
  color: #666;
}

.notification-item {
  display: flex;
  align-items: center;
  padding: 12px 15px;
  margin: 10px 0;
  border-radius: 6px;
  cursor: pointer;
}

.notification-item i {
  margin-right: 10px;
  font-size: 1.1rem;
}

.notification-item.warning {
  background-color: #FFF8E1;
  color: var(--warning-color);
}

.notification-item.danger {
  background-color: #FFEBEE;
  color: var(--danger-color);
}

.badge {
  margin-left: auto;
  background-color: white;
  color: inherit;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 0.75rem;
  font-weight: bold;
}

/* Responsive */
@media (max-width: 1200px) {
  .stats-row {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .charts-row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .app-container {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
    padding: 10px 0;
  }
  
  .clinic-header {
    padding: 10px;
  }
  
  nav ul {
    display: flex;
    overflow-x: auto;
  }
  
  nav li {
    flex-shrink: 0;
    border-left: none;
    border-bottom: 3px solid transparent;
  }
  
  nav li.active {
    border-left: none;
    border-bottom: 3px solid var(--secondary-color);
  }
  
  .top-bar {
    flex-direction: column;
    align-items: stretch;
  }
  
  .search-bar {
    width: 100%;
    margin-bottom: 10px;
  }
  
  .stats-row {
    grid-template-columns: 1fr;
  }
}
</style>