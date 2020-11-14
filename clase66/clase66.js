/* 
1)Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano 
tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. 
Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

console.log(puedeVerPelicula(12, false)); 
console.log(puedeVerPelicula(12, true)); 
console.log(puedeVerPelicula(16, false));
console.log(puedeVerPelicula(18, true)); 
*/
const puedeVerPelicula = (edad,tieneAutorizacion) => ((edad>=15)||(tieneAutorizacion))

/*Crear una función estaEnRango que tome como argumentos tres números, un valor, un número minimo y 
un número maximo, y devuelva true si el valor se encuentra entre los números minimo y maximo o false si no 
(si el valor es igual a uno de los extremos se considera que está dentro del rango)

console.log(estaEnRango(3, 1, 10));  // true
console.log(estaEnRango(1, 1, 10));  // true
console.log(estaEnRango(10, 1, 10)); // true
console.log(estaEnRango(12, 1, 10)); // false
console.log(estaEnRango(-3, 1, 10));  // false */
const estaEnRango=(valor,num_minimo,num_maximo)=> (valor>=num_minimo && valor<=num_maximo)

/*3)Crear una función puedeAvanzar que tome como argumento un string con el color del semáforo y devuelva true 
si puede avanzar o false si no. Si no se ingresa un color válido, debe devolver un string que diga: 
Error: color de semáforo inválido

console.log(puedeAvanzar('verde'));     // true
console.log(puedeAvanzar('amarillo'));  // false
console.log(puedeAvanzar('rojo'));      // false
console.log(puedeAvanzar('lila'));      // 'Error: color de semáforo inválido' 
*/
const puedeAvanzar = (color) => {
    if (color==='verde' || color==='amarillo' || color==='rojo'){
        return (color==='verde')
    }
    return 'Error! El clor no es valido'
}
// OTRA FORMA
// const puedeAvanzar = (color) => {
//     if (!['verde','amarillo','rojo'].includes(color))return 'Error! El clor no es valido'
//     return (color==='verde')    
// }

/*
4)Crear una función esVocal que tome como argumento un string letra y devuelva true si letra es una vocal o 
false si no lo es.

console.log(esVocal('a')); // true
console.log(esVocal('n')); // false
console.log(esVocal('e')); // true
console.log(esVocal('f')); // false
console.log(esVocal('u')); // true
console.log(esVocal('i')); // true
*/
const esVocal = (letra) => {
    if(!['a','e','i','o','u'].includes(letra))return false
    return true
}

/*
5)Crear una función esConsonante que tome como argumento un string letra y devuelva true si letra es una 
consonante o false si no lo es
const esConsonante = (letra) => !/[aeiou]/g.test(letra);

console.log(esConsonante('a')); // false
console.log(esConsonante('n')); // true
console.log(esConsonante('i')); // false
console.log(esConsonante('e')); // false
console.log(esConsonante('r')); // true
*/

// const esConsonante = (letra) => !/[aeiou]/g.test(letra);
const esConsonante = (letra) => (!esVocal(letra));

/*
6)Crear una función esHoraValida que tome como argumento un string hora con el formato HH:mm y 
determine si es una hora válida del día o no

esHoraValida('12:23') // true
esHoraValida('12:65') // false
esHoraValida('28:05') // false
esHoraValida('00:00') // true
*/
const esHoraValida = (hora) => {
    let hora_dividida= hora.split(':');
    return ((hora_dividida[0]<=23) && (hora_dividida[1]<=59))?true:false        
}  

// 7)Crear una función puedeRenovarCarnet que tome como argumentos tres booleanos, pasoTests, tieneMultasImpagas y pagoImpuestos, y devuelva true si una persona está habilitada para renovar su carnet de conducir o false si no. Una persona puede renovar su carnet si pasó los tests, no tiene multas impagas y pagó todos los impuestos
const puedeRenovarCarnet = (pasoTest, tieneMultasImpagas, pagoImpuestos) => (tieneMultasImpagas==false && pasoTest && pagoImpuestos)?'Puede renovar el carnet':'No puede renovar el carnet'
// console.log(puedeRenovarCarnet(true, false, true))   // true
// console.log(puedeRenovarCarnet(true, false, false))  // false
// console.log(puedeRenovarCarnet(false, true, true)) // false

// 8)Crear una función puedeGraduarse que tome como argumentos dos números asistencia y materiasAprobadas y un booleano tesisAprobada, y devuelva true si una persona puede gruadarse o false si no. Una persona puede graduarse si tiene un 75% de asistencia o más, 50 materias aprobadas o más y la tesis aprobada.
const puedeGraduarse = (asistencia, materiasAprobadas, tesisAprobada) =>(asistencia>=75 && materiasAprobadas>=50 && tesisAprobada==true)?true:false
// console.log(puedeGraduarse(80, 50, true))  // true
// console.log(puedeGraduarse(80, 50, false)) // false
// console.log(puedeGraduarse(80, 45, true))  // false
/*
9)Crear una función esParOImpar que acepte como argumento un numero y devuelva el string par si 
el numero es par, o el string impar si el numero es impar

const esParOImpar = (numero) => (numero % 2 == 0) ? 'par' : 'impar';

console.log(esParOImpar(3)); // 'impar'
console.log(esParOImpar(10)); // 'par'
console.log(esParOImpar(31)); // 'impar'
console.log(esParOImpar(98)); // 'par'
console.log(esParOImpar(55)); // 'impar'
console.log(esParOImpar(1042)); // 'par'
*/
const esParOImpar = (numero) => (numero % 2 == 0) ? 'par' : 'impar';

//10)Crear una función esPositivoONegativo que acepte como argumento un numero y devuelva el string positivo si el numero es positivo, o el string negativo si el numero es negativo
const esPositivoONegativo = (num) =>(num<0)?'Es negativo':'Es positivo'
// console.log(esPositivoONegativo('3'))
// console.log(esPositivoONegativo('-3'))

//11) Crear una función avanzarSemaforo que acepte como argumento un string colorActual y devuelva un string con el siguiente color del semáforo, siguiendo el orden: verde -> amarillo -> rojo -> verde
const avanzarSemaforo = (colorActual) => {
    switch (colorActual) {
        case 'verde': 
            console.log('amarillo','->','rojo','->','verde')
            break;
        case 'amarillo':
            console.log('rojo','->','verde','->','amarillo') 
            break
        case 'rojo':
            console.log('verde','->','amarillo','->','rojo')    
            break
        default:
            console.log('Error!Ingrese un color valido')      
    }
}

/*
17)Crear un programa que muestre el dinero inicial, y que permita retirar dinero preguntando cuánto se desea
retirar, y mostrando el dinero restante a continuación. Si se intenta retirar más dinero del disponible, 
o no cuenta con dinero disponible, debe mostrar un mensaje alertándolo e impedir seguir retirando.
*/
let dinero_inicial= 25000;

const cuenta=(retiro)=>{
    if (retiro<dinero_inicial) { 
        dinero_inicial=dinero_inicial-retiro       
        return dinero_inicial
    }else {
        return 'Error, no puede seguir retirando'
    }
}
// console.log(cuenta(200));
// console.log(cuenta(300));

/*
Crear un programa que simule un Tamagochi (mascota virtual). Debe tener 4 variables: salud, felicidad, limpieza, energía, cuyos valores pueden ir entre 1 y 10. El programa debe iniciar mostrando un mensaje con el nombre del tamagochi y los valores de cada variable (que son asignados aleatoriamente). Luego, debe mostrar las siguientes posibles acciones a realizar, que modifican los valores de la siguiente forma:
ALIMENTAR: +3 energía, +2 felicidad
JUGAR: +2 felicidad, -2 energía, -1 limpieza
DORMIR: +5 energía, +2 salud, -2 limpieza
VACUNAR: +5 salud, -6 felicidad
BAÑAR: +3 salud
RETAR: -3 felicidad
ACARICIAR: +4 felicidad
Cuando el usuario selecciona una, debe mostrar el valor final de las variables.
*/


