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
let idTrack= //(completar con el id de la cancion que quiero agregar en playlist)//
let url= 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q='+idTrack;
fetch(url)
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