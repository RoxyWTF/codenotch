
/* =========== Roxy Pérez - Día 5 ===========
    ***** Funciones - Reto 2 ***** */

function add(num1, num2, num3) {
    let result;
    if (isNaN(num1) || (isNaN(num2)) || (isNaN(num3))) {
        return console.log("Por favor, verifica que ambos sean números");
    }
    result = num1 + num2 + num3;
    return `Resultado de ${num1} + ${num2} + ${num3} = ` + result.toString();
}

function subs(num1, num2) {
    let result;
    if (isNaN(num1) || (isNaN(num2))) {
        return console.log("Por favor, verifica que ambos sean números");
    }
    result = num1 - num2;
    return `Resultado de ${num1} - ${num2} = ` + result.toString();
}

function mult(num1, num2) {
    let result;
    if (isNaN(num1) || (isNaN(num2))) {
        return console.log("Por favor, verifica que ambos sean números");
    }
    result = num1 * num2;
    return `Resultado de ${num1} * ${num2} = ` + result.toString();
}

function div(num1, num2) {
    let result;
    if (isNaN(num1) || (isNaN(num2))) {
        return console.log("Por favor, verifica que ambos sean números");
    }
    result = num1 / num2;
    return `Resultado de ${num1} / ${num2} = ` + result.toString();
}

function square(num) {
    return `Cuadrado de ${num} = ` + num ** 2;
}

module.exports = { add, subs, mult, div, square }