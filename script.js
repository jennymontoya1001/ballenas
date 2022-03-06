
//Captura del formulario y almacenamiento en la variable llamda formulario
let formulario = document.querySelector('form');


//Llamar el controlador o escuchador de eventos del formulario
//El evento submit es el evento de envío
//Apenas se active el evento de envío debe ejecutar lo que dice el controlador de eventos addEventListener

formulario.addEventListener('submit', (e) => {

    e.preventDefault(); //Permite controlar eventos por defecto del formulario que hace que se pierdan los datos
    // y no permite que se almacenen en las variables

    //captura de información de las cajas de texto y almacenaiento en variables let
    let nombres = document.getElementById('inputNombres').value;
    let apellidos = document.getElementById('inputApellidos').value;
    let telefono = document.getElementById('inputTelefono').value;
    let observaciones = document.getElementById('inputObservaciones').value;

    //Condicional if para validar que no estés vacías las cajas de texto
    if (nombres === "" || apellidos === "" || telefono === "" || observaciones === "") {
        alert(`Los campos son obligatorios`)
    }else{
         //Mostrar en una alerta información almacenada en las variables
         alert(`Los datos ingresados son: 
         Nombres: ${nombres}
         Apellidos: ${apellidos}
         Teléfono: ${telefono}
         Observaciones: ${observaciones} `)
    }

    //Permite limpiar las cajas de texto del formulario
    document.getElementById('inputNombres').value = ""
    document.getElementById('inputApellidos').value = ""
    document.getElementById('inputTelefono').value = ""
    document.getElementById('inputObservaciones').value = ""

})