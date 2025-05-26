<template>
  <div class="p-6">
    <h2 class="text-xl font-bold mb-4">Laporan Kunjungan</h2>
    <form class="space-y-4 max-w-md">
      <input class="input" type="date" />
      <input class="input" type="date" />
      <button class="btn-primary">Tampilkan Laporan</button>
    </form>
    <div class="mt-6 bg-white p-4 rounded shadow text-gray-500">[Data laporan ditampilkan di sini]</div>
  </div>
</template>

<style scoped>
.input {
  @apply w-full p-2 border border-gray-300 rounded;
}
.btn-primary {
  @apply bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800;
}
</style>
