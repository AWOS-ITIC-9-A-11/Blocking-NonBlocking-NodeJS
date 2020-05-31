/* jshint esversion: 8 */
let { obtenerUsuario } = require('./usuarios/usuario');

console.log('\n\n1.- INICIO DE PRUEBA NON BLOCKING');

obtenerUsuario(1, (usuario) => {
    console.log('2.- ', usuario);
});

obtenerUsuario(2, (usuario) => {
    console.log('3.- ', usuario);
});


console.log('4.- Hola mundo.');