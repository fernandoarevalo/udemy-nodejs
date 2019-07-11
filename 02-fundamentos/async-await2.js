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

let getEmpleado = async (id) => {
    let empleado = empleados.find(empleado => empleado.id === id);
    if (!empleado) {
        throw new Error(`El empleado con id: ${id}, no existe.`);
    } else {
        return empleado;
    }
}

let getSalario = async (empleado) => {
    let salario = salarios.find(salario => salario.id === empleado.id);

    if (!salario) {
        throw new Error(`El salario con id: ${empleado.id}, no existe.`);
    } else {
        let salarioEmp = {
            nombre: empleado.nombre,
            salario: salario.salario
        }
        return salarioEmp;
    }
}

let getInformacion = async (id) => {

    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    return `${resp.nombre} tiene un salario de $${resp.salario}`
}

getInformacion(3)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));