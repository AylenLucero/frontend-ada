const base = "https://api.themoviedb.org/3/";
const baseImg = "https://image.tmdb.org/t/p/w500/";
const apiKey = "0bce2b3619ac231ad6ce364b6d8015ab";




// Crear una función renderTableHead que reciba una tabla y un objeto y en bases a sus prop, renderice la cabecera de una tabla en pantalla.
const tabla = document.createElement('table');
tabla.setAttribute('class', 'tabla');
document.body.appendChild(tabla)
const renderTableHead = (objeto, tablaParametro) => {
    const thead = document.createElement('thead');
    const trHead = document.createElement('tr');
    for(obj in objeto) {
        const th = document.createElement('th');
        th.innerHTML = obj;
        trHead.appendChild(th);        
    }
    thead.appendChild(trHead);
    tablaParametro.appendChild(thead);
}

fetch(`${base}genre/movie/list?api_key=${apiKey}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data)
    })

// Crear una función renderImage que renderice una imagen en pantalla.

// Crear una función renderTableData que reciba un row y un objeto y renderice una fila de tabla en pantalla.

// Haciendo uso de las funciones anteriores, crear una tabla en pantalla que muestre los generos disponibles.

// Haciendo uso de las funciones anteriores, crear una tabla en pantalla que muestre las peliculas mas populares.

// Paginar donde sea necesario.