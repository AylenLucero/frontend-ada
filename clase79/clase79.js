const personajes = getInhabitants();


///CALLBACK
const filtro = (array,prop, find,callback) => {
    for(dato of array) {
        if(dato[prop].includes(find)) {
            callback(dato)
        }
    }
}

filtro(personajes, 'hair_color','Red', (personaje) => {
    // console.log(personaje.name)
});

/*
Crear una funcion map que acepte un array y un callback y que:
-Por cada argumento del array ejecute el callback pasandole dicho elemento como argumento
-Obtenga el resultado
-Lo pushee a un nuevo arry
-Devuelva el array final con el resultado de cada una de las llamadas al callback
*/
const numeros = [1,2,3];
const map = (numeros, callback) => {
    const nuevosNumeros = [];
    for(numero of numeros) {
        nuevosNumeros.push(callback(numero))        
    }
    return nuevosNumeros
}
const duplicar = (x) => x*2;

map(numeros, duplicar)