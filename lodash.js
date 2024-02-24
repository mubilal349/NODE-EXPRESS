// Requiring the lodash module
// in the script
const _ = require("lodash"); //// lodash library is used to prevent us from difficulty in our code

// _.CHUNK METHOD
let arr = [1, 2, 3, 4, 5, 6];

// Making chunks of size 2
console.log(_.chunk(arr, 2)); // This method split array into chunks as you want

let arr2 = [1,2,3,4,5,6,'a','b','c'];
console.log("Before",arr2);

//AFTER
console.log("After",_.chunk(arr2,3)); 

//CHUNKS THE THREE D ARRAY  INTO ONE DIMENSIONAL ARRAY

let arr3 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log("Before",arr3);

console.log("After",_.chunk(arr3,1));

let arr4 = [
    {"a":1, "b":2, "c":3},
    {"d":1, "e":2, "f":3},
    {"d":1, "e":2, "f":3},
]

console.log("After",_.chunk(arr4,2)[1]);

// _.compact() method

let array = [0,1,false,,2,'',null]; // It only filtered 0 , null ,false , ''

let newArray = _.compact(array);

console.log("Before" + array);

console.log("After" +newArray)

let array_1 = [true,"undefined","no",1];

let newArray_1 = _.compact(array_1);

console.log(newArray_1);

// _.CONCAT() METHOD

let  firstArr = [1,2,3];
 let secondArr = [0,1,"a", "b"];

 let  concatResult = _.concat(firstArr,secondArr);
 console.log("Before"+firstArr);

 console.log("After"+concatResult);

 // _.DIFFERENCE () METHOD

 let res = ["a",2,3];

 let values = []
 let result = _.difference(res,[2]);

 console.log("After",result)

 let arr_1 = [1,2,3];
 let arr_2 = [2,5,6];

 let res_1 = _.differenceWith(arr_1,arr_2,_.isEqual);
 console.log(res_1)

 // _.DROP() METHOD

 let dropper = [1,2,3,4,5]; // Total number = 5

 let newDropper = _.drop(dropper,4); // Sliced the array into new array

 console.log(newDropper);

 // _.dropRight() Function
 let dropRighter =[1,2,3,4,5] ;

 let  newDropRighter = _.dropRight(dropRighter,2); // Sliced the array in the form of right direction

 console.log(newDropRighter);

 // _.dropRightWhile() Function
 let drw = [1,2,3,4,4];
 let ddrw = _.dropRightWhile(drw,(e)=>{ // excluding elements dropped from the end until the predicate function returns false.
    return e==4;
 });
 console.log(ddrw);

 // _.dropWhile() METHOD
 let drop = [1,2,3,4,5,5,6];

 let newDrop = _.dropWhile(drop,(e)=>{
    return e!=5;
 })
 console.log(newDrop)

 // _.fill(array, value, startIndex =>included, endIndex => excluded);

 let fill = [ 1,2,3,4,5,6];

 let newFill = _.fill(fill,10,0,5);
 console.log(newFill);

 //_.findIndex() Method
 let findIndx = [1,2,3]; // Find the index number of an given array means 0,1,2

 let newIndx = _.findIndex(findIndx,(e)=>{
    return e==3
 })
 console.log(newIndx)

 //_.findLastIndex() Function
 let findLastIndx = [1,2,3,4,5];

 let newLastIndx = _.findLastIndex(findLastIndx,(e)=>{
    return e==5;
 })
 console.log(newLastIndx)

 //_.first() Method =>is used to get the first element of the specified array.
 let first=[1,2,3];

 console.log(_.first([3]));


 //_.flatten() Method

 let flat = [ [1,2],[4,5],[7,8]]; //[ 1, 2, 4, 5, 7, 8 ]

 console.log(_.flatten(flat)); // This method is used for to flat the given array into a  single dimension array.

 //_.flattenDeep() Method => is used to completely flatten nested arrays
 let deepFlatten = [1, [2, [3, 4, [5]]]];

 console.log(_.flattenDeep(deepFlatten));

 // _.flattenDepth() Method => It returns a new array flattened by a specified depth.
 let flatd = [1, [2, [3, 4, [5]]]];
 console.log(_.flattenDepth(flatd,3));

 //_.flattenDeep() Method

 let flatDeep = [1, [2, [3, 4, [5]]]]; 
 console.log(_.flattenDeep(flatDeep)) // completely flattened the nested array

