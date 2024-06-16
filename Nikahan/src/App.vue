<script>
import axios from "axios";
import { onMounted } from 'vue';
import {useRoute,useRouter} from "vue-router";
import { ref } from 'vue';
import { useStore } from 'vuex';
import store from './store/index.js'; 
export default {
  components: {
    //Nav,
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
    const visitor = ref();
    const color = ref();
    
    const fetchEventData = async () => {
      const id = route.params.id;

      try {
        const response = await axios.get("https://localhost:7241/Nikahan/allDataForm?trx_id=" + id);
        console.log(response.data);
        eventData.value =  response.data; 
        namaCowo.value= response.data["dataNikahan"]["namaPendekCowo"];
        namaCewe.value= response.data["dataNikahan"]["namaPendekCewe"];
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
        visitor.value=route.params.visitor;
        color.value=route.params.color;
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
      continueToHomePage,
      visitor,
      color
    };
  },



};
</script>

<style scoped>

@font-face {
    font-family: "font1";
    src: url("src/assets/THEME 1REV/FONT THEME 1/SCRIPALT.ttf");
}

@font-face 
{
    font-family: "font2";
    src: url("src/assets/THEME 1REV/FONT THEME 1/SCRIPTIN.ttf");
}

@font-face 
{
    font-family: "font3";
    src: url("src/assets/THEME 1REV/FONT THEME 1/Vogue.ttf");
}

@font-face {
    font-family: "font4";
    src: url("/src/assets/THEME 1REV/FONT THEME 1/Century Gothic.ttf");
}

@font-face {
    font-family: "font5";
    src: url("/src/assets/THEME 1REV/FONT THEME 1/CenturyGothic.ttf");
}

@font-face {
    font-family: "font6";
    src: url("/src/assets/THEME 1REV/FONT THEME 1/GOTHIC.TTF");
}

@font-face {
    font-family: "font7";
    src: url("/src/assets/THEME 1REV/FONT THEME 1/GOTHICB.TTF");
}

@font-face {
    font-family: "font8";
    src: url("/src/assets/THEME 1REV/FONT THEME 1/GOTHICB0.TTF");
}

@font-face {
    font-family: "font9";
    src: url("/src/assets/THEME 1REV/FONT THEME 1/GOTHICBI.TTF");
}

@font-face {
    font-family: "font10";
    src: url("/src/assets/THEME 1REV/FONT THEME 1/GOTHICI.TTF");
}

#main-content{
  /* background-image: url('/src/assets/THEME 1/LAYER 1/00.BACKGROUND THEME 1.png');
  background-size:contain; */
}


.overlay {
  position: fixed;
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

.visitor-gold{
  font-family: "font3";
  color:  goldenrod;
  text-shadow: 0 0 4px;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
               1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
}
.visitor-hijau{
  font-family: "font3";
  color:  #90cf8e;
  text-shadow: 0 0 4px;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
               1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
}
.visitor-orange{
  font-family: "font3";
  color:  #d89956;
  text-shadow: 0 0 4px;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
               1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
}
.visitor-pink{
  font-family: "font3";
  color:  #e39e9e;
  text-shadow: 0 0 4px;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
               1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
}
.visitor-biru{
  font-family: "font3";
  color:  #7d95b9;
  text-shadow: 0 0 4px;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
               1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
}

.greetings-gold{
  font-family: "font3";
  color:  goldenrod;
  text-shadow: 0 0 4px;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
               1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
}
.greetings-hijau{
  font-family: "font3";
  color:  #90cf8e;
  text-shadow: 0 0 4px;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
               1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
}
.greetings-orange{
  font-family: "font3";
  color:  #d89956;
  text-shadow: 0 0 4px;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
               1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
}
.greetings-pink{
  font-family: "font3";
  color:  #e39e9e;
  text-shadow: 0 0 4px;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
               1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
}
.greetings-biru{
  font-family: "font3";
  color:  #7d95b9;
  text-shadow: 0 0 4px;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
               1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
}

.namaPasangan-gold{
  font-family: "font2";
  color:  goldenrod;
  text-shadow: 0 0 4px;
  font-size: 40px;
}
.namaPasangan-hijau{
  font-family: "font2";
  color:  #90cf8e;
  text-shadow: 0 0 4px;
  font-size: 40px;
}
.namaPasangan-orange{
  font-family: "font2";
  color:  #d89956;
  text-shadow: 0 0 4px;
  font-size: 40px;
}
.namaPasangan-pink{
  font-family: "font2";
  color:  #e39e9e;
  text-shadow: 0 0 4px;
  font-size: 40px;
}
.namaPasangan-biru{
  font-family: "font2";
  color:  #7d95b9;
  text-shadow: 0 0 4px;
  font-size: 40px;
}

.tanggalNikah-gold{
  font-family: "font3";
  color:  goldenrod;
  font-size: 18px;
  text-shadow: 0 0 4px;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
               1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
}
.tanggalNikah-hijau{
  font-family: "font3";
  color:  #90cf8e;
  font-size: 18px;
  text-shadow: 0 0 4px;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
               1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
}
.tanggalNikah-orange{
  font-family: "font3";
  color:  #d89956;
  font-size: 18px;
  text-shadow: 0 0 4px;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
               1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
}
.tanggalNikah-pink{
  font-family: "font3";
  color:  #e39e9e;
  font-size: 18px;
  text-shadow: 0 0 4px;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
               1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
}
.tanggalNikah-biru{
  font-family: "font3";
  color:  #7d95b9;
  font-size: 18px;
  text-shadow: 0 0 4px;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
               1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
}

.lokasiNikah-gold{
  font-family: "font3";
  color:  goldenrod;
  text-shadow: 0 0 4px;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
               1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
}
.lokasiNikah-hijau{
  font-family: "font3";
  color:  #90cf8e;
  text-shadow: 0 0 4px;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
               1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
}
.lokasiNikah-orange{
  font-family: "font3";
  color:  #d89956;
  text-shadow: 0 0 4px;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
               1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
}
.lokasiNikah-pink{
  font-family: "font3";
  color:  #e39e9e;
  text-shadow: 0 0 4px;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
               1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
}
.lokasiNikah-biru{
  font-family: "font3";
  color:  #7d95b9;
  text-shadow: 0 0 4px;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
               1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
}

.imageAwal-gold{
  position: relative;
  border:2px solid goldenrod;
  height: 350px;
  width: 250px;
  border-radius: 150px 150px 30px 30px / 100px 100px 30px 30px;
  overflow: hidden;
  object-fit: cover;
}
.imageAwal-hijau{
  position: relative;
  border:2px solid #90cf8e;
  height: 350px;
  width: 250px;
  border-radius: 150px 150px 30px 30px / 100px 100px 30px 30px;
  overflow: hidden;
  object-fit: cover;
}
.imageAwal-orange{
  position: relative;
  border:2px solid #d89956;
  height: 350px;
  width: 250px;
  border-radius: 150px 150px 30px 30px / 100px 100px 30px 30px;
  overflow: hidden;
  object-fit: cover;
}
.imageAwal-pink{
  position: relative;
  border:2px solid #e39e9e;
  height: 350px;
  width: 250px;
  border-radius: 150px 150px 30px 30px / 100px 100px 30px 30px;
  overflow: hidden;
  object-fit: cover;
}
.imageAwal-biru{
  position: relative;
  border:2px solid #7d95b9;
  height: 350px;
  width: 250px;
  border-radius: 150px 150px 30px 30px / 100px 100px 30px 30px;
  overflow: hidden;
  object-fit: cover;
}

.btnUndangan-gold{
  border-radius: 10px;
  background-color: goldenrod;
  color:white;
  border:none;
}
.btnUndangan-hijau{
  border-radius: 10px;
  background-color: #90cf8e;
  color:white;
  border:none;
}
.btnUndangan-orange{
  border-radius: 10px;
  background-color: #d89956;
  color:white;
  border:none;
}
.btnUndangan-pink{
  border-radius: 10px;
  background-color: #e39e9e;
  color:white;
  border:none;
}
.btnUndangan-biru{
  border-radius: 10px;
  background-color: #7d95b9;
  color:white;
  border:none;
}

#footer-biru{
  background-color: #7d95b9;
  color: whitesmoke;
  height: 30px;
}
#footer-hijau{
  background-color: #90cf8e;
  color: whitesmoke;
  height: 30px;
}
#footer-pink{
  background-color: #e39e9e;
  color: whitesmoke;
  height: 30px;
}
#footer-orange{
  background-color: #d89956;
  color: whitesmoke;
  height: 30px;
}
</style>

<template>
  <div>
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
            <h2 :class="'visitor-'+color">Halo, {{ visitor }}</h2>
            <h2 :class="'greetings-'+color">You're Invited to The Wedding Of</h2>
          </div>


          <div class="" style="z-index: 1122;">
            <div style="z-index: 2122;">
              <img
                :src="fotoGalleryCover"
                :class="'imageAwal-'+color"
              />
            </div>
          </div>
          <h1 :class="'namaPasangan-'+color+' mt-1'">{{ namaCowo }} & {{ namaCewe }}</h1>
          <h5 :class="'tanggalNikah-'+color">{{tglNikah}}</h5>
          <h5 :class="'lokasiNikah-'+color">{{alamatNikah}}</h5>
          <button @click="continueToHomePage" :class="'btnUndangan-'+color">
            Buka Undangan
          </button>
        </center>
      </div>

          <div v-if="color=='biru'">
            <img
                src="/src/assets/THEME BIRU/3.PASANGANNYA/3.KIRI 1.png"
                class="card-img-top img-fluid"
                style="z-index:99;position:absolute; top:0;left:0;height: 100%;  pointer-events: none; "
              />
              <img
                src="/src/assets/THEME 1/LAYER 1/01.LAYER LEFT 1.png"
                class="card-img-top img-fluid"
                style="z-index:99;position:absolute; top:0;left:0; pointer-events: none; "
              />
              <img
                src="/src/assets/THEME BIRU/3.PASANGANNYA/1.KANAN 1.png"
                class="card-img-top img-fluid"
                style="z-index: 99;position:absolute; top:0;right:0;height: 100%;  pointer-events: none; "
              />
              <img
                src="/src/assets/THEME 1/LAYER 1/02.LAYER RIGHT 1.png"
                class="card-img-top img-fluid"
                style="z-index:99;position:absolute; bottom:0;right:0;  pointer-events: none; "
              />
          </div>

          <div v-if="color=='pink'">
            <img
                src="/src/assets/THEME PINK/3.PASANGANNYA/3.KIRI 1.png"
                class="card-img-top img-fluid"
                style="z-index:99;position:absolute; top:0;left:0;height: 100%;  pointer-events: none; "
              />
              <img
                src="/src/assets/THEME 1/LAYER 1/01.LAYER LEFT 1.png"
                
                style="z-index:99;position:absolute; top:0;left:0; pointer-events: none;  width: 100vh;"
              />
              <img
                src="/src/assets/THEME PINK/3.PASANGANNYA/1.KANAN 1.png"
                class="card-img-top img-fluid"
                style="z-index: 99;position:absolute; top:0;right:0;height: 100%;   pointer-events: none; "
              />
              <img
                src="/src/assets/THEME 1/LAYER 1/02.LAYER RIGHT 1.png"
               
                style="z-index:99;position:absolute; bottom:0;right:0;  pointer-events: none;  width: 100vh;"
              />
          </div>

          <div v-if="color=='orange'">
            <img
                src="/src/assets/THEME ORANGE/3.PASANGANNYA/3.KIRI 1.png"
                class="card-img-top img-fluid"
                style="z-index:99;position:absolute; top:0;left:0;height: 100%;  pointer-events: none; "
              />
              <img
                src="/src/assets/THEME 1/LAYER 1/01.LAYER LEFT 1.png"
                class="card-img-top img-fluid"
                style="z-index:99;position:absolute; top:0;left:0; pointer-events: none; "
              />
              <img
                src="/src/assets/THEME ORANGE/3.PASANGANNYA/1.KANAN 1.png"
                class="card-img-top img-fluid"
                style="z-index: 99;position:absolute; top:0;right:0;height: 100%;  pointer-events: none; "
              />
              <img
                src="/src/assets/THEME 1/LAYER 1/02.LAYER RIGHT 1.png"
                class="card-img-top img-fluid"
                style="z-index:99;position:absolute; bottom:0;right:0;  pointer-events: none; "
              />
          </div>

          <div v-if="color=='hijau'">
            <img
                src="/src/assets/THEME HIJAU/3.PASANGANNYA/3.KIRI 1.png"
                class="card-img-top img-fluid"
                style="z-index:99;position:absolute; top:0;left:0;height: 100%;  pointer-events: none; "
              />
              <img
                src="/src/assets/THEME 1/LAYER 1/01.LAYER LEFT 1.png"
                class="card-img-top img-fluid"
                style="z-index:99;position:absolute; top:0;left:0; pointer-events: none; "
              />
              <img
                src="/src/assets/THEME HIJAU/3.PASANGANNYA/1.KANAN 1.png"
                class="card-img-top img-fluid"
                style="z-index: 99;position:absolute; top:0;right:0;height: 100%;  pointer-events: none; "
              />
              <img
                src="/src/assets/THEME 1/LAYER 1/02.LAYER RIGHT 1.png"
                class="card-img-top img-fluid"
                style="z-index:99;position:absolute; bottom:0;right:0;  pointer-events: none; "
              />
          </div>
    </div>

    <div id="appButt">
      <button @click="toggleMute" class="sticky-button btn btn-dark">   <i :class="'bi bi-volume' + (isMuted ? '-mute':'-up' )"></i></button>
    </div>

    <div  id="main-content" v-if="!isLoading" style="background-color: black;">
      <body>
        <!-- <Nav></Nav> -->
        <router-view></router-view>
      </body>

      <footer :id="'footer-'+color">
        © 2024 Kartu Sera
      </footer>
    </div>
  </div>
</template>