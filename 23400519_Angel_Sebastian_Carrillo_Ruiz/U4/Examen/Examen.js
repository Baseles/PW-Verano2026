
// Ejer 1 Num Aleatorios 1 al 100 generar 20 num
function ejer1() {
    do {

        let numAlt = Math.random() * 101;
        let par = 0;
        let impar = 0;
        let numMayor = 0;
        let numMenor = 0;

        let a = [numAlt];

    } while (numAlt.length = 20);

    if ((numAlt % 2) = 0) {
        par++;

    } else {
        impar++;
    }

    if (numAlt > numMayor) {
        numMayor = numAlt;

    }
    if (numAlt < numMenor) {
        numMenor = numAlt
    }

    console.log("Numeros generados: " + a);
    console.log("Numeros pares: " + par);
    console.log("Numeros impares: " + impar);
    console.log("Numero mayor: " + numMayor);
    console.log("Numero Menor: " + numMenor);
}

ejer1();

// Ejercicio 2 Ejercicio del exponente con parametros y usando ciclo for

function ejer2(base, exponente) {

    let resultado = 1;

    for (let i = 1; i <= exponente; i++) {
        resultado = resultado * base
    }

    return console.log("El resultado de la operacion:" + base + "^" + exponente + " es: " + resultado);
}

ejer2(5, 2);

/*
Ejercicio 3 esPerfecto() que reciba un número entero positivo como parametro.
Determina si es igual ala suma de todos sus divisores propios positivos, excluyendo al mismo numero,
USANDO SOLO UN CICLO FOR.
por ejemplo 6 por que sus divisores propios 1,2 y 3 cumple 1 + 2 + 3 = 6
12 no es perfecto por que 1,2,3,4 y 6 la suma da 16
*/
function esPerfecto(num) {

    let suma = 0;
    let resto;

    do {
        if (num <= 0) {
            console.log("Por favor ingrese un numero positivo o mayor que 0")
        }
    } while (num <= 0);

    for (let i = 1; i < num; i++) {

        resto = num % i;

        if (resto = 0) {
            suma = (num / i) + suma;

        } else if (suma = num) {
            return console.log("La suma fue: " + suma + " asi que es " + true);
        } else {
            return console.log("La suma fue: " + suma + " asi que es " + false);

        }
    }
}

esPerfecto(6);

// EJercicio 4 Piramide de * usando solamente ciclo for
/* 4
    *
   ***
  *****
 *******
*/
function ejer4() {

    let n = Number(prompt("Por favor ingrese la cantidad de altura que tendra la piramide"));


    if (n < 0) {
        console.log("por favor ingrese un numero valido");
    }
    for (let i = 0; i <= n; i++) {
        if (n > i) {
            console.log("*");
        } else {
            console.log("\n");
        }
    }
}

ejer4();

// Ejercicio 5 

function ejer5() {

    let cantidad = prompt("Por favor ingresa la cantidad de alumnos");

    let nombre = prompt("Nombre del estudiante: ");
    let carrera = prompt("Nombre del estudiante: ");
    let calif = prompt("Nombre del estudiante: ");

    alumnos.push = {
        nombre: nombre,
        carrera: carrera,
        calif: calif
    }

    let alumnosRegristrados = {}

    alumnosRegristrados = [alumnosRegristrados]

}
