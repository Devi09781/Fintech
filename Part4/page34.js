import express from "express";
const app = express();
app.set("view engine" , "ejs");
app.set("views" , "views") // all the views in views folder
app.listen(8081 , () => console.log("sever started"));
app.get("/" , (req,res) => {
    // res.render("login")
    res.render("register")

})