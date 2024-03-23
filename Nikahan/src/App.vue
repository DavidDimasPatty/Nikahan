<script>
import Nav from './components/Nav.vue';

export default {
  components: {
    Nav,
  },
}
</script>

<template>
  <title>Pernikahan Farhan dan Risma</title>
  <div>

    <header class="mt-4">
      <h1>Pernikahan Farhan dan Risma</h1>
    </header>

   <Nav></Nav>

    <router-view></router-view>
   
    <footer>
      <p>© 2024 My Vue.js App</p>
    </footer>

  </div>
</template>