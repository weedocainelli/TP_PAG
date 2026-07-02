const consejos = [
    "Nunca gastes todo el boost de una sola vez.",
    "Recogé las almohadillas pequeñas cuando no necesites boost completo.",
    "En 2v2 y 3v3 rotá: no siempre vayas a la pelota.",
    "Practicá aerials todos los días en modo entrenamiento libre.",
    "Usá el powerslide para girar rápido sin perder velocidad.",
    "Revisá tus replays en Ballchasing para detectar errores.",
    "Quedate atento a la posición de tus compañeros antes de atacar.",
    "No hagas doble salto sin necesidad, guardalo para el aerial."
];

function renderizarConsejos(lista) {
    const contenedor = document.getElementById("lista-consejos");
    contenedor.innerHTML = "";

    if (lista.length === 0) {
        const vacio = document.createElement("li");
        vacio.textContent = "No se encontraron consejos.";
        contenedor.appendChild(vacio);
        return;
    }

    lista.forEach(consejo => {
        const item = document.createElement("li");
        item.textContent = consejo;
        contenedor.appendChild(item);
    });
}

function filtrarConsejos() {
    const texto = document.getElementById("buscador").value.toLowerCase();
    const filtrados = consejos.filter(c => c.toLowerCase().includes(texto));
    renderizarConsejos(filtrados);
}

function mostrarConsejoAleatorio() {
    const indice = Math.floor(Math.random() * consejos.length);
    const parrafo = document.getElementById("consejo-random");
    parrafo.textContent = consejos[indice];
}

function limpiarErrores() {
    document.getElementById("error-nombre").textContent = "";
    document.getElementById("error-email").textContent = "";
    document.getElementById("error-mensaje").textContent = "";
    const feedback = document.getElementById("form-feedback");
    feedback.textContent = "";
    feedback.className = "";
}

function validarFormulario(nombre, email, mensaje) {
    if (nombre === "") {
        throw { campo: "error-nombre", mensaje: "El nombre es obligatorio." };
    }

    if (email === "") {
        throw { campo: "error-email", mensaje: "El email es obligatorio." };
    }

    const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!patronEmail.test(email)) {
        throw { campo: "error-email", mensaje: "Ingresá un email válido." };
    }

    if (mensaje === "") {
        throw { campo: "error-mensaje", mensaje: "El mensaje es obligatorio." };
    }

    return true;
}

function manejarEnvioFormulario(evento) {
    evento.preventDefault();
    limpiarErrores();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const feedback = document.getElementById("form-feedback");

    try {
        validarFormulario(nombre, email, mensaje);
        feedback.textContent = "¡Mensaje enviado correctamente!";
        feedback.className = "exito";
        document.getElementById("form-contacto").reset();
    } catch (error) {
        document.getElementById(error.campo).textContent = error.mensaje;
        feedback.textContent = "Revisá los campos marcados.";
        feedback.className = "error";
    }
}

function inicializar() {
    renderizarConsejos(consejos);
    document.getElementById("buscador").addEventListener("input", filtrarConsejos);
    document.getElementById("btn-aleatorio").addEventListener("click", mostrarConsejoAleatorio);
    document.getElementById("form-contacto").addEventListener("submit", manejarEnvioFormulario);
}

document.addEventListener("DOMContentLoaded", inicializar);