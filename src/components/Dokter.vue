<template>
  <div class="p-6">
    <h2 class="text-xl font-bold mb-4">Form Tambah Dokter</h2>
    <form @submit.prevent="submitForm" class="max-w-xl bg-white p-4 shadow rounded-md">
      <table class="w-full table-auto border-separate border-spacing-y-4">
        <tr>
          <td class="font-medium w-1/3">Nama Dokter</td>
          <td>
            <input
              class="input"
              v-model="form.nama"
              placeholder="Nama Dokter"
              required
            />
          </td>
        </tr>
        <tr>
          <td class="font-medium">Spesialis</td>
          <td>
            <input
              class="input"
              v-model="form.spesialis"
              placeholder="Spesialis"
              required
            />
          </td>
        </tr>
        <tr>
          <td class="font-medium">No Telepon</td>
          <td>
            <input
              class="input"
              v-model="form.telepon"
              type="tel"
              placeholder="08xxxx"
              required
            />
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button type="submit" class="btn-primary mt-2">Simpan</button>
          </td>
        </tr>
      </table>
    </form>
  </div>
</template>

<script>
import '../css/Dokter.css'
export default {
  data() {
    return {
      form: {
        nama: '',
        spesialis: '',
        telepon: ''
      }
    };
  },
  methods: {
    async submitForm() {
      const dokterData = {
        nama: this.form.nama.trim(),
        spesialis: this.form.spesialis.trim(),
        telepon: this.form.telepon.trim()
      };

      if (!dokterData.nama || !dokterData.spesialis || !dokterData.telepon) {
        alert('Semua kolom wajib diisi!');
        return;
      }

      try {
        const res = await fetch('https://kliniksehat.glitch.me/dokter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dokterData)
        });

        if (!res.ok) throw new Error('Gagal menyimpan data dokter');

        alert('Data dokter berhasil disimpan!');
        this.resetForm();
      } catch (error) {
        alert('Terjadi kesalahan saat menyimpan data dokter.');
        console.error(error);
      }
    },
    resetForm() {
      this.form = {
        nama: '',
        spesialis: '',
        telepon: ''
      };
    }
  }
};
</script>

