function obtenerFechasEntre(fechaInicial, fechaFinal) {
    const fechas = [];
    let fechaActual = new Date(fechaInicial);

    // Agregar fechas al arreglo mientras la fecha actual sea menor o igual a la fecha final
    while (fechaActual <= fechaFinal) {
        fechas.push(new Date(fechaActual));
        fechaActual.setDate(fechaActual.getDate() + 1); // Avanzar un día
    }

    return fechas;
}

module.exports = { obtenerFechasEntre }