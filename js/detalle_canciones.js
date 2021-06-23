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

let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString);
let id = queryStringToObject.get('id');

let proxy = 'https://cors-anywhere.herokuapp.com/';
let cancion = `https://api.deezer.com/track/${id}`;
let url = proxy + cancion;

fetch(url)
    .then(function(response){
        return response.json();
    }) 
    .then(function(data){
        console.log(data);
        let seccion= document.querySelector('.texto_cancion');
        seccion.innerHTML+=`<h2 class="fondo_negro">${data.title}</h2>
                            <p class="cantante"><a href="detalle_artistas.html?id=${data.artist.id}">${data.artist.name}</a></p>
                            <p class="album"><a href="detalle_disco.html?id=${data.album.id}">${data.album.title}</a></p>`

        //Player
        let player= document.querySelector('iframe');
        player.src= `https://widget.deezer.com/widget/dark/track/${id}`
        let fondo=document.querySelector('.fondo');
        fondo.style.backgroundImage= `url(${data.album.cover_medium})`
    })
    .catch(function(error){
        console.log(error);
    })

//Agregar canción a lista de favoritos
let favoritos = [];

//Agregar ID de la canción dentro del array cuando el asuario haga click en agregar a favoritos.
let fav = document.querySelector('.fav');
fav.addEventListener('click', function(e){
    e.preventDefault(); //como el link tiene un comportamiento default acá lo paro.

    //Guardamos el id en el array
    favoritos.push(id); //A favoritos(array) le pusheo el id que ya capture en la línea 25

    // Armamos un string para poder guardarlo en local storage
    let favParaStorage = JSON.stringify(favoritos);
    localStorage.setItem('favoritos', favParaStorage)
    console.log(localStorage);

})