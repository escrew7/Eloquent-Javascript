
//create click event for the button
document.getElementById('btn').addEventListener('click', function(){
  //create var which is the value of the input
  var numb = document.getElementById('inp').value;
  //regex test the num to ensure that a number has been input and not a string or other char
  if(/[^0-9]/.test(numb) != true){
     //if the input is NaN return the below string
     document.getElementById('result').innerHTML ='real numbers only thank you'
  }
  //else call the prime function with the inputted number and return the result
  else{result.innerHTML =  prime(numb)
  }
})

//craete prime function with the argument num
function prime(num){
  //create a var that contains the number and the below string
	var answer = num +' is a prime number!';
  //create a for loop that runs until x reached the square root of the num argument given
	for(x=2; x<=Math.sqrt(num); x++){
  	//if the num divided by x has no remainder
    if(num % x == 0){
       //answer becomes the number plus the below string, indicating it is not    prime
    	answer = num + ' is not a prime number';
      //break the loop
      break
    }
  }
  //return the answer
  return answer;
}