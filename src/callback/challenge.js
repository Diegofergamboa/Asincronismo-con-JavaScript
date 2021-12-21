// let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// const API = 'https://rickandmortyapi.com/api/character/';
// function fetchData(url, callback) {
//     let xhttp = new XMLHttpRequest();
//     xhttp.open('GET', url_api, true);
//     xhttp.onreadystatechange = function (event) {
//         if(xhttp.readyState === 4) {
//             if(xhttp.status === 200) {
//                 callback(null, JSON.parse(xhttp.responseText)); 
//             } else {
//                 const error = new Error('Error' + url_api);
//                 return callback(error, null)
//             }
//         }
//     }
//     xhttp.send();
// }

// fetchData(API, function (error1, data1) {
//     if(error1) return console.error(error1);
//     fetchData(API + data1.results[0].id , function (error2, data2) {
//         if(error2) return console.error(error2);
//         fetchData(data2.origin.url), function (error3, data3) {
//             if(error3) return console.error(error3);
//             console.log(data1.info.count);
//             console.log(data2.name);
//             console.log(data3.dimension);
//         }
//     }) 
// })

// importamos el modulo xmlhttprequest
const XMLHTTPRequest = require('xmlhttprequest').XMLHttpRequest;
const URL_API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback) {
const xhttp = new XMLHTTPRequest();

//abrimos una conexion al api
xhttp.open('GET', url_api, true);
// escuhamos los cambios de la conexion
xhttp.onreadystatechange = function(event) {
// validamos la conexicon exitosa
if (xhttp.readyState === 4) {
    // validamos el estado http 200
    if (xhttp.status === 200) {
    // convertimos la respuesta a json e iniciamos el callback que hara uso de la info
    callback(null, JSON.parse(xhttp.responseText));
    } else {
    // Enviamos el error que en caso de haber problemas
    const error = new Error('Error' + url_api);
    return callback(error, null);
    }
}
};
// enviamos la solicitud
xhttp.send();
}

// llamamos la funcion y pasamos la url esto devolvera toda la informacion
fetchData(URL_API, function(error1, data1) {

// retornara en que url fallo y terminara la ejecucion
if (error1) return console.log(error1);

// En data1 se guardo la primera respuesta
// URL concatenamos el valor que se encuentra data1.results[0].id ente caso es 1
//la url que pasamos es https://rickandmortyapi.com/api/character/1
fetchData(URL_API + data1.results[0].id, function(error2, data2) {

// retornara en que url fallo y terminara la ejecucion
if (error2) return console.log(error2);

// data2 tiene un objeto con la respuesta de la anterior URL
// data2 es toda la información de Rick Sanches
// data2.origin.url es una URL que contiene el objeto https://rickandmortyapi.com/api/location/1
fetchData(data2.origin.url, function(error3, data3) {

    // retornara en que url fallo y terminara la ejecucion
    if (error3) return console.log(error3);

    // data3 tiene como valor la respuesta de la anterior URL
    // En conclusion data1, data2 y data3 tienen diferentes valores
    console.log(data1.info);
    console.log(data2.name);
    console.log(data3.dimension);
});
});
});