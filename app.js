require('dotenv').config();                     // for using environment variable protection
const express =require("express");
const bodyParser =require("body-parser");

const mongoose=require("mongoose");

const bcrypt=require("bcrypt");
const saltRounds=10;

const app=express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI ;
// || "mongodb://127.0.0.1:27017/userDB"

mongoose.connect(MONGODB_URI);

const userSchema= new mongoose.Schema({
  name:String,
  uname:String,
  email:String,
  password:String,
  contact:String,
  gender:String
});


const User = mongoose.model("User",userSchema);

app.use(express.static("public"));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({
  extended:true
}));

app.post("/login", function(req,res){

  const username=req.body.username;
  const password=req.body.password;
  
    User.findOne({uname:username, password:password })
      .then((docs)=>{
        res.redirect("/")
      })
      .catch((err)=>{
          console.log(err);
          // res.redirect("/login")
      });
    
;
})

app.post("/signup",function(req,res){
  console.log("Heyy!")  
  bcrypt.hash(req.body.passw, saltRounds, function(err, hash) {
    const newUser = new User({
      name:req.body.fullname,
      uname:req.body.username,
      email:req.body.email,
      contact:req.body.phnnumber,
      password:hash,
      gender:req.body.gender                          
    });
    
      newUser.save();
      res.redirect("/");
    
    });

});



// app.post("/register",function(req,res){

//   bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
//     const newUser = new User({
//       email:req.body.username,
//       password:hash                           ///// converting the password into hash
//     });
//     newUser.save(function(err){
//       if(err){
//         console.log(err);
//       }
//       else{
//         res.render("secrets");
//       }
//     });
//     });

// });


// app.post("/login",function(req,res){
//   const username=req.body.username;
//   const password=req.body.password;

//   User.findOne({email:username},function(err,foundUser){
//     if(err){
//       console.log(err)
//     }
//     else{
//       if(foundUser){
//         bcrypt.compare(password, foundUser.password, function(err, result) {
//           if(result===true){
//             res.render("secrets")
//           }
//         });
//       }
//     }
//   });
// });



// app.get("/",function(req,res){
//   res.render("home");
// });

// app.get("/login",function(req,res){
//   res.render("login");
// });

// app.get("/register",function(req,res){
//   res.render("register");
// });

// app.post("/register",function(req,res){

//   bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
//     const newUser = new User({
//       email:req.body.username,
//       password:hash                           ///// converting the password into hash
//     });
//     newUser.save(function(err){
//       if(err){
//         console.log(err);
//       }
//       else{
//         res.render("secrets");
//       }
//     });
//     });

// });

// app.post("/login",function(req,res){
//   const username=req.body.username;
//   const password=req.body.password;

//   User.findOne({email:username},function(err,foundUser){
//     if(err){
//       console.log(err)
//     }
//     else{
//       if(foundUser){
//         bcrypt.compare(password, foundUser.password, function(err, result) {
//           if(result===true){
//             res.render("secrets")
//           }
//         });
//       }
//     }
//   });
// });


app.listen(PORT,function(){
  console.log("Server started at port 3001");
})