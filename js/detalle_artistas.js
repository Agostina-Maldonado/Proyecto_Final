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
let artista= `https://api.deezer.com/artist/${id}`;
let url = proxy + artista;

fetch(url)
    .then(function(response){ //Dentro del response viene la información del fetch
        return response.json(); //Se queda solo con los datos de la respuesta
    })
    .then(function(data){
        console.log(data);
        let imagenFondo=document.querySelector('.imagenfondo');
        imagenFondo.style.backgroundImage= `url(${data.picture_medium})`;
        let nombreArtista= document.querySelector('.numero, .centrado');
        nombreArtista.innerText= data.name;
    })
    .catch(function(error){
        console.log("Error: "+ error);
    })


let ArtistaAlbum= `https://api.deezer.com/artist/${id}/albums`
let urlAlbum = proxy + ArtistaAlbum;
fetch(urlAlbum)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        // Obtengo el contenedor
        let artistaAlbumContainer= document.querySelector('.detalle_artista');
        //Definos la variable para poner el contenido
        let albums= ''
        //Bucle para recorrer el array de datos
        for(let i=1; i<6; i++){
            albums +=   `<article class="topcanciones">
                            <div class="justinimage">
                                <img src=${data.data[i].cover_medium} alt="foto de justin">
                            </div>
                            <div class="numero">
                                <p>${i}</p>
                            </div>
                            <div class="texto">
                                <p class="negrita"><a href="detalle_cancion.html?id=${data.data[i].id}">${data.data[i].title}</a></p>
                                <p class="chico">${data.data[i].release_date}</p>
                            </div>
                        </article> `
        }
        artistaAlbumContainer.innerHTML += albums ;
    })
    .catch(function(error){
        console.log("Error: "+ error);
    })

