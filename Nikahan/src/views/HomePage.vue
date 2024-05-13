<script>
import "../assets/home.css";
import axios from "axios";
import { computed, watch,ref,onMounted } from 'vue';
import store from '../store/index.js';

export default {
  computed: {
    googleMapsUrl() {
      // Ambil nilai longitude dari data
      const longt = store.getters.getData["nikah"]["longt"];
      const lat = store.getters.getData["nikah"]["lat"];
      console.log(lat);
      // Bangun URL Google Maps dengan longitude yang diambil
      return `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15845.029593698011!2d${longt}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1711286546661!5m2!1sid!2sid`;
    }
  },
  setup() {
    const data = computed(() => store.getters.getData);
    const dataKomen=ref(data.value["dataKomen"]);
    const targetDate = computed(() => new Date(data.value["nikah"]["tglAkad"]));
    const days = ref(0);
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);
    const isiKomen=ref("");
    const namaKomen=ref("");
    const statusKomen=ref(true);
    const idAcara=ref(data.value["dataNikahan"]["id"]);
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

     const  postKomen =async ()=>{
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
        dataKomen.value=data;
        console.log('Post berhasil:', data); // Menampilkan data respons
        } catch (error) {
          console.error('Error posting:', error);
        }
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
      dataKomen
    };
  },
};
</script>
<style>
#commentBG{
  background: url('/src/assets/THEME 1/LAYER 9/01.LAYER BACKROUND 2.png') left top repeat, url('/src/assets/THEME 1/LAYER 9/01.LAYER BACKROUND 3.png') right bottom no-repeat,url('/src/assets/THEME 1/LAYER 9/01.LAYER BACKROUND 1.png') center no-repeat;
  background-size:contain,contain,100% 100%;
}
#weddingGift{
  background: url('/src/assets/THEME 1/LAYER 7/01.LAYER LEFT 2.png') left top no-repeat, url('/src/assets/THEME 1/LAYER 7/02.LAYER RIGHT 2.png') right bottom no-repeat,url('/src/assets/THEME 1/LAYER 7/01.LAYER LEFT 1.png') left top no-repeat,url('/src/assets/THEME 1/LAYER 7/02.LAYER RIGHT 1.png') right top no-repeat;
  background-size:contain,contain,100% 100%,100% 100%;
}
#lovestory{
  background: url('/src/assets/THEME 1/LAYER 4/03.LAYER MID 4.png') center no-repeat,url('/src/assets/THEME 1/LAYER 4/01.LAYER LEFT 1.png') left top no-repeat,url("/src/assets/THEME 1/LAYER 4/02.LAYER RIGHT 1.png")  right top no-repeat;
  background-size:cover, cover, cover;
}
#pasangan{
  background: url('/src/assets/THEME 1/LAYER 3/01.LAYER LEFT 2.png') center no-repeat,url("/src/assets/THEME 1/LAYER 3/02.LAYER RIGHT 2.png")  center no-repeat,url('/src/assets/THEME 1/LAYER 3/01.LAYER LEFT 1.png') left top no-repeat,url('/src/assets/THEME 1/LAYER 3/02.LAYER RIGHT 1.png') top no-repeat;
  background-size:contain,contain,100% 100%,cover;
}
#quotes{
  background: url('/src/assets/THEME 1/LAYER 2/03.LAYER MID 2.png') center repeat,url("/src/assets/THEME 1/LAYER 2/03.LAYER MID 1.png")  center no-repeat,url('/src/assets/THEME 1/LAYER 2/01.LAYER LEFT 1.png') left top no-repeat,url('/src/assets/THEME 1/LAYER 2/02.LAYER\ RIGHT\ 1.png') right top no-repeat;
  background-size:cover,100% 100%,cover,cover;
  height: 100vh;
}

#bgAll{
  background: url("/src/assets/THEME 1/LAYER 1/03.LAYER\ MID\ 1.png") center no-repeat,url("/src/assets/THEME 1/LAYER 1/01.LAYER LEFT 2.png") left top repeat, url('/src/assets/THEME 1/LAYER 1/02.LAYER RIGHT 2.png') right top repeat, url('/src/assets/THEME 1/LAYER 1/01.LAYER LEFT 1.png') left top no-repeat,url('/src/assets/THEME 1/LAYER 1/02.LAYER RIGHT 1.png') right bottom no-repeat;
  background-size: cover,cover,cover,  cover, cover,cover;
}

#circleFig{
  background:  url("/src/assets/THEME 1/LAYER 1/03.LAYER MID 2.png") center no-repeat;
  background-size: 200% 200% ;
}

/* Warna */
.gold-background {
  background: linear-gradient(45deg, rgba(255, 215, 0, 0.8), rgba(255, 255, 255, 0.5));
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
  border-radius: 100vw;
}

.cardBG{
  background-color:burlywood ;
  border-radius: 5vw;
}

#imgFrame{
  position: absolute;
  width: 100vw;
}

/* Media queries untuk layar ponsel */
@media screen and (max-width: 767px) {
  #commentBG {
    background: url('/src/assets/THEME 1/LAYER 9/01.LAYER BACKROUND 1.png') center no-repeat;
    background-size: 100% 100%;
  }

  #weddingGift {
    background: url('/src/assets/THEME 1/LAYER 7/01.LAYER LEFT 1.png') left top no-repeat,
                url('/src/assets/THEME 1/LAYER 7/02.LAYER RIGHT 1.png') right top no-repeat;
    background-size: 100% 100%, 100% 100%;
  }

  #lovestory {
    background: url("/src/assets/THEME 1/LAYER 4/02.LAYER RIGHT 1.png")  right top no-repeat;
    background-size: cover;
  }

  #pasangan {
    background: url('/src/assets/THEME 1/LAYER 3/01.LAYER LEFT 1.png') left top no-repeat;
    background-size: 100% 100%;
  }

  #quotes {
    background: url('/src/assets/THEME 1/LAYER 2/03.LAYER MID 1.png')  center no-repeat;
    background-size: 100% 100%;
  }

  #bgAll{
      background:  url("/src/assets/THEME 1/LAYER 1/03.LAYER MID 1.png") center no-repeat;
      background-size: cover;  
  }
  

}

</style>
<template>

  <div id="bgAll">      
    <h1 class="mb-4"> You are Invited to The Weeding</h1>  
     
    <div  id="circleFig">
      <img
            :src='data["fotoGallery"][1]["url"]'
            class="rounded-circle"
            style="width: 50vw;"
            id="imgCoverBG"
        />
      </div>

    <h1>{{ data["dataNikahan"]["namaCowo"] }} & {{ data["dataNikahan"]["namaCewe"] }}</h1>
    <small>{{data["nikah"]["tglAkad"].substring(0,10)}}</small>

    <div class="container mt-4">
      <div class="row align-items-center justify-content-center g-2">
        <div class="col">
          <div class="card shadow rounded bg-light">
            <div class="card-body">
              <h6 class="card-title mt-auto">Hari</h6>
              <h4>{{ days }}</h4>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow rounded bg-light">
            <div class="card-body">
              <h6 class="card-title mt-auto">Jam</h6>
              <h4>{{ hours }}</h4>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow rounded bg-light">
            <div class="card-body">
              <h6 class="card-title mt-auto">Menit</h6>
              <h4>{{ minutes }}</h4>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow rounded bg-light">
            <div class="card-body">
              <h6 class="card-title mt-auto">Detik</h6>
              <h4>{{ seconds }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="d-flex justify-content-center align-items-center" id="quotes">
    <hr class="mt-4" />
      <blockquote class="blockquote">
        <p >
          "Mencintai dan dicintai adalah puncak kebahagiaan dan kekayaan. Semoga
          kalian tidak pernah melupakan harta berharga ini sepanjang hari
          bersama."
        </p>
        <footer class="blockquote-footer">
          Someone famous in <cite title="Source Title">Bang Toyib</cite>
        </footer>
      </blockquote>
  </div>

<div id="pasangan">
      <div class="col d-flex justify-content-center align-items-center">
        <div class="">
          <h5>
            Dengan Memohon Rahmat dan Ridho dari Allah SWT, Kami Bermasksud
            Menyelenggarakan Pernikahan
          </h5>
        </div>
      </div>

      <div class="d-flex justify-content-center mt-2">
        <div class="col-6 col-md-3">
          <div class="card bg-dark text-white" style="height: 300px;">
            <img
              :src='data["fotoGallery"][5]["url"]'
              class="card-img img-fluid"
              style="height: 100%; width: 100%; object-fit: cover;"
            />
            <div
              class="card-img-overlay d-flex flex-column justify-content-end align-items-center text-wrap"
            >
              <h5 class="card-title">{{data["dataNikahan"]["namaCewe"]}}</h5>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-3">
        <small>Putri yang tercinta dari:</small>
        <h6>{{data["dataNikahan"]["namaOrtuCewe1"]}} & {{data["dataNikahan"]["namaOrtuCewe2"]}}</h6>
      </div>

      <div class="container">
        <h1>{{ "&" }}</h1>
      </div>

      <div class="">
        <small>Putra yang tercinta dari:</small>
        <h6>{{data["dataNikahan"]["namaOrtuCowo1"]}} & {{data["dataNikahan"]["namaOrtuCowo2"]}}</h6>
      </div>

      <div class="d-flex justify-content-center mt-3">
        <div class="col-6 col-md-3">
          <div class="card bg-dark text-white" style="height: 300px;">
            <img
            :src='data["fotoGallery"][4]["url"]'
              class="card-img img-fluid"
              alt="..."
              style="height: 100%; width: 100%; object-fit: cover;"
            />
            <div
              class="card-img-overlay d-flex flex-column justify-content-end align-items-center text-wrap"
            >
              <h5 class="card-title">{{data["dataNikahan"]["namaCowo"]}}</h5>
            </div>
          </div>
        </div>
      </div>
</div>

<div id="lovestory">

  <div class="container pt-4">
    <div class="row gold-background">
      <div class="col text-center">
        <h2 class="d-inline-block me-1 ms-1 text-white">LOVE STORY</h2>
      </div>
    </div>
  </div>

  <div class="container py-3">
    <div class="main-timeline-2">
      <div class="container py-3">
      <div class="main-timeline-2">
        <div v-for="(item, i) in data.dataLoveStory"  :class="i % 2 === 1 ? 'timeline-2 left-2' : 'timeline-2 right-2'">
          <div class="card">
            <img
              :src="item.url"
              class="card-img-top"
              alt="Responsive image"
            />
            <div class="card-body p-4">
              <h4 class="fw-bold mb-4">{{ item.judul }}</h4>
              <!-- <p class="text-muted mb-4">
                <i class="far fa-clock" aria-hidden="true"></i> {{ item.year }}
              </p> -->
              <p class="mb-0">{{ item.isi }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</div>

<div id="weddingGift">

  <div class="container pb-2">
    <div class="row gold-background">
      <div class="col text-center">
        <h2 class="d-inline-block me-1 ms-1 text-white">LOKASI</h2>
      </div>
    </div>
  </div>

  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <iframe
          :src="googleMapsUrl"
          style="border: 0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div
        class="col d-flex flex-column justify-content-center align-items-center"
      >
        <h5>Gedung Perkumpulan 3A</h5>
        <h6>
          {{data["nikah"]["alamat"]}}
        </h6>
      </div>
    </div>
  </div>

  <div class="container mt-5">
    <div class="row gold-background">
      <div class="col text-center">
        <h2 class="d-inline-block me-1 ms-1 text-white">WEDDING GIFT</h2>
      </div>
    </div>
  </div>

  <div class="container pb-3">
    <div class="row flex-column justify-content-center align-items-center">
      <div class="col-md-3">
        <h4>  {{data["dataGift"][0]["namaBank"]}}</h4>

        <h4> No Rekening :  {{data["dataGift"][0]["noRek"]}}</h4>
      </div>
      <div
        class="mt-3 col-md-2 d-flex flex-column justify-content-center align-items-center"
      >
      <h4> Atas Nama :  {{data["dataGift"][0]["an"]}}</h4>
      </div>
    </div>
  </div>
</div>

<div id="commentBG">


  <div class="container pb-3">
    <div class="row">
      <div class="col text-center gold-background">
        <h2 class="d-inline-block me-1 ms-1 text-white">UCAPAN SPESIAL</h2>
      </div>
    </div>
  </div>

  <section>

    <div>
      <div class="d-flex justify-content-center align-items-center">
        <div class="w-75">
          <input type="text" placeholder="Masukan Nama Anda" class="form-control mb-2" v-model="namaKomen"/>
          <select class="form-control mb-2" v-model="statusKomen">
            <option disabled selected>Pilih Status Kehadiran</option>
            <option value="true">Datang</option>
            <option value="false">Tidak Datang</option>
          </select>
          <textarea
            class="form-control"
            id="textAreaExample"
            rows="4"
            style="background: #fff;"
            placeholder="Masukan Pesan Anda Untuk Kedua Mempelai"
            v-model="isiKomen"
          ></textarea>
        </div>
      </div>
      <div>
        <div class="mt-2 pb-2">
          <div class="col">
            <button type="button" class="btn btn-dark btn-md" @click="postKomen">Post</button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div>
      <div class="col-md-12 col-lg-10">
        <div class="card text-dark mb-2" v-for="(item, i) in dataKomen" :key="i" style="background-color: transparent; border: 0;">
          <div class="card-body cardBG" style="align-items: start;">
            <div>
              <div>
                <h6 class="fw-bold d-flex justify-content-start align-items-start">{{ item.nama }}</h6>
                <div class="d-flex align-items-start justify-content-start">
                  <p>
                    <span class="badge bg-success" v-if="item.status === true">Datang</span>
                    <span class="badge bg-danger" v-else>Tidak Datang</span>
                  </p>
                </div>
                <p style="text-align: start;">
                  {{item.isi}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>


  </section>
</div>
</template>
