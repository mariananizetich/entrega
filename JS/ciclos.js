let excursion1 = "Avistaje de ballenas"
let precio1 = 10500
let stock1 = 10

let excursion2 = "Snorkel con lobos marinos"
let precio2 = 9000
let stock2 = 10


let cantidadTotal = prompt ("Cuántas excursiones desea comprar?")
let precioFinal = 0

for (let i = 0; i < cantidadTotal; i++) {

let compra1 = prompt ("Ingrese la excursión que quiere comprar: \n- Avistaje de ballenas \n- Snorkel con lobos marinos")
let cantidad1 = prompt ("Ingrese la cantidad de tickets que desea comprar:")

if (compra1 == "Avistaje de ballenas") {
    if (stock1 >= cantidad1){
        precioFinal += cantidad1 * precio1
        alert ("El precio total es de: $" + (cantidad1 * precio1))
    }
    else {
        alert ("Error: Podés comprar hasta 10 tickets por persona.")
    }
}

else if (compra1 == "Snorkel con lobos marinos") {
    if (stock2 >= cantidad1){
        precioFinal += cantidad1 * precio2
        alert ("El precio total es de: $" + (cantidad1 * precio2))
    }
    else {
        alert ("Error: Podés comprar hasta 10 tickets por persona.")
    }
}

}
alert ("Listo! El precio total de tu compra es de: $" + precioFinal + ". Que lo disfrutes!")