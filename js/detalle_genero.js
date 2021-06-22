window.addEventListener('load', function(){
    //HEADER
//buscador
let formulario = document.querySelector("form"); 
let campoBuscar = document.querySelector(".barra-buscador"); 
let alert = document.querySelector(".alertTotal"); 
formulario.addEventListener('submit', function(event){
event.preventDefault(); //Detenemos el comportamiento default del formulario que es enviarse.
    if (campoBuscar.value==''){ //Chequeamos el contenido.
        alert.innerHTML= `<p class="alert">El campo está vacío, escribe al menos 3 caracteres para poder mostrarte resultados</p><i class="far fa-times-circle"></i>`;
    }else if (campoBuscar.value.length<3){
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

let queryString = location.search //Caputramos la qs
let queryStringToObject = new URLSearchParams(queryString); //La transformamos en OL
let id = queryStringToObject.get('id');
let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}/artists`;

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