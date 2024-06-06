<script>
import "../assets/home.css";
import { computed, watch, ref, onMounted } from 'vue';
import store from '../store/index.js';
import { useRoute, useRouter } from "vue-router";

export default {

  setup() {
    const data = computed(() => store.getters.getData);
    const dataKomen = ref(data.value["dataKomen"]);
    const targetDate = computed(() => new Date(data.value["nikah"]["tglAkad"]));
    const days = ref(0);
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);
    const isiKomen = ref("");
    const namaKomen = ref("");
    const statusKomen = ref(true);
    const route = useRoute();
    const id = route.params.id;
    const visitor = route.params.visitor;
    const idAcara = ref(data.value["dataNikahan"]["id"]);

    const weddingPhotoStyle = computed(() => {
      if (data.value.fotoGallery && data.value.fotoGallery.length > 0 && data.value.fotoGallery[0].url) {
        return {
          backgroundImage: `url(${data.value.fotoGallery[3].url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '50%',
          position: 'fixed',
          top: '0',
          left: '0',
        };
      }
      return {};
    });

    // Mengupdate countdown setiap detik
    setInterval(() => {
      updateCountdown();
    }, 1000);

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.value - now;
      days.value = Math.floor(difference / (1000 * 60 * 60 * 24));
      hours.value = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      minutes.value = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      seconds.value = Math.floor((difference % (1000 * 60)) / 1000);
    };

    watch(data, () => {
      updateCountdown();
    });

    const postKomen = async () => {
      try {
        const res = await fetch('https://localhost:7241/Nikahan/postComment', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            idAcara: idAcara.value,
            nama: namaKomen.value,
            status: JSON.parse(statusKomen.value),
            isi: isiKomen.value,
            jenis: "Nikahan",
          })
        });
        const data = await res.json(); // Mengambil data dari respons
        dataKomen.value = data;
        console.log('Post berhasil:', data); // Menampilkan data respons
      } catch (error) {
        console.error('Error posting:', error);
      }
    }

    const openGoogleMapsResepsi = () => {
      var longt = parseFloat(store.getters.getData["resepsi"]["longt"]);
      var lat = parseFloat(store.getters.getData["resepsi"]["lat"]);
      const url = `https://www.google.com/maps?q=${lat},${longt}`;
      window.open(url, '_blank');
    }

    const openGoogleMapsAkad = () => {
      var longt = parseFloat(store.getters.getData["nikah"]["longt"]);
      var lat = parseFloat(store.getters.getData["nikah"]["lat"]);
      const url = `https://www.google.com/maps?q=${lat},${longt}`;
      window.open(url, '_blank');
    }

    return {
      data,
      days,
      hours,
      minutes,
      seconds,
      isiKomen,
      namaKomen,
      statusKomen,
      idAcara,
      postKomen,
      dataKomen,
      id,
      visitor,
      openGoogleMapsResepsi,
      openGoogleMapsAkad,
      weddingPhotoStyle
    };
  },
};
</script>

<style scoped>
@font-face {
  font-family: "font1";
  src: url("/src/assets/THEME 1REV/FONT THEME 1/SCRIPALT.ttf");
}

@font-face {
  font-family: "font2";
  src: url("/src/assets/THEME 1REV/FONT THEME 1/SCRIPTIN.ttf");
}

@font-face {
  font-family: "font3";
  src: url("/src/assets/THEME 1REV/FONT THEME 1/Vogue.ttf");
}

#wedding-photo {
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 50%;
  position: fixed;
  top: 0;
  left: 0;
}

.main-content {
  margin-left: 50%;
  height: 100vh;
  overflow-y: scroll;
}

@media (max-width: 888px) {
  #wedding-photo {
    display: none;
  }

  .main-content {
    margin-left: 0;
    width: 100%;
  }
}
</style>
<template>
  <div :style="weddingPhotoStyle" id="wedding-photo"></div>
    <div class="main-content">
      <h1>Selamat Datang di Undangan Pernikahan Kami</h1>
      <p>Konten utama undangan pernikahan...</p>
      <!-- Tambahkan konten lainnya di sini -->
    </div>
</template>
