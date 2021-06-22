window.addEventListener('load', function() {
    let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre`

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

fetch(url)
.then(function(response){
 return response.json();
}) .then(function(data){
    console.log(data)
    let arrayInfoGenero = data.data;
    let infoGenero= document.querySelector('.lista_generos');
    let contenidoGenero= ''

for(let i=1; i<arrayInfoGenero.length; i++){
              contenidoGenero+= `<article class="card-genero"><h2>${arrayInfoGenero[i].name}</h2><a class=boton_explorar href="detalle_genero.html?id=${arrayInfoGenero[i].id}">Explorar</a></article>`
}
infoGenero.innerHTML += contenidoGenero;
})
.catch(function(error){
 console.log(error);
 })

    });
    
