<template>
  <div class="p-6">
    <h2 class="text-xl font-bold mb-4">Form Pendaftaran Pemeriksaan</h2>
    <form @submit.prevent="submitForm" class="max-w-xl bg-white p-4 shadow rounded-md">
      <table class="w-full table-auto border-separate border-spacing-y-4">
        <tr>
          <td class="font-medium w-1/3">Nama Pasien</td>
          <td>
            <input
              class="input"
              v-model="form.nama"
              placeholder="Nama lengkap"
              required
            />
          </td>
        </tr>
        <tr>
          <td class="font-medium">Tanggal Pemeriksaan</td>
          <td>
            <input
              class="input"
              type="date"
              v-model="form.tanggal"
              required
            />
          </td>
        </tr>
        <tr>
          <td class="font-medium">Poli Tujuan</td>
          <td>
            <select class="input" v-model="form.poli" required>
              <option disabled value="">Pilih Poli</option>
              <option value="Umum">Umum</option>
              <option value="Gigi">Gigi</option>
              <option value="Anak">Anak</option>
            </select>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button type="submit" class="btn-primary mt-2">Daftar</button>
          </td>
        </tr>
      </table>
    </form>
  </div>
</template>

<script>
import '../css/Pendaftaran.css'
export default {
  data() {
    return {
      form: {
        nama: '',
        tanggal: '',
        poli: ''
      }
    };
  },
  methods: {
    async submitForm() {
      const data = {
        nama: this.form.nama.trim(),
        tanggal: this.form.tanggal,
        poli: this.form.poli
      };

      if (!data.nama || !data.tanggal || !data.poli) {
        alert("Semua kolom wajib diisi.");
        return;
      }

      try {
        const response = await fetch('https://kliniksehat.glitch.me/pendaftaran', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        if (!response.ok) throw new Error('Gagal mendaftar');

        alert('Pendaftaran berhasil disimpan!');
        this.resetForm();
      } catch (error) {
        alert('Terjadi kesalahan saat menyimpan pendaftaran.');
        console.error(error);
      }
    },
    resetForm() {
      this.form = {
        nama: '',
        tanggal: '',
        poli: ''
      };
    }
  }
};
</script>
