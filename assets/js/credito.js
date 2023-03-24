const plazo = document.querySelector("#plazo");
const texto = document.querySelector("#plazo-texto");


plazo.onchange = () => {
    texto.innerHTML = "El Plazo en Años: " + plazo.value;
};




//Submit

var miBoton = document.getElementById("calcular");
var miFormulario = document.getElementById("miFormulario");

miBoton.addEventListener("click", function() {
    //Monto Solicitado
    const ms = document.querySelector("#tasa-interes-mensual").value;

    //Tasa de Interes Mensual
    const tm = document.querySelector("#tasa-interes-anual").value / 12;

    //Plazo en Meses
    const p = plazo.value * 12;

    //Pago Mensual
    const pm = (ms * (tm / 100)) * ((1 + (tm / 100)) ** p) / ((1 + (tm / 100)) ** p) -1;

    document.querySelector("#monto-pago-mensual").innerHTML = "Buenas tardes";

    miFormulario.submit();
});