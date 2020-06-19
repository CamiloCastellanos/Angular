
//Parametro Obligatorio
function activar(quien :string){
    let mensaje:string;
    mensaje= `${quien} Esta atacando la ciudad`;
    console.log(mensaje);
}

//Parametro Por defecto
function senal(tipoSenal:string = "Alada"){
    let mensaje:string;
    mensaje= `Se ve la señal ${tipoSenal} `;
    console.log(mensaje);

}

//Parametro Opcionales
function locacionSenal(momento?:string ){
    let mensaje:string;
    if(momento){
        mensaje= `Se activo en el ${momento} `;
    }
    else{
        mensaje= `No se sabe.`;
    }
    console.log(mensaje);

}


activar("El Bromas");
senal();
locacionSenal("Cielo");
locacionSenal();

//Funcion normal
let funcionNormal = function(a:string){
    return a;
}
//Funcion Flecha, tiene como parametro a y ternorna a
let funcionFlecha = (a:string) => a;

console.log(funcionNormal("Normal"));
console.log(funcionFlecha("Flecha"));