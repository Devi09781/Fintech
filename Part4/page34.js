import express from "express";
const app = express();
app.set("view engine","ejs")
app.set("views","views")
app.listen(8080, () => console.log("Server Started"));
app.use(express.urlencoded ({ extended: true})); //to get data from form     

let users = [
  { id : 1 ,name : "devi" , email : "devi123@gmail.com" , password : "1234"},
  {id : 2 ,name : "nani" , email : "nanii123@gmail.com" , password : "1234"} ,
  {id : 3 ,name : "ram" , email : "ram123@gmail.com" , password : "1234"},


];
app.get("/login", (req, res) => {
  res.render("login");
});
app.post("/login" , (req , res) =>{
  const  {email , password} = req.body //destructuring
  const user = users.find((user) => user.email === email);//usernam eand password is true then it go to 
  // dashboard if false it stays in same pgae
  if(user){
    if (user.password === password){
      res.redirect("/");

    }     else {
      res.render("login", { error: "Invalid Password" });
    }
  } else {
    res.render("login", { error: "User not found" });
  }
  // res.redirect("/");
});


  app.get("/register" , (req, res) => {
    res.render("register");
});
app.post("/register", (req, res) => {
  users = [...users, req.body];
  res.redirect("/");
});




app.get("/", (req, res) => {
    res.render("dashboard" ,{ users }); //getting data which is existed
});

