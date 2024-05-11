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

<template>
  <header class="mt-3">
    <h1>{{ data["dataNikahan"]["namaCowo"] }} & {{ data["dataNikahan"]["namaCewe"] }} Gallery</h1>
  </header>

  <div class="container">
    <div class="row">
     
      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0" v-for="(item, i) in data.fotoGallery.slice(3)" >
        <img
          :src="item.url"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />

      </div>

      <!-- <div class="col-lg-4 mb-4 mb-lg-0">
        <img
          src="../assets/nikah3.jpg"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Mountains in the Clouds"
        />

        <img
          src="../assets/nikah4.jpg"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />
      </div>

      <div class="col-lg-4 mb-4 mb-lg-0">
        <img
          src="../assets/nikah5.jpg"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Waves at Sea"
        />

        <img
          src="../assets/nikah6.jpg"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Yosemite National Park"
        />
      </div> -->
    </div>
  </div>
</template>
