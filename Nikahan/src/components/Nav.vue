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
        <center>
            <router-link :to="'/' + id" class="me-3 navi">Home</router-link> 
            <router-link :to="'/Galeri/' + id" class="navi">Galeri</router-link> 
        </center>
    </div>
</template>

<style>
    .router-link-active {
        border-bottom: 2px solid black; 
    }
</style>