<style scoped>
#bgGallery{
  background:  url('/src/assets/THEME 1/LAYER 1/01.LAYER LEFT 1.png') left top repeat-y,url('/src/assets/THEME 1/LAYER 1/02.LAYER RIGHT 1.png') right bottom repeat-y,url("/src/assets/THEME 1/LAYER 1/01.LAYER LEFT 2.png") left repeat-y, url('/src/assets/THEME 1/LAYER 1/02.LAYER RIGHT 2.png') right repeat-y;
  background-size:contain, contain, contain;
  width: 100%;
  height: 100vh;
}
.wrap{
    width: 100%;
    height: 100%;
}
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

h1{
  font-family: "font2";
  color:  goldenrod;
  text-shadow: 0 0 4px;
  font-size: 60px;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
               1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
}
h2{
  font-family: "font2";
  font-size: 45px;
  color:  goldenrod;
  text-shadow: 0 0 4px;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
               1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
}
h3{
  font-family: "font1";
  color:  goldenrod;
  text-shadow: 0 0 4px;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
               1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
}

h5{
  font-family: "font3";
  color:  goldenrod;
  text-shadow: 0 0 4px;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
               1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
}

</style>
<template>

    <div id="bgGallery">
        <div class="d-flex justify-content-center align-items-center wrap">
            <div class="col">
                <h2 class="mb-4">Selamat Datang</h2>
                <h3 class="mb-4">di</h3>
                <h1 class="mb-4">KartuSera</h1>
                <h5>&ldquo;Makes your event unforgettable&rdquo;</h5>
            </div>
        </div>
    </div>

</template>
  