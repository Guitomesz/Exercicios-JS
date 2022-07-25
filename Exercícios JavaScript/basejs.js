function calcularIMC() {
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
    var imc = (peso / (altura * altura)).toFixed(1);
    var divImc = document.getElementById("imc");
    var divmsg = document.getElementById("msg");
    if (isNaN(imc)) {
       divmsg.textContent = ' Digite um número válido!';
    } else {
       divImc.textContent = "O seu IMC é de " + imc + ".";
       if (imc < 18.5) {
            divmsg.textContent = 'Está abaixo do normal!';
       }
       if (imc > 35) {
            divmsg.textContent = ' Você está acima do peso!';
       }
       if (imc >= 18.5 && imc <= 35) {
            divmsg.textContent = ' Está dentro normal.';
       }
    }
}