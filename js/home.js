//HEADER
//buscador
let queryString= location.search;
let queryStringToObject= new URLSearchParams(queryString);
let buscar= queryStringToObject.get{"buscar"};
let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${buscar}`;
let datoBuscado: document.querySelector{".datoBuscado"};
datoBuscado.innerText = buscar
