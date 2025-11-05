import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const galaxy = document.querySelector(".space-galaxy");
const spaceContainer = document.querySelector(".container.space");
const blackHole = document.querySelector("#space-blackHole");
const horizontalScroll = document.querySelector(".slider-track");

// document.body.style.overflow = "hidden";

blackHole.addEventListener("click", () => {
  gsap.to(blackHole, {
    scale: 30,
    duration: 0.8,
    ease: "power2.out",
    onComplete: () => {
      document.body.style.overflow = "auto";
    },
  });
});

// const earthTimline = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".earth-space-groupe",
//     start: "bottom bottom",
//     scrub: true,
//     pin: true,
//     markers: true,
//   },
// });

// const earthTimline = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".earth-space-groupe",
//     start: "top top",
//     end: "bottom bottom", // Change ceci - il s'arrête quand le bas du trigger atteint le bas du viewport
//     scrub: true,
//     pin: true,
//     markers: true,
//     pinSpacing: true, // Garde l'espace → pas de superposition / fasle Pas d'espace → superposition
//   },
// });

const earthTimline = gsap.timeline({
  scrollTrigger: {
    trigger: ".container.earth", // ← Trigger sur le container
    start: "top top",
    end: "+=1000vh",
    scrub: true,
    pin: ".container.earth", // ← Pin tout le container, pas juste le groupe
    pinSpacing: true,
    markers: true,
  },
});

earthTimline.to(".earth-cloud1", { opacity: 1 });
earthTimline.to(".earth-cloud2", { opacity: 1 });
earthTimline.to(".earth-cloud3", { opacity: 1 });

gsap.to(".slider-track", {
  scrollTrigger: {
    trigger: ".horizontal-mask",
    start: "top top",
    end: "+800%",
    pin: true,
    scrub: true,
    markers: true, //false pour retiré le text qui intique end scrolling
  },
  x: "-75.2%",
  ease: "sine.inOut",
});
