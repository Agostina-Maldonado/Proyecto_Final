console.log('hola');
//HEADER
//buscador
let formulario = document.querySelector("form"); 
let campoBuscar = document.querySelector(".barra-buscador"); 
let alert = document.querySelector(".alertTotal"); 
formulario.addEventListener('submit', function(event){
event.preventDefault(); //Detenemos el comportamiento default del formulario que es enviarse.
    if (campoBuscar.value==''){ //Chequeamos el contenido.
        alert.innerHTML= `<p class="alert">El campo está vacío, escribe al menos 3 caracteres para poder mostrarte resultados</p><i class="far fa-times-circle"></i>`;
    }else if (campoBuscar.value.lenght<3){
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
