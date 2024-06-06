<script>
import axios from "axios";
import { onMounted } from 'vue';
import {useRoute,useRouter} from "vue-router";
import { ref } from 'vue';
import { useStore } from 'vuex';
import store from './store/index.js'; 
export default {
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
    
    const fetchEventData = async () => {
      const id = route.params.id;
      try {
        isLoading.value =true;
        const response = await axios.get("https://localhost:7241/Nikahan/allDataForm?trx_id=" + id);
        console.log(response.data);
        eventData.value =  response.data; 
        namaCowo.value= response.data["dataNikahan"]["namaPendekCowo"];
        namaCewe.value= response.data["dataNikahan"]["namaPendekCewe"];
        laguBG.value= response.data["dataSong"]["urlSong"];
        store.dispatch('setData', response.data);
        isLoading.value =false;
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
        console.log(route.params.id);
        fetchEventData();
      });
    });

  //   const continueToHomePage=()=>{
  //   if (laguBG.value) {
  //         addAudioElement(laguBG.value);
  //       }
  //     document.getElementById("overlay").classList.add("fade-out");
  //     setTimeout(() => {
  //       document.getElementById("overlay").style.display = "none";
  //       document.getElementById("main-content").style.display = "block";
  //       document.getElementById("main-content").classList.add("fade-in");
  //     }, 100);
  //  }
   
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
      // continueToHomePage,
      visitor
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
</style>

<template>
  <div v-if="id!=null || visitor!=null ||tglNikah!=null">
    <title>Pernikahan {{ namaCowo }} & {{ namaCewe }}</title>
    <div v-if="isLoading" class="spinner-overlay">
        <div class="spinner"></div>
    </div>
    <div v-else>
      <router-view></router-view>
    </div>
  </div>

  <div v-else>
    <router-view></router-view>
  </div>
</template>