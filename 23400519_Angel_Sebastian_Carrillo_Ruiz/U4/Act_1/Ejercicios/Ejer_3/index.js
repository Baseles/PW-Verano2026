
function ej1(base, potencia) {

    let resultado = 1;

    for (let i = 1; i <= potencia; i++) {
        resultado = base * resultado
    }
    return console.log("Resultado de la operacion es: " + resultado)

}

ej1(10, 2);

function eje2() {
    let saldo = 5000;
    let operacion

    do {

        operacion = Number(prompt("Menu de operaciones: \n1. Consultar saldo \n 2. Depositar \n 3.Retirar \n 4.Salir"));
        switch (operacion) {
            case (1):
                console.log("Tu saldo actual es de: " + saldo);
                break;
            case (2):
                let deposito = Number(prompt("Por favor ingrese el monto a ingresar a su cuenta: "));
                saldo += deposito;
                break;

            case (3):
                let retirar = Number(prompt("Por favor ingrese la cantidad a retirar de su cuenta: (Su cuenta actual contiene: " + saldo));
                if (retirar > saldo) {
                    console.log("No contiene la cantidad deseada a retirar")
                    break;
                } else {
                    saldo -= retirar;
                    console.log("Retiro de dinero exitoso usted retiro " + retirar + " \nsu saldo actual es de:" + saldo);
                    break;
                }
            case (4):
                console.log("Gracias por visitarnos hasta luego");
                break;

            default:
                console.log("Por favor ingrese una opcion valida de operacion");
        }
    } while (operacion !== 4)
}

eje2();

function eje3() {
    let d1;
    let d2;

    let cont = 1;
    do {
        d1 = Math.floor(Math.random() * 6) + 1;
        d2 = Math.floor(Math.random() * 6) + 1;
        cont++;
        console.log("Veces repetidas: " + cont)
        console.log(d1 + d2);
    } while (d1 !== d2);
}

eje3();

// numero a adivinar
function eje4() {
    let numAle = Math.floor(Math.random() * 100) + 1;

    let num;
    let intentos = 7;
    let intentosUsados = 0;
    let acierto = false;


    for (let i = 0; i <= intentos; i++) {

        num = Number(prompt("Por favor ingrese el numero que cree que se genero: " + "Intento: " + intentosUsados));
        console.log("Numero ingresado: " + num)
        intentosUsados = i;

        if (num > numAle) {
            console.log("Intenta con un numero menor")
        } else {
            console.log("Intenta con un numero mayor")
        }
        
        if (num === numAle) {
            acierto = true;
            break;
        }

    }
    if (acierto) {
        console.log("Bien ah acertado el numero: " + numAle + " Intentos: " + intentosUsados)
    } else {
        console.log("Se te acabaron los aciertos man el numero era: " + numAle)
    }
}

eje4();

function eje5() {
    let ventas = [];

    let numVentas = Number(prompt("¿Cuantas ventas deseas registrar?"));

    for (let i = 1; i <= numVentas; i++) {
        let vendedor = prompt("Venta " + i + " - Nombre del vendedor:");
        let producto = prompt("Venta " + i + " - Nombre del producto:");
        let cantidad = Number(prompt("Venta " + i + " - Cantidad vendida:"));
        let precio = Number(prompt("Venta " + i + " - Precio unitario:"));

        ventas.push({
            vendedor: vendedor,
            producto: producto,
            cantidad: cantidad,
            precio: precio,
            total: cantidad * precio
        });
    }

    let totalVentas = ventas.length;

    let totalIngresos = ventas.map(v => v.total).reduce((acc, t) => acc + t, 0);

    let unidadesPorProducto = {};
    ventas.forEach(venta => {
        unidadesPorProducto[venta.producto] = (unidadesPorProducto[venta.producto] || 0) + venta.cantidad;
    });

    let ventasPorVendedor = {};
    ventas.forEach(venta => {
        ventasPorVendedor[venta.vendedor] = (ventasPorVendedor[venta.vendedor] || 0) + venta.total;
    });

    let mejorVendedor = "";
    let mejorMonto = 0;
    for (let vendedor in ventasPorVendedor) {
        if (ventasPorVendedor[vendedor] > mejorMonto) {
            mejorMonto = ventasPorVendedor[vendedor];
            mejorVendedor = vendedor;
        }
    }

    console.log("Total de ventas realizadas: " + totalVentas);
    console.log("Total de ingresos: $" + totalIngresos.toFixed(2));
    console.log("Unidades vendidas por producto:");
    for (let producto in unidadesPorProducto) {
        console.log("- " + producto + ": " + unidadesPorProducto[producto] + " unidades");
    }
    console.log("Vendedor con más ventas: " + mejorVendedor + " ($" + mejorMonto + ")");
}

eje5();