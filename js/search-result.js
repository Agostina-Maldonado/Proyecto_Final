let queryString = new URLSearchParams(location.search)
let Buscar= queryString.get ('barra-buscador');
artistas = ('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=' + buscar)
fetch(artistas)
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
        let listArtist= document.querySelector(".lista_artistas");
        let infoArtistas= data.data ;
        let contenido = ''
        for( let i=0; i<infoArtistas.lenght;i++){
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
 albumes = ('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=' + buscar)
fetch(albumes)
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
        let listAlbum= document.querySelector(".lista_artistas");
        let infoAlbum= data.data ;
        let contenidoAlbum = ''
        for( let i=0; i<infoAlbum.lenght;i++){
            contenidoAlbum += `<article class="imagen_y_texto">
                <div class="card-image">
                    <img class="img_artista" src="${infoalbum[i].cover_small}" alt="justin bieber">
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

