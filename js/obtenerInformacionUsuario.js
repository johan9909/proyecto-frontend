
document.addEventListener("DOMContentLoaded", () => {
    const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));

    if (usuarioLogueado) {

        document.getElementById("nombreUsuario").textContent = usuarioLogueado.usuario;
        document.getElementById("correoUsuario").textContent = usuarioLogueado.correo;
        document.getElementById("telefonoUsuario").textContent = usuarioLogueado.telefono;

    } else {

        alert("No existe usuario logueado")
        window.location.href = "index.html";
    }
});

