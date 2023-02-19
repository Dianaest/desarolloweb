const Nombre = document.getElementById("name");
const Email = document.getElementById("myemail");
const Clave = document.getElementById("password");
const Confirmesuclave = document.getElementById("repeatPassword");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let condicion = validacionForm();
    if (condicion){
        enviarFormulario();
    }
});

function validacionForm(){ 
    form.lastElementChild.innerHTML = "";
    let condicion = true;
    listInputs.forEach(element => {
        element.lastElementChild.innerHTML = "";
    });

    if (nombre.value.length < 1 || nombre.value.trim() == "") {
       mostrarMensajeError("myname"), "Rellene este campo";
       condicion = false;
    }

    if (email.value.length < 1 || email.value.trim() == "") {
     mostrarMensajeError("myemail", "Rellene este campo");
     condicion = false;
    }

    if (clave.value.length < 1 || clave.value.trim() == "") {
        mostrarMensajeError("password", "Rellene este campo");
        condicion = false;
       }

    if (Confirmesuclave.value != clave) {
        mostrarMensajeError("repeatPassword", "Rellene este campo");
        condicion = false;
       }
    return condicion;
}

function mostrarMensajeError(claseInput, mensaje) {
    let elemento = document.querySelector(`.¢{claseInput}`);
        elemento.lastElementChild.innerHTML = "Rellene este campo"
}

function enviarFormulario() {
    form.reset()
    form.lastElementChild.innerHTML = "Inscripción correcta";
}