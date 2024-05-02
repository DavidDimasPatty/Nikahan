<script>
import '../assets/home.css'; 
export default {
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  },
  mounted() {
    setInterval(this.updateTimer, 1000);
  },
  methods: {
    updateTimer() {
      let future = Date.parse("June 11, 2020 11:30:00");
      let now = new Date();
      let diff = future - now;

      this.days = Math.floor(diff / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(diff / (1000 * 60 * 60)) - this.days * 24;
      this.minutes = Math.floor(diff / (1000 * 60)) - this.hours * 60 - this.days * 24 * 60;
      this.seconds = Math.floor(diff / 1000) - this.minutes * 60 - this.hours * 60 * 60 - this.days * 24 * 60 * 60;
    }
  }
};
</script>

<style>
.gallery {
  --g: 4px;   /* the gap */
  --s: 400px; /* the size */
  display: grid;
  border-radius: 50%;
}
.gallery > img {
  grid-area: 1/1;
  width: 400px;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
  transform: translate(var(--_x,0),var(--_y,0));
  cursor: pointer;
  z-index: 0;
  transition: .3s, z-index 0s .3s;
}
.gallery img:hover {
  --_i: 1;
  z-index: 1;
  transition: transform .2s, clip-path .3s .2s, z-index 0s;
}
.gallery:hover img {
  transform: translate(0,0);
}
.gallery > img:nth-child(1) {
  clip-path: polygon(50% 50%,calc(50%*var(--_i,0)) calc(120%*var(--_i,0)),0 calc(100%*var(--_i,0)),0 0,100% 0,100% calc(100%*var(--_i,0)),calc(100% - 50%*var(--_i,0)) calc(120%*var(--_i,0)));
  --_y: calc(-1*var(--g))
}
.gallery > img:nth-child(2) {
  clip-path: polygon(50% 50%,calc(100% - 120%*var(--_i,0)) calc(50%*var(--_i,0)),calc(100% - 100%*var(--_i,0)) 0,100% 0,100% 100%,calc(100% - 100%*var(--_i,0)) 100%,calc(100% - 120%*var(--_i,0)) calc(100% - 50%*var(--_i,0)));
  --_x: var(--g)
}
.gallery > img:nth-child(3) {
  clip-path: polygon(50% 50%,calc(100% - 50%*var(--_i,0)) calc(100% - 120%*var(--_i,0)),100% calc(100% - 120%*var(--_i,0)),100% 100%,0 100%,0 calc(100% - 100%*var(--_i,0)),calc(50%*var(--_i,0)) calc(100% - 120%*var(--_i,0)));
  --_y: var(--g)
}
.gallery > img:nth-child(4) {
  clip-path: polygon(50% 50%,calc(120%*var(--_i,0)) calc(50%*var(--_i,0)),calc(100%*var(--_i,0)) 0,0 0,0 100%,calc(100%*var(--_i,0)) 100%,calc(120%*var(--_i,0)) calc(100% - 50%*var(--_i,0)));
  --_x: calc(-1*var(--g))
}

.timer {
  font-size: 2em;
  font-weight: 100;
  color: rgb(255, 255, 255);
  text-shadow: 0 0 20px #000000;
}

.timer div {
  display: inline-block;
  min-width: 90px;
  font-size: 0.9em;
}

.timer div span {
  color: #000000;
  display: block;
  font-size: 0.35em;
  font-weight: 400;
}

</style>

<template>

  <header class="mt-3">
     <h1>You are Invited to The Weeding of</h1>
  </header>

  <center>
    <div class="gallery align-items-center justify-content-center mb-4 mt-3">
      <img src="../assets/fotonikah.jpg" alt="a hot air balloon">
      <img src="../assets/nikah1.jpg" alt="a sky photo of an old city">
      <img src="../assets/nikah2.jpg" alt="a small boat">
      <img src="../assets/nikah3.jpg" alt="a forest">
    </div>

      <h1>Farhan & Risma</h1>
      <small>Minggu, 23 Maret 2025</small>

      <div class="timer container mt-4">
      <div>{{ days }}<span>days</span></div>
      <div>{{ hours }}<span>hours</span></div>
      <div>{{ minutes }}<span>minutes</span></div>
      <div>{{ seconds }}<span>seconds</span></div>
    </div>
  </center>

  <div class="container mb-2">
      <hr class="mt-4">
        <center>
            <blockquote class="blockquote w-75">
                <p class="mb-3"> "Mencintai dan dicintai adalah puncak kebahagiaan dan kekayaan. Semoga kalian tidak pernah melupakan harta berharga ini sepanjang hari bersama."</p>
                <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Bang Toyib</cite></footer>
            </blockquote>
        </center>
      <hr class="my-4">
  </div>


  <div class="container mb-4">
    <div class="row">
      <h5>Dengan Memohon Rahmat dan Ridho dari Allah SWT, Kami Bermasksud Menyelenggarakan Pernikahan</h5>
    </div>
  </div>

  <div class="row justify-content-center mt-2">
  <div class="col-6 col-md-3">
    <div class="card bg-dark text-white" style="height: 300px;">
      <img src="../assets/cewe.jpg" class="card-img img-fluid" alt="..." style="height: 100%; width: 100%; object-fit: cover;">
      <div class="card-img-overlay d-flex flex-column justify-content-end align-items-center text-wrap">
        <h5 class="card-title">Risma Mahendra</h5>
      </div>
    </div>
  </div>
</div>

    <div class="row mt-3">
      <small>Putri yang tercinta dari:</small>
      <h6>Bapak Ujang & Ibu Vero</h6>
    </div>

  <div class="container">
    <h1>{{ "&" }}</h1>
  </div>

  
  <div class="row">
      <small>Putra yang tercinta dari:</small>
      <h6>Bapak David & Ibu Vero</h6>
  </div>

  <div class="row justify-content-center mt-3">
  <div class="col-6 col-md-3">
    <div class="card bg-dark text-white" style="height: 300px;">
      <img src="../assets/cowo.jpg" class="card-img img-fluid" alt="..." style="height: 100%; width: 100%; object-fit: cover;">
      <div class="card-img-overlay d-flex flex-column justify-content-end align-items-center text-wrap">
        <h5 class="card-title">Farhan Mahendra</h5>
      </div>
    </div>
  </div>
</div>


  <div class="container mt-5">
    <div class="row">
      <div class="col text-center">
        <hr class="w-25 d-inline-block mt-0 mb-2">
        <h2  class="d-inline-block me-1 ms-1 ">Love Story</h2>
        <hr class="w-25 d-inline-block mt-0 mb-2">
      </div>
    </div>
  </div>

  <div class="container py-5">
    <div class="main-timeline-2">
      <div class="timeline-2 left-2">
        <div class="card">
          <img src="../assets/gambar 3.jpg" class="card-img-top"
            alt="Responsive image">
          <div class="card-body p-4">
            <h4 class="fw-bold mb-4">Perkenalan</h4>
            <p class="text-muted mb-4"><i class="far fa-clock" aria-hidden="true"></i> 2017</p>
            <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
      </div>
      <div class="timeline-2 right-2">
        <div class="card">
          <img src="../assets/gambar 4.jpg" class="card-img-top"
            alt="Responsive image">
          <div class="card-body p-4">
            <h4 class="fw-bold mb-4">Masa Pacaran</h4>
            <p class="text-muted mb-4"><i class="far fa-clock" aria-hidden="true"></i> 2016</p>
            <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
      </div>
      <div class="timeline-2 left-2">
        <div class="card">
          <img src="../assets/gambar 2.jpg" class="card-img-top"
            alt="Responsive image">
          <div class="card-body p-4">
            <h4 class="fw-bold mb-4">Lamaran</h4>
            <p class="text-muted mb-4"><i class="far fa-clock" aria-hidden="true"></i> 2015</p>
            <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
      </div>
      <div class="timeline-2 right-2">
        <div class="card">
          <img src="../assets/gambar 1.png" class="card-img-top"
            alt="Responsive image">
          <div class="card-body p-4">
            <h4 class="fw-bold mb-4"> Pernikahan</h4>
            <p class="text-muted mb-4"><i class="far fa-clock" aria-hidden="true"></i> 2014</p>
            <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container mt-5">
    <div class="row">
      <div class="col text-center">
        <hr class="w-25 d-inline-block mt-0 mb-2">
        <h2  class="d-inline-block me-1 ms-1 ">Lokasi</h2>
        <hr class="w-25 d-inline-block mt-0 mb-2">
      </div>
    </div>
  </div>

<div class="container mt-3">
  <div class="row">
    <div class="col">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15845.029593698011!2d107.5150141!3d-6.85972325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1711286546661!5m2!1sid!2sid" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="col  d-flex flex-column justify-content-center align-items-center">
      <h5>Gedung Perkumpulan 3A</h5>
      <h6>Jl. Cilame No.32, RT.05/ RW.04, Kecamatan Cilame, Kelurahan Ngamprah, Kabupaten Bandung Barat</h6>
    </div>
  </div>
</div>


<div class="container mt-5">
    <div class="row">
      <div class="col text-center">
        <hr class="w-25 d-inline-block mt-0 mb-2">
        <h2  class="d-inline-block me-1 ms-1 ">Weeding Gift</h2>
        <hr class="w-25 d-inline-block mt-0 mb-2">
      </div>
    </div>
  </div>

  <div class="container mt-3">
  <div class="row flex-column justify-content-center align-items-center">
    <div class="col-md-3">
     <img src="../assets/QR1.jpg" width="200" />
    </div>
    <div class=" mt-3 col-md-2 d-flex flex-column justify-content-center align-items-center">
      <h5>Atas Nama :</h5>
      <h6>Farhan Mahendra</h6>
    </div>
  </div>
</div>

  <div class="container mt-5">
    <div class="row">
      <div class="col text-center">
        <hr class="w-25 d-inline-block mt-0 mb-2">
        <h2  class="d-inline-block me-1 ms-1 ">Ucapan</h2>
        <hr class="w-25 d-inline-block mt-0 mb-2">
      </div>
    </div>
  </div>

  <section>
  <div class="container my-1 py-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-12 col-lg-10">
        <div class="card text-dark">
          <div class="card-body p-4">
            <div class="d-flex flex-start">
              <img class="rounded-circle shadow-1-strong me-3"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(23).webp" alt="avatar" width="60"
                height="60" />
              <div>
                <h6 class="fw-bold mb-1">Maggie Marsh</h6>
                <div class="d-flex align-items-center justify-content-center mb-3 is-centered">
                  <p class="mb-0">
                    March 07, 2021
                    <span class="badge bg-success">Datang</span>
                  </p>
                </div>
                <p class="mb-0">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type and
                  scrambled it.
                </p>
              </div>
            </div>
          </div>

          <hr class="my-0" />

          <div class="card-body p-4">
            <div class="d-flex flex-start">
              <img class="rounded-circle shadow-1-strong me-3"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp" alt="avatar" width="60"
                height="60" />
              <div>
                <h6 class="fw-bold mb-1">Lara Stewart</h6>
                <div class="d-flex align-items-center justify-content-center mb-3 is-centered">
                  <p class="mb-0">
                    March 07, 2021
                    <span class="badge bg-success">Datang</span>
                  </p>
                </div>
                <p class="mb-0">
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It
                  has roots in a piece of classical Latin literature from 45 BC, making it
                  over 2000 years old. Richard McClintock, a Latin professor at
                  Hampden-Sydney College in Virginia, looked up one of the more obscure
                  Latin words, consectetur, from a Lorem Ipsum passage, and going through
                  the cites.
                </p>
              </div>
            </div>
          </div>

          <hr class="my-0" style="height: 1px;" />

          <div class="card-body p-4">
            <div class="d-flex flex-start">
              <img class="rounded-circle shadow-1-strong me-3"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(33).webp" alt="avatar" width="60"
                height="60" />
              <div>
                <h6 class="fw-bold mb-1">Alexa Bennett</h6>
                <div class="d-flex align-items-center justify-content-center mb-3 is-centered">
                  <p class="mb-0">
                    March 07, 2021
                    <span class="badge bg-danger">Tidak Datang</span>
                  </p>
                </div>
                <p class="mb-0">
                  There are many variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected humour, or
                  randomised words which don't look even slightly believable. If you are
                  going to use a passage of Lorem Ipsum, you need to be sure.
                </p>
              </div>
            </div>
          </div>

          <hr class="my-0" />

          <div class="card-body p-4">
            <div class="d-flex flex-start">
              <img class="rounded-circle shadow-1-strong me-3"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(24).webp" alt="avatar" width="60"
                height="60" />
              <div>
                <h6 class="fw-bold mb-1">Betty Walker</h6>
                <div class="d-flex align-items-center justify-content-center mb-3 is-centered">
                  <p class="mb-0">
                    March 07, 2021
                    <span class="badge bg-danger">Tidak Datang</span>
                  </p>
                </div>
                <p class="mb-0">
                  It uses a dictionary of over 200 Latin words, combined with a handful of
                  model sentence structures, to generate Lorem Ipsum which looks
                  reasonable. The generated Lorem Ipsum is therefore always free from
                  repetition, injected humour, or non-characteristic words etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="card-footer py-2 border-0" >
            <div class="d-flex flex-start w-100">
                <img class="rounded-circle shadow-1-strong me-3"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp" alt="avatar" width="40"
                  height="40" />
                <div class="form-outline w-100">
                  <textarea class="form-control" id="textAreaExample" rows="4"
                    style="background: #fff;"></textarea>
                </div>
            </div>
            <div class="float-end mt-2 pt-1">
              <div class="row">
                  <div class="col">
                      <button type="button" class="btn btn-primary btn-sm">Post</button>
                  </div>
              </div>
            </div>
   </div>
</section>


</template>

