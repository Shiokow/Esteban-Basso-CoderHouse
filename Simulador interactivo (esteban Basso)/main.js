//______     _       _                   ____
//|  ____|   | |     | |                 |  _ \                     
// | |__   ___| |_ ___| |__   __ _ _ __   | |_) | __ _ ___ ___  ___
//|  __| / __| __/ _ \ '_ \ / _` | '_ \  |  _ < / _` / __/ __|/ _ \ 
// | |____\__ \ ||  __/ |_) | (_| | | | | | |_) | (_| \__ \__ \ (_) |
// |______|___/\__\___|_.__/ \__,_|_| |_| |____/ \__,_|___/___/\___/ 
// Simulador Interactivo   
//     

var valorTotal            = 0;
const valorLibro          = 1000;
const valorComic          = 750;
const valorRevista        = 300;

const valorColor          = 1000;
const valorBlancoYNegro   = 500;

function calculadoraPresupuesto(){

    //Ingreso de tipo de libro
    var inputTipo = prompt("Que está queriendo presupuestar? Libro, Comic o Revista?")

    //Si cancelo, salgo del programa y limpio valorTotal.
    if (inputTipo == null) {
        valorTotal=0;
        return;
    }

    //Invoco calcularTipo. Si falla, corto ejecucion de calculadoraPresupuesto.
    if(!calcularTipo(inputTipo)) return;

    //Ingreso de color.
    var inputColor = prompt("Desea imprimir a color? Si, No")

    //Si cancelo, salgo del programa y limpio valorTotal.
    if (inputColor == null) {
        valorTotal=0;
        return;
    }

    //Invoco calcularColor. Si falla, corto ejecucion de calcularColor.
    if(!calcularColor(inputColor)) return;

    //Ingreso cantidad de paginas
    var cantidadPaginas = prompt("Cantidad de páginas: ")

    //Si cancelo, salgo del programa y limpio valorTotal.
    if (cantidadPaginas == null) {
        valorTotal=0;
        return;
    }

    //Invoco calcularPaginas. Si falla, corto ejecucion de calcularPaginas.
    if(!calcularPaginas(cantidadPaginas)) return;

    //Muestro resultado y limpio valorTotal.
    alert("El presupuesto de su " +inputTipo+ " es de: $" + valorTotal);
    valorTotal=0;
}


function calcularTipo(inputTipo){

    switch (inputTipo) {
        case "Libro":
            valorTotal+=valorLibro;
            break;
        case "Revista":
            valorTotal += valorRevista;
            break;
        case "Comic":
            valorTotal += valorComic;
            break;
        default:
            alert("Ingrese una opción válida.");
            valorTotal = 0;
            return;
    }

    return true;
}

function calcularColor(inputColor){

    switch (inputColor) {
        case "Si":
            valorTotal+=valorColor;
            break;
        case "No":
            valorTotal += valorBlancoYNegro;
            break;
        default:
            alert("Ingrese una opción válida.");
            valorTotal = 0;
            return;
    }

    return true;
}

function calcularPaginas(cantidadPaginas){

    if (cantidadPaginas <= 100) {
        valorTotal+=500;
    } else if (cantidadPaginas > 100 && cantidadPaginas <= 500) {
        valorTotal+=1000;
    }else if (cantidadPaginas > 500 && cantidadPaginas <= 1000) {
        valorTotal+=1500;
    }else{
        alert("El libro no puede superar las 1000 páginas");
        valorTotal = 0;
        return;
    };

    return true;
}