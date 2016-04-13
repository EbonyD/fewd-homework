// This waits till the page finishes loading before running the code inside the {}
$(document).ready(function() {
var prefix = [' Maybe.', 'Certainly not.', 'I hope so.', 'Not in your wildest dreams.',
'There is a good chance.', 'Quite likely.', 'I think so.', 'I hope not.',
'Possibly.', 'Never, ever, ever.', 'There is a small chance.', 'Yes!'];


function buttonClicked(){
  var username = $('#username').val()
  var randomNumber = Math.floor(Math.random() * prefix.length)
  var answers = prefix[randomNumber] + " " + username
  document.write(answers)
 $('#output').text(hipHopname)

      }


$('#submit').click(buttonClicked)





});
