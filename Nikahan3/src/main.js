import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Pastikan Anda mengganti dengan path yang benar
import 'bootstrap/dist/css/bootstrap.css';
import './assets/main.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

createApp(App)
  .use(router)
  .mount('#app');