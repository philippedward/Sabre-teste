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

const earthTimline = gsap.timeline({
  scrollTrigger: {
    trigger: ".earth-space-groupe",
    start: "bottom bottom",
    scrub: true,
    pin: true,
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
    markers: true,
  },
  x: "-205%",
  ease: "sine.inOut",
});
