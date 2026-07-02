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

function inicializar() {
    renderizarConsejos(consejos);
    document.getElementById("buscador").addEventListener("input", filtrarConsejos);
}

document.addEventListener("DOMContentLoaded", inicializar);