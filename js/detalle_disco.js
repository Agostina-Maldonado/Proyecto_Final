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
//Me traigo los albums
let album = `https://api.deezer.com/album/${id}`; //El id es el que acabo de sacar de la URL
let url = proxy + album;

fetch(url)
    .then(function(response){ //Dentro del response viene la información del fetch
        return response.json(); //Se queda solo con los datos de la respuesta
    })
    .then(function(data){
        console.log(data);
        //Primera sección
        let primeraSeccion = document.querySelector('.primera_seccion')
        primeraSeccion.innerHTML +=`<div class="imagen">
                                        <img class="justin" src="${data.cover_medium}" alt="Foto del disco de Justin">
                                    </div>
                                    <article>
                                        <h2 class="white"><a href="detalle_disco.html?id=${data.id}">${data.title}</a></h2>
                                        <p class="artista"><a href="detalle_artista.html?id=${data.artist.id}">${data.artist.name}</a></p>
                                        <p class="fecha">${data.release_date}</p>
                                        <p class="genero"><a href="detalle_genero.html?id=${data.genre_id}">${data.genres.data[0].name}</a></p>
                                    </article>`

        //Segunda sección en mobile
        //Nos quedamos solo con el array de datos que contiene las canciones del album
        let info= data.tracks.data;
        //Obtenemos el contenedor
        let cancionesContainer= document.querySelector('.segunda_seccion');
        //Definimos variable para poner el contenido
        let canciones = '';
        //Bucle para recorrer los datos
        for(let i=0; i<info.length; i++){
            canciones +=`<article class="article_disco">
                            <div class="player">
                                <i class="far fa-play-circle"></i>
                            </div>
                            <div class="texto_disco">
                                <h4><a href="detalle_cancion.html?id=${info[i].id}">${info[i].title}</a></h4>
                                <p><a href="detalle_artista.html?id=${info[i].id}">${info[i].artist.name}</a></p>
                            </div>
                        </article>`
        }
        cancionesContainer.innerHTML += canciones;

        //Segunda sección en desktop(tabla)

        let contenidoTabla= document.querySelector(".informacionResultados");
        let contenidoCanciones = '';
        for(let i=0; i<info.length;i++){
            contenidoCanciones +=	
                                    `<tr> 
                                        <td class="player><img src="${info[i].artist.picture_small}"><a href="detalle_cancion.html?id=${info[i].id}">${info[i].title}</a></td>
                                        <td></td>
                                        <td><a href="detalle_artistas.html?id=${info[i].id}">${info[i].artist.name}</a></td>
                                        <td><a href="detalle_disco.html?id=${data.id}">${data.title}</a></td>
                                        <td>${info[i].duration}</td>
                                    </tr>`
        }
        
        contenidoTabla.innerHTML += contenidoCanciones;
        
    })

    .catch(function(error){
        console.log("Error: "+ error);
    })



            