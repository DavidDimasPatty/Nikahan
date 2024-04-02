<template>
  <div class="book">
    <div id="pages" class="pages">
      <div class="page" v-for="(page, index) in pages" :key="index" @click="flipPage(index)">
        <p v-if="index % 2 === 0">Open Me, <br>please!</p>
        <p v-else>Hello there!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: new Array(32) // Membuat array dengan 32 elemen untuk mewakili halaman
    };
  },
  mounted() {
    this.arrangePages();
  },
  methods: {
    arrangePages() {
      const pages = document.getElementsByClassName('page');
      for (let i = 0; i < pages.length; i++) {
        const page = pages[i];
        if (i % 2 === 0) {
          page.style.zIndex = pages.length - i;
        }
      }
    },
    flipPage(index) {
      const pages = document.getElementsByClassName('page');
      const currentPage = pages[index];
      const nextIndex = index + 1;

      if (nextIndex < pages.length) {
        const nextPage = pages[nextIndex];
        currentPage.classList.toggle('flipped');
        nextPage.classList.toggle('flipped');
      }
    }
  }
};
</script>