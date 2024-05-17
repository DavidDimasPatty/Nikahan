<script>
import store from '../store/index.js'; 
import {computed} from 'vue';
export default{
setup(){
  const data = computed(() => store.getters.getData);
  return{
    data   
  }
}

}
</script>
<style>
#bgGallery{
  background: url("/src/assets/THEME 1/LAYER 1/01.LAYER LEFT 2.png") left top repeat, url('/src/assets/THEME 1/LAYER 1/02.LAYER RIGHT 2.png') right top repeat, url('/src/assets/THEME 1/LAYER 1/01.LAYER LEFT 1.png') left top repeat,url('/src/assets/THEME 1/LAYER 1/02.LAYER RIGHT 1.png') right bottom repeat;
  background-size:contain, contain, 100%,100%;
}
</style>
<template>

  <div id="bgGallery">
    <div id="wrapper" class="">
        <center id="pinggir">
            <router-link :to="'/' + id" class="navi" style="color:black;">Home</router-link> 
            <router-link :to="'/Galeri/' + id" class="navi" style="color:black;">Galeri</router-link> 
        </center>
    </div>
    
    <h1>{{ data["dataNikahan"]["namaCowo"] }} & {{ data["dataNikahan"]["namaCewe"] }} Gallery</h1>
    <div class="row">
     
      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0" v-for="(item, i) in data.fotoGallery.slice(3)" >
        <img
          :src="item.url"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />

      </div>

    </div>
  </div>
</template>
