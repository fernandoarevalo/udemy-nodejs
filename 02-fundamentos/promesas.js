let empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Mónica'
    },
    {
        id: 3,
        nombre: 'Juan'
    }
];

let salarios = [
    {
        id: 1,
        salario: 10000
    },
    {
        id: 2,
        salario: 20000
    }
];

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleado = empleados.find(empleado => empleado.id === id);

        if (!empleado) {
            reject(`El empleado con id: ${id}, no existe.`);
        } else {
            resolve(empleado);
        }
    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salario = salarios.find(salario => salario.id === empleado.id);

        if (!salario) {
            reject(`El salario con id: ${empleado.id}, no existe.`);
        } else {
            let salarioEmp = {
                nombre: empleado.nombre,
                salario: salario.salario
            }
            resolve(salarioEmp);
        }
    });
}

// Mala practica

// getEmpleado(3).then(empleado => {
//     getSalario(empleado).then(salario => {
//         console.log('Salario de BD', salario);
//     }, (err) => {
//         console.log(err);
//     });
// }, (err) => {
//     console.log(err);
// });


getEmpleado(10).then(empleado => {
    return getSalario(empleado); 
}).then(resp => {
    console.log(`El salario de ${resp.nombre} es de ${resp.salario}`)
}).catch(err => {
    console.log(err);
});