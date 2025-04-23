const links = document.querySelectorAll(".nav-link");

const paginaActual = window.location.pathname.split("/").pop()
console.log(`pagina actual : ${paginaActual}`);

links.forEach(link => {

    const atributoLink = link.getAttribute("href");
    console.log(`atributo ${atributoLink}`)

    const activo = paginaActual === atributoLink
    console.log(activo)

    link.classList.toggle("active", activo);

})