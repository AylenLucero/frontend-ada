  
// Crear una función filtrarPorLongitud que tome como argumentos un número longitud y un array de strings palabras y que devuelva un array con las palabras que tengan una cantidad de letras mayor a longitud. Ejemplo:

const filtrarPorLongitudMayorA = (num, arrayStr) => {
    let nvo=[];
    for(str of arrayStr){        
        (str.length>num)?nvo.push(str):false;
    }
    return nvo;
}
console.log(filtrarPorLongitudMayorA(4, [
    "dia",
    "remolacha",
    "azul",
    "sorpresa",
    "te",
    "verde",
  ])); // ['remolacha', 'sorpresa', 'verde']