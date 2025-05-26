<template>
  <div class="p-6">
    <h2 class="text-xl font-bold mb-4">Form Pendaftaran Pemeriksaan</h2>
    <form class="space-y-4 max-w-md">
      <input class="input" placeholder="Nama Pasien" />
      <input class="input" type="date" />
      <select class="input">
        <option>Umum</option>
        <option>Gigi</option>
        <option>Anak</option>
      </select>
      <button class="btn-primary">Daftar</button>
    </form>
  </div>
</template>

<style scoped>
.input {
  @apply w-full p-2 border border-gray-300 rounded;
}
.btn-primary {
  @apply bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600;
}
</style>
