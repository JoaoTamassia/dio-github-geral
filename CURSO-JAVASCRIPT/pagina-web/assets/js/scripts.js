console.log("Script carregado com sucesso!");

var aumentar = document.getElementsByName("aumentar")[0];
var diminuir = document.getElementsByName("diminuir")[0];
var contador = 0;
var contadorDisplay = document.getElementById("counter");
var mensagemDisplay = document.getElementById("message");

aumentar.addEventListener("click", function() {
    contador++;
    contadorDisplay.innerHTML = contador;
    diminuir.disabled = false;
    mensagemDisplay.innerHTML = "";
    if (contadorDisplay.innerHTML < 0) {
            contadorDisplay.style.color = "red";
    }
    else {
        contadorDisplay.style.color = "grey";
    }
});

diminuir.addEventListener("click", function() {
        contador--;
        contadorDisplay.innerHTML = contador;
        if (contadorDisplay.innerHTML <= -10) {
            diminuir.disabled = true;
            mensagemDisplay.innerHTML = "Contador não pode ser menor que -10";
        }
        if (contadorDisplay.innerHTML < 0) {
            contadorDisplay.style.color = "red";
        }
        else {
            contadorDisplay.style.color = "grey";
        }
});

