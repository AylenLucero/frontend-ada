//1. Hacer un programa que al iniciarse pida mediante un prompt ingresar un nombre, y una vez ingresado muestre un saludo con el nombre dentro de un h1. El h1 debe estar centrado y tener un tamaño de letra y una tipografía distinta de la que viene por defecto.
const body = document.body;
const section2 = document.getElementById("segundo");
// const div = document.createElement('div');
// const h1 = document.createElement('h1');

// let nombre = prompt('Ingrese su nombre:');
// const texto = document.createTextNode('Aylen');
// div.setAttribute('class', 'text-center');

// h1.appendChild(texto);
// div.appendChild(h1);
// body.appendChild(div);

//2. Hacer un programa que al iniciarse pida mediante un prompt ingresar un color en sistema hexadecimal, y una vez ingresado ponga el color de fondo del body con dicho color.

// let color = prompt('Escriba el color que desea de fondo: ');
// body.style.backgroundColor = color;

//3. Hacer un programa que al iniciarse pida mediante tres prompts ingresar los valores correspondientes a un color en sistema rgb, y una vez ingresado ponga el color de fondo del body con dicho color. Los valores van del 0 al 255 y corresponden a rojo, verde y azul.
// const colores = {};
// for(i=0; i<3;i++) {
//     colores[i] = prompt(`Ingrese el valor ${i+1}:` )
// }
// body.style.backgroundColor = `rgb(${colores[0]},${colores[1]},${colores[2]})`

//4. Hacer un programa que al iniciarse pregunte mediante un prompt por un tamaño de imagen (siendo las opciones posibles chica, mediana y grande) y dependiendo de la opción elegida modifique el tamaño de una imagen (cualquiera) en el documento html. Por ejemplo:

// Opción elegida	Ancho de imagen
// chica =>	    200px
// mediana =>	500px
// grande =>	800px

// const personajes = getInhabitants();
// const segundoPersonaje = personajes[3];

// let imagen = document.createElement('img');
// imagen.setAttribute('src', segundoPersonaje.thumbnail);
// div.appendChild(imagen);

// const agregarImagen = () => {

//     let tamaño = prompt('Ingrese la medida de la imagen: ');

//     switch (tamaño) {
//         case 'chica':
//             imagen.style.width = '200px';
//             break;
//         case 'mediana':
//             imagen.style.width = '500px';
//             break;
//         case 'grande':
//             imagen.style.width = '600px';
//             break;
//         default:
//             alert('Error! Ingrese uno de estos valores: chica, mediana, grande');
//             agregarImagen();
//             break;
//     }
// }
// agregarImagen();

//5. Hacer un programa que al iniciarse pregunte mediante un prompt por un temperatura, y con ese dato modifique un h1 en el html, de forma tal que diga, por ejemplo, Temperatura actual: 20°. Cambiar el color del h1 dependiendo de la temperatura ingresada, siguiendo las siguientes reglas:

// Temperatura	Color
// Menor a 0°	                        => Azul
// Mayor o igual a 0° y menor a 15°	    => Celeste
// Mayor o igual a 15° y menor a 25°	=> Verde
// Mayor o igual a 25° y menor a 30°	=> Amarillo
// Mayor o igual a 30° y menor a 35°	=> Naranja
// Mayor a 35°                          => Rojo

// let color = prompt('Ingrese la temperatura: ');

// if(color <= 0) {
//     h1.style.color = 'blue'
// } else if((color >= 0) && (color < 15)) {
//     h1.style.color = 'aqua'
// } else if((color >= 15) && (color < 25)) {
//     h1.style.color = 'green'
// } else if((color >= 25) && (color < 30)) {
//     h1.style.color = 'yellow'
// } else if((color >= 30) && (color < 35)) {
//     h1.style.color = 'orangered'
// } else {
//     h1.style.color = 'red'
// }

//CREAR UNA TABLA
// const div2 = document.createElement('div');
// const table = document.createElement('table');
// const tr = document.createElement('tr');
// // let nvanoticias = document.querySelectorAll('.nvanoticia');
// // console.log(nvanoticias)

// const btn = document.getElementById('btn')
// btn.setAttribute('type', 'submit')
// const encabezado = [
//     'Nombre',
//     'Apellido',
//     'Extra'
// ];
// for(i=0;i<encabezado.length; i++) {
//     const th = document.createElement('th');
//     th.innerHTML = encabezado[i];
//     tr.appendChild(th);
// }
// const array = [
//     'Aylen',
//     'Lucero',
//     'Hola'
// ];
// const prueba = () => {
//     const tr2 = document.createElement('tr');
//     for(i=0;i<array.length;i++) {
//         const td = document.createElement('td');
//         td.innerHTML = array[i]
//         td.setAttribute('class', 'tabla');
//         tr2.appendChild(td);
//         table.appendChild(tr2)
//     }
// }
// btn.addEventListener('click', function() {
//     prueba();
//     colores();
// })
// const colores = () => {
//     let color = prompt('colores:');
//     body.style.backgroundColor = color;
// }
// body.appendChild(div2)
// div2.appendChild(table);
// table.appendChild(tr)

//6. Crear una barra de progreso con dos divs anidados. Hacer un programa que al iniciarse pregunte mediante un prompt por un porcentaje de progreso y modifique el ancho de la barra de progreso respectivamente (si se ingresa 75 la barra de progreso tiene que ocupar el 75% de la barra contenedora)

// const div1 = document.createElement('div');
// const div2 = document.createElement('div');

// div1.style.backgroundColor = '#ccc';
// div1.style.width = '1200px';
// div1.style.height = '50px';

// let porcentaje = prompt('Ingrese el numero de porcentaje que desea:')
// div2.style.backgroundColor = 'red';
// div2.style.width = `${porcentaje}`;
// div2.style.height = '50px';

// div1.appendChild(div2);
// section2.appendChild(div1);

//7. En un documento html hacer un post de una red social que contenga:
// un h3 con la usuaria
// un p con un lorem ipsum
// 3 spans de reacciones con un ícono (por ejemplo Me gusta, Me encanta, Me asombra) más un número con la cantidad
// Dar estilos para que

// la tipografía sea distinta a la default
// los spans estén en línea, separados con márgenes, tengan un color de fondo gris suave y un border radius
// Hacer un programa que al iniciarse pregunte mediante tres prompts por la cantidad de cada una de las reacciones y actualice los valores de los spans correspondientes
// const div = document.createElement("div");
// const h3 = document.createElement("h3");
// const p = document.createElement("p");
// h3.innerText = "Esto es un articulo";
// p.innerText =
//   "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet facere pariatur libero voluptatum eius vel doloribus explicabo et qui inventore amet asperiores delectus illo blanditiis nihil, molestias aliquam similique accusantium?";

// let iconos = ["mg", "mc", "ma"];
// div.appendChild(h3);
// div.appendChild(p);

// const crearSpan = (icono) => {
//   const spans = document.createElement("span");
//   let cantidad = prompt("Cantidad por reaccion:");
//   spans.innerHTML = `${cantidad}  ${icono}`;
//   spans.style.marginLeft = "20%";
//   spans.style.backgroundColor = "#ccc";
//   spans.style.borderRadius = "20%";
//   return spans;
// };

// for (icono of iconos) {
//   div.appendChild(crearSpan(icono));
// }

// section2.appendChild(div);

  
//8. Hacer un programa que al iniciarse pregunte mediante prompts por
// - un título
// - una url de una imagen
// - una url a un artículo

// Utilizar esos datos para completar en el html una card que tenga
// - una imagen, con la url de la imagen ingresada
// - un título, con el texto del título ingresado
// - un link que diga Leer más, con la url al artículo ingresado

// Dar algunos estilos mínimos a la card:
// - centrarla con respecto a la pantalla
// - agregarle un borde
// - agregarle un sombreado
// - cambiarle la tipografía
// - cambiarle los tamaños de fuente
// - cambiarle los colores por defecto
// const section1 = document.getElementById('primero');
// const div = document.createElement('div');

//   let array =[];
//   let datos;
//   for(i=0; i<3; i++) {
//     datos = prompt('Ingrese');
//     array.push(datos)
//   }


//   div.setAttribute('class', 'row d-flex justify-content-center')
//   div.innerHTML = `<div class="card carta col-5 mt-5 text-center" style="width: 18rem;">
//                     <img class="card-img-top mt-3" src="${array[1]}" alt="Card image cap">
//                     <div class="card-body">
//                       <h5 class="card-title">${array[0]}</h5>
//                       <a href="${array[2]}" class="card-link">Leer mas</a>
//                     </div>
//                   </div>`


// section1.appendChild(div);

//9. En un documento html agregar al menos tres imágenes de distintos animales, una por cada animal. Hacer un programa que al iniciarse pregunte mediante un prompt por un animal (indicando en el mensaje las opciones disponibles) y muestre solamente la imagen del animal elegido.
// const div = document.createElement('div');
// const flamenco = document.getElementById('flamenco');
// const jirafa = document.getElementById('jirafa');
// const tigre = document.getElementById('tigre');

// tigre.style.display = 'none';
// jirafa.style.display = 'none';
// flamenco.style.display = 'none';
// const aparicionImagenes = () => {
//     let elegirFoto = prompt ('Elija que imagen quiere ver entre: Tigre, Jirafa, Flamenco:');
//     elegirFoto = elegirFoto.toLowerCase();
//     if(elegirFoto === 'tigre' || elegirFoto === 'jirafa' || elegirFoto === 'flamenco' ) {
//         if(elegirFoto === 'tigre') {
//             tigre.style.display = 'block';
//         }
//         if(elegirFoto === 'flamenco') {
//             flamenco.style.display = 'block';
//         }
//         if(elegirFoto === 'jirafa') {
//             jirafa.style.display = 'block';
//         } 
//     } else {
//         alert('La opcion elegida no es valida! Seleccione entre: Jirafa, Tigre, Flamenco');
//         aparicionImagenes();
//     }      
// }
// div.appendChild(tigre);
// section2.appendChild(div);
// aparicionImagenes()

//10. Crear un documento html con un título que diga Mis canciones favoritas y una lista desordenada. Pedir mediante prompts por cinco canciones (una a la vez), y agregar esas canciones como ítems de la lista desordenada

// const div = document.createElement('div');
// const h1 = document.createElement('h1');
// const ul = document.createElement('ul');
// h1.setAttribute('class', 'text-center');

// h1.innerHTML = 'Mis canciones favoritas'

// for(i=0;i<5;i++) {
//     let canciones = prompt('Elija sus canciones: ');
//     const li = document.createElement('li');
    
//     li.innerHTML = canciones;
//     ul.appendChild(li)
// }

// div.appendChild(h1);
// div.appendChild(ul);
// section2.appendChild(div);

//11. Crear un documento html que muestre un número (empezando en 0) y 6 botones con los siguientes valores: -1, +1, -5, +5, -10, +10. Cuando se clickea un botón, se tiene que sumar o restar la cantidad correspondiente, y actualizar el número mostrado.
