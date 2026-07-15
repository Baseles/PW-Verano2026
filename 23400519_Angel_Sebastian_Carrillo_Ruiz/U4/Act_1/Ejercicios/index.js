/*
let suma = 10 + 5;
let resta = 10 - 5;
let multiplicacion = 10 * 5;
let division = 10 / 5;
let residuo = 10 % 5;

console.log("Suma: ", suma);
console.log("resta: ", resta);
console.log("multiplicacion: ", multiplicacion);
console.log("division: ", division);
console.log("residuo: ", residuo);

console.log(5 > 3);
console.log(5 < 3);

console.log(5 <= 4);
console.log(5 == "5");
console.log(5 === "5");
console.log(5 != 3);

let calificacion = 85;

if (calificacion >= 70) {
    if (calificacion >= 90) {
        console.log("Exelente");
    } else if (calificacion >= 70) {
        console.log("aprobado")
    } else {
        console.log("Reprobado");
    }
}

let tabla = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${tabla} x ${i} = ${tabla*i}`)
}

let contador = 1 ;

while (contador <= 5){
    console.log(contador);
    contador ++;
}

function saludar(nombre) {
    console.log("hola " +  nombre)
}

saludar("Sebas")

function aletario(){
    let n  = Math.floor(Math.random() * 100)
    console.log(n)
}
aletario();

let numeros = [5,2]
console.log(numeros)
numeros.push(20)
numeros.push(8)
numeros.push(53)

for (let i = 0; i< numeros.length; i++){
    console.log(numeros[i])
}
    */

let persona = {
    nombre: "juan",
    edad: 20,
    ciudad: "Tepic"
} // Objeto
console.log(persona)
persona.nombre = "Carlos"
persona.carrera = "ISC";
console.log(persona)