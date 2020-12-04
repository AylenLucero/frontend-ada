
let elem = document.getElementById('texto');

//COMO CAPTURAR O AGREGAR ATRIBUTOS (ID, CLASS,ETC)
//GETATTRIBUTE nos trae el valor del atributo
console.log(elem.getAttribute('id'));//Trae el valor del id
// elem.setAttribute('class', 'bg-primary') //AGREGAR ATRIBUTO CON VALOR(primero atributo,luego valor)

// elem.removeAttribute('data-ref') //ELIMINA UN ATRIBUTO

//CREAR UN ELEMENTO
const h1 = document.createElement('h1'); //Se crea un h1

const texto = document.createTextNode( //Creamos un texto
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quam laboriosam repellendus obcaecati nobis quae neque, blanditiis ducimus perferendis eveniet cupiditate minima sint commodi quos cumque explicabo doloribus maiores sequi?'
)

// h1.appendChild(texto) //Lo ubicamos en h1 y h1 lo ubicamos en elem

// elem.appendChild(h1); //Donde lo queremos agregar, aca decimos que al h1 lo queremoa agregar dentro del div con id texto


const inhabitants = getInhabitants()

const primerHabitante = inhabitants[0];//Trae primer habitante
const h2 = document.createElement('h2')//Creo
const nombre = document.createTextNode(primerHabitante.name)//creo

const imagen = document.createElement('img') //Creo
imagen.setAttribute('src', primerHabitante.thumbnail)//Agrego atributo con valor

const ul = document.createElement('ul');


for(primero of primerHabitante.professions) {    
    const li = document.createElement('li'); //Creamos el li dentro del for, asi lo hace la cantidad de veces q necesitemos
    const profesionesTexto =document.createTextNode(primero) //Creamos un texto con las profesiones
    li.appendChild(profesionesTexto)//La ponemos dentro del li
    ul.appendChild(li);   
}

const p = document.createElement("p");
p.appendChild(document.createTextNode("Texto de ejemplo")); //Se paso directamente

h2.appendChild(nombre);//Ubico
elem.appendChild(h2)//Ubico
elem.appendChild(imagen)//Ubico
elem.appendChild(ul)
elem.removeChild(imagen)//Borro
elem.appendChild(imagen)
elem.replaceChild(p, ul)


const { name, age } = primerHabitante;

elem.append(`Este personaje se llama ${name} y tiene ${age} años`);
elem.prepend("Escribo un texto directamente al principio");//APPEND
// elem.innerHTML = `<p>Este personaje se llama ${name} y tiene ${age} años</p>`; //Reemplaza TODO



