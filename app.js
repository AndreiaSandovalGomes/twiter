function myFunction() {
document.getElementById("buttonid").disabled = false;
}
function limiteInput(valor) {
  var quant = 140;
  var total = valor.length;
  if(total <= quant) {
  var resto = quant - total;
    document.getElementById('cont').innerHTML = resto;
    if (resto <= 20 && resto >= 10)
       {cont.style = "background-color: yellow";
    }else if(resto <= 9){
    cont.style = "background-color: red";
  }
}
  // else if(quant < total){
  // document.getElementById("buttonid").disabled = true;
  // }
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

// function time()
// {
// today=new Date();
// h=today.getHours();
// m=today.getMinutes();
// document.getElementById('txt').innerHTML=h+":"+m;
// // setTimeout('time()',500);
// }
