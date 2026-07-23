const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

const PORT = 3000;

let peliculas = [
    {
        id: 1,
        titulo: "Grinch",
        director: "Ron Howard",
        año: 2000
    },
    {
        id: 2,
        titulo: "Rocky",
        director: "John G. Avildsen",
        año: 1976
    }
];

let idActual = peliculas.length + 1

// Obtener todas las peliculas
app.get("/peliculas", (req, res) => {
    res.json(peliculas);
});

app.get("/peliculas/:id", (req, res) => {
    const id = Number(req.params.id);

    const pelicula = peliculas.find(
        pelicula => pelicula.id === id
    );
    if (!pelicula) {
        return res.status(404).json({
            mensaje: "Pelicula no encontrada"
        });
    }
    res.json(pelicula);
});

app.post("/peliculas", (req, res) => {
    const { titulo, director, año } = req.body;
    if (!titulo || !director || !año) {
        return res.status(400).json({
            mensaje: "Faltan datos de la pelicula"
        });
    }
    const nuevaPelicula = {
        id: idActual++,
        titulo: titulo,
        director: director,
        año: Number(año)
    };
    peliculas.push(nuevaPelicula);
    res.status(201).json({
        mensaje: "Pelicula registrada correctamente",
        pelicula: nuevaPelicula
    });
});

//Actualizar pelicula
app.put("/peliculas/:id", (req, res) => {
    const id = Number(req.params.id);
    const { titulo, director, año } = req.body;

    if (!titulo || !director || !año) {
        return res.status(400).json({
            mensaje: "Falta datos de la pelicula"
        })
    }
    const indice = peliculas.findIndex(
        pelicula => pelicula.id === id
    );

    if (indice === -1) {
        return res.status(404).json({
            mensaje: "pelicula no encontrada"
        })
    };

    peliculas[indice] = {
        id: id,
        titulo: titulo,
        director: director,
        año: Number(año)
    };

    res.json({
        mensaje: "Pelicula actualizada correctamente",
        pelicula: peliculas[indice]
    });

});

app.delete("/peliculas/:id", (req, res) => {
    const id = Number(req.params.id);
    const indice = peliculas.findIndex(
        pelicula => pelicula.id === id
    );

    if (indice === -1) {
        return res.status(404).json({
            mensaje: "pelicula no encontrada"
        });
    }

    const peliculaEleminada = peliculas[indice];

    peliculas.splice(indice, 1);

    res.json({
        mensaje: "Pelicula eleminada correctamente",
        pelicula: peliculaEleminada
    });

});

app.get("/", (req, res) => {
    res.send("Bienvenido a mi primer servidor con express");
});

app.get("/pagina", (req, res) => {
    res.send(`
            <style> 
                h1{
                    color: red
                }
            </style>
            <h1>Mi Página </h1>
            <p> Creada con Express</p>
        `)
})

app.get("/saludo/:nombre", (req, res) => {
    const nombre = req.params.nombre;
    res.send("Hola " + nombre);
})

app.listen(PORT, () => {
    console.log("Servidor iniciado en http://localhost:" + PORT);
});

// Numero par y impar
app.get("/par/:numero", (req, res) => {
    const numero = req.params.numero;
    const mensaje = numero % 2 == 0 ? "El numero es par" : "El numero es impar"
    res.send(mensaje);
});

// Para saber si eres mayor o menor de edad
app.get("/edad/:edad", (req, res) => {
    const edad = req.params.edad;
    const mensaje = edad == 18 ? "Es mayor de edad" : "Eres todavia menor de edad"

    res.send(mensaje);
});

// que haga suma, resta, multi, division
app.get("/calculadora/:operacion/:a/:b", (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    var op = req.params.operacion;

    var resultado;

    resultado = op == "suma" ? a + b : op == "resta" ? a - b : op == "multiplicacion" ? a * b : op == "division" ?
        a / b : "No valido"

    res.send("Resultado de la " + op + " es " + resultado);

});

//4.- Tabla de multiplicar
app.get("/tabla/:numero", (req, res) => {

    const num = Number(req.params.numero);
    var resultado;
    let mensaje = "";

    for (let i = 1; i <= 10; i++) {
        mensaje += num + " X " + i + " = " + num * i;
        mensaje += `<br>`;
    }
    res.send(mensaje);
})

// 5.- Calificacion

app.get("/calificacion/:nota", (req, res) => {
    const nota = Number(req.params.nota);

    const mensaje = nota >= 90 ? "Exelente" : nota >= 80 ? "Muy bien" : nota >= 70 ? "Aprobado" : "Reprobado";

    res.send(mensaje);

});


