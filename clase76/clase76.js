//console.log(window.outerWidth) //Ancho de la pantalla o con Height el largo

//Elemento guarda lo que contenga el id noticias en el html, en este caso, guarda 'Hola a todos'
let elemento = document.getElementById('noticias');
// console.log(elemento) 

//QUERYSELECTOR
//obtenemos el elemento por la clase
//Trae el primer elemento que coincida
let nvanoticia = document.querySelector('.nvanoticia');
// console.log(nvanoticia);

//QUERYSELECTORALL
//Nos trae una lista de nodos con todos los que coincidan
//Hay que iterarlos
let nvanoticias = document.querySelectorAll('.nvanoticia');
// console.log(nvanoticias)

//ITERACION
// nvanoticias.forEach((nva, i) => {
//     // console.log(i) //obtiene la posicion 0,1,2,3,etc.
//     console.log(nva) //obtiene cada elemento por separado
//     // nva.innerHTML = '<h2>Esto es el contenido editado</h2>'; //Con esto, cambio lo que dice el html por lo que quiero yo, lo reemplazo
// })



//CLASSLIST
//se le agrega una clase a ellos
//Iteramos nvanoticias
let boton = document.getElementById('boton') //Creamos un evento de click

const agregarClase = () => { //recorre cada una de las noticias y le agrega la clase
    nvanoticias.forEach((nva) => {
        if(nva.classList.contains('important')){ //Aca le digo que si alguna de ellas contiene la clase 'important' haga lo de adentro del if
            nva.classList.add('nva-clase')
        }
    });
} 

//REMOVE
//Se usa para quitar una clase
let noticia3 = document.getElementById('titulo-noticia') //llamo al id que quiero
noticia3.classList.remove('valor-nvo-para-remove');


//TOGGLE
//Se usa con un evento de click
//Cuando lo hago cambia el valor o no 
//como un add (agrega) y remove(quita) al mismo tiempo
const bodyClassToggle = () => {
    document.body.classList.toggle('on'); //Al body lo puedo llamar asi y sin necesidad de un getElementById
    
}



document.addEventListener('click', function() { //llama a agregarClase y le dimos el estilo en el css
    bodyClassToggle();
    agregarClase();    
}, boton)
//Cuando se haga click en el boton, se va a ejecutar lo que yo le hice en el css ya que le agrega la clase

//STYLE
//Le puedo definir estilos de css
noticia3.style.color = 'blue'
noticia3.style.fontSize = "50px";

//GETCOMPUTERSTYLE
//trae la caracteristica del elemento
console.log(window.getComputedStyle(noticia3).fontSize); 
console.log(window.getComputedStyle(noticia3).color); 
