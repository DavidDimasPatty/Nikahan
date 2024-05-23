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
    <div>
        <div>
            <router-link :to="'/' + id" class="navi" style="color:black;">Home</router-link> 
            <router-link :to="'/Galeri/' + id" class="navi" style="color:black;">Galeri</router-link> 
        </div>
    </div>
</template>

<style>
    .router-link-active {
        border-bottom: 2px solid goldenrod; 
    }
    #wrapper{
        background-image: url('THEME 1/LAYER 1/00.BACKGROUND THEME 1.png');
        background-size:contain;
    }
    #pinggir{
        background: url("/src/assets/THEME 1/LAYER 1/01.LAYER LEFT 2.png") left top no-repeat, url('/src/assets/THEME 1/LAYER 1/02.LAYER RIGHT 2.png') right top no-repeat;
        background-size:cover, cover; 
    }
</style>