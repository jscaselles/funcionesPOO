var idsAgregados = [];
class Persona{
    //atributos 
    //constructor

    constructor(id, nombre, password, roles){
        this.id = id;
        this.nombre = nombre;
        this.password = password;
        this.roles = roles;
    }
    //metodos
    creaObjeto(){
        const idH = document.getElementById("documento").value;
        var nombreH = document.getElementById("nombre").value;
        var passwordH = document.getElementById("pdw").value;
        var rolH = document.getElementById("rol").value;
        if (idsAgregados.includes(idH)) {
            alert("ID duplicado. No se pueden agregar datos duplicados.");
            return; 
        }
        idsAgregados.push(idH);
        persona.id = idH;
        persona.nombre = nombreH;
        persona.password = passwordH;
        persona.roles = rolH;
        persona.leaObjeto();
    }
    leaObjeto(){
        var tabla = document.getElementById("tablaUsuarios")
        var fila = tabla.insertRow();
        var celdaDocumento = fila.insertCell(0);
        var celdaNombre = fila.insertCell(1);
        var celdaPassword = fila.insertCell(2);
        var celdaRoles = fila.insertCell(3);
        celdaDocumento.innerHTML = persona.id;
        celdaNombre.innerHTML = persona.nombre;
        celdaPassword.innerHTML = persona.password;
        celdaRoles.innerHTML = persona.roles;
    }


    actualizaObjeto() {
        var idActualizar = document.getElementById("documento").value;
        var nombreActualizar = document.getElementById("nombre").value;
        var passwordActualizar = document.getElementById("pdw").value;
        var rolActualizar = document.getElementById("rol").value;

        // Verificar si el ID a actualizar existe en el arreglo
        var index = idsAgregados.indexOf(idActualizar);
        if (index === -1) {
            alert("ID no encontrado. No se puede actualizar.");
            return;
        }

        // Actualizar los valores en el arreglo
        var personaActualizar = new Persona(idActualizar, nombreActualizar, passwordActualizar, rolActualizar);
        idsAgregados[index] = personaActualizar.id;

        // Actualizar la fila en la tabla
        var tabla = document.getElementById("tablaUsuarios");
        var fila = tabla.rows[index + 1]; // +1 porque la primera fila es la cabecera
        fila.cells[0].innerHTML = personaActualizar.id;
        fila.cells[1].innerHTML = personaActualizar.nombre;
        fila.cells[2].innerHTML = personaActualizar.password;
        fila.cells[3].innerHTML = personaActualizar.roles;

        // Limpiar los campos del formulario
        document.getElementById("documento").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("pdw").value = "";
        document.getElementById("rol").value = "";

        alert("Usuario actualizado correctamente.");
    }
    eliminaObjeto() {
        var idEliminar = document.getElementById("documento").value;

        // Verificar si el ID a eliminar existe en el arreglo
        var index = idsAgregados.indexOf(idEliminar);
        if (index === -1) {
            alert("ID no encontrado. No se puede eliminar.");
            return;
        }
        // Eliminar el ID del arreglo
        idsAgregados.splice(index, 1);

        // Eliminar la fila de la tabla
        var tabla = document.getElementById("tablaUsuarios");
        tabla.deleteRow(index + 1); // +1 porque la primera fila es la cabecera

        // Limpiar los campos del formulario
        document.getElementById("documento").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("pdw").value = "";
        document.getElementById("rol").value = "";

        alert("Usuario eliminado correctamente.");
    }
}
