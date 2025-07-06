<template>
  <div class="app">
    <aside class="sidebar">
      <h2>Klinik</h2>
      <router-link to="/Login">Login</router-link>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/pasien">Pasien</router-link>
      <router-link to="/dokter">Dokter</router-link>
      <router-link to="/pendaftaran">Pendaftaran</router-link>
      <router-link to="/rekammedis">Rekam Medis</router-link>
      <router-link to="/laporan">Laporan</router-link>
    </aside>
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style>
.app {
  display: flex;
  height: 100vh;
  font-family: sans-serif;
}
.sidebar {
  width: 200px;
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.sidebar a {
  color: white;
  margin: 10px 0;
  text-decoration: none;
}
.sidebar a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}
.content {
  flex: 1;
  padding: 20px;
  background-color: #ecf0f1;
}
</style>
