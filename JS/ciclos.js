let excursion1 = "Avistaje"
let precio1 = 10500

let excursion2 = "Snorkel"
let precio2 = 9000

let stock = 10
let precioFinal = 0

class Excursion {
    constructor (nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

const excursionA = new Excursion ("Avistaje", 10500, 10)
const excursionB = new Excursion ("Snorkel", 9000, 10)

let listaExcursiones = [excursionA, excursionB]
let nombreExcursiones = []
let precios = [10500, 9000]
let stocks = [10]

function listarExcursiones (){
    for (const excursion of listaExcursiones){
        nombreExcursiones.push(excursion.nombre)
    }
}
listarExcursiones ()


do {
    cantidadTotal = parseInt (prompt ("Cuántas excursiones distintas desea comprar?"))
}
while (isNaN(cantidadTotal))


function sumaPrecio(cantidad, precio){
    precioFinal += cantidad * precio

}

function sumaStock(cantidad, stock, precio){
    if(stock >= cantidad){
        sumaPrecio(cantidad, precio)
        alert("El precio total es de: $" + (cantidad * precio))
    }
    
    else{
        alert("Error: Podés comprar hasta " + stock + " tickets por persona")
    }
}

for (let i = 0; i < cantidadTotal; i++) {
    let compra1 = prompt ("Ingrese la excursión que quiere comprar: \n" + nombreExcursiones.join("\n"))
    
    if (compra1 == "Avistaje") {
        let cantidad1 = parseInt (prompt ("Ingrese la cantidad de tickets de " + compra1 + " que desea comprar:"))
        
        sumaStock (cantidad1, stock, precio1)
        
    }
    else if (compra1 == "Snorkel") {
        let cantidad1 = parseInt (prompt ("Ingrese la cantidad de tickets de " +compra1 + " que desea comprar:"))
        
        //que pasa si cantidad1 no es un numero??? INVESTIGAR Y AGREGAR CONDICIONAL 
        //intenté aplicar isNaN como en la cantidad de excursiones, pero no me salió. 

        sumaStock (cantidad1, stock, precio2)
    } 
    else {
        alert("No disponemos de la exursión indicada.")
    }
}
// No sé cómo hacer para que, si la cantidad de tickets ingresada no es correcta, vuelva a preguntar y se reanude el ciclo. Lo que he intentado hasta ahora no me ha salido. Además, en los casos donde se aplica el else, sigue saliendo el alert final, como si hubiese hecho la compra. Dónde me puedo fijar algún ejemplo?

alert ("Listo! El precio total de tu compra es de: $" + precioFinal + ". Que lo disfrutes!")