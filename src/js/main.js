import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const galaxy = document.querySelector(".part-1-galaxy");
const blackHole = document.querySelector("#part-1-blackHole");

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
  const img = blackHole.querySelector(".part-1-img");

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

const part2Timline = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-2-landscape",
    start: "top top",
    end: "+=1100vh",
    scrub: true,
    pin: ".container-part-2",
    pinSpacing: true,
    markers: true,
  },
});

part2Timline.to("#cloud-1", { opacity: 1 });
part2Timline.to("#cloud-2", { opacity: 1 });
part2Timline.to("#cloud-3", { opacity: 1 });

gsap.to(".slider-track", {
  scrollTrigger: {
    trigger: ".horizontal-mask",
    start: "top top",
    end: "+300%",
    pin: true,
    scrub: true,
    markers: true, //false pour retiré le text qui intique end scrolling
  },
  x: "-75%",
  ease: "sine.inOut",
});
