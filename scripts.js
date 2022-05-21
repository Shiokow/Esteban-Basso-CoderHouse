

//inicializacion de la página
var valorTotal = 0;
var totalLocal = localStorage.getItem("totalLocal");
var form = document.forms['form'];                        

if (totalLocal!=0){
    valorTotal = localStorage.getItem("totalLocal") 
}

//Fin de inicializacion

//El funcionamiento de la calculadora es el mismo pero necesitaba que ahora interactue con los datos del formulario

form.onsubmit = function (e) {
    e.preventDefault();

    const formatos = new Array('libro', 'comic', 'revista');
    var tipos = document.getElementsByName('tipo');
    var colores = document.getElementsByName('color');
    var cantidad = document.getElementById("cantidad").value;

    let valorTotalLibro = 0;
    let valorTotalColor = 0;
    let valorTotalCantidad = 0;

    valorTotalLibro = calcularTipo(tipos);
    valorTotalColor = calcularColor(colores);
    valorTotalCantidad = calcularCantidad(cantidad);
    valorTotal = valorTotalLibro + valorTotalColor + valorTotalCantidad;
   Swal.fire({
        title: 'Presupuesto Generado',
        text: 'Su total es de: $' + valorTotal,
        icon: 'success',
        confirmButtonText: 'Aceptar'
    })

    localStorage.setItem("totalLocal",valorTotal);
}

function calcularTipo(tipos) {

    const valorLibro = 1000;
    const valorComic = 750;
    const valorRevista = 300;

    let total = 0;

    let tipoSeleccionado = 0;

    for (var tipo of tipos) {
        if (tipo.checked) {
            tipoSeleccionado = tipo.value;
            break;
        }
    }

    switch (tipoSeleccionado) {
        case "1":
            total = valorLibro;
            break;
        case "2":
            total = valorRevista;
            break;
        case "3":
            total = valorComic;
            break;

    }

    return total;
}

function calcularColor(colores) {
    const valorColor = 1000;
    const valorBlancoYNegro = 500;

    let total = 0;

    let colorSeleccionado = 0;

    for (var color of colores) {
        if (color.checked) {
            colorSeleccionado = color.value;
            break;
        }
    }

    switch (colorSeleccionado) {
        case "1":
            total = valorColor;
            break;
        case "0":
            total = valorBlancoYNegro;
            break;

    }

    return total;
}

function calcularCantidad(cantidad) {

    let total;

    if (cantidad <= 100) {
        total = 500;
    } else if (cantidad > 100 && cantidad <= 500) {
        total = 1000;
    } else if (cantidad > 500 && cantidad <= 1000) {
        total = 1500;
    } else {
        alert("El libro no puede superar las 1000 páginas");
    }

    return total;
    
}

function mostrarLocal(){
    valorTotal = localStorage.getItem("totalLocal");
    if(valorTotal == 0){
        Swal.fire({
        title: 'error',
        text: 'No existe un presupuesto previo.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
        })
    
    }else{

        
        Swal.fire({
        title: '$'+valorTotal,
        text: 'Presupuesto generado.' ,
        icon: 'success',
        confirmButtonText: 'Aceptar'
        
    })
    };

}

//Incorpore tostify pero me hace conflicto con el css

/*
const myFunction = () => {
    Toastify({
        text: "Prueba",
        duration: 2000,
        gravity: 'bottom',
    }).showToast();
};

setInterval(myFunction, 1000);
*/
function sendEmail() {

let email = document.getElementById('inputEmail').value
let valorTotalEmail = localStorage.getItem("totalLocal");
const DateTime = luxon.DateTime
const now = DateTime.now().plus({ days: 30, minutes: 15 });
let now2 = now.toLocaleString(DateTime.DATE_FULL);


Email.send({
Host: "smtp.elasticemail.com",
Port: 2525,
Username : "shiokoimpresiones@gmail.com",
Password : "068BF0620E4286B2EEF5254FD373D204F89B",
To : email,
From : "shiokoimpresiones@gmail.com",
Subject : "Presupuesto Shioko Impresiones",
Body : "Gracias por confiar en nosotros, tu presupuesto es de " + valorTotalEmail +
 ". Su presupuesto es válido hasta dentro de 30 dias. Expira el " + now2,
}).then(
    Swal.fire({
        title: 'Presupuesto enviado.',
        text: 'Presupuesto enviado a ' + email +' exitosamente.' ,
        icon: 'success',
        confirmButtonText: 'Aceptar'
    })
);
}
