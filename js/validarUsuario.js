const form = document.querySelector('#loginForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const usuarioInput = document.getElementById('usuario').value;
    console.log(usuarioInput);

    const passwordInput = document.getElementById('contrasena').value;
    console.log(passwordInput);
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    console.log(`usuarios validar ${usuarios.usuario} CONTRA ${usuarios.contrasena}`);

    const usuarioValido = usuarios.find(user =>
        user.usuario === usuarioInput && user.contrasena === passwordInput
    );

    if (usuarioValido) {
        localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioValido));
        window.location.href = "proyecto-frontend/html/dashboard.html";
    } else {
        alert("Usuario no encontrado, valide las credenciales o registrese primero");
    }
});
