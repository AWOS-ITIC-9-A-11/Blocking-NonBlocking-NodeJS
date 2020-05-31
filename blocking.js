/* jshint esversion: 8 */
let { obtenerUsuarioSync } = require('./usuarios/usuario');

console.log('\n\n1.- INICIO DE PRUEBA BLOCKING');

console.log('2.- ', obtenerUsuarioSync(1));

console.log('3.- ', obtenerUsuarioSync(2));

console.log('4.- Hola mundo.');