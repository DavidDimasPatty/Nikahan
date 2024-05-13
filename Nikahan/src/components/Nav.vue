<script>
import {useRoute,useRouter} from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const id = route.params.id;
    return{
    id
   }   
}
}
</script>

<template>
    <div id="wrapper" class="pb-3">
        <center id="pinggir">
            <router-link :to="'/' + id" class="navi" style="color:white;">Home</router-link> 
            <router-link :to="'/Galeri/' + id" class="navi" style="color:white;">Galeri</router-link> 
        </center>
    </div>
</template>

<style>
    .router-link-active {
        border-bottom: 2px solid white; 
    }
    #wrapper{
        /* background-image: url('/src/assets/THEME 1/LAYER 1/00.BACKGROUND THEME 1.png');
        background-size:contain;
        background-position: center; */
        background-color: black;
    }
    #pinggir{
        color:white;
        /* background: url("/src/assets/THEME 1/LAYER 1/01.LAYER LEFT 2.png") top no-repeat, url('/src/assets/THEME 1/LAYER 1/02.LAYER RIGHT 2.png') right top no-repeat;
        background-size:cover, cover; */
    }
</style>