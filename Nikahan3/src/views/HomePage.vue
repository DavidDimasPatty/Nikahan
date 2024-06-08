<script>
import "../assets/home.css";
import axios from "axios";
import { computed, watch,ref,onMounted } from 'vue';
import store from '../store/index.js';
import {useRoute,useRouter} from "vue-router";

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
    const route = useRoute();
    const id = route.params.id;
    const visitor = route.params.visitor;
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
      
      const  openGoogleMapsResepsi =()=>
      {
        var longt = parseFloat(store.getters.getData["resepsi"]["longt"]);
        var lat = parseFloat(store.getters.getData["resepsi"]["lat"]);
        const url = `https://www.google.com/maps?q=${lat},${longt}`;
        window.open(url, '_blank');
      }

      const  openGoogleMapsAkad =()=>
      {
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
      openGoogleMapsAkad
    };
  },
};
</script>
<style>


</style>
<template>

  <div id="bgAll">   


    <h1 id="judulAtas"> YOU ARE INVITED TO THE WEDDING OF</h1>  
     

    <div class="d-flex justify-content-center mt-2" >
        <div  id="circleFig">
          <img
            :src='data["fotoGallery"][1]["url"]'
            style="width: 280px; height: 280px; object-fit: cover; border-radius: inherit; position: relative; z-index: 0; border: 4px solid goldenrod;"
            />
        </div>
      </div>

    <div id="contentUtama">
      <h1 id="namaPasangan">{{ data["dataNikahan"]["namaPendekCowo"] }} & {{ data["dataNikahan"]["namaPendekCewe"] }}</h1>
      <small id="tanggalNikah">{{data["nikah"]["tglAkad"].substring(0,10)}}</small>

      <div class="container mt-4">
        <div class="row align-items-center justify-content-center g-2">

          <div class="col">
            <div class="card shadow rounded bg-light" id="hari">
              <div class="card-body">
                <h4 class="fontWaktu">{{ days }}</h4>
                <h6 class="card-title mt-auto fontDescWaktu">Hari</h6>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card shadow rounded bg-light" id="jam">
              <div class="card-body">
                <h4 class="fontWaktu">{{ hours }}</h4>
                <h6 class="card-title mt-auto fontDescWaktu">Jam</h6>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card shadow rounded bg-light" id="menit">
              <div class="card-body">
                <h4 class="fontWaktu">{{ minutes }}</h4>
                <h6 class="card-title mt-auto fontDescWaktu">Menit</h6>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card shadow rounded bg-light" id="detik">
              <div class="card-body">
                <h4 class="fontWaktu">{{ seconds }}</h4>
                <h6 class="card-title mt-auto fontDescWaktu">Detik</h6>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>

  <div class="d-flex justify-content-center align-items-center" id="quotes">
    <hr class=""/>
      <blockquote class="blockquote" id="quotesPasangan">
        <p id="blockQuotes">
          {{data["dataNikahan"]["quotes"]}}
        </p>
        <footer class="blockquote-footer">
          <cite title="Source Title">  {{data["dataNikahan"]["authorQuotes"]}}</cite>
        </footer>
      </blockquote>
  </div>

<div id="pasangan">
      <div class="d-flex justify-content-center align-items-center">
        <div class="">
          <h5 id="ucapanDoa">
            {{data["dataNikahan"]["ajakan"]}}
          </h5>
        </div>
      </div>
    
      <div class="mt-3">
        <small id="orangTua1">{{data["dataNikahan"]["ceweSebagai"] }}</small>
        <h6 id="orangTua2">{{data["dataNikahan"]["namaOrtuCewe1"]}} & {{data["dataNikahan"]["namaOrtuCewe2"]}}</h6>
      </div>

      <div class="d-flex justify-content-center mt-5">
        <div class="cardImg">
          <img
            :src='data["fotoGallery"][5]["url"]'
            style="width: 80%; height: 80%; object-fit: cover; border-radius: inherit; position: relative; z-index: 0; border: 4px solid goldenrod;"
            />
        </div>
      </div>
      
      <h6 id="namaCewe">{{data["dataNikahan"]["namaCewe"] }}</h6>

      <div class="container">
        <h1 id="andFont" class="mb-5">{{ "&" }}</h1>
      </div>

      <h6 id="namaCewe">{{data["dataNikahan"]["namaCowo"] }}</h6>

      <div class="d-flex justify-content-center mt-5">
        <div class="cardImg2">
          <img
            :src='data["fotoGallery"][4]["url"]'
            style="width: 80%; height: 80%; object-fit: cover;border-radius: inherit; position: relative; z-index: 0; border: 4px solid goldenrod;"
            />
        </div>
      </div>

      <div class="">
        <small id="orangTua1">{{data["dataNikahan"]["cowoSebagai"] }}</small>
        <h6 id="orangTua2">{{data["dataNikahan"]["namaOrtuCowo1"]}} & {{data["dataNikahan"]["namaOrtuCowo2"]}}</h6>
      </div>

</div>

<div id="lovestory">

  <div class="container pt-4 mt-5 mb-5">
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
          
          <main>
            <div class = "cardsLS">
              <img  :src="item.url" alt="">
              <div class="card-content">
                <h2>
                  {{ item.judul }}
                </h2>
                <p>
                  <br>
                  {{ item.isi }}
                </p>
              </div>
            </div>
          </main>

        </div>
      </div>
    </div>
    </div>
  </div>
</div>


<div class="container pb-2 mt-5 mb-5">
    <div class="row gold-background">
      <div class="col text-center">
        <h2 class="d-inline-block me-1 ms-1 text-white">LOKASI</h2>
      </div>
    </div>
  </div>

<div id="lokasiBG"> 
  <div class="container">
    <div class="row">

      <div class="col justify-content-center align-items-center lokasiKiri">
        <div class="cardsExcKiri">
          <div class="image-container">
            <img  :src='data["fotoGallery"][7]["url"]' class="card-img" alt="Photo">
          </div>
        </div>
      </div>

      <div class="col exTengah">

        <div class="col mb-4">
          <figure class="image-block">
            <h1>Resepsi</h1>
            <video autoplay loop muted >
              <source :src='data["dataVideo"]["urlVideo"]' type="video/mp4">
            </video>
            <h2>
                Lokasi Resepsi
            </h2>
            <figcaption>
              <h3>
                Lokasi
              </h3>
                <div>
                   Alamat Resepsi : {{data.resepsi.alamat}}
                </div>
                <div>
                   Tanggal Resepsi : {{data.resepsi.tglResepsi.substring(0,10)}}
                </div>
              <button @click="openGoogleMapsResepsi">
                Buka Google Maps
              </button>
            </figcaption>
          </figure>
        </div>

        <div class="col">
          <figure class="image-block">
            <h1>Akad Nikah</h1>
            <video autoplay loop muted >
              <source :src='data["dataVideo"]["urlVideo"]' type="video/mp4">
            </video>
            <h2>
              Lokasi Akad Nikah
            </h2>
            <figcaption>
              <h3>
                Lokasi
              </h3>
              <p>
                <div>
                   Alamat Akad : {{data.nikah.alamat}}
                </div>
                <div>
                   Tanggal Akad : {{data.nikah.tglAkad.substring(0,10)}}
                </div>
              </p>
              <button @click="openGoogleMapsAkad">
                Buka Google Maps
              </button>
            </figcaption>
          </figure>
        </div>

      </div>

      <div class="col justify-content-center align-items-center lokasiKanan">
        <div class="cardsExcKanan">
          <div class="image-container">
            <img  :src='data["fotoGallery"][6]["url"]' class="card-img" alt="Photo">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<div class="container mt-5 ">
    <div class="row gold-background">
      <div class="col text-center">
        <h2 class="d-inline-block me-1 ms-1 text-white">WEDDING GIFT</h2>
      </div>
    </div>
</div>

<div id="bgWeddingGift">
  <div v-for="(item, i) in data.dataGift" id="weddingGift">
    <div v-if="item.method==='Transfer Bank'" class="d-flex justify-content-center align-items-center weddCard">
        <div class="cardBank">
          <div class="card__front card__part">
            <p class="text-white">{{item.namaBank}}</p>
            <p class="card_numer">{{item.noRek}}</p>
            <div class="card__space-100">
              <span class="card__label">Atas Nama:</span>
              <p class="card__info">{{item.an}}</p>
            </div>
          </div>
          
          <div class="card__back card__part">
            <div class="card__black-line"></div>
            <div class="card__back-content">
              <div class="card__secret">
                <p class="card__secret--last">420</p>
              </div>
              <img class="card__back-square card__square">
              <img class="card__back-logo card__logo">
              
            </div>
          </div>
        </div>
    </div>

    <div  v-else-if="item.method!='Transfer Bank'" class="d-flex justify-content-center align-items-center weddCard">
        <div class="cardBank">
          <div class="card__front card__part">
            <p class="text-white">{{item.method}}</p>
            <p class="card_numer">{{item.noHP}}</p>
            <div class="card__space-100">
              <span class="card__label">Atas Nama</span>
              <p class="card__info">{{item.an}}</p>
            </div>
          </div>
          
          <div class="card__back card__part">
            <div class="card__black-line"></div>
            <div class="card__back-content">
              <div class="card__secret">
                <p class="card__secret--last">420</p>
              </div>
              <img class="card__back-square card__square">
              <img class="card__back-logo card__logo">
              
            </div>
          </div>
        </div>
    </div>

  </div>
</div>

<div class="container pb-3 mt-5">
    <div class="row">
      <div class="col text-center gold-background">
        <h2 class="d-inline-block me-1 ms-1 text-white">UCAPAN SPESIAL</h2>
      </div>
    </div>
  </div>

<div id="commentBG">

 <div id="commentOne">
  <div class="d-flex justify-content-center align-items-center mb-4">
    <div class="card card-primary w-75">
        <div class="card-body">
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
        <div class="card-footer">
          <div class="mt-2 pb-2">
            <div class="col">
              <button type="button" class="btn btn-dark btn-md" @click="postKomen">Post</button>
            </div>
          </div>
        </div>
    </div>
  </div>

  <div>
  <div v-if="dataKomen.length === 0" class="text-dark mb-2">
        <div class="card card-primary">
            <div class="card-body">
              <div class="noKomen">Belum ada komentar untuk ditampilkan.</div>
            </div>
        </div>
  </div>

  <div v-else>
    <div class="d-flex justify-content-center align-items-center mb-5">
      <div class="col-md-12 col-lg-10" id="cardscroll">
        <hr/>
        <div class="text-dark mb-2 " v-for="(item, i) in dataKomen" :key="i" style="background-color: transparent; border: 0;">
         
          <div class="cardBG" style="align-items: center;">
            <div>
              <div>
                <h6 class="fw-bold d-flex justify-content-center align-items-center ms-3">{{ item.nama }}</h6>
                <div class="d-flex align-items-center justify-content-center">
                  <p>
                    <span class="badge bg-success ms-3" v-if="item.status === true">Datang</span>
                    <span class="badge bg-danger ms-3" v-else>Tidak Datang</span>
                  </p>
                </div>
                <p style="text-align: center;" class="ms-3">
                  {{item.isi}}
                </p>
              </div>
            </div>
          </div>
          <hr/>

        </div>
      </div>
      </div>
    </div>
  </div>
</div>

</div>
</template>
