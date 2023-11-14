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
}