/* jshint esversion: 8 */

const tiempoEspera = 2000; //En milisegundos
function obtenerUsuarioSync(id) {

    const tiempActual = new Date().getTime();

    while (new Date().getTime() - tiempActual <= tiempoEspera) {}

    return {
        id,
        nombre: `usuario ${id}`
    };
}

function obtenerUsuario(id, callback) {

    let usuario = {
        id,
        nombre: `usuario ${id}`
    };

    setTimeout(() => callback(usuario), tiempoEspera);
}

module.exports = {
    obtenerUsuarioSync,
    obtenerUsuario
};