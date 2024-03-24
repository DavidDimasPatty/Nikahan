<script>
import Nav from './components/Nav.vue';

export default {
  components: {
    Nav,
  },

  methods: {
    continueToHomePage() {
      // Sembunyikan overlay
      document.getElementById("overlay").style.display = "none";
      // Tampilkan halaman utama dengan animasi
      document.getElementById("main-content").style.display = "block";
      // Tambahkan animasi pada halaman utama
      document.getElementById("main-content").classList.add("fade-in");
    }
  }
}

</script>


<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%; 
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; 
}

.overlay-content {
  background-color: black;
  width: 100%; 
  height: 100%;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.fade-in {
  animation: fade-in-animation 0.5s ease-in-out;
}

@keyframes fade-in-animation {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
<template>

        <title>Pernikahan Farhan dan Risma</title>
        <div id="overlay" class="overlay">
          <div class="overlay-content">
            <center>
              <h2 class="text-white">Welcome to Our Wedding</h2>
                <div class="card mt-4 w-50 w-md-25 mb-4">
                  <div class="rounded-top overflow-hidden">
                    <img src="./assets/fotonikah.jpg" class="card-img-top img-fluid" style="object-fit: cover; object-position: center; height: 250px;"/>
                  </div>
                </div>
                <h1 class="text-white">Farhan & Risma</h1>
                <h5 class="text-white">Minggu, 23 Maret 2025</h5>
                <h5 class="text-white">Gedung Perkumpulan 3A</h5>
              <button @click="continueToHomePage" class="btn btn-dark mt-4">Buka Undangan</button>
          </center>
          </div>
        </div>
        <div class="container mt-3">
           
            <Nav></Nav>
            <body class="d-flex flex-column">
                <router-view></router-view>
            </body>

            <footer class="mt-auto">
              <p>© 2024 My Vue.js App</p>
            </footer>
        </div>

</template>