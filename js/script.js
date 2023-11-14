function agregarUsuario() {
    var Nombre = document.getElementById("nombre").value;
    var Documento = document.getElementById("documento").value;
    var Password = document.getElementById("pdw").value;
    var Rol = document.getElementById("rol").value;
    if (documentoRepetido(Documento)) {
        alert("El documento no se puede agregar");
        return;
    }

    var tabla = document.getElementById("tablaUsuarios")
    var fila = tabla.insertRow();

    var celdaDocumento = fila.insertCell(0);
    var celdaNombre = fila.insertCell(1);
    var celdaPassword = fila.insertCell(2);
    var celdaRoles = fila.insertCell(3);
    celdaDocumento.innerHTML = Documento;
    celdaNombre.innerHTML = Nombre;
    celdaPassword.innerHTML = Password;
    celdaRoles.innerHTML = Rol;
}

function documentoRepetido(nuevoDocumento) {
    var tabla = document.getElementById('tablaUsuarios');
    for (var i = 1; i < tabla.rows.length; i++) {
        var documentoExistente = tabla.rows[i].cells[0].innerHTML;
        if (documentoExistente === nuevoDocumento) {
            return true; // El documento ya existe en la tabla
        }
    }
    return false; // El documento no está repetido
}

