<script>
import {useRoute,useRouter} from "vue-router";
import store from '../store/index.js'; 
import {computed} from 'vue';
export default{
setup(){
  const data = computed(() => store.getters.getData);
  const route = useRoute();
  const id = route.params.id;
  return{
    data,
    id
  }
}

}
</script>
<style>
#bgGallery{
  background: url("/src/assets/THEME 1/LAYER 1/01.LAYER LEFT 2.png") left top repeat, url('/src/assets/THEME 1/LAYER 1/02.LAYER RIGHT 2.png') right top repeat, url('/src/assets/THEME 1/LAYER 1/01.LAYER LEFT 1.png') left top repeat,url('/src/assets/THEME 1/LAYER 1/02.LAYER RIGHT 1.png') right bottom repeat;
  background-size:contain, contain, contain;
}

#namaPasangan{
  font-family: "font2";
  color:  goldenrod;
  text-shadow: 0 0 2px;
  font-size: 50px;
}

.gambar{
  width: 300px;
  height: 300px;
}

</style>
<template>

  <div id="bgGallery">
    <div id="wrapper" class="">
        <div>
            <router-link :to="'/' + id" class="navi" style="color:black;">Home</router-link> 
            <router-link :to="'/Galeri/' + id" class="navi" style="color:black;">Galeri</router-link> 
        </div>
    </div>

    <h1 id="namaPasangan" class="mt-3 mb-5">{{ data["dataNikahan"]["namaCowo"] }} & {{ data["dataNikahan"]["namaCewe"] }}'s Gallery</h1>
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
