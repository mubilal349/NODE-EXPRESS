function myDisplayer(something){
    console.log("The sum is:",something);
  }
  
    function myCalculator(num1, num2, myCallback) {
      setTimeout(function(){
        let sum = num1+num2;
        myCallback(sum);
      },6000)
    }
    
    myCalculator(5, 5, myDisplayer); // Firstly wait for async code  to finish then call the callback function