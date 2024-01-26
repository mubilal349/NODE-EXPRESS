const express = require("express");
const app =  express();

app.set("view engine","ejs");

app.use(express.static("./public"));

app.use("",(req,res,next)=>{
    console.log("MIDDLEWARE");
    next();
})
app.all("/secret",(req,res,next)=>{
    res.send("Accessing the secret sec....");
    next();
})
app.get("/", (req, res)=>{
    res.send("welcome to home page");
});

app.get("/things/:id[0-9]{5}",(req,res)=>{
    res.send('id:'+req.params.id)
})

app.get("/contact", (req, res)=>{
    res.send("welcome to contact page");
});

app.get("/user/:names", (req, res)=>{
    res.send(`Hi there! I am ${req.params.names}`);
});
app.use(function errorHandler(err, req, res, next) {
    if (res.headersSent) {
      return next(err);
    }
    res.status(500);
    res.render("error", { error: err });
  });
app.get("/portfolio",(req,res)=>{
    res.render("index");
})
app.listen(5555,(req, res)=>{
    console.log("The server is listening.");
});