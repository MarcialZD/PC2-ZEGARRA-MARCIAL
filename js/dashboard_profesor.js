// Definir cursos para cada profesor
const cursos = [
    {
        profesorId: 1,
        cursos: [
            { id: 1, nombre: "Curso de Matemáticas", descripcion: "Este curso cubre temas avanzados de matemáticas." },
            { id: 2, nombre: "Curso de Física", descripcion: "Este curso explora los principios fundamentales de la física." }
        ]
    },
    {
        profesorId: 2,
        cursos: [
            { id: 3, nombre: "Curso de Historia", descripcion: "Este curso abarca los eventos históricos más importantes." },
            { id: 4, nombre: "Curso de Literatura", descripcion: "Este curso analiza obras literarias clásicas y contemporáneas." }
        ]
    }
];

var profesorID = localStorage.getItem("userID");

function mostrarCursosProfesor() {
    var cursosProfesor = cursos.find(profesor => profesor.profesorId == profesorID).cursos;

    $("#lista-cursos").empty();

    cursosProfesor.forEach(function(curso) {
        $("#lista-cursos").append(`<li><a href="#" class="curso" data-id="${curso.id}">${curso.nombre}</a></li>`);
    });
}

function mostrarDescripcionCurso(cursoId) {
    var descripcion = cursos.find(profesor => profesor.profesorId == profesorID)
                            .cursos.find(curso => curso.id === cursoId).descripcion;
    $("#descripcion-curso").text(descripcion);
    $("#descripcion-curso").show();
}

$(document).ready(function(){
    mostrarCursosProfesor();

    $(document).on("click", ".curso", function(event) {
        event.preventDefault();
        var cursoId = parseInt($(this).data("id"));
        mostrarDescripcionCurso(cursoId);
    });
});

// se añadió un cerrar sesión en ancho pc
document.getElementById('cerrarSesion').addEventListener('click', function () {
    localStorage.removeItem("usuarioLogueado");
    location.href = "index.html";
});
// se añadió un cerrar sesión en ancho movil
document.getElementById('cerrarSesionToggle').addEventListener('click', function () {
    localStorage.removeItem("usuarioLogueado");
    location.href = "index.html";
});
function verificarAutenticacion() {
    if (!localStorage.getItem("usuarioLogueado")) {
        location.href = "index.html";
    }
}
verificarAutenticacion();