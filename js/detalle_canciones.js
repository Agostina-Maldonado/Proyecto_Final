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
//Recuperar datos del storage 
let recuperoStorage= localStorage.getItem('favoritos');
//Chequear y agregar la información de local storage en el array
if(recuperoStorage != null){ //si me devolvió algo de datos (distinto de null), entonces a esos datos los voy a parsear para que me lo devuelva en formato de array y así poder trabajar en este.
    favoritos = JSON.parse(recuperoStorage);
}

//Chequear que el id está en el array para cambiar el texto al usuario
if(favoritos.includes(id)){
    document.querySelector('.fav').innerText = "Quitar de favoritos";
}

//Agregar ID de la canción dentro del array cuando el asuario haga click en agregar a favoritos.
let fav = document.querySelector('.fav');
fav.addEventListener('click', function(e){
    e.preventDefault(); //como el link tiene un comportamiento default acá lo paro.

    //Chequear si el id está en el array, si lo está, sacalo. 
    if(favoritos.includes(id)){
        let idASacar = favoritos.indexOf(id);
        favoritos.splice(idASacar, 1); 
        document.querySelector('.fav').innerText = "Agregar a favoritos"; //Acá ya estamos seguros de que el elemento no está más, entonces le vamos a volver a mostrar al usuario el agregar a favoritos.
    } else{
        //Guardamos el id en el array
        favoritos.push(id); //A favoritos(array) le pusheo el id que ya capture en la línea 25
        console.log(favoritos);
        document.querySelector('.fav').innerText = "Quitar de favoritos";
    }


    // Armamos un string para poder guardarlo en local storage
    let favParaStorage = JSON.stringify(favoritos);
    localStorage.setItem('favoritos', favParaStorage)
    console.log(localStorage);

})