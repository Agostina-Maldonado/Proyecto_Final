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
        let image= document.querySelector('.justin');
        let title= document.querySelector('.white');
        let artista= document.querySelector('.artista');
        let año= document.querySelector('.fecha');
        let genero= document.querySelector('.genero');

        image.src = data.cover_medium;
        title.innerText = data.title;
        artista.innerText= data.artist.name;
        año.innerText = data.release_date;
        genero.innerText = data.genres.data[0].name;

    })
    .catch(function(error){
        console.log("Error: "+ error);
    })


            