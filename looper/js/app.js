// This waits till the page finishes loading before running the code inside the {}
$(document).ready(function() {

var response = ["yes", "no", 'ask again later', 'maybe', 'reply hazy', 'signs point to yes']

response.forEach(
  function(response){
  // alert("take one down, pass it around")
  // alert("you took down the")
document.write(response + "<br>")
  }
)

document.write("hr")
document.write(" you have " + response.length + "items" ) 

});
