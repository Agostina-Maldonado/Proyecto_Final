console.log('hola');
let url = `https://cors-anywhere.herokuapp.com/https://developers.deezer.com/api/track`

fetch(url)
.then(function(response){
 return response.json();
}) .then(function(data){
    console.log(data)
    let sectionDetalleCancion = data.data;
    let InfoCanciones= document.querySelector('.texto_cancion');
    let contenidoCanciones= ''

for(let i=1; i<sectionDetalleCancion.length; i++){
              contenidoCanciones+= `<h2 class="fondo_negro">${sectionDetalleCancion[i].title}</h2>
              <p><a href="detalle_artistas.html?id=${sectionDetalleCancion[i].id}"></a>${sectionDetalleCancion[i].artist.name}</p>
              <p><a href="detalle_disco.html?id=${sectionDetalleCancion[i].id}"></a>${sectionDetalleCancion[i].album.title}</p>`
}
InfoCanciones.innerHTML += contenidoCanciones;
})
.catch(function(error){
    console.log(error);
})
