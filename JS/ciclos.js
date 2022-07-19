let excursion1 = "Avistaje"
let precio1 = 10500

let excursion2 = "Snorkel"
let precio2 = 9000

let stock = 10


let cantidadTotal = prompt ("Cuántas excursiones desea comprar?")
let precioFinal = 0
if (cantidadTotal )

function sumaPrecio(cantidad, precio){
    precioFinal += cantidad * precio
}

function calculoStock(cantidad, stock, precio){
    if(stock >= cantidad){
        sumaPrecio(cantidad, precio)
        alert("El precio total es de: $" + (cantidad * precio))
    }
    else{
        alert("Error: Podés comprar hasta " + stock + " tickets por persona")
        
    }
}


for (let i = 0; i < cantidadTotal; i++) {

let compra1 = prompt ("Ingrese la excursión que quiere comprar: \n- Avistaje \n- Snorkel")
let cantidad1 = prompt ("Ingrese la cantidad de tickets que desea comprar:")
if (cantidad1 >stock) {
    alert ("Error: Podés comprar hasta " + stock + " tickets por persona");
}

if (compra1 == "Avistaje") {
    calculoStock (cantidad1, stock, precio1)
}

else if (compra1 == "Snorkel") {
    calculoStock (cantidad1, stock, precio2)
}

}


alert ("Listo! El precio total de tu compra es de: $" + precioFinal + ". Que lo disfrutes!")

