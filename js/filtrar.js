const filtro = document.getElementById("cursoFiltro");
const cursos = document.querySelectorAll(".curso");

//recorre cada curso y revisa si la clase del curso coincide con la opcion seleccionada, si coincide muestra el curso y oculta los demas
filtro.addEventListener("change", function () {
    const valor = this.value;

    cursos.forEach(curso => {
        curso.style.display = (valor === "todos" || curso.classList.contains(valor)) ? "block" : "none";
    });
});