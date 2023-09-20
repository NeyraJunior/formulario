function mostrarFechas() {
    const seguroSelect = document.getElementById("seguro");
    const fechasDiv = document.getElementById("fechas");

    if (seguroSelect.value === "Si") {
        fechasDiv.style.display = "block";
    } else {
        fechasDiv.style.display = "none";
    }
}

function enviarFormulario() {
    const mensajeDiv = document.getElementById("mensaje");
    const nombre = document.getElementById("nombre").value;
    const apellidoPaterno = document.getElementById("apellidoPaterno").value;
    const apellidoMaterno = document.getElementById("apellidoMaterno").value;
    const documento = document.getElementById("documento").value;
    const seguro = document.getElementById("seguro").value;

    if (!nombre || !apellidoPaterno || !apellidoMaterno || !documento || !seguro) {
        mensajeDiv.textContent = "Por favor, rellena todos los campos obligatorios.";
        mensajeDiv.style.backgroundColor = "#FF5733"; // Color de error
        mensajeDiv.style.display = "block";
    } else {
        mensajeDiv.textContent = "Tus datos fueron registrados con éxito";
        mensajeDiv.style.backgroundColor = "#4CAF50"; // Color de éxito
        mensajeDiv.style.display = "block";

        // Limpiar los campos del formulario
        const formulario = document.getElementById("registroForm");
        formulario.reset();

        // Ocultar el mensaje después de 3 segundos
        setTimeout(function() {
            mensajeDiv.style.display = "none";
        }, 3000);
    }
}

window.onload = function() {
    const seguroSelect = document.getElementById("seguro");
    seguroSelect.addEventListener("change", mostrarFechas());

    const botonEnviar = document.getElementById("enviar");
    botonEnviar.addEventListener("click", enviarFormulario);
};
