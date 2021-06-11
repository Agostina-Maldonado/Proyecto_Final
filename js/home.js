//HEADER
//buscador
let formulario = document.querySelector("form"); 
let campoBuscar = document.querySelector(".Buscar"); 
let alert = document.querySelector(".alert"); 
formulario.addEventListener('submit', function(event) {
event.preventDefault();
if ( campoBuscar.value== '') {
alert.innerText="El campo está vacío, escribe al menos 3 caracteres para poder mostrarte resultados";
} else if ( campoBuscar.value.lenght <3){
alert.innerText="El campo tiene que tener al menos 3 caracteres para poder mostrarte resultados";
}else{
this.submit();
}
})

