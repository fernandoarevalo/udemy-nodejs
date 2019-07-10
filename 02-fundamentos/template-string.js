let nombre = 'Deadpool';
let real = 'Wade Winston';

let nombreCompleto = nombre + ' ' + real
let nombreTemplate = `${nombre} ${real}`

console.log(nombreCompleto === nombreTemplate)

function getNombre() {
    return `${nombre} ${real}`
}

console.log(`El nombre completo es: ${ getNombre() }`)