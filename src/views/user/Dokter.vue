<template>
  <div class="p-6">
    <h2 class="text-xl font-bold mb-4">Form Tambah Dokter</h2>
    <form class="space-y-4 max-w-md">
      <input class="input" placeholder="Nama Dokter" />
      <input class="input" placeholder="Spesialis" />
      <input class="input" type="tel" placeholder="No Telepon" />
      <button class="btn-primary">Simpan</button>
    </form>
  </div>
</template>

<style scoped>
.input {
  @apply w-full p-2 border border-gray-300 rounded;
}
.btn-primary {
  @apply bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600;
}
</style>
