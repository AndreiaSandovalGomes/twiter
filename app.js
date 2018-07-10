function myFunction() {
    document.getElementById("buttonid").disabled = false;

}
function limiteInput(valor) {
    quant = 140;
    total = valor.length;
    if(total <= quant) {
        resto = quant - total;
        document.getElementById('cont').innerHTML = resto;
    } else {
        document.getElementById('texto').value = valor.substr(0,quant);
    }
}
var submit =
document.querySelector("input[type=submit]");
submit.onclick = function(event) {
  var input = document.querySelector("input");
  var newText = document.getElementsByClassName("newText")[0];
  var newDiv = document.createElement ("div");
  newDiv.textContent = input.value;
  newText.appendChild(newDiv);
  event.preventDefault();
}
