<script>
import Nav from "./components/Nav.vue";
import axios from "axios";
import { onMounted } from 'vue';
import {useRoute,useRouter} from "vue-router";
import { ref } from 'vue';
import { useStore } from 'vuex';
import store from './store/index.js'; 
export default {
  components: {
    Nav,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const eventData = ref([]);
    const namaCowo = ref();
    const namaCewe = ref();
    const tglNikah = ref();
    const alamatNikah = ref();
    const fotoGalleryCover = ref();
    const isLoading = ref(true);
    const laguBG=ref('');
    const isMuted= ref(false);

    const fetchEventData = async () => {
      const id = route.params.id;
      try {
        const response = await axios.get("https://localhost:7241/Nikahan/allDataForm?trx_id=" + id);
        console.log(response.data);
        eventData.value =  response.data; 
        namaCowo.value= response.data["dataNikahan"]["namaCowo"];
        namaCewe.value= response.data["dataNikahan"]["namaCewe"];
        laguBG.value= response.data["dataSong"]["urlSong"];
        tglNikah.value=response.data["nikah"]["tglAkad"].substring(0,10);
        alamatNikah.value=response.data["nikah"]["alamat"];
        fotoGalleryCover.value=response.data["fotoGallery"][0]["url"];
        store.dispatch('setData', response.data);
        isLoading.value = false;
        // Lakukan sesuatu dengan data
      } catch (error) {
        isLoading.value = false;
        console.log("Error fetching data:", error);
      }
    };

    const addAudioElement = (urlSong) => {
      const audioElement = document.createElement('audio');
      audioElement.id = 'bg-music';
      audioElement.loop = true;
      audioElement.autoplay = true;
      const sourceElement = document.createElement('source');
      sourceElement.src = urlSong;
      sourceElement.type = 'audio/mpeg';
      audioElement.appendChild(sourceElement);
      console.log("masukkk");
      const appDiv = document.getElementById('appButt');
      appDiv.appendChild(audioElement);
    };

    const toggleMute = () => {
    const music = document.getElementById('bg-music');
    isMuted.value = !isMuted.value;
    music.muted = isMuted.value; // Menggunakan nilai isMuted.value, bukan isMuted
  }

    onMounted(async () => {
      await router.isReady().then( async() => {
        isLoading.value = true; 
        console.log(route.params.id);
        fetchEventData();
      });
    });

    const continueToHomePage=()=>{
    if (laguBG.value) {
          addAudioElement(laguBG.value);
        }
      document.getElementById("overlay").classList.add("fade-out");
      setTimeout(() => {
        document.getElementById("overlay").style.display = "none";
        document.getElementById("main-content").style.display = "block";
        document.getElementById("main-content").classList.add("fade-in");
      }, 100);
   }
   
    return {
      eventData,
      namaCowo,
      namaCewe,
      tglNikah,
      alamatNikah,
      fotoGalleryCover,
      isLoading,
      laguBG,
      isMuted,
      toggleMute,
      continueToHomePage
    };
  },



};
</script>

<style scoped>

#main-content{
  /* background-image: url('/src/assets/THEME 1/LAYER 1/00.BACKGROUND THEME 1.png');
  background-size:contain; */
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  background-image: url('/src/assets/THEME 1/LAYER 1/00.BACKGROUND THEME 1.png');
  background-size:contain;
}

.overlay-content {
  width: 100%;
  height: 100%;
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

.spinner-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner {
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: #000;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

</style>
<template>
  <title>Pernikahan {{ namaCowo }} & {{ namaCewe }}</title>
  <div v-if="isLoading" class="spinner-overlay">
      <div class="spinner"></div>
  </div>

  <div id="overlay" class="overlay">
    <div
      class="overlay-content d-flex align-items-center justify-content-center"
    >
      <center>
        <div>
          <h2 class="text-black">Halo, David</h2>
          <h2 class="text-black">You're Invited to The Wedding Of</h2>
        </div>


        <div class="card mt-4 col-md-6 mb-4" style="z-index: 1122;">
          <!-- <div class="position-absolute top-0 end-0 w-200" >
                      <img src="./assets/bgH1.png" class="img-fluid">
                    </div>
                    <div class="position-absolute bottom-0 start-0 w-200">
                      <img src="./assets/bgH2.png" class="img-fluid">
                    </div> -->
          <div class="rounded-top overflow-hidden" style="z-index: 2122;">
            <img
              :src="fotoGalleryCover"
              class="card-img-top img-fluid"
              style="object-fit: cover; object-position: center; z-index: 2000;"
            />
          </div>
        </div>
        <h1 class="text-black">{{ namaCowo }} & {{ namaCewe }}</h1>
        <h5 class="text-black">{{tglNikah}}</h5>
        <h5 class="text-black">{{alamatNikah}}</h5>
        <button @click="continueToHomePage" class="btn btn-dark mt-4">
          Buka Undangan
        </button>
      </center>
    </div>

          <img
              src="/src/assets/THEME 1/LAYER 1/01.LAYER LEFT 2.png"
              class="card-img-top img-fluid"
              style="z-index:99;position:absolute; top:0;left:0;height: 100%;  pointer-events: none; "
            />
            <img
              src="/src/assets/THEME 1/LAYER 1/01.LAYER LEFT 1.png"
              class="card-img-top img-fluid"
              style="z-index:99;position:absolute; top:0;left:0; pointer-events: none; "
            />
            <img
              src="/src/assets/THEME 1/LAYER 1/02.LAYER RIGHT 2.png"
              class="card-img-top img-fluid"
              style="z-index: 99;position:absolute; top:0;right:0;height: 100%;  pointer-events: none; "
            />
            <img
              src="/src/assets/THEME 1/LAYER 1/02.LAYER RIGHT 1.png"
              class="card-img-top img-fluid"
              style="z-index:99;position:absolute; bottom:0;right:0;  pointer-events: none; "
            />
  </div>

  <div id="appButt">
    <button @click="toggleMute" class="sticky-button btn btn-dark">   <i :class="'bi bi-volume' + (isMuted ? '-mute':'-up' )"></i></button>
  </div>

  <div  id="main-content" v-if="!isLoading" style="background-color: black;">
    <body class="mb-5">
      <!-- <Nav></Nav> -->
      <router-view></router-view>
    </body>

    <footer class="mt-auto" style="background-color: black;">
      <p>© 2024 Kartu Sera</p>
    </footer>
  </div>
</template>
