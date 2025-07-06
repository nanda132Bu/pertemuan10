<template>
  <div class="clinic-app">
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
                <input type="text" id="nama" v-model="pasien.nama" placeholder="Masukkan nama lengkap pasien" required />
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
                    <input type="radio" v-model="pasien.jenisKelamin" value="Laki-laki" required />
                    <span class="radio-custom"></span>
                    <span>Laki-laki</span>
                  </label>
                  <label class="radio-option">
                    <input type="radio" v-model="pasien.jenisKelamin" value="Perempuan" />
                    <span class="radio-custom"></span>
                    <span>Perempuan</span>
                  </label>
                </div>
              </div>

              <!-- Alamat -->
              <div class="form-group full-width">
                <label for="alamat"><i class="fas fa-map-marker-alt"></i> Alamat</label>
                <textarea id="alamat" v-model="pasien.alamat" rows="3" placeholder="Masukkan alamat lengkap pasien" required></textarea>
              </div>

              <!-- Nomor Telepon -->
              <div class="form-group">
                <label for="telepon"><i class="fas fa-phone"></i> Nomor Telepon</label>
                <input type="tel" id="telepon" v-model="pasien.telepon" placeholder="0812-3456-7890" required />
              </div>

              <!-- Email -->
              <div class="form-group">
                <label for="email"><i class="fas fa-envelope"></i> Email (Opsional)</label>
                <input type="email" id="email" v-model="pasien.email" placeholder="pasien@example.com" />
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
import '../css/Pasien.css';
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
    };
  },
  methods: {
    async submitForm() {
      const tanggalLahir = `${this.pasien.tahun}-${String(this.pasien.bulan).padStart(2, '0')}-${String(this.pasien.tanggal).padStart(2, '0')}`;

      const dataPasien = {
        ...this.pasien,
        tanggalLahir
      };

      try {
        const response = await fetch('https://kliniksehat.glitch.me/pasien', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(dataPasien)
        });

        if (!response.ok) throw new Error('Gagal menyimpan data');

        alert('Data pasien berhasil disimpan!');
        this.resetForm();
      } catch (error) {
        alert('Terjadi kesalahan saat menyimpan data pasien!');
        console.error(error);
      }
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
};
</script>