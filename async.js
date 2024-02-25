//SYNCHRONUS
function synchronusFunction(){
    console.log("Start");
    for(let i =0;i<3;i++){
        console.log(i);
    }
    console.log("End");
}
synchronusFunction();

//ASYNCHRONUS

console.log("1");

setTimeout(function(){ // The best example  of asynchronous function in JavaScript is the setTimeout() method
    console.log("2")
},5000)
console.log("3")

// CALLBACK => When we set one function into another function as a argument
function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(function () {
      console.log("Data received");
      callback("Data from server");
    }, 2000);
  }
  
  function processReceivedData(data) {
    console.log("Processing data:", data);
  }
  
  console.log("Start");
  fetchData(processReceivedData);  // Remember one thing in mind callback will be executed when all async code is operated successfully
  console.log("End");  



