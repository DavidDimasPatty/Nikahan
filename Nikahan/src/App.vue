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
    
        <div class="container mt-3">
           
            <Nav></Nav>

            <body class="d-flex flex-column">
                <router-view></router-view>
            </body>

            <footer class="mt-auto">
              <p>© 2024 My Vue.js App</p>
            </footer>
        </div>

</template>