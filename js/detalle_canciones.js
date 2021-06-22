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
let cancion = `https://api.deezer.com/track/{id}`;
let url = proxy + cancion;

fetch(url)
.then(function(response){
 return response.json();
}) .then(function(data){
    console.log(data)

})
.catch(function(error){
    console.log(error);
})

/*`<h2 class="fondo_negro">${sectionDetalleCancion[i].title}</h2>
              <p><a href="detalle_artistas.html?id=${sectionDetalleCancion[i].id}"></a>${sectionDetalleCancion[i].artist.name}</p>
              <p><a href="detalle_disco.html?id=${sectionDetalleCancion[i].id}"></a>${sectionDetalleCancion[i].album.title}</p>` */