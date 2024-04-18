const credenciales = {
    profesores: [
        { id: 1, usuario: "profesor1", contraseña: "123456" },
        { id: 2, usuario: "profesor2", contraseña: "abcdef" },
        
    ],
    alumnos: [
        { id: 1, usuario: "alumno1", contraseña: "abc123" },
        { id: 2, usuario: "alumno2", contraseña: "xyz789" },
        
    ]
};
$(document).ready(function(){
    $("#login").click(function(){
        var usuario = $("#usuario").val();
        var contraseña = $("#password").val();
        
        for(var i = 0; i < credenciales.profesores.length; i++) {
            if(usuario === credenciales.profesores[i].usuario && contraseña === credenciales.profesores[i].contraseña) {
                localStorage.setItem("usuarioLogueado", true);
                localStorage.setItem("userID", credenciales.profesores[i].id);
                alert("¡Bienvenido Profesor!");
                location.href = "dashboard_profe.html";
                return;
            }
        }
        
        for(var j = 0; j < credenciales.alumnos.length; j++) {
            if(usuario === credenciales.alumnos[j].usuario && contraseña === credenciales.alumnos[j].contraseña) {
                localStorage.setItem("usuarioLogueado", true);
                localStorage.setItem("userID", credenciales.alumnos[j].id);
                localStorage.setItem("usernameAlumno", credenciales.alumnos[j].usuario); // Aquí se guarda el nombre de usuario
                alert("¡Bienvenido Alumno!");
                location.href = "dashboard_alumno.html";
                return;
            }
        }
        
        alert("Usuario o contraseña incorrectos");
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