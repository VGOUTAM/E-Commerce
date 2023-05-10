require('dotenv').config();  
// import axios from "axios";                   // for using environment variable protection
const express =require("express");
const bodyParser =require("body-parser");
const jwt= require('jsonwebtoken')
const cors = require("cors");

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
  gender:String,
  tokens:[
    {
      token: {
        type:String,
        required:true
      }
    }
  ]
});


//This is needed to accept(json) json request that is received from fetch request
app.use(bodyParser.json());

userSchema.methods.generateAuthToken = async function(){
  try{
    let tokenCreate= jwt.sign({_id: this._id},process.env.SECRET_KEY);
    this.tokens=this.tokens.concat({ token: tokenCreate })
    await this.save();
    return tokenCreate;
  }catch(err)
  {
    console.log(err);
  }
}

const User = mongoose.model("Host",userSchema);

app.use(express.static("public"));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({
  extended:true
}));



app.use(cors());

// app.use(cors({ 
//   origin: "frontend_URL", 
//   credentials: true 
//  }));

//  axios.defaults.withCredentials = true;

// app.post("/login", function(req,res){
//   const username=req.body.usernaname;
//   const password=req.body.password;
  
//     User.findOne({uname:username, password:password })
//       .then((docs)=>{
//         res.redirect("https://remarkable-licorice-51dfe5.netlify.app/")
//       })
//       .catch((err)=>{
//           console.log(err);
//           // res.redirect("/login")
//       });  
// ;
// })

app.post("/login", async function(req,res){
  const username=req.body.uname;
  const password=req.body.password;
  //console.log("This is req.body ")
  console.log(req.body)
  //const email=req.body.email;
  let token;
  

  try{
    console.log("Inside try "+username)
    const userLogin = await User.findOne({uname:username});
    console.log(userLogin);
    if(userLogin){
        const isMatch=await bcrypt.compare(password, userLogin.password);
        console.log(isMatch)
        // TO GENERATE TOKEN
        token = await userLogin.generateAuthToken();
        console.log(token);
        

        // TO STORE THE ABOVE GENERATED TOKEN TO COOKIE
        res.cookie("jwtoken",token,{
          expires: new Date(Date.now() + 60000),
          httpOnly: true
        })
          
        if(isMatch) 
        {
            res.json({ message: "User Signin Successfully"})
        }
        else{
          return res.status(400).json({error:"Invalid username or password"});
        }
    }
    else
    {
      res.status(400).json({ error: "Invalid Credentials "});
    }
}
  catch(err){
    console.log(err);
  }  
});

// app.post("/signup", function(req,res){
//   console.log("Heyy!"); 
//   bcrypt.hash(req.body.passw, saltRounds, function(err, hash) {
//     const newUser = new User({
//       name:req.body.fullname,
//       uname:req.body.username,
//       email:req.body.email,
//       contact:req.body.phnnumber,
//       password:hash,
//       gender:req.body.gender                          
//     });

//       newUser.save();
//       res.redirect("https://remarkable-licorice-51dfe5.netlify.app/");
    
//     });
// });

// app.post("/signup",  function(req,res){
  
//   bcrypt.hash(req.body.passw, saltRounds, async function(err, hash) {
//     const newUser = new User({
//       name:req.body.fullname,
//       uname:req.body.username,
//       email:req.body.email,
//       contact:req.body.phnnumber,
//       password:hash,
//       gender:req.body.gender                          
//     });
//     try{
//         const userExists = await User.findOne({email: req.body.email});
//         console.log(userExists);
//         if(userExists)
//         {
//           res.send("User already exixts");
//         }
       
//         else{
//           console.log("I am saving in db");
//           newUser.save();
//           res.redirect("http://localhost:3000/");
//         }
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
    
//     //console.log(req.body);
      
//     res.redirect("/");
//       // res.send("Got You!!");
    
//     });

// });

app.post("/signup", async function(req,res){
  console.log("This is body")
  console.log(req.body)
  console.log(req.body.name)
  console.log(req.body.uname)
  console.log(req.body.email)
  console.log(req.body.contact)
  console.log(req.body.gender)

  bcrypt.hash(req.body.password, saltRounds, async function(err, hash) {
    const newUser = new User({
      name:req.body.name,
      uname:req.body.uname,
      email:req.body.email,
      contact:req.body.contact,
      password:hash,
      gender:req.body.gender                          
    });
    console.log(newUser)
    try{
        const userExists = await User.findOne({email: req.body.email});
        console.log(userExists);
        if(userExists)
        {
          res.status(400).json({ error: "User already exists "});
        }
       
        else{
          console.log("I am saving in db");
          newUser.save();
          res.json({ message:"User registered successfully"});
          // res.json({message:"User registered successfully"});
        }
    }
    catch(err)
    {
        console.log(err);
    }
    
    //console.log(req.body);
      
    // res.redirect("/");
      // res.send("Got You!!");
    
    });

});


app.get('/logout',(req, res)=> {
  console.log(req.body);
  //LOGING OUT IS NOTHING BUT CLEAR THE COOKIE....
  res.clearCookie('jwtoken',{path: '/'})

  res.status(200).send("User logout")
  
})

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