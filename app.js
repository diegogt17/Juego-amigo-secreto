// 1. Crear un array para guardar los nombres
let amigos = [];

// 2. Función para agregar amigos
function agregarAmigo() {
    // Aquí se captura el valor del campo de entrada, es decir, el nombre del amigo
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Aquí se valida que se haya escrito un nombre válido
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Actualiza el array de amigos
    amigos.push(nombre);

    // Limpia el campo de entrada
    input.value = "";

    // Actualiza la lista de amigos en pantalla
    actualizarLista();
}

// 3. Función para actualizar la lista de amigos
function actualizarLista() {
    // Obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el arreglo y crear elementos <li>
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// 4. Función para sortear un amigo
function sortearAmigo() {
    // Se valida que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Agrega al menos un nombre de tus amigos.");
        return;
    }

    // Se genera un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtiene el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en pantalla
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
