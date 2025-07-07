<template>
  <div class="laporan-container">
    <h1 class="main-title">Laporan Data Klinik</h1>

    <section v-for="(items, entity) in datasets" :key="entity" class="laporan-section">
      <h2 class="entity-title">Data {{ formatTitle(entity) }}</h2>

 <table v-if="items.length" class="data-table">
  <thead>
    <tr>
      <th v-for="key in Object.keys(items[0])" :key="key">
        {{ formatTitle(key) }}
      </th>
      <th>Aksi</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in items" :key="item.id">
      <td v-for="key in Object.keys(items[0])" :key="`${item.id}-${key}`">
        <span v-if="key === 'id'">{{ item[key] }}</span>
        <input
          v-else
          v-model="item[key]"
          class="editable-input"
          :placeholder="formatTitle(key)"
        />
      </td>
      <td>
        <button @click="saveEdit(entity, item.id)">Simpan</button>
        <button @click="deleteItem(entity, item.id)">Hapus</button>
      </td>
    </tr>
  </tbody>
</table>


      <p v-else class="no-data">
        Tidak ada data tersedia untuk {{ formatTitle(entity) }}.
      </p>
    </section>
  </div>
</template>

<script>
import '../css/Laporan.css';

export default {
  name: 'LaporanView',
  data() {
    return {
      datasets: {
        pasien: [],
        pendaftaran: [],
        rekammedis: [],
        dokter: []
      }
    };
  },
  mounted() {
    this.fetchAllData();
  },
  methods: {
    formatTitle(text) {
      return text.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
    },
    async fetchAllData() {
      const entities = Object.keys(this.datasets);
      for (const entity of entities) {
        const data = await this.fetchData(entity);
        if (!Array.isArray(data)) {
          console.warn(`Data untuk ${entity} tidak dalam bentuk array:`, data);
          this.datasets[entity] = [];
        } else {
          this.datasets[entity] = data;
        }
      }
    },
    async fetchData(endpoint) {
      try {
        const res = await fetch(`https://kliniksehat.glitch.me/${endpoint}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return await res.json();
      } catch (err) {
        console.error(`Gagal mengambil data dari ${endpoint}:`, err);
        return [];
      }
    },
    async saveEdit(entity, id) {
      const updated = this.datasets[entity].find(item => item.id === id);

      if (!updated) {
        alert('Data tidak ditemukan.');
        return;
      }

      try {
        const response = await fetch(`https://kliniksehat.glitch.me/${entity}/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updated)
        });

        if (!response.ok) throw new Error('Update gagal');

        this.datasets[entity] = await this.fetchData(entity); // refresh the data
        alert(`Data ${this.formatTitle(entity)} berhasil disimpan.`);
      } catch (err) {
        alert(`Gagal memperbarui data ${this.formatTitle(entity)}`);
        console.error(err);
      }
    },
    async deleteItem(entity, id) {
      if (!confirm(`Yakin ingin menghapus data dari ${this.formatTitle(entity)}?`)) return;

      try {
        const response = await fetch(`https://kliniksehat.glitch.me/${entity}/${id}`, {
          method: 'DELETE'
        });

        if (!response.ok) throw new Error('Gagal delete');

        this.datasets[entity] = await this.fetchData(entity);
        alert(`Data dari ${this.formatTitle(entity)} berhasil dihapus.`);
      } catch (err) {
        alert(`Gagal menghapus data ${this.formatTitle(entity)}`);
        console.error(err);
      }
    }
  }
};
</script>
