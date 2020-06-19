function consola(constructor:Function){

    console.log(constructor);
}

@consola//Decorador
class Villano{

    constructor(public nombre: string){
        
    }

}