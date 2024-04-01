<script>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

export default {
  setup() {
    const button = ref(null);
    const envelope = ref(null);
    const flipped = ref(false);

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
    }

    function toggleFlip() {
      if (!envelope.value.classList.contains("is-open")) {
        return;
      }

      const ry = !flipped.value ? 180 : 0;
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

    onMounted(() => {
      button.value.addEventListener("click", pullOut);
      button.value.addEventListener("click", toggleFlip);
    });

    return {
      button,
      envelope
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
          <h1><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/39132/poke-logo.svg"/><span class="extrude">Invitation Card</span></h1>
        </div>
        <div class="face back"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/39132/poke-peeps.png"/></div>
      </div>
    </div>
  </div>
  <div class="flap"></div>
  <button ref="button">You're Invited!</button>
</div>
</template>
