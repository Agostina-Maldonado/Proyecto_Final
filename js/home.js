//HEADER
//buscador
let queryString= location.search;
let queryStringToObject= new URLSearchParams(queryString);
let buscar= queryStringToObject.get{"buscar"};
let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${buscar}`;
let datoBuscado: document.querySelector (".datoBuscado");
datoBuscado.innerText = buscar

//carrousel
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
