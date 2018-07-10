function myFunction() {
document.getElementById("buttonid").disabled = false;
var extraLine = document.getElementById("msg");
while (extraLine.scrollHeight > extraLine.offsetHeight){
        extraLine.rows += 1;
}
// if (extraLine.scrollHeight < extraLine.offsetHeight) {
//              extraLine.rows -= 1;
//                     }
}

document.getElementById("msg").addEventListener('keypress', function(event) {
        if (event.keyCode == 13) {
          document.myForm.msg.Submit();
            // event.preventDefault();
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
  document.getElementById("buttonid").disabled = "disabled";
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

  document.getElementById('myForm').reset();
  return false;
  event.preventDefault();
}




// var submit =
// document.querySelector("input[type=submit]");
// submit.onclick = function(event) {
//   var textarea = document.querySelector("textarea");
//   var newText = document.getElementsByClassName("newText")[0];
//   var newDiv = document.createElement ("div");
//   newDiv.textContent = textarea.value;
//   newText.appendChild(newDiv);
//   time();
//   document.getElementById('myForm').reset();
//   return false;
//   event.preventDefault();
// }

function time() {
  var today = new Date();
  h=today.getHours();
  m=today.getMinutes();
  var hora = h+":"+m;
  return hora;
   // return document.getElementsByClassName("newText").innerHTML = hora;

  // document.getElementsByClassName("showTime").appendChild(divTime);
  // event.preventDefault();
}

// document.getElementsByClassName("buttonid").addEventListener('click', function() {
//   var showTime = document.getElementsByClassName("showTime")[0];
//     var divTime = document.createElement ("div");
//     var today=new Date();
//     h=today.getHours();
//     m=today.getMinutes();
//     var time = h+":"+m;
//     showTime.appendChild(document.createTextNode(time));
//     event.preventDefault();
//   });

// document.getElementByid("buttonid").addEventListener("onclick", function {
// function time()
// {
// var today=new Date();
// h=today.getHours();
// m=today.getMinutes();
// var time = h+":"+m;
//
// // setTimeout('time()',500);
// }
