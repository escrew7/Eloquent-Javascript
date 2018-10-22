//create first function math that tests for the answer
function math(){
  //the function takes the value of the input as the var answer
	var answer = document.querySelector('input').value
  //if the answer is correct (4) then correct is returned
  if(answer == 4){return 'correct'};
  //if the answer is incorrect and a number, incorrect is returned
  if(answer != 4 && (/[0-9]/.test(answer))){return 'incorrect'};
  //if the answer is incorrect and not a number, an exemption is thrown
  //the exemption is a new occurance of the Error constructor with a string and the value of the input given
  throw new Error('"' + answer + '" is not a number');
};

//create a function attempt that calls the math function and prints out the result if a number was given
function attempt(){
  //if the answer is correct, display 'well done' in the p at the bottom
	if(math() == 'correct'){
  	document.querySelector('#ans').innerHTML = 'well done!';
  }
  //if the answer is correct, display 'please try again' in the p at the bottom
  else{
  	document.querySelector('#ans').innerHTML = 'please try again';
  };
};

//create the the event listener for the button click
document.querySelector('#butt').addEventListener('click', function(){
	//call the try to begin the exemption process
  try{
    //call the attempt function
		attempt()
    //if an error is thrown it will be caught here with the argument being the error occurance
	} catch (error) {
    //display in the p the string 'malfunction' along with the error given
	document.querySelector('#ans').innerHTML = 'malfunction ' + error;
	//at the end of the exemption process display an alert function that tells you the process has reached the end, this is useful if you need to reset a global variable to its original value
  } finally {
    alert('and the exception loop is completed')
  }
  
});