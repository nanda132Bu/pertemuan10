<template>
  <div class="p-6">
    <h2 class="text-xl font-bold mb-4">Rekam Medis Pasien</h2>
    <form @submit.prevent="submitForm" class="space-y-4 max-w-md">
      <input
        class="input"
        placeholder="Nama Pasien"
        v-model="rekam.nama"
        required
      />
      <textarea
        class="input"
        rows="4"
        placeholder="Catatan Diagnosa"
        v-model="rekam.diagnosa"
        required
      ></textarea>
      <input
        class="input"
        placeholder="Obat Diberikan"
        v-model="rekam.obat"
        required
      />
      <button type="submit" class="btn-primary">Simpan</button>
    </form>
  </div>
</template>

<script>
import '../css/RekamMedis.css'
export default {
  data() {
    return {
      rekam: {
        nama: '',
        diagnosa: '',
        obat: ''
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('https://kliniksehat.glitch.me/rekammedis', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.rekam)
        });

        if (!response.ok) throw new Error('Gagal menyimpan data rekam medis');

        alert('Rekam medis berhasil disimpan!');
        this.resetForm();
      } catch (error) {
        alert('Terjadi kesalahan saat menyimpan rekam medis.');
        console.error(error);
      }
    },
    resetForm() {
      this.rekam = {
        nama: '',
        diagnosa: '',
        obat: ''
      };
    }
  }
};
</script>


