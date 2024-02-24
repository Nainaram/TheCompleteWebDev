const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname +"/index.html")
});
app.post("/" ,function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1+num2;

res.send(" the result  of the two numbers is " + result);
});
app.get("/BMIcalculator",function(req, res){
    res.sendFile(__dirname +"/BMIcalculator.html");
});
app.post("/BMIcalculator" ,function(req, res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmiresult = weight/(height*weight);
    

res.send(" the result  bmi is " + bmiresult*100)
});

app.listen(3000,function(){
    console.log("server is running port 3000.");
});