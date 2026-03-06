 import express from "express";
const app = express();
app.set("view engine","ejs")
app.set("views","views")
app.listen(8080, () => console.log("Server Started"));

const users = [
  { id : 1 ,name : "devi" , email : "devi123@gmail.com" , password : "1234"},
    {id : 2 ,name : "nani" , email : "nanii123@gmail.com" , password : "1234"} ,
      {id : 3 ,name : "ram" , email : "ram123@gmail.com" , password : "1234"}


];
app.get("/login", (req, res) => {
  res.render("login");
});
app.post("./login" , (req , res) =>{
  res.redirect("/")
  
})

  app.get("/register" , (req, res) => {
    res.render("register");
});

app.get("/", (req, res) => {
    res.render("dashboard" ,{users}); //getting data which is existed
});

