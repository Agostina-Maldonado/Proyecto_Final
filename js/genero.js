let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre`

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
