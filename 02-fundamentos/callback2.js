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

let getEmpleado = (id, callback) => {
    let empleado = empleados.find(empleado => empleado.id === id);

    if (!empleado) {
        callback(`El empleado con id: ${id}, no existe.`);
    } else {
        callback(null, empleado);
    }
}

let getSalario = (empleado, callback) => {
    let salario = salarios.find(salario => salario.id === empleado.id);

    if (!salario) {
        callback(`No se encontró un salario para el usuario ${empleado.nombre}`);
    } else {
        let salarioEmp = {
            nombre: empleado.nombre,
            salario: salario.salario
        }
        callback(null, salarioEmp);
    }
}

getEmpleado(3, (err, empleado) => {
    if (err) {
        console.log(err);
    }

    console.log(empleado);
    
    getSalario(empleado, (err, salarioEmpleado) => {
        if (err) {
            console.log(err);
        }

        console.log(salarioEmpleado);
    });
});
