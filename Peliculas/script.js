const API_URL = "http://localhost:3000/peliculas";

let peliculas = [];
let siguenteId = 1;

const formulario = document.getElementById("formulario");
const id = document.getElementById("id");
const titulo = document.getElementById("titulo");
const director = document.getElementById("director");
const año = document.getElementById("año");
const tabla = document.getElementById("tablaPeliculas");

mostrarPelicula();

async function mostrarPelicula() {

    const respuesta = await fetch(API_URL);

    peliculas = await respuesta.json();

    tabla.innerHTML = "";
    peliculas.forEach((pelicula) => {
        tabla.innerHTML += `
        <tr>
            <td> ${pelicula.id}</td>
            <td> ${pelicula.titulo}</td>
            <td> ${pelicula.director}</td>
            <td> ${pelicula.año}</td>
            <td>
                <button onclick = "editar(${pelicula.id})">
                    Editar
                </button>
                <button onclick = "eliminar(${pelicula.id})">
                    Eliminar
                </button>
            </td>
        </tr>
        `;
    });
}

formulario.addEventListener("submit", async (e) => {

    e.preventDefault(); // Evita que recarge la pagina

    const pelicula = {
        titulo: titulo.value,
        director: director.value,
        año: Number(año.value)
    };

    if (id.value === "") {
        let res = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pelicula)
        });



    } else {
        await fetch(`${API_URL}/${id.value}`, {  
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pelicula)
        });
    }

    formulario.reset();
    id.value = "";

    await mostrarPelicula();
});

function editar(idPelicula) {
    const pelicula = peliculas.find(p => p.id == idPelicula);

    if (!pelicula) {
        return;
    }

    id.value = pelicula.id;
    titulo.value = pelicula.titulo;
    director.value = pelicula.director;
    año.value = pelicula.año;
}

async function eliminar(idPelicula) {

    await fetch(`${API_URL}/${idPelicula}`, { method: "DELETE" });

    await mostrarPelicula();
}