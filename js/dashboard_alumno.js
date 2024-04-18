$(document).ready(function(){
  
    var usuarioLogueado = localStorage.getItem("usuarioLogueado");
    var usernameAlumno = localStorage.getItem("usernameAlumno");
    
    if (!usuarioLogueado || !usernameAlumno) {
        window.location.href = "index.html";
        return;
    }

    $("#perfil").text("Bienvenido, " + usernameAlumno);

    $("#enviarEncuesta").click(function() {
        var profesorFavorito = $("input[name='profesorFavorito']:checked").val();
        var asignaturaGusta = $("input[name='asignaturaGusta']:checked").val();
        var claridadProfesor = [];
        $("input[name='claridadProfesor']:checked").each(function() {
            claridadProfesor.push($(this).val());
        });

        var mensaje = "Profesor favorito: " + profesorFavorito + "\n";
        mensaje += "¿Te gusta la asignatura? " + (asignaturaGusta ? asignaturaGusta : "No seleccionado") + "\n";
        mensaje += "Claridad del profesor: " + (claridadProfesor.length > 0 ? claridadProfesor.join(", ") : "No seleccionado");

        Swal.fire({
            title: "Encuesta enviada",
            text: mensaje,
            icon: "success",
            confirmButtonText: "Aceptar"
        });
    });
});
