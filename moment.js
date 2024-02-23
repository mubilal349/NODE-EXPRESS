const moment = require("moment");

console.log(Date()); // js simple time

console.log("=======" + moment().format());

console.log("More formatted time " + moment().format("MM DD YYYY hh:mm:ss "));

console.log(moment().format("MM/DD/YYYY"));

console.log(moment().format("Mo Do YYYY")); //2nd 23rd 2024

console.log(moment().format("MM - DD - YYYYY"));

console.log(moment("2000292","YYYYDDMM").fromNow()); //24 years ago

console.log(moment().startOf("year").fromNow()); //2 months ago

console.log(moment().endOf("year").fromNow()); //in 10 months

console.log(moment().add(3, "days").calendar()); //Monday at 6:27 AM

console.log(moment().subtract(10,"day").calendar());

console.log(moment().add(1,"d").calendar()); //Tomorrow at 6:36 AM

console.log(moment().local());

console.log(moment().format("LT"));

console.log(moment().format("LLLL"));