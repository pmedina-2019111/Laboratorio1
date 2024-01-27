
function mostrarSeccion() {
    var seccion = document.getElementById("miSeccion");
    seccion.style.display = "block";
}

function cerrarSeccion() {
    var seccion = document.getElementById("miSeccion");
    seccion.style.display = "none";
}

function enviarFormulario() {
    document.getElementById('botonEnviar').setAttribute('disabled', 'true');
    document.querySelector('form').classList.add('cargando');
}