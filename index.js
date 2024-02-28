let a = "Bilal"; // Strings are immutable means not changed but replaced
 a [0]="y" ;


console.log(a);

function myFunction(){
    let privateVariable = 10;
    function myPrivateFunc(){  //Closures means access the variable form outside the scope even the function is return
        console.log(privateVariable);
    }
    return myPrivateFunc();
}
myFunction();

//MEMOIZATION

function primeN(n){
    if(n<2){
        console.log(0);
    }
    else if(n==2){
        console.log(1);
    }
    else{
        let index = 0;
        for( let i=0;i<=n;i++){
            if(isPrime(i)){
                index++;
            }
        }
    }
}
primeN(0);

// CURRYING
function curriedSum(...args){ //    Accept numbers of arguments
    let sum = 0; 
    for (let i = 0;args.length;i++){
        sum += args[i];
    }
    return sum;
}
curriedSum();


// OBJECTS

let obj = {
    name: "Bilal",
    id: "09",
    pass: "0987654321@abcdef"
}
console.log(obj.name);
console.log(typeof obj);

// OBJECTS OF AN ARRAY

let obj_1 = [
    {
        name : "M Bilal",
        id : "09",
    },
    {
        name : "ABC",
        id : "08"
    }
]
console.log(obj_1[1].id);
console.log(obj_1[0].name);
console.log(obj_1.lastIndexOf());
console.log(obj_1.length);


// ARRAY 
let arr = [1,"Bilal",0,'undefined',true];

console.log(arr);