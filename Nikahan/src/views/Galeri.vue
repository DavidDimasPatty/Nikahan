<script>
import {useRoute,useRouter} from "vue-router";
import store from '../store/index.js'; 
import {computed} from 'vue';
export default{
setup(){
  const data = computed(() => store.getters.getData);
  const route = useRoute();
  const id = route.params.id;
  const visitor = route.params.visitor;
  return{
    data,
    id,
    visitor
  }
}

}
</script>
<style>
#bgGallery{
  background:  url('/src/assets/THEME 1/LAYER 1/01.LAYER LEFT 1.png') left top repeat,url('/src/assets/THEME 1/LAYER 1/02.LAYER RIGHT 1.png') right bottom repeat,url("/src/assets/THEME 1/LAYER 1/01.LAYER LEFT 2.png") left top repeat, url('/src/assets/THEME 1/LAYER 1/02.LAYER RIGHT 2.png') right top repeat;
  background-size:contain, contain, contain;
  z-index: 10;
}

#namaPasangan{
  font-family: "font2";
  color:  goldenrod;
  text-shadow: 0 0 2px;
  font-size: 50px;
  pointer-events: none; 
}

.gambar{
  width: 300px;
  height: 300px;
  object-fit: cover;
}
#homeNav{
  font-family: Georgia, 'Times New Roman', Times, serif;
  color:  goldenrod !important;
  text-shadow: 0 0 0px;
  font-size: 20px;
}
#galNav{
  font-family: Georgia, 'Times New Roman', Times, serif;
  color:  goldenrod !important;
  text-shadow: 0 0 0px;
  font-size: 20px;
}
</style>
<template>

  <div id="bgGallery">
    <div id="wrapper" class="">
      <div>
            <router-link :to="'/' + id+'/'+visitor" class="navi"  id="homeNav">Home</router-link> 
            <router-link :to="'/Galeri/' + id+'/'+visitor" class="navi"id="galNav" >Galeri</router-link> 
        </div>
    </div>

    <h1 id="namaPasangan" class="mt-3 mb-5">{{ data["dataNikahan"]["namaPendekCowo"] }} & {{ data["dataNikahan"]["namaPendekCewe"] }}'s Gallery</h1>
    <div class="container d-flex justify-content-center align-items-center"> 
      <div class="row"> 
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0" v-for="(item, i) in data.fotoGallery.slice(3)" >
          <img
            :src="item.url"
            class="shadow-1-strong rounded mb-4 gambar"
            alt="Boat on Calm Water"
          />

        </div>
      </div>
  </div>

  </div>
</template>
