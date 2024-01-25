const express = require("express");
const app =  express();

app.set("view engine","ejs");

app.use(express.static("./public"));

app.use("",(req,res,next)=>{
    console.log("MIDDLEWARE");
    next();
})
app.get("/", (req, res)=>{
    res.send("welcome to home page");
});

app.get("/contact", (req, res)=>{
    res.send("welcome to contact page");
});

app.get("/user/:names", (req, res)=>{
    res.send(`Hi there! I am ${req.params.names}`);
});
app.get("/portfolio",(req,res)=>{
    res.render("index");
})
app.listen(5555,(req, res)=>{
    console.log("The server is listening.");
});