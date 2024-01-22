console.log("hi");

const fs = require("fs");

const bilal = fs.writeFileSync("bilal(1).txt","hello world!");

const bilal1 = fs.readFileSync("bilal(1).txt","utf-8");
console.log(bilal1);

const bilal2 = fs.appendFileSync("bilal(1).txt"," Created by MUHAMMAD BILAL");

const bilal3 = fs.readFile("bilal(1).txt","utf-8",(err,res) =>{
    if(err){
        console.log(err);
    }
    console.log(res);
})

