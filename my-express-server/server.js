const  express = require("express");
const app = express();
app.get('/',function(request,response){
    response.send("Hello february");});
    app.get("/contact",function(req,res){
    res.send("you can contact by nainaram7980@gmail.com");
    });
    app.get("/about",function(req,res){
        res.send("myself i'm a full stackdevelooper.");
        });
        app.get("/hobbies",function(req,res){
            res.send("<ul></ul> <li>contacting</li><li>cooking</li>");
            });
    app.listen(3000,function(){
    console.log("server started at the port 3000");

});