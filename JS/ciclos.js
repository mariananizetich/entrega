let excursion1 = "Avistaje"
let precio1 = 10500

let excursion2 = "Snorkel"
let precio2 = 9000

let stock = 10

let cantidadTotal = prompt ("Cuántas excursiones desea comprar?") //usar parseInt para transformar de string a number
let precioFinal = 0

if (cantidadTotal) //que hace este condicional?
//la estructura del if es:
    //      if(condicion){
        //      que hace si se cumple
    //      }
//Y DEBIDO A QUE NO ESTAS CUMPLIENDO ESTA SINTAXIS: NO ESTA REALIZANDO NADA

function sumaPrecio(cantidad, precio){
    precioFinal += cantidad * precio
    //CONSEJO: consolea todos los resultados para verificar que la función realicé correctamente el proceso que querés
    //consle.log(precioFinal)
    //ESTA FUNCION NO NECESITA RETURNAR PORQUE MODIFICA UNA VARIABLE GLOBAL
}

function sumaStock(cantidad, stock, precio){
    if(stock >= cantidad){ //aca armaste bien las condiciones
        sumaPrecio(cantidad, precio)
        alert("El precio total es de: $" + (cantidad * precio)) //CANTIDAD*PRECIO CONVIENE GUARDARLO EN UNA VARIABLE LOCAL
    }
    else{
        alert("Error: Podés comprar hasta " + stock + " tickets por persona")
    }
}

//QUE PASA SI EL USUARIO INGRESA UNA LETRA EN LUGAR DE UN NUMERO Y cantidadTotal=A por ejemplo?
for (let i = 0; i < cantidadTotal; i++) {
    let compra1 = prompt ("Ingrese la excursión que quiere comprar: \n- Avistaje \n- Snorkel")
    //let cantidad1 = prompt ("Ingrese la cantidad de tickets que desea comprar:") //esta cantidad creo que es innecesaria pedirla (ya la pedis cuando arranca el programa)
    //if (cantidad1 >stock) { //este condicional está incluido en sumaStock
        //alert ("Error: Podés comprar hasta " + stock + " tickets por persona");
    //}
    if (compra1 == "Avistaje") {
        let cantidad1 = prompt ("Ingrese la cantidad de tickets que desea comprar:") //esta cantidad creo que es innecesaria pedirla (ya la pedis cuando arranca el programa), pero acá tiene más sentido ya que funciona mejor
        //que pasa si cantidad1 no es un numero??? INVESTIGAR Y AGREGAR CONDICIONAL
        sumaStock (cantidad1, stock, precio1)
    }
    else if (compra1 == "Snorkel") {
        let cantidad1 = prompt ("Ingrese la cantidad de tickets que desea comprar:") //esta cantidad creo que es innecesaria pedirla (ya la pedis cuando arranca el programa), pero acá tiene más sentido ya que funciona mejor
        //que pasa si cantidad1 no es un numero??? INVESTIGAR Y AGREGAR CONDICIONAL
        sumaStock (cantidad1, stock, precio2)
    } //te falta la condición final: SI NO ES NINGUNA DE LAS ANTERIORES
    else {
        alert('no tenemos ese producto')
    }
}

alert ("Listo! El precio total de tu compra es de: $" + precioFinal + ". Que lo disfrutes!")