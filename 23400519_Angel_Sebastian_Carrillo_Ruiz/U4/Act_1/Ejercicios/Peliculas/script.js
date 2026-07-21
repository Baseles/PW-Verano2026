let peliculas = [];
let siguenteId = 1;

const formulario = document.getElementById("formulario");
const id = document.getElementById("id");
const titulo = document.getElementById("titulo");
const director = document.getElementById("director");
const año = document.getElementById("año");
const tabla = document.getElementById("tablaPeliculas");

function mostrarPelicula(){
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

formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita que recarge la pagina
    if (id.value == "") {
        peliculas.push({
            id: siguenteId++,
            titulo: titulo.value, 
            director: director.value, 
            año: Number(año.value)
        });
    } else {
        const pEncontrada = peliculas.find(p => p.id == id.value);
        if (pEncontrada) {
            pEncontrada.titulo = titulo.value;
            pEncontrada.director = director.value;
            pEncontrada.año = Number(año.value);
        }
    }
    formulario.reset();
    id.value = "";
    console.log(peliculas);
    mostrarPelicula();
});

function editar(idPelicula){
    const pelicula = peliculas.find(p => p.id == idPelicula);
    id.value = pelicula.id;
    titulo.value = pelicula.titulo;
    director.value = pelicula.director;
    año.value = pelicula.año;
}

function eliminar(idPelicula){
    peliculas = peliculas.filter(p => p.id != idPelicula);
    mostrarPelicula();
}