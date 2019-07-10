let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneraciòn',
    getNombre: function () {
        return `${nombre} ${apellido} - poder: ${poder}`
    }
}

let {nombre: primerNombre, apellido, poder} = deadpool;

console.log(primerNombre, apellido, poder);