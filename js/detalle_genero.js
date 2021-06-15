window.addEventListener('load', function(){
let queryString = location.search //Caputramos la qs
let queryStringToObject = new URLSearchParams(queryString); //La transformamos en OL
let id = queryStringToObject.get('id');
let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}/artists`

fetch(url)
.then(function(response){
 return response.json();
}) .then(function(data){
    console.log(data)
    let arrayInfoDetalleGenero = data.data;
    let infoDetalleGenero= document.querySelector('.lista_artistas'); 
    let contenidoDetalleGenero= '';    

    for(let i=0; i<arrayInfoDetalleGenero.length; i++){
    contenidoDetalleGenero+= `<article class="imagen_y_texto">
    <div class="card-image">
    <img class="img_artista" src="${arrayInfoDetalleGenero[i].picture_small}" alt="${arrayInfoDetalleGenero[i].name}"</div>
    <div class="card-nombre_artista"><h3>${arrayInfoDetalleGenero[i].name}</h3><a class="boton" href="detalle_artista.html?id=${arrayInfoDetalleGenero[i].id}">Ver más</a>
    </div>
    </article>`
    }
    infoDetalleGenero.innerHTML+= contenidoDetalleGenero
})
.catch(function(error){
 console.log(error)
});
});