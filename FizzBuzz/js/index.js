$('#buttonOne').click(function() {
  var msg = '';
  
  for (i = 1; i < 101; i++) {
    if(i % 3 == 0 && i % 5 == 0) 
      msg += 'FizzBuzz' + '<br />';
    else if (i % 3 == 0)
      msg += 'Fizz' + '<br />';
    else if (i % 5 == 0)
      msg += 'Buzz' + '<br />';
    else
      msg += i + '<br />';
  }
  document.getElementById('answers').innerHTML = msg
});