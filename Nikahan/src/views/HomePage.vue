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
  background: url('/src/assets/THEME 1/LAYER 4/03.LAYER MID 4.png') center no-repeat;
  background-size:cover;
}
#pasangan{
  background: url('/src/assets/THEME 1/LAYER 3/01.LAYER LEFT 2.png') center no-repeat,url("/src/assets/THEME 1/LAYER 3/02.LAYER RIGHT 2.png")  center no-repeat,url('/src/assets/THEME 1/LAYER 3/01.LAYER LEFT 1.png') left top no-repeat,url('/src/assets/THEME 1/LAYER 3/02.LAYER RIGHT 1.png') top no-repeat;
  background-size:contain,contain,cover,cover;
}
#quotes{
  background: url('/src/assets/THEME 1/LAYER 2/03.LAYER MID 2.png') center repeat,url("/src/assets/THEME 1/LAYER 2/03.LAYER MID 1.png")  center no-repeat;
  background-size:cover,100% 100%;
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

.cardImg{
  background-color: lightgreen;
  height: 400px;
  width: 250px;
  border-radius: 100px 100px 30px 30px / 60px 60px 30px 30px;
  overflow: hidden;
}

.cardsExcKiri {
  width: 250px;
  height: 400px;
  border-radius: 0% 50% 10% 90% / 30% 20% 10% 20%;
  overflow: hidden;
}

.cardsExcKanan {
  width: 250px;
  height: 400px;
  border-radius: 50% 0% 90% 10% / 20% 10% 20% 30%;
  overflow: hidden;
}

.cardsExcTengah {
  width: 250px;
  height: 400px;
  border-radius: 30% 30% 20% 20% / 20% 20% 20% 20%;
  overflow: hidden;
}

.image-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative; 
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.lokasiKiri{
display: flex;
}

.lokasiKanan{
  display: flex;
}

figure {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50%;
	min-width: 50%;
	height: 40%;
	border-radius: 30% 30% 20% 20% / 20% 20% 20% 20%;
	transition: all 0.3s cubic-bezier(.25,.8,.25,1);
	overflow: hidden;
	&:hover {
		h1 {
			opacity: 0;
			transform: scale(0.7);
		}
    h2 {
			opacity: 0;
			transform: scale(0.7);
		}
		img {
			transform: scale(1.25);
		}
		figcaption {
			bottom: 0;
      justify-content: center;
      align-items: center;
		}
	}
	h1 {
		position: absolute;
		top: 50px;
		left: 20px;
		margin: 0;
		padding: 0;
		color: white;
		font-size: 40px;
		font-weight: 100;
		line-height: 1;
		opacity: 1;
		transform: scale(1);
		transition: 0.25s ease;
		z-index: 999;
	}
  h2 {
		position: absolute;
		bottom: 0px;
		color: white;
    background-color: rgba(0, 0, 0, 0.85);
		font-size: 20px;
    width: 100%;
    line-height: 1;
    margin: 0;
		padding: 0;
		opacity: 1;
		transform: scale(1);
		transition: 0.25s ease;
		z-index: 999;
	}
	img {
		height: 50vh;
		transition: 0.25s;
	}
	figcaption {
		position: absolute;
		bottom: -100%;
		left: 0;
		width:inherit;
		margin: 0;
    border-radius:10%,10%,0%,0%;
    background-color: rgba(0, 0, 0, 0.85);
		box-shadow: 0 0 20px black;
		color: white;
		transition: 0.25s;
		h3 {
			margin: 0 0 20px;
			padding: 0;
		}
		p {
			font-size: 14px;
			line-height: 1.75;
		}
		button {
			position: relative;
			align-items: center;
			justify-content: center;
			margin: 10px;
			padding: 10px 30px;
			background-color: goldenrod;
			border: none;
			border-radius: 5px;
			color: white;
			font-size: 14px;
			cursor: pointer;
		}
	}
}


main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  font-family: 'Roboto', sans-serif;
}

.cardsLS {
  width: 24rem;
  height: 36rem;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  color: rgb(240, 240, 240);
  box-shadow: 0 10px 30px 5px rgba(0, 0, 0, 0.2);
 
  img {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.9;
    transition: opacity .2s ease-out;
  }

  h2 {
    position: absolute;
    inset: auto auto 30px 30px;
    margin: 0;
    transition: inset .3s .3s ease-out;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: normal;
    text-transform: uppercase;
  }
  
  p, a {
    position: absolute;
    opacity: 0;
    max-width: 80%;
    transition: opacity .3s ease-out;
  }
  
  p {
    inset: auto auto 80px 30px;
  }
  
  a {
    inset: auto auto 40px 30px;
    color: inherit;
    text-decoration: none;
  }
  
  &:hover h2 {
    inset: auto auto 220px 30px;
    transition: inset .3s ease-out;
  }
  
  &:hover p, &:hover a {
    opacity: 1;
    transition: opacity .5s .1s ease-in;
  }
  
  &:hover img {
    transition: opacity .3s ease-in;
    opacity: 1;
  }

}

.material-symbols-outlined {
  vertical-align: middle;
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

  /* #lovestory {
    background: url("/src/assets/THEME 1/LAYER 4/02.LAYER RIGHT 1.png")  right top no-repeat;
    background-size: cover;
  } */

  #pasangan {
    background: url('/src/assets/THEME 1/LAYER 3/01.LAYER LEFT 2.png') center no-repeat;
    background-size: cover;
  }

  #quotes {
    background: url('/src/assets/THEME 1/LAYER 2/03.LAYER MID 1.png')  center no-repeat;
    background-size: cover;
  }

  #bgAll{
      background:  url("/src/assets/THEME 1/LAYER 1/03.LAYER MID 1.png") center no-repeat;
      background-size: cover;  
  }

  .cardsExcKiri{
    display: none;
  }
  

  .cardsExcKanan{
    display: none;
  }

  .lokasiKanan{
    display: none;
  }

  .lokasiKiri{
    display: none;
  }
  
  .cardsExcTengah {
    width: 250px;
    height: 400px;
    border-radius: 30% 30% 20% 20% / 20% 20% 20% 20%;
    overflow: hidden;
  }


}

</style>
<template>

  <div id="bgAll" style="height: 100%;">      
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
      <div class="d-flex justify-content-center align-items-center">
        <div class="">
          <h5>
            Dengan Memohon Rahmat dan Ridho dari Allah SWT, Kami Bermasksud
            Menyelenggarakan Pernikahan
          </h5>
        </div>
      </div>
    
      <div class="d-flex justify-content-center mt-2">
        <div class="cardImg">
          <img
            :src='data["fotoGallery"][5]["url"]'
            style="width: 100%; height: 100%; object-fit: cover;"
            />
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

      <div class="d-flex justify-content-center mt-2">
        <div class="cardImg">
          <img
            :src='data["fotoGallery"][4]["url"]'
            style="width: 100%; height: 100%; object-fit: cover;"
            />
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
          
          <main>
            <div class = "cardsLS">
              <img  :src="item.url" alt="">
              <div class="card-content">
                <h2>
                  {{ item.judul }}
                </h2>
                <p>
                  {{ item.isi }}
                </p>
                <a href="#" class="button">
                  Find out more 
                  <span class="material-symbols-outlined">
                    arrow_right_alt
                  </span>
                </a>
              </div>
            </div>
          </main>

        </div>
      </div>
    </div>
    </div>
  </div>
</div>


<div class="container pb-2">
    <div class="row gold-background">
      <div class="col text-center">
        <h2 class="d-inline-block me-1 ms-1 text-white">LOKASI</h2>
      </div>
    </div>
  </div>

<div class="container">
  <div class="row">

    <div class="col justify-content-center align-items-center lokasiKiri">
      <div class="cardsExcKiri">
        <div class="image-container">
          <img  :src='data["fotoGallery"][4]["url"]' class="card-img" alt="Photo">
        </div>
      </div>
    </div>

    <div class="col">

      <div class="row mb-4">
        <figure class="image-block">
          <h1>Resepsi</h1>
          <img :src='data["fotoGallery"][4]["url"]' alt="" />
          <h2>
              More Info
          </h2>
          <figcaption>
            <h3>
              More Info
            </h3>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
            <button>
              More Info
            </button>
          </figcaption>
        </figure>
      </div>

      <div class="row">
        <figure class="image-block">
          <h1>Akad Nikah</h1>
          <img :src='data["fotoGallery"][4]["url"]' alt="" />
          <h2>
              More Info
          </h2>
          <figcaption>
            <h3>
              More Info
            </h3>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
            <button>
              More Info
            </button>
          </figcaption>
        </figure>
      </div>

    </div>

    <div class="col justify-content-center align-items-center lokasiKanan">
      <div class="cardsExcKanan">
        <div class="image-container">
          <img  :src='data["fotoGallery"][4]["url"]' class="card-img" alt="Photo">
        </div>
      </div>
    </div>
  </div>
</div>



<div id="weddingGift">
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

    <div class="container d-flex align-items-center justify-content-center">
      <div class="col-md-12 col-lg-10">
        <div class="card text-dark mb-2" v-for="(item, i) in dataKomen" :key="i" style="background-color: transparent; border: 0;">
          <div class="card-body cardBG" style="align-items: center;">
            <div>
              <div>
                <h6 class="fw-bold d-flex justify-content-start align-items-start ms-3">{{ item.nama }}</h6>
                <div class="d-flex align-items-start justify-content-start">
                  <p>
                    <span class="badge bg-success ms-3" v-if="item.status === true">Datang</span>
                    <span class="badge bg-danger ms-3" v-else>Tidak Datang</span>
                  </p>
                </div>
                <p style="text-align: start;" class="ms-3">
                  {{item.isi}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </section>
</div>
</template>
