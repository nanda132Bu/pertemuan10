<template>
  <div class="p-6">
    <h2 class="text-xl font-bold mb-4">Rekam Medis Pasien</h2>
    <form class="space-y-4 max-w-md">
      <input class="input" placeholder="Nama Pasien" />
      <textarea class="input" rows="4" placeholder="Catatan Diagnosa"></textarea>
      <input class="input" placeholder="Obat Diberikan" />
      <button class="btn-primary">Simpan</button>
    </form>
  </div>
</template>

<style scoped>
.input {
  @apply w-full p-2 border border-gray-300 rounded;
}
.btn-primary {
  @apply bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600;
}
</style>
