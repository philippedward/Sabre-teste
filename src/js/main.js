import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const circle = document.getElementById("space-circle");
const galaxie = document.querySelector(".space-rectangle-galaxie");
const blackHole = document.querySelector(".space-rectangle-black-hole");
const circleBlackHole = document.getElementById("space-circle-black-hole");
const spaceClicking = document.getElementById("space-clicking");
const cloud1 = document.querySelector(".space-rectangle-cloud1");
const cloud2 = document.querySelector(".space-rectangle-cloud2");
const cloud3 = document.querySelector(".space-rectangle-cloud3");

let scrollProgress = 0;

circle.addEventListener("click", function () {
  circle.style.transform = "scale(100)";

  setTimeout(() => {
    galaxie.classList.add("hide");
    circleBlackHole.style.opacity = "1";
  }, 800);
});

circleBlackHole.addEventListener("click", function () {
  blackHole.classList.add("dezoom");

  setTimeout(() => {
    spaceClicking.style.display = "none";
    document
      .querySelector(".scroll-blocked")
      .classList.remove("scroll-blocked");
  }, 2000);
});
