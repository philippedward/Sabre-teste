import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const galaxy = document.querySelector(".space-galaxy");
const spaceContainer = document.querySelector(".container.space");
const blackHole = document.querySelector("#space-blackHole");
const horizontalScroll = document.querySelector(".slider-track");

// document.body.style.overflow = "hidden";

// blackHole.addEventListener("click", () => {
//   const img = blackHole.querySelector("img");

//   // Réduire le zoom de l'image pendant l'agrandissement du cercle
//   gsap.to(img, {
//     scale: 1, // Revient à la taille normale
//     duration: 0.3,
//     x: 20,
//     y: 10,
//     ease: "power2.out",
//   });

//   gsap.to(blackHole, {
//     scale: 45,
//     duration: 0.8,
//     ease: "power2.out",
//     onComplete: () => {
//       document.body.style.overflow = "auto";
//     },
//   });
// });

let isExpanded = false; // Variable pour savoir si le cercle est agrandi

blackHole.addEventListener("click", () => {
  const img = blackHole.querySelector("img");

  if (!isExpanded) {
    // Animation d'agrandissement
    gsap.to(img, {
      scale: 1,
      duration: 0.3,
      x: 20,
      y: 10,
      ease: "power2.out",
    });

    gsap.to(blackHole, {
      scale: 45,
      duration: 0.8,
      ease: "power2.out",
      onComplete: () => {
        document.body.style.overflow = "auto";
        isExpanded = true; // Le cercle est maintenant agrandi
      },
    });
  } else {
    // Animation inverse (rétrécissement)
    gsap.to(img, {
      scale: 8,
      duration: 0.3,
      x: 0,
      y: 0,
      ease: "power2.in",
    });

    gsap.to(blackHole, {
      scale: 1,
      duration: 0.8,
      ease: "power2.in",
      onComplete: () => {
        document.body.style.overflow = "hidden"; // Optionnel
        isExpanded = false; // Le cercle est maintenant petit
      },
    });
  }
});

const earthTimline = gsap.timeline({
  scrollTrigger: {
    trigger: ".earth-space-groupe", // ← Trigger sur le container
    start: "top top",
    end: "+=1100vh",
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
    end: "+500%",
    pin: true,
    scrub: true,
    markers: true, //false pour retiré le text qui intique end scrolling
  },
  x: "-75.2%",
  ease: "sine.inOut",
});
