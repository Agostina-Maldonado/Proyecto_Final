//HEADER
//buscador
let formulario = document.querySelector("form"); 
let campoBuscar = document.querySelector(".buscar"); 
let alert = document.querySelector(".alert"); 
formulario.addEventListener('submit', function(event) {
event.preventDefault(); //Detenemos el comportamiento default del formulario que es enviarse.
if (campoBuscar.value== '' ) { //Chequeamos el contenido.
alert.innerText="El campo está vacío, escribe al menos 3 caracteres para poder mostrarte resultados";
closeIcon.style.display.style.display="inline";
} else if (campoBuscar.value.lenght<3){
alert.innerText="El campo tiene que tener al menos 3 caracteres para poder mostrarte resultados";
closeIcon.style.display.style.display="inline";
}else{
this.submit()
}
 //limpiar el mensaje de error cuando el usario modifique el contenido del campo input.
 campoBuscar.addEventListener('input', function(){
    alert.innerText = '';
    closeIcon.style.display = 'none';
})
    


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

let url= 'https://api.deezer.com/chart/0';
fetch (url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        let sencillos= document.querySelector('.sencillos');
        let infoCanciones= data.tracks.data;
        let contenidoSencillos= ''
        for (let i=0;i<infoCanciones.length;i++){
            contenidoSencillos += `<article class="info">
            <img src= "${infoCanciones[i].picture_medium}">
            <h2><a href="detalle_cancion.html?id=${infoCanciones[i].id}">${infoCanciones[i].tittle}</a></h2> 
            <p><a href="detalle_artistas.html?id=${infoCanciones[i].id}">${infoCanciones[i].artist.name}</a></p> </article>`
        }sencillos.innerHTML += contenidoSencillos;
    })
    .catch(function(error){
    console.log(error);
    })

let artistas= 'https://api.deezer.com/chart/0/artists';
fetch(artistas)
    .then(function(response){
    return response.json()
    })
    .then(function(data){
        let artistasDestacados= document.querySelector('.artistas');
        let infoArtistas= data.data;
        let contenidoArtistas= ''
        for (let i=0;i<infoArtistas.length;i++){
            contenidoSencillos += `<article class="info">
            <img src= "${infoArtistas[i].picture_medium}">
            <h2><a href="detalle_artistas.html?id=${infoArtistas[i].id}">${infoArtistas[i].name}</a></h2></article>`
        } artistasDestacados.innerHTML += contenidoArtistas;
    })
    .catch(function(error){
        console.log(error);
    })


let albumes= 'https://api.deezer.com/chart/0/albums';
fetch(albumes)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        let albumesDestacados= document.querySelector('.albumes');
        let infoAlbumes= data.data;
        let contenidoAlbumes= ''
        for (let i=0;i<infoAlbumes.length;i++){
            contenidoSencillos += `<article class="info">
            <img src= "${infoArtistas[i].cover_medium}">
            <h2><a href="detalle_disco.html?id=${infoAlbumes[i].id}">${infoAlbumes[i].tittle}</a></h2>
            <p><a href="detalle_artistas.html?id=${infoAlbumes[i].id}">${infoAlbumes[i].artist.name}</a></p>
            </article>`
        } albumesDestacados.innerHTML += contenidoAlbumes;
    })
    .catch(function(error){
        console.log(error);
    })