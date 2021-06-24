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

//Recupero los datos del storage
let recuperoStorage= localStorage.getItem('favoritos');
//Voy a pasar de string a array para poder trabajar 
let favoritos = JSON.parse(recuperoStorage);

//sección del título en mobile
let numeroCanciones= document.querySelector('.numeroCanciones');
numeroCanciones.innerText = favoritos.length;
//sección de las canciones en desktop
let reproducciones= document.querySelector('.reproducciones');
reproducciones.innerText=  favoritos.length;

//Segunda sección en mobile

//Si hay datos, necesito recorrer el array (bucle for)
for(let i=0; i<favoritos.length; i++){
    //buscarYMostrarFavoritos
    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let cancion = `https://api.deezer.com/track/${favoritos[i]}`;
    let url = proxy + cancion;
    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function (data){
            console.log(data);
            let lista= document.querySelector('.segunda_seccion');
            lista.innerHTML +=  `<article>
                                    <div class="player">
                                        <i class="fas fa-heart"></i>
                                    </div>
                                    <div class="texto">
                                        <h4><a href="detalle_cancion.html?id=${favoritos[i]}">${data.title}</a></h4>
                                        <p>${data.release_date}</p>
                                    </div>
                                </article> `
           
            })

        .catch(function(error){
            console.log(error);
            })
}

//Segunda sección en desktop
let tabla= document.querySelector('.tablaCanciones');
for(let i=0; i<favoritos.length; i++){
    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let cancion = `https://api.deezer.com/track/${favoritos[i]}`;
    let url= proxy + cancion;
    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function (data){
            console.log(data);
            tabla.innerHTML +=  `<tr> 
                                <td class="player><img src="${data.artist.picture_small}"><a href="detalle_cancion.html?id=${data.id}">${data.title}</a></td>
                                <td></td>
                                <td><a href="detalle_artistas.html?id=${favoritos[i].id}">${data.artist.name}</a></td>
                                <td><a href="detalle_disco.html?id=${favoritos[i].id}">${data.album.title}</a></td>
                                <td>${data.duration}</td>
                                </tr>`
           
            })

        .catch(function(error){
            console.log(error);
            })

}




