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
