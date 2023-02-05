var txtinput = document.querySelector("#txt-area");
var translatedOutput = document.querySelector("#translated-area");
var translateButton = document.querySelector("#btn-translate");

var URL = "https://api.funtranslations.com/translate/minion.json";

function finalURL(text) {
  var finalURLString = URL + "?text=" + text;
  return finalURLString;
}
function fetchfunction() {
  var textinput = txtinput.value;
  fetch(finalURL(textinput))
    .then((request) => request.json())
    .then((json) => (translatedOutput.innerText = json.contents.translated));
}

translateButton.addEventListener("click", fetchfunction);
