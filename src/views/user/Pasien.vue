<template>
  <div class="clinic-app">
    <!-- Sidebar Navigation -->
    <div class="sidebar">
      <div class="clinic-header">
        <h1><i class="fas fa-clinic-medical"></i> KLINIK SEHAT</h1>
      </div>
      <nav>
        <ul>
          <li><i class="fas fa-tachometer-alt"></i> Dashboard</li>
          <li class="active"><i class="fas fa-user-injured"></i> Pasien</li>
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
        <div class="page-title">
          <h2><i class="fas fa-user-plus"></i> Form Tambah Pasien</h2>
        </div>
        <div class="user-info">
          <span>Admin Klinik</span>
          <i class="fas fa-user-circle"></i>
        </div>
      </header>

      <div class="content">
        <div class="form-container">
          <form @submit.prevent="submitForm">
            <div class="form-grid">
              <!-- Nama Lengkap -->
              <div class="form-group">
                <label for="nama"><i class="fas fa-user"></i> Nama Lengkap</label>
                <input 
                  type="text" 
                  id="nama" 
                  v-model="pasien.nama" 
                  placeholder="Masukkan nama lengkap pasien"
                  required
                >
              </div>

              <!-- Tanggal Lahir -->
              <div class="form-group">
                <label for="tanggalLahir"><i class="fas fa-calendar-alt"></i> Tanggal Lahir</label>
                <div class="date-input">
                  <select v-model="pasien.tanggal" required>
                    <option value="" disabled>DD</option>
                    <option v-for="day in 31" :value="day">{{ day }}</option>
                  </select>
                  <select v-model="pasien.bulan" required>
                    <option value="" disabled>MM</option>
                    <option v-for="month in 12" :value="month">{{ month }}</option>
                  </select>
                  <select v-model="pasien.tahun" required>
                    <option value="" disabled>YYYY</option>
                    <option v-for="year in tahunOptions" :value="year">{{ year }}</option>
                  </select>
                </div>
              </div>

              <!-- Jenis Kelamin -->
              <div class="form-group">
                <label><i class="fas fa-venus-mars"></i> Jenis Kelamin</label>
                <div class="radio-group">
                  <label class="radio-option">
                    <input 
                      type="radio" 
                      v-model="pasien.jenisKelamin" 
                      value="Laki-laki"
                      required
                    >
                    <span class="radio-custom"></span>
                    <span>Laki-laki</span>
                  </label>
                  <label class="radio-option">
                    <input 
                      type="radio" 
                      v-model="pasien.jenisKelamin" 
                      value="Perempuan"
                    >
                    <span class="radio-custom"></span>
                    <span>Perempuan</span>
                  </label>
                </div>
              </div>

              <!-- Alamat -->
              <div class="form-group full-width">
                <label for="alamat"><i class="fas fa-map-marker-alt"></i> Alamat</label>
                <textarea 
                  id="alamat" 
                  v-model="pasien.alamat" 
                  rows="3"
                  placeholder="Masukkan alamat lengkap pasien"
                  required
                ></textarea>
              </div>

              <!-- Nomor Telepon -->
              <div class="form-group">
                <label for="telepon"><i class="fas fa-phone"></i> Nomor Telepon</label>
                <input 
                  type="tel" 
                  id="telepon" 
                  v-model="pasien.telepon" 
                  placeholder="0812-3456-7890"
                  required
                >
              </div>

              <!-- Email -->
              <div class="form-group">
                <label for="email"><i class="fas fa-envelope"></i> Email (Opsional)</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="pasien.email" 
                  placeholder="pasien@example.com"
                >
              </div>

              <!-- Golongan Darah -->
              <div class="form-group">
                <label for="golonganDarah"><i class="fas fa-tint"></i> Golongan Darah</label>
                <select id="golonganDarah" v-model="pasien.golonganDarah">
                  <option value="" disabled selected>Pilih golongan darah</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="AB">AB</option>
                  <option value="O">O</option>
                  <option value="Tidak Tahu">Tidak Tahu</option>
                </select>
              </div>
            </div>

            <div class="form-actions">
              <button type="button" class="cancel-btn">
                <i class="fas fa-times"></i> Batal
              </button>
              <button type="submit" class="submit-btn">
                <i class="fas fa-save"></i> Simpan Data Pasien
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TambahPasien',
  data() {
    return {
      pasien: {
        nama: '',
        tanggal: '',
        bulan: '',
        tahun: '',
        jenisKelamin: 'Laki-laki',
        alamat: '',
        telepon: '',
        email: '',
        golonganDarah: ''
      },
      tahunOptions: (() => {
        const tahunSekarang = new Date().getFullYear();
        const tahunAwal = tahunSekarang - 100;
        const options = [];
        for (let i = tahunSekarang; i >= tahunAwal; i--) {
          options.push(i);
        }
        return options;
      })()
    }
  },
  methods: {
    submitForm() {
      // Format tanggal lahir
      const tanggalLahir = `${this.pasien.tahun}-${String(this.pasien.bulan).padStart(2, '0')}-${String(this.pasien.tanggal).padStart(2, '0')}`;
      
      const dataPasien = {
        ...this.pasien,
        tanggalLahir
      };
      
      console.log('Data pasien yang akan disimpan:', dataPasien);
      // Di sini biasanya ada API call untuk menyimpan data
      alert('Data pasien berhasil disimpan!');
      
      // Reset form setelah submit
      this.resetForm();
    },
    resetForm() {
      this.pasien = {
        nama: '',
        tanggal: '',
        bulan: '',
        tahun: '',
        jenisKelamin: 'Laki-laki',
        alamat: '',
        telepon: '',
        email: '',
        golonganDarah: ''
      };
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

.clinic-app {
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

.page-title h2 {
  margin: 0;
  color: var(--primary-color);
  display: flex;
  align-items: center;
}

.page-title i {
  margin-right: 10px;
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

/* Form Styles */
.form-container {
  background-color: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #555;
}

label i {
  margin-right: 8px;
  color: var(--primary-color);
  width: 20px;
}

input, select, textarea {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px rgba(42, 92, 143, 0.2);
}

textarea {
  resize: vertical;
  min-height: 80px;
}

.date-input {
  display: flex;
  gap: 10px;
}

.date-input select {
  flex: 1;
}

.radio-group {
  display: flex;
  gap: 20px;
  margin-top: 5px;
}

.radio-option {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.radio-option input {
  width: auto;
  opacity: 0;
  position: absolute;
}

.radio-custom {
  width: 18px;
  height: 18px;
  border: 2px solid #ccc;
  border-radius: 50%;
  margin-right: 8px;
  position: relative;
  transition: all 0.3s;
}

.radio-option input:checked + .radio-custom {
  border-color: var(--primary-color);
  background-color: var(--primary-color);
}

.radio-option input:checked + .radio-custom::after {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: white;
}

/* Button Styles */
.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.3s;
}

button i {
  margin-right: 8px;
}

.submit-btn {
  background-color: var(--secondary-color);
  color: white;
}

.submit-btn:hover {
  background-color: #3d8b40;
  transform: translateY(-2px);
}

.cancel-btn {
  background-color: #f0f0f0;
  color: #666;
}

.cancel-btn:hover {
  background-color: #e0e0e0;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .clinic-app {
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
    align-items: flex-start;
  }
  
  .user-info {
    margin-top: 10px;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
  }
  
  .form-actions {
    justify-content: center;
  }
}
</style>