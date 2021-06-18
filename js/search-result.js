window.addEventListener('load', function () {
    let loader= document.querySelector('.loader')
    loader.style.display= 'none';
})
let queryString = new URLSearchParams(window.location.search)
let buscar= queryString.get('buscar');
let resultados= 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=' +buscar
let artistas = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q='+buscar
console.log(artistas);
console.log(buscar);

let informacion= document.querySelector(".tituloInfo")

/*let evento= document.querySelector('.card-nombre_artista')
let titulos= document.querySelector('h3', 'p')
evento.addEventListener('mouseover', function() {
    titulos.style.fontStyle = 'bold';
})*/
fetch(artistas)
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
        let listArtist= document.querySelector(".lista_artistas");
        let infoArtistas= data.data ;
        let contenido = '';
        
        if(infoArtistas.length> 0){

        informacion.innerText= 'Resultados de busqueda para:'+buscar ;
            }else{
        informacion.innerText= 'No encontramos resultados, lo siento ' ;
            }
        for( let i=0; i<infoArtistas.length;i++){
            contenido += `	<article class="imagen_y_texto">
            <div class="card-image">
                <img class="img_artista" src="${infoArtistas[i].picture_small}" alt="justin bieber">
            </div>
            <div class="card-nombre_artista">
                <h3><a href="./detalle_artistas.html?id=${infoArtistas[i].id}">${infoArtistas[i].name}</a></h3>
            </div>	
        </article>`
        }
        listArtist.innerHTML += contenido;
        })
    .catch(function(error){
        console.log(error);
        })
let albumes = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q='+buscar
fetch(albumes)
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
        let listAlbum= document.querySelector(".search_albumes");
        let infoAlbum= data.data ;
        let contenidoAlbum = ''
        for( let i=0; i<infoAlbum.length;i++){
            contenidoAlbum += `<article class="imagen_y_texto">
                <div class="card-image">
                    <img class="img_artista" src="${infoAlbum[i].cover_small}" alt="justin bieber">
                 </div>
                <div class="card-nombre_artista">
                    <h3><a href="./detalle_disco.html?id=${infoAlbum[i].id}">${infoAlbum[i].title}</a></h3>
                    <p><a href="./detalle_artistas.html?id=${infoAlbum[i].artist.id}">${infoAlbum[i].artist.name}</a></p>
                </div>	
                </article>`
                }
        listAlbum.innerHTML += contenidoAlbum;
        })
    .catch(function(error){
        console.log(error);
        })

let Canciones = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q='+buscar
fetch(Canciones)
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
        let songs= document.querySelector(".informacionResultados");
        let infoCanciones= data.data ;
        let contenidoCanciones = '';
        for( let i=0; i<infoCanciones.length;i++){
            contenidoCanciones +=	
            `<tr> 
                <td class="player><img src="${infoCanciones[i].artist.picture_small}"><a href="detalle_cancion.html?id=${infoCanciones[i].id}">${infoCanciones[i].title}</a></td>
                <td></td>
                <td><a href="detalle_artistas.html?id=${infoCanciones[i].id}">${infoCanciones[i].artist.name}</a></td>
                <td><a href="detalle_disco.html?id=${infoCanciones[i].id}">${infoCanciones[i].album.title}</a></td>
                <td>${infoCanciones[i].duration}</td>
            </tr>`
        }
        songs.innerHTML += contenidoCanciones;
        })
    .catch(function(error){
        console.log(error);
        })