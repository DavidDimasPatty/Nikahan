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
  justify-content: center;
  align-items: center;
  z-index: 10; 
  display: flex;
}
.layerWrap{
  width: 100%; 
  height: 50%;  
}
.overlay-content2 {
  background-image: url('./assets/fotonikah.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%; 
  height: 100%;
}

.overlay-content {
  width: 100%; 
  height: 100%;
  text-align: center; 
  position: relative; 
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

.svg2{
  position: absolute;
  width: 100%;
  display: flex;
}

.svg1{
  position: absolute;
  width: 1004px; /* Atur lebar SVG agar responsif */
  display: flex;
  top: 100px; /* Sesuaikan posisi SVG relatif terhadap overlay-content atau overlay-content2 */
  bottom: 0px;
}

.olbawah{
  background-color: white;
  height: 100%;
  position: absolute;
  width: 100%;
  top:44%
}


</style>
<template>
  <title>Pernikahan Farhan & Risma</title>
  <div id="overlay" class="overlay">

    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="svg2">
        <path fill="white" fill-opacity="1" d="M0,160L48,176C96,192,192,224,288,250.7C384,277,480,299,576,277.3C672,256,768,192,864,165.3C960,139,1056,149,1152,176C1248,203,1344,245,1392,266.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" ></path>
    </svg> -->

    <div class="overlay-content">         
      <div class="layerWrap">
          <div class="overlay-content2">      
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="svg1">
              <path fill="white" fill-opacity="1" d="M0,160L48,176C96,192,192,224,288,250.7C384,277,480,299,576,277.3C672,256,768,192,864,165.3C960,139,1056,149,1152,176C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" ></path>
          </svg> 
          <div class="align-item-center justify-content-center olbawah">
            <h1 class="text-black">Farhan & Risma</h1>
            <h5 class="text-black">Minggu, 23 Maret 2025</h5>
            <h5 class="text-black">Gedung Perkumpulan 3A</h5>
            <button @click="continueToHomePage" class="btn btn-dark mt-4">Buka Undangan</button>
          </div>
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