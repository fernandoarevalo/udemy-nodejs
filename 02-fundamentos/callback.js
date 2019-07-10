// setTimeout(() => {
//     console.log('Hola Mundo');
// });

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Fernando',
        id
    }

    if (id === 20) {
        callback(`El usuario con id ${id}, no existe`);
    } else {
        callback(null, usuario);
    }
}

getUsuarioById(10, (err, usuario) => {
    if (err) {
        console.log(err);
    }
    console.log('Usuario de base de datos', usuario)
});