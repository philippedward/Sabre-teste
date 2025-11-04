const circle = document.getElementById("space-circle");
const galaxie = document.querySelector(".space-rectangle-galaxie");
const blackHole = document.querySelector(".space-rectangle-black-hole");
const circleBlackHole = document.getElementById("space-circle-black-hole");

circle.addEventListener("click", function () {
  // Zoom rapide sur le cercle
  circle.style.transform = "scale(100)";

  // Après l'animation, masquer la galaxie
  setTimeout(() => {
    galaxie.classList.add("hide");
    circleBlackHole.style.opacity = "1";
  }, 800);
});

circleBlackHole.addEventListener("click", function () {
  // Lancer l'animation de dézoom
  blackHole.classList.add("dezoom");
});
