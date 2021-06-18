//HEADER
//buscador
let formulario = document.querySelector("form"); 
let campoBuscar = document.querySelector(".barra-buscador"); 
let alert = document.querySelector(".alertTotal"); 
formulario.addEventListener('submit', function(event){
event.preventDefault(); //Detenemos el comportamiento default del formulario que es enviarse.
    if (campoBuscar.value==''){ //Chequeamos el contenido.
        alert.innerHTML= `<p class="alert">El campo está vacío, escribe al menos 3 caracteres para poder mostrarte resultados</p><i class="far fa-times-circle"></i>`;
    }else if (campoBuscar.value.lenght<3){
        alert.innerHTML= `<p class="alert">El campo tiene que tener al menos 3 caracteres para poder mostrarte resultados</p><i class="far fa-times-circle"></i>`;
    }else{
        this.submit()
        iconError.style.display= "none"
    }   

    //limpiar el mensaje de error cuando el usario modifique el contenido del campo input.
 campoBuscar.addEventListener('input', function(){
    alert.innerHTML ='';
    })
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

let url= 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks';
fetch (url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        let sencillos= document.querySelector('.sencillos');
        let infoCanciones= data.data;
        let contenidoSencillos= ''
        for (let i=0;i<infoCanciones.length;i++){
            contenidoSencillos += `<article class="infoHome">
            <img src= "${infoCanciones[i].artist.picture_medium}">
            <h2><a href="detalle_cancion.html?id=${infoCanciones[i].id}">${infoCanciones[i].title}</a></h2> 
            <p><a href="detalle_artistas.html?id=${infoCanciones[i].id}">${infoCanciones[i].artist.name}</a></p> </article>`
        }sencillos.innerHTML += contenidoSencillos;
    })
    .catch(function(error){
    console.log(error);
    })

let artistas= 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists';
fetch(artistas)
    .then(function(response){
    return response.json()
    })
    .then(function(data){
        let artistasDestacados= document.querySelector('.artistas');
        let infoArtistas= data.data;
        let contenidoArtistas= ''
        for (let i=0;i<infoArtistas.length;i++){
            contenidoArtistas += `<article class="infoHome">
            <img src= "${infoArtistas[i].picture_medium}">
            <h2><a href="detalle_artistas.html?id=${infoArtistas[i].id}">${infoArtistas[i].name}</a></h2></article>`
        } artistasDestacados.innerHTML += contenidoArtistas;
    })
    .catch(function(error){
        console.log(error);
    })

let albumes= 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums';
fetch(albumes)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        let albumesDestacados= document.querySelector('.albumes');
        let infoAlbumes= data.data;
        let contenidoAlbumes= ''
        for (let i=0;i<infoAlbumes.length;i++){
            contenidoAlbumes += `<article class="infoHome">
            <img src= "${infoAlbumes[i].cover_medium}">
            <h2><a href="detalle_disco.html?id=${infoAlbumes[i].id}">${infoAlbumes[i].title}</a></h2>
            <p><a href="detalle_artistas.html?id=${infoAlbumes[i].id}">${infoAlbumes[i].artist.name}</a></p>
            </article>`
        } albumesDestacados.innerHTML += contenidoAlbumes;
    })
    .catch(function(error){
        console.log(error);

    }) 
