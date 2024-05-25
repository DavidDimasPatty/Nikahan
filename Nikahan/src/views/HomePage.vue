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
      dataKomen,
      id
    };
  },
};
</script>
<style>

@font-face {
    font-family: "font1";
    src: url("src/assets/THEME 1REV/FONT THEME 1/SCRIPALT.ttf");
}

@font-face 
{
    font-family: "font2";
    src: url("src/assets/THEME 1REV/FONT THEME 1/SCRIPTIN.ttf");
}

@font-face 
{
    font-family: "font3";
    src: url("src/assets/THEME 1REV/FONT THEME 1/Vogue.ttf");
}

/* ///////////////////////////DIV 1 (UTAMA)////////////////////// */
#judulAtas{
  font-family: "font3";
  color:  goldenrod;
  text-shadow: 0 0 4px;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
               1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
}

#namaPasangan{
  font-family: "font2";
  color:  goldenrod;
  text-shadow: 0 0 2px;
  font-size: xx-large;
}
#tanggalNikah{
  font-family: "font3";
  color:  goldenrod;
  text-shadow: 0 0 1px;
  font-size: 30px;
}
.fontWaktu{
  font-family: "font3";
  color:  gold !important;
  text-shadow: 0 0 1px;
  font-size: large;
}

.fontDescWaktu{
  font-family: "font3";
  color:  gold !important;
  text-shadow: 0 0 1px;
  font-size: large;
}
/* ////////////////////// DIV 2 (QUOTES) //////////////////////////// */

#blockQuotes{
  font-family: century;
  color:  gold !important;
  text-shadow: 0 0 1px;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
               1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
  font-size: 25px;
}



/* ////////////////////DIV 3 (PASANGAN)//////////////////////// */

#ucapanDoa{
  font-family: "font3";
  color:  gold !important;
  text-shadow: 0 0 1px;
  font-size: 25px;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
               1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
}

#orangTua1{
  font-family: "font3";
  color:  gold !important;
  text-shadow: 0 0 1px;
  font-size: 25px;
  text-shadow: 2px 0 #000, -2px 0  #000, 0 2px  #000, 0 -2px  #000,
               1px 1px  #000, -1px -1px  #000, 1px -1px  #000, -1px 1px  #000;
}

#orangTua2{
  font-family: century;
  color:  whitesmoke !important;
  text-shadow: 0 0 1px;
  text-shadow: 2px 0 #000, -2px 0  #000, 0 2px  #000, 0 -2px  #000,
               1px 1px  #000, -1px -1px  #000, 1px -1px  #000, -1px 1px  #000;
  font-size: 25px;
}

.framePasangan{
  position: absolute;
  width: 250px;
  top:200px;
}

#andFont{
  font-family: "font2";
  color:  gold !important;
  text-shadow: 0 0 1px;
  font-size: 50px;
}

/* ///////////////////////////////////////////////////// */
#commentBG{
  background: url('src/assets/THEME 1REV/7.WEDDING GIFT & UCAPAN/TENGAH.png') center no-repeat;
  background-size:100% 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

#weddingGift{
  background: url('src/assets/THEME 1REV/4.LOVE STORY/TENGAH.png') center no-repeat;
  background-size:cover;
  height: 100vh;
  position: relative;
}

.weddCard{
  position: absolute;
  top: 40%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

#lovestory{
  background: url('src/assets/THEME 1REV/4.LOVE STORY/TENGAH.png') center no-repeat;
  background-size:cover;
}

#pasangan{
  background: url('/src/assets/THEME 1REV/3.PASANGANNYA/KIRI.png') left no-repeat,url('/src/assets/THEME 1REV/3.PASANGANNYA/KANAN.png') right no-repeat;
  background-size:contain,contain;
  height: 100%;
  position: relative;
}

#quotes{
  background: url('/src/assets/THEME 1/LAYER 2/02.LAYER RIGHT 2.png') right repeat,url('/src/assets/THEME 1/LAYER 2/01.LAYER LEFT 2.png')  left no-repeat, url('/src/assets/THEME 1/LAYER 2/03.LAYER MID 2.png') center repeat,url("/src/assets/THEME 1/LAYER 2/03.LAYER MID 1.png")  center no-repeat;
  background-size:cover,cover,cover,cover;
  height: 100vh;
  position: relative;
}

/* #bgAll{
  background: url("/src/assets/THEME 1REV/1.AWAL/TENGAH.png") center no-repeat,url("/src/assets/THEME 1REV/1.AWAL/KIRI.png") left top no-repeat, url('/src/assets/THEME 1REV/1.AWAL/KANAN.png') right top no-repeat;
  background-size: cover,contain,contain;
  height: 100vh;
} */

#bgAll{
  background: url("/src/assets/THEME 1/LAYER 1/03.LAYER MID 1.png") center no-repeat,url("/src/assets/THEME 1REV/1.AWAL/KIRI.png") left top no-repeat, url('/src/assets/THEME 1REV/1.AWAL/KANAN.png') right top no-repeat;
  background-size: cover,contain,contain;
  height: 100vh;
} 

#lokasiBG{
  background: url("/src/assets/THEME 1REV/5.LOKASI/KIRI.png") left no-repeat,url("/src/assets/THEME 1REV/5.LOKASI/KANAN.png") right no-repeat;
  background-size: contain,contain;
  height: 100%;
}


#imgCoverBG{
  width: 350px;
}

#circleFig
{  
  top: 25vh;
  position: absolute;
  width: 350px;
  border-radius: 50%;
}

#circleFig::after 
{
   content: "";
   position: absolute;
   top: -120px;
   left: -372px;
   right: 0px;
   bottom: 0px;
   pointer-events: none; /* Supaya tidak mengganggu interaksi pengguna dengan konten di dalam cardImg */
   background: url('/src/assets/THEME 1/LAYER 1/03.LAYER MID 2.png') no-repeat;
   background-size: 1100px; /* Sesuaikan jika diperlukan */
   z-index: 1; /* Supaya berada di atas gambar tetapi di bawah konten lainnya jika ada */
}



#contentUtama{
  margin: 0;
  position: absolute;
  top:90vh;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width:100%;
}

#quotesPasangan{
  top: 35%;
  width: 30%;
  position:absolute;
}

/* Warna */
.gold-background {
  background: linear-gradient(45deg, rgba(255, 215, 0, 0.8), rgba(255, 255, 255, 0.5));
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
  border-radius: 100vw;
}

.cardBG{
  background: url('/src/assets/THEME 1REV/3.PASANGANNYA/KANAN.png') right no-repeat,url('/src/assets/THEME 1/LAYER 2/03.LAYER MID 2.png') center repeat;
  background-size:contain,20%;
  height: 150px;
}


.cardImg 
{
            position: relative;
            height: 400px;
            width: 250px;
            border-radius: 150px 150px 30px 30px / 100px 100px 30px 30px;
            overflow: hidden;
}

.cardImg2
{
            position: relative;
            height: 400px;
            width: 250px;
            border-radius: 150px 150px 30px 30px / 100px 100px 30px 30px;
            overflow: hidden;
}

.cardImg::before 
{
   content: "";
   position: absolute;
   top: 140px;
   left: 0px;
   right: 0px;
   bottom: 0;
   pointer-events: none; /* Supaya tidak mengganggu interaksi pengguna dengan konten di dalam cardImg */
   background: url('src/assets/THEME 1/LAYER 3/03.LAYER MID 1.png') no-repeat;
   background-size: 230px; /* Sesuaikan jika diperlukan */
   z-index: 1; /* Supaya berada di atas gambar tetapi di bawah konten lainnya jika ada */
}

.cardImg2::before 
{
   content: "";
   position: absolute;
   top: 145px;
   left: 20px;
   right: 0px;
   bottom: 0;
   pointer-events: none; /* Supaya tidak mengganggu interaksi pengguna dengan konten di dalam cardImg */
   background: url('src/assets/THEME 1/LAYER 3/03.LAYER MID 3.png') no-repeat;
   background-size: 230px; /* Sesuaikan jika diperlukan */
   z-index: 1; /* Supaya berada di atas gambar tetapi di bawah konten lainnya jika ada */
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
  border: 5px solid goldenrod;
	width: 100%;
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
		top: 8%;
		left: 10%;
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
	  min-width: 50%;
    line-height: 3;
    margin: 0;
		padding: 0;
		opacity: 1;
		transform: scale(1);
		transition: 0.25s ease;
		z-index: 999;
    border-radius: inherit;
	}
	img {
    width: 100%;
		transition: 0.25s;
	}
	figcaption {
		position: absolute;
		bottom: -100%;
    width: 100%;
		margin: 0;
    background-color: rgba(0, 0, 0, 0.85);
		box-shadow: 0 0 20px black;
    border-radius: inherit;
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
  width:260px;
  height: 300px;
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
    border: 5px solid goldenrod;
    border-radius: inherit;
  }

  h2 {
    position: absolute;
    inset: auto auto 30px 30px;
    margin: 0;
    transition: inset .3s .3s ease-out;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: normal;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.85);
    width:100%;
    border-radius: 20px 20px 0px 0px/ 20px 20px 0px 0px;
    bottom: 0px;
  }
  
  p{
    position: absolute;
    opacity: 0;
    width: 100%;
    inset: 79px auto auto 30px;
    transition: opacity .3s ease-out;
    background-color: rgba(0, 0, 0, 0.9);
    height: 100%;
    text-align: start;
  }
 
  &:hover h2 {
    inset: auto auto 220px 30px;
    transition: inset .3s ease-out;
  }
  
  &:hover p{
    opacity: 1;
    transition: opacity .5s .1s ease-in;
  }

  
  &:hover img {
    transition: opacity .3s ease-in;
    opacity: 1;
  }

}



/* Media queries untuk layar ponsel */
@media screen and (max-width:1200px) {
  #commentBG {
    background: url('src/assets/THEME 1REV/7.WEDDING GIFT & UCAPAN/TENGAH.png') center no-repeat;
    background-size:cover;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
/* 
  #weddingGift {
    background: url('/src/assets/THEME 1/LAYER 7/01.LAYER LEFT 1.png') left top no-repeat,
                url('/src/assets/THEME 1/LAYER 7/02.LAYER RIGHT 1.png') right top no-repeat;
    background-size: 100% 100%, 100% 100%;
  } */

  /* #lovestory {
    background: url("/src/assets/THEME 1/LAYER 4/02.LAYER RIGHT 1.png")  right top no-repeat;
    background-size: cover;
  } */
  
#weddingGift{
  background: url('src/assets/THEME 1REV/4.LOVE STORY/TENGAH.png') center no-repeat;
  background-size:cover;
  height: 50vh;
  position: relative;
}
  #lokasiBG{
 background: url('/src/assets/THEME 1/LAYER 3/01.LAYER LEFT 2.png') left no-repeat;
    background-size: cover;
}
  #pasangan {
    background: url('/src/assets/THEME 1/LAYER 3/01.LAYER LEFT 2.png') left no-repeat;
    background-size: cover;
  }

  #quotes {
    background:  url('/src/assets/THEME 1/LAYER 2/03.LAYER MID 2.png') center repeat,url("/src/assets/THEME 1/LAYER 2/03.LAYER MID 1.png")  center no-repeat;
    background-size:cover,cover;
    height: 120vh;
    position: relative;
  }

  #quotesPasangan{
  top: 32%;
  width: 100%;
  position:absolute;
}

  #bgAll{
  background: url("/src/assets/THEME 1/LAYER 1/03.LAYER MID 1.png") center no-repeat;
  background-size: cover,contain,contain;
  height: 100vh;
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

  #imgCoverBG{
    width: 41vh;
  }
 
}


.cardBank{
  width: 320px;
  height: 190px;
  -webkit-perspective: 600px;
  -moz-perspective: 600px;
  perspective:600px;
  
}

.card__part{
    box-shadow: 1px 1px #aaa3a3;
    top: 0;
    position: absolute;
    z-index: 1000;
    left: 0;
    display: inline-block;
    width: 320px;
    height: 190px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 8px;
    background-color: gold;
    -webkit-transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -moz-transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -ms-transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -o-transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
}

.card__front{
  padding: 18px;
  -webkit-transform: rotateY(0);
  -moz-transform: rotateY(0);
}

.card__back {
  padding: 18px 0;
-webkit-transform: rotateY(-180deg);
-moz-transform: rotateY(-180deg);
}

.card__black-line {
    margin-top: 5px;
    height: 38px;
    background-color: #303030;
}

.card__logo {
    height: 16px;
}

.card__front-logo{
      position: absolute;
    top: 18px;
    right: 18px;
}
.card__square {
    border-radius: 5px;
    height: 30px;
}

.card_numer {
    display: block;
    width: 100%;
    word-spacing: 4px;
    font-size: 20px;
    letter-spacing: 2px;
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 20px;
}

.card__space-75 {
    width: 75%;
    float: left;
}

.card__space-25 {
    width: 25%;
    float: left;
}

.card__label {
    font-size: 10px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.8);
    letter-spacing: 1px;
}

.card__info {
    margin-bottom: 0;
    margin-top: 5px;
    font-size: 16px;
    line-height: 18px;
    color: #fff;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.card__back-content {
    padding: 15px 15px 0;
}
.card__secret--last {
    color: #303030;
    text-align: right;
    margin: 0;
    font-size: 14px;
}

.card__secret {
    padding: 5px 12px;
    background-color: #fff;
    position:relative;
}

.card__secret:before{
  content:'';
  position: absolute;
  top: -3px;
  left: -3px;
  height: calc(100% + 6px);
  width: calc(100% - 42px);
  border-radius: 4px;
  background: repeating-linear-gradient(45deg, #ededed, #ededed 5px, #f9f9f9 5px, #f9f9f9 10px);
}

.card__back-logo {
    position: absolute;
    bottom: 15px;
    right: 15px;
}

.card__back-square {
    position: absolute;
    bottom: 15px;
    left: 15px;
}

.cardBank:hover .card__front {
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);

}

.cardBank:hover .card__back {
    -webkit-transform: rotateY(0deg);
    -moz-transform: rotateY(0deg);
}

#commentOne{
  border-radius: 10px;
  width: 75%;

}
#cardscroll{
  border-radius: 20px;
  background-color: whitesmoke;
  overflow-y: scroll; 
  height:400px;
}
#hari{
  background: rgb(125,149,185);
background: linear-gradient(38deg, rgba(125,149,185,1) 0%, rgba(202,213,231,1) 84%);
  border: none;
}
#jam{
  background: rgb(125,149,185);
background: linear-gradient(38deg, rgba(125,149,185,1) 0%, rgba(202,213,231,1) 84%);
  border: none;
}
#menit{
  background: rgb(125,149,185);
background: linear-gradient(38deg, rgba(125,149,185,1) 0%, rgba(202,213,231,1) 84%);
  border: none;
}
#detik{
  background: rgb(125,149,185);
background: linear-gradient(38deg, rgba(125,149,185,1) 0%, rgba(202,213,231,1) 84%);
  border: none;
}

#homeNav{
  font-family: Georgia, 'Times New Roman', Times, serif;
  color:  goldenrod !important;
  text-shadow: 0 0 0px;
  font-size: 20px;
}
#galNav{
  font-family: Georgia, 'Times New Roman', Times, serif;
  color:  goldenrod !important;
  text-shadow: 0 0 0px;
  font-size: 20px;
}
</style>
<template>

  <div id="bgAll">   

    <div class="mb-2">
        <div>
            <router-link :to="'/' + id" class="navi"  id="homeNav">Home</router-link> 
            <router-link :to="'/Galeri/' + id" class="navi"id="galNav" >Galeri</router-link> 
        </div>
    </div>   

    <h1 id="judulAtas"> YOU ARE INVITED TO THE WEDDING OF</h1>  
     

    <div class="d-flex justify-content-center mt-2" >
        <div  id="circleFig">
          <img
            :src='data["fotoGallery"][1]["url"]'
            style="width: 80%; height: 80%; object-fit: cover; border-radius: inherit; position: relative; z-index: 0; border: 4px solid goldenrod;"
            />
        </div>
      </div>

    <div id="contentUtama">
      <h1 id="namaPasangan">{{ data["dataNikahan"]["namaCowo"] }} & {{ data["dataNikahan"]["namaCewe"] }}</h1>
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
          <h5 id="ucapanDoa">
            Dengan Memohon Rahmat dan Ridho dari Allah SWT, Kami Bermasksud
            Menyelenggarakan Pernikahan
          </h5>
        </div>
      </div>
    
      <div class="d-flex justify-content-center mt-2">
        <div class="cardImg">
          <img
            :src='data["fotoGallery"][5]["url"]'
            style="width: 80%; height: 80%; object-fit: cover; border-radius: inherit; position: relative; z-index: 0; border: 4px solid goldenrod;"
            />
        </div>
      </div>


      <div class="mt-3">
        <small id="orangTua1">Putri yang tercinta dari:</small>
        <h6 id="orangTua2">{{data["dataNikahan"]["namaOrtuCewe1"]}} & {{data["dataNikahan"]["namaOrtuCewe2"]}}</h6>
      </div>

      <div class="container">
        <h1 id="andFont">{{ "&" }}</h1>
      </div>

      <div class="">
        <small id="orangTua1">Putra yang tercinta dari:</small>
        <h6 id="orangTua2">{{data["dataNikahan"]["namaOrtuCowo1"]}} & {{data["dataNikahan"]["namaOrtuCowo2"]}}</h6>
      </div>

      <div class="d-flex justify-content-center mt-2">
        <div class="cardImg2">
          <img
            :src='data["fotoGallery"][4]["url"]'
            style="width: 80%; height: 80%; object-fit: cover;border-radius: inherit; position: relative; z-index: 0; border: 4px solid goldenrod;"
            />
        </div>
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
            <img  :src='data["fotoGallery"][4]["url"]' class="card-img" alt="Photo">
          </div>
        </div>
      </div>

      <div class="col exTengah">

        <div class="col mb-4">
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

        <div class="col">
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
</div>


<div class="container mt-5 mb-5">
    <div class="row gold-background">
      <div class="col text-center">
        <h2 class="d-inline-block me-1 ms-1 text-white">WEDDING GIFT</h2>
      </div>
    </div>
</div>

<div id="weddingGift">
  <div class="d-flex justify-content-center align-items-center weddCard">
      <div class="cardBank" >
        <div class="card__front card__part">
          <img class="card__front-square card__square" >
          <p class="card_numer">**** **** **** 6258</p>
          <div class="card__space-75">
            <span class="card__label">Card holder</span>
            <p class="card__info">John Doe</p>
          </div>
          <div class="card__space-25">
            <span class="card__label">Expires</span>
                  <p class="card__info">10/25</p>
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


<div class="container pb-3 mt-5 mb-5">
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
</template>
