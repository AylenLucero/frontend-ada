const personajes = getInhabitants();
// // 1 Mostrar en pantalla al/los personajes mas enanos de "Brastlewark"

const personaje = () => {
    let min;
    for (i = 0; i < personajes.length; i++) {
        (personajes[i].height >= min) ? true : (min = personajes[i].height);
        console.log(min)
    }
    let dato= personajes.filter(personaje=>personaje.height===min);
    return dato;
}

//2 Crear una funcion que devuelva los personaes por ID en base a un rango numerico.
// const personajePorId = (num1, num2) => {
//     if (num1 < num2) {
//         return personajes.filter(personaje => personaje.id >= num1 && personaje.id <= num2);
//     } else {
//         // console.log('num1 tiene que ser menor que num2')
//     }
// }
// >>>>>>>>>>>>>>>OPCION HECHA CON FOR<<<<<<<<<<<<<<
// const personajePorId = (num1, num2) => {
//     let array=[];
//     for(personaje of personajes){
//         while(num1>num2){
//             return 'Error'
//         }
//         ((num1<=personaje.id)&&(num2>=personaje.id))?array.push(personaje):false; 
//     }
//     return array;
// }

// >>>>>>>>>>>>>>>OPCION HECHA CON FOR Y DESESTRUCTURACION<<<<<<<<<<<<<<
// const personajePorId = (num1, num2) => {
//     let array=[];
//     for(personaje of personajes){
//         const {id} = personaje;
//         while(num1>num2){
//             return 'Error'
//         }
//         ((num1<=id)&&(num2>=id))?array.push(personaje):false; 
//     }
//     return array;
// }
// console.log(personajePorId(0,4));

//3 Crear una funcion que devuelva una lista de los habitantes de "Brastlewark" por el color de pelo.
// const colorDePelo = (color) => personajes.filter(personaje => personaje.hair_color === color);
// >>>>>>>>>>>>>>>OPCION HECHA CON FOR<<<<<<<<<<<<<<
// const colorDePelo = (color) => {
//     let array=[];
//     for(personaje of personajes){
//         (personaje.hair_color===color)?array.push(personaje):false;
//     } 
//     return array;
// }


// >>>>>>>>>>>>>>>OPCION HECHA CON FOR Y DESESTRUCTURACION<<<<<<<<<<<<<<
// const colorDePelo = (color) => {
//     let array=[];
//     for(personaje of personajes){
//         const {hair_color}=personaje;
//         (hair_color===color)?array.push(personaje):false;
//     } 
//     return array;
// }

// 4 Crear una funcion que devuelva una lista de los habitantes de "Brastlewark" en base a una propiedad y un valor enviados como parámetros.
// const propiedades = (key,value) => {
//     let array=[];
//     for(let personaje of personajes) {
//         if(personaje[key] === value){
//             array.push(personaje);
//         }
//     }
//     return array
// }
// console.log(propiedades('age',240))


// 6 Mostrar una tabla con "Fizwood Mysttink" y todos sus amigos.

// const mostrarTabla = () => {
//     let amigos=[];
//     let totalAmigos=[];
//     for(personaje of personajes){       
//         if(personaje.name==="Fizwood Mysttink"){
//             for(per of personaje.friends) {
//                 amigos.push(per);
//             }  
//             amigos.push(personaje.name);
//         }                                
//     }
//     for(amigo of amigos) {
//         for(personaje of personajes){
//             if(personaje.name===amigo){
//                 totalAmigos.push(personaje);
//             }
//         }
//     } 
//     return totalAmigos;  
// }
// console.table(mostrarTabla());

// >>>>>>>>>>>>>>>OPCION HECHA CON FOR Y DESESTRUCTURACION<<<<<<<<<<<<<<
// const mostrarTabla = () => {
//     let amigos=[];
//     let totalAmigos=[];
//     for(personaje of personajes){    
//         const {name, friends} = personaje;   
//         if(name==="Fizwood Mysttink"){
//             for(per of friends) {
//                 amigos.push(per);
//             }  
//             amigos.push(name);
//         }                                
//     }
//     for(amigo of amigos) {
//         for(personaje of personajes){
//             const {name} = personaje;
//             if(name===amigo){
//                 totalAmigos.push(personaje);
//             }
//         }
//     } 
//     return totalAmigos;  
// }
// console.table(mostrarTabla());

//20. Listar a todos los personajes que tengan como profesión "Woodcarver".

// const determinadaProfesion = () => {
//     let profesion=[];
//     for (personaje of personajes) {
//         for(prof of personaje.professions){  
//             if(prof==="Woodcarver"){
//                 profesion.push(personaje);
//             } 
//         }
//     }
//     return profesion;
// }

// >>>>>>>>>>>>>>>OPCION HECHA CON FOR Y DESESTRUCTURACION<<<<<<<<<<<<<<
// const determinadaProfesion = () => {
//     let profesion=[];
//     for (personaje of personajes) {
//         const {professions} = personaje;
//         for(prof of professions){  
//             if(prof==="Woodcarver"){
//                 profesion.push(personaje);
//             } 
//         }
//     }
//     return profesion;
// }

//21.Listar a todos los personajes que tengan como profesion un dato enviado como parámetro.
// const determinadaProfesion = (x) => {
//     let profesion=[];
//     for (personaje of personajes) {
//         for(prof of personaje.professions){  
//             if(prof===x){
//                 profesion.push(personaje);
//             } 
//         }
//     }
//     return profesion;
// }
// console.table(determinadaProfesion(" Tinker"));

// >>>>>>>>>>>>>>>OPCION HECHA CON FOR Y DESESTRUCTURACION<<<<<<<<<<<<<<
// const determinadaProfesion = (x) => {
//     let profesion=[];
//     for (personaje of personajes) {
//         const {professions} = personaje;
//         for(prof of professions){  
//             if(prof===x){
//                 profesion.push(personaje);
//             } 
//         }
//     }
//     return profesion;
// }
// console.table(determinadaProfesion(" Tinker"));

//22.Crear una funcián que a partir de un string, devuelva todos los habitantes que contienen dicho string en su nombre.
// const contieneStr = (str) => {
//     let quienTiene=[];
//     for (personaje of personajes) {
//         (personaje.name===str)
//         ?quienTiene.push(personaje)
//         :false;
//     }
//     return quienTiene;
// }
// console.log(contieneStr("Malbin Chromerocket"));

// >>>>>>>>>>>>>>>OPCION HECHA CON FOR Y DESESTRUCTURACION<<<<<<<<<<<<<<
// const contieneStr = (str) => {
//     let quienTiene=[];
//     for (personaje of personajes) {
//         const {name} = personaje;
//         (name===str)
//         ?quienTiene.push(personaje)
//         :false;
//     }
//     return quienTiene;
// }
// console.log(contieneStr("Malbin Chromerocket"));

//23. Crear una función que devuelva un objeto con una propiedad con todas las profesiones que se desarrollan en "Brastlewark" y otra con la cantidad de profesiones encontradas.
// const todasLasProfesiones = () => {
//     const cantidadProfesiones=[];
//     let numeroProfesiones= {};
//     for(personaje of personajes) {
//         for(profesion of personaje.professions){
//             if(!cantidadProfesiones.includes(profesion)){
//             cantidadProfesiones.push(profesion);
//             }
//         }
//     }
    
//     console.log(`La cantidad de profesiones que hay es de ${numeroProfesiones}`);
//     return cantidadProfesiones;
// }


