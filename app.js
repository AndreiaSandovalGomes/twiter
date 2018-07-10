
var activeButton = document.getElementById("msg");
activeButton.addEventListener("keydown", myFunction);
function myFunction() {
var active = document.getElementById("msg").value.length;
if (active === 0 || active === "" || active > 140 || document.getElementById("msg").value.match(/^[ \t\n\r\f\v]+$/)){
  document.getElementById("buttonid").disabled = true;
  var extraLine = document.getElementById("msg");
  while (extraLine.scrollHeight > extraLine.offsetHeight){
    extraLine.rows += 1;}
}else{
  document.getElementById("buttonid").disabled = false;
    var extraLine = document.getElementById("msg");
    while (extraLine.scrollHeight > extraLine.offsetHeight){
    extraLine.rows += 1;
    }
  }
}
document.getElementById("msg").addEventListener('keypress', function(event) {
  if (event.keyCode == 13) {
    document.myForm.msg.Submit();
  }
});
function counter() {
  var quant = 140;
  var actual = document.getElementById("msg").value.length;
  var valor = quant - actual;
  document.getElementById("cont").innerHTML=valor;
  if(valor <= 20 && valor >=10){
    cont.style = "background-color: yellow";
  }else if(valor < 10 && valor >=0){
  cont.style = "background-color: red"
  }else if(valor < 0){
  document.getElementById("buttonid").disabled = true;
  cont.style = "background-color: red";
  }
}
var submit =
document.querySelector("input[type=submit]");
submit.onclick = function(event) {
  var textarea = document.querySelector("textarea");
  var newText = document.getElementsByClassName("newText")[0];
  var newDiv = document.createElement ("div");
  var newP = document.createElement ("p");
  newP.appendChild(newDiv);
  newDiv.textContent = time()+"h" + "  -  "  +  textarea.value;
  newText.appendChild(newP);
  newP.setAttribute("class", "novoP");
  document.getElementById('myForm').reset();
  document.getElementById('buttonid').disabled = true;
  return false;
}
function time() {
  var today = new Date();
  var h=today.getHours();
  var m=today.getMinutes();
  var hora = h+":"+m;
  if (h.value < 10) {"0"+h;
}if(m.value < 10) {"0"+m}
  return hora;
}
