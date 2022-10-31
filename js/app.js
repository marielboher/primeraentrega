//simulador de cuotas

// El profe nos explicó que no debemos usar JavaScript en HTML. Lo hecho en este proyecto es solo una excepción.

const importe = 8000
let mensajeInicial = "¿Desea pagar con tarjeta?"
let compraEfectivo = "¿Desea pagar en efectivo?"
let compraTarjeta = "¿En cuantas cuotas desea abonar el producto?:"
let formaPago = ""
let cuotas = ""
let formaPago2 = ""


function realizarCompra() {
    formaPago = confirm(mensajeInicial)
        if (formaPago) {
            tarjeta()
        } else {
            efectivo()
        }
}

function tarjeta() {
    cuotas = parseFloat(prompt(compraTarjeta))
        if (isNaN(cuotas)) {
            alert("Numero de cuotas no valido")
        } else {
            for (i = 1; i <= cuotas; i++) {
                console.log("Su cuota numero " + i + " sera de: $" + (importe / cuotas).toFixed(2))
            }
        }
}

function efectivo() {
    formaPago2 = confirm(compraEfectivo)
    let totalEf = importe - (importe * (20 / 100))
        if (formaPago2) {
            console.log("El total a pagar en efectivo es de: $" + totalEf)
        } else {
            console.log("Por favor indique un metodo de pago.")
        }
}





