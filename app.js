var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");


var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/valyrian.json"

function getTranslateURL(text){
   return serverURL + "?" + "text=" + text
}

function errorHandler(error){
   console.log("error occured ", error);
   alert("Sorry its not my mistake its just that you can only translate a certain amount of times for an certain period of time so please try again after some time DONT BELIEVE ME GOOGLE : status code 429");
}

function clickHandler() {
  var inputText = txtInput.value;

  fetch(getTranslateURL(inputText))
  .then(response => response.json())
  .then(json=> {

   var translatedText = json.contents.translated;
   outputDiv.innerText = translatedText;
  })
   .catch(errorHandler);
  
};

btnTranslate.addEventListener("click", clickHandler);