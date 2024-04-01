<script>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

export default {
  setup() {
    const button = ref(null);
    const envelope = ref(null);
    const flipped = ref(false);
    const firstClick = ref(true);

    function pullOut() {
      gsap.to(".flap", {
        duration: 1,
        rotationX: 180,
        ease: "power1.inOut"
      }, "scaleBack");

      gsap.to(".invitation", {
        duration: 1,
        scale: 0.8,
        ease: "power4.inOut"
      }, "scaleBack");

      gsap.set(".flap", {
        zIndex: 0
      });

      gsap.to(".card", {
        duration: 1,
        y: "0%",
        scaleY: 1.2,
        ease: "circ.inOut"
      });

      gsap.set(".mask", {
        overflow: "visible",
        onComplete: function () {
          envelope.value.classList.toggle("is-open");
        }
      });

      gsap.to(".mask", {
        duration: 1.3,
        clipPath: "inset(0 0 0% 0)",
        ease: "circ.inOut"
      }, "moveDown");

      gsap.to(".card", {
        duration: 1.3,
        y: "100%",
        scaleY: 1,
        ease: "circ.inOut"
      }, "moveDown");

      gsap.to("button", {
        duration: 1,
        y: "180px",
        ease: "circ.inOut",
        onComplete: toggleText
      }, "moveDown+=0.15");
      firstClick.value = false; 
    }

    function toggleFlip() {
      console.log("masuk");
      console.log(firstClick.value);
      console.log(flipped.value);
      if (firstClick.value) {
        console.log("masuk2");
        return;
      }

      const ry = (!flipped.value) ? 180 : 0;
	    flipped.value = (!flipped.value) ? true : false;

      gsap.to(".card", {
        duration: 1,
        rotationY: ry,
        ease: "power4.inOut",
        onComplete: toggleText
      });
    }

    function toggleText() {
      const text = !flipped.value ? "Tell me more!" : "See you there!";
      button.value.classList.toggle("invert", !flipped.value);
      button.value.textContent = text;
    }

    const handleButtonClick = () => {
      if (firstClick.value) {
        pullOut();
      }
      else{
        toggleFlip();
      }
    }
    
    return {
      button,
      envelope,
      handleButtonClick
    };
  }
};
</script>

<template>
<div class="invitation">
  <div class="envelope" ref="envelope">
    <div class="mask">
      <div class="card">
        <div class="face front">
          Nikahan
        </div>
        <div class="face back">
         Nikahan Euy
        </div>
      </div>
    </div>
  </div>
  <div class="flap"></div>
  <button @click="handleButtonClick" ref="button">You're Invited!</button>
</div>
</template>
