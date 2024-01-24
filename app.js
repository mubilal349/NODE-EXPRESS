const express = require("express"); // require is actually like import a module 
const app = express();


app.use((req,res,next)=>{
    console.log("MIDDLEWARE");
    next();
})
app.get("/",(req,res)=>{ // get property is used for to get data from server at least 80% used in backend
    res.send("Hello express");// send 
})
app.listen(1000);

app.get("/profile",(req,res)=>{
    res.send("Profile page");
})


app.get("/profile/:names",(req,res)=>{
    res.send(`hello ${req.params.names}`)
})
