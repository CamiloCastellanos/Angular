"use strict";
//Parametro Obligatorio
function activar(quien) {
    var mensaje;
    mensaje = quien + " Esta atacando la ciudad";
    console.log(mensaje);
}
//Parametro Por defecto
function senal(tipoSenal) {
    if (tipoSenal === void 0) { tipoSenal = "Alada"; }
    var mensaje;
    mensaje = "Se ve la se\u00F1al " + tipoSenal + " ";
    console.log(mensaje);
}
//Parametro Opcionales
function locacionSenal(momento) {
    var mensaje;
    if (momento) {
        mensaje = "Se activo en el " + momento + " ";
    }
    else {
        mensaje = "No se sabe.";
    }
    console.log(mensaje);
}
activar("El Bromas");
senal();
locacionSenal("Cielo");
locacionSenal();
//Funcion normal
var funcionNormal = function (a) {
    return a;
};
//Funcion Flecha, tiene como parametro a y ternorna a
var funcionFlecha = function (a) { return a; };
console.log(funcionNormal("Normal"));
console.log(funcionFlecha("Flecha"));
