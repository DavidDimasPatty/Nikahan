<script>
import Nav from './components/Nav.vue';

export default {
  components: {
    Nav,
  },

  methods: {
    continueToHomePage() {
      document.getElementById("overlay").classList.add("fade-out");
      setTimeout(() => {
        document.getElementById("overlay").style.display = "none";
        document.getElementById("main-content").style.display = "block";
        document.getElementById("main-content").classList.add("fade-in");
      }, 100); 
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
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; 
}

.overlay-content2 {
  background-image: url('./assets/fotonikah.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%; 
  height: 58%;
}

.overlay-content {
  background-color: white;
  width: 100%; 
  height: 100%;
  padding: 20px;
  border-radius: 10px;
  text-align: center; 
}

.fade-out {
  animation: fade-out-animation 0.5s ease-in-out;
}

@keyframes fade-out-animation {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
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

            <div class="overlay-content2">
            </div>


            <div class="align-item-center justify-content-center">
                <h1 class="text-black">Farhan & Risma</h1>
                <h5 class="text-black">Minggu, 23 Maret 2025</h5>
                <h5 class="text-black">Gedung Perkumpulan 3A</h5>
              <button @click="continueToHomePage" class="btn btn-dark mt-4">Buka Undangan</button>
          </div>

          </div>
        </div>
        <div class="container mt-3" id="main-content">
           
            <Nav></Nav>
            <body class="d-flex flex-column">
                <router-view></router-view>
            </body>

            <footer class="mt-auto">
              <p>© 2024 My Vue.js App</p>
            </footer>
        </div>

</template>