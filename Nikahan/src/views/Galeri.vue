<script>
import {useRoute} from "vue-router";
import store from '../store/index.js'; 
import {computed} from 'vue';
export default{
setup(){
  const data = computed(() => store.getters.getData);
  const route = useRoute();
  const id = route.params.id;
  const visitor = route.params.visitor;
  const color = route.params.color;
  return{
    data,
    id,
    visitor,
    color
  }
}

}
</script>
<style scoped>
#bgGallery-biru{
  background:  url('/src/assets/THEME BIRU/6.FOTO GALLERY NIKAH/1.TENGAH.png') center,url("/src/assets/THEME BIRU/6.FOTO GALLERY NIKAH/3.KIRI.png") left bottom repeat;
  background-size:cover, cover;
  z-index: 10;
}

#bgGallery-pink{
  background:  url('/src/assets/THEME PINK/6.FOTO GALLERY NIKAH/1.TENGAH.png') center,url("/src/assets/THEME PINK/6.FOTO GALLERY NIKAH/3.KIRI.png") left bottom repeat;
  background-size:cover, cover;
  z-index: 10;
}

#bgGallery-hijau{
  background:  url('/src/assets/THEME HIJAU/6.FOTO GALLERY NIKAH/1.TENGAH.png') center,url("/src/assets/THEME HIJAU/6.FOTO GALLERY NIKAH/3.KIRI.png") left bottom repeat;
  background-size:cover, cover;
  z-index: 10;
}

#bgGallery-orange{
  background:  url('/src/assets/THEME ORANGE/6.FOTO GALLERY NIKAH/1.TENGAH.png') center,url("/src/assets/THEME ORANGE/6.FOTO GALLERY NIKAH/3.KIRI.png") left bottom repeat;
  background-size:cover, cover;
  z-index: 10;
}

#namaPasangan-gold{
  font-family: "font2";
  color:  goldenrod;
  text-shadow: 0 0 2px;
  font-size: 50px;
  pointer-events: none; 
}

#namaPasangan-hijau{
  font-family: "font2";
  color:  #90cf8e;
  text-shadow: 0 0 2px;
  font-size: 50px;
  pointer-events: none;
}

#namaPasangan-orange{
  font-family: "font2";
  color: #d89956;
  text-shadow: 0 0 2px;
  font-size: 50px;
  pointer-events: none;
}

#namaPasangan-pink{
  font-family: "font2";
  color:  #e39e9e;
  text-shadow: 0 0 2px;
  font-size: 50px;
  pointer-events: none;
}

#namaPasangan-biru{
  font-family: "font2";
  color:  #7d95b9;
  text-shadow: 0 0 2px;
  font-size: 50px;
  pointer-events: none;
}

.gambar{
  width: 300px;
  height: 300px;
  object-fit: cover;
}
#homeNav-gold{
  font-family: Georgia, 'Times New Roman', Times, serif;
  color:  goldenrod !important;
  text-shadow: 0 0 0px;
  font-size: 20px;
}
#homeNav-hijau{
  font-family: Georgia, 'Times New Roman', Times, serif;
  color:  #90cf8e !important;
  text-shadow: 0 0 0px;
  font-size: 20px;
}
#homeNav-orange{
  font-family: Georgia, 'Times New Roman', Times, serif;
  color:  #d89956 !important;
  text-shadow: 0 0 0px;
  font-size: 20px;
}
#homeNav-pink{
  font-family: Georgia, 'Times New Roman', Times, serif;
  color:  #e39e9e !important;
  text-shadow: 0 0 0px;
  font-size: 20px;
}
#homeNav-biru{
  font-family: Georgia, 'Times New Roman', Times, serif;
  color:  #7d95b9 !important;
  text-shadow: 0 0 0px;
  font-size: 20px;
}
#galNav-gold{
  font-family: Georgia, 'Times New Roman', Times, serif;
  color:  goldenrod !important;
  text-shadow: 0 0 0px;
  font-size: 20px;
}
#galNav-hijau{
  font-family: Georgia, 'Times New Roman', Times, serif;
  color:  #90cf8e !important;
  text-shadow: 0 0 0px;
  font-size: 20px;
}
#galNav-orange{
  font-family: Georgia, 'Times New Roman', Times, serif;
  color:  #d89956 !important;
  text-shadow: 0 0 0px;
  font-size: 20px;
}
#galNav-pink{
  font-family: Georgia, 'Times New Roman', Times, serif;
  color:  #e39e9e !important;
  text-shadow: 0 0 0px;
  font-size: 20px;
}
#galNav-biru{
  font-family: Georgia, 'Times New Roman', Times, serif;
  color:  #7d95b9 !important;
  text-shadow: 0 0 0px;
  font-size: 20px;
}
</style>
<template>

  <div :id="'bgGallery-'+color">
    <div id="wrapper" class="">
      <div>
            <router-link :to="'/' + id+'/'+color+'/'+visitor" class="navi"  :id="'homeNav-'+color">Home</router-link> 
            <router-link :to="'/Galeri/' + id+'/'+color+'/'+visitor" class="navi" :id="'galNav-'+color" >Galeri</router-link> 
        </div>
    </div>

    <h1 :id="'namaPasangan-'+color" class="mt-3 mb-5">{{ data["dataNikahan"]["namaPendekCowo"] }} & {{ data["dataNikahan"]["namaPendekCewe"] }}'s Gallery</h1>
    <div class="container d-flex justify-content-center align-items-center"> 
      <div class="row"> 
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0" v-for="(item, i) in data.fotoGallery.slice(3)"  v-motion
    :initial="{ opacity: 0, y: 100 }"
    :visible="{ opacity: 1, y: 0, scale: 1 }"
    :delay="200"
    :duration="800">
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
