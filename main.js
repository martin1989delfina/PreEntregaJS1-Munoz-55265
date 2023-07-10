let calcular = prompt("Ingresá que valor querés calcular ---DOLARES O EUROS---???? Parar(STOP)");

function dolarBlue() {
    const precioDolar = 492;
    let pesosUsuario = parseInt(prompt("Ingresá la cantidad de Pesos a convertir"))
    if (isNaN(pesosUsuario)) {
        alert("Ingresá un valor válido")
    } else {
        alert("Son $" + (pesosUsuario / precioDolar).toFixed(2) + " Dolares Blue")
    }
}
while (calcular != "STOP") {
    switch (calcular.toUpperCase()) {
        case "DOLARES":
            alert("Ingesaste DOLARES");
            dolarBlue()
            break;
        case "EUROS":
            alert("Ingesaste EUROS");
            let euroBlue = 535
            let pesosUsuario2 = parseInt(prompt("Ingresá la cantidad de Pesos a convertir"))
            if (isNaN(pesosUsuario2)) {
                alert("Ingresá un valor válido")
            } else {
                alert("Son $" + (pesosUsuario2 / euroBlue).toFixed(2) + " Euros Blue")
            }
            break;
        default:
            alert("Escribí correctamente -Dolares- o -Euros-")
            break;
    }
    calcular = prompt("Ingresá que valor querés calcular -DOLARES O EUROS-???? Parar(STOP)");
}

