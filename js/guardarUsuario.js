document.getElementById("formRegistro").addEventListener("submit", function (e) {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;


    const nuevoUsuario = {
        usuario: usuario,
        contrasena: contrasena,
        telefono: telefono,
        correo: correo
    };

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Usuario registrado con éxito");
    window.location.href = "../index.html"
});

