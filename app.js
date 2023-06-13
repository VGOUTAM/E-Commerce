require('dotenv').config();  
// import axios from "axios";                   // for using environment variable protection
const express =require("express");
const bodyParser =require("body-parser");
const jwt= require('jsonwebtoken')
const cors = require("cors");

const mongoose=require("mongoose");

const bcrypt=require("bcrypt");
const saltRounds=10;

const cookieParser = require('cookie-parser')

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
  ],
  cart: [
    {
      product:{
          id: Number,
          prodName: String,
          image: String,
          span1: String,
          span2: String,
          span3: String,
          span4: String,
          span5: String,
          span6: String,
          para: String,
          prevAmount:Number,
          presAmount: Number
      }
    }
  ],
  wishlist: [
    {
      product:{
          id: Number,
          prodName: String,
          image: String,
          span1: String,
          span2: String,
          span3: String,
          span4: String,
          span5: String,
          span6: String,
          para: String,
          prevAmount:Number,
          presAmount: Number
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
app.use(cookieParser());
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
  console.log(req.body)
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
          expires: new Date(Date.now() + 600000000),
          httpOnly: true
        })
          
        if(isMatch) 
        {
            res.status(200).json({ token,status:"success"})
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

//AUTHENTICATION FUCNCTION TO CHECK IF USER IS LOGGED IN OR NOT
const authenticate=async(req, res, next)=>{
  try{
    console.log("I am in authenticate");
    //console.log(req.body);
    const token = req.headers.authorization.split(' ')[1]; 
     console.log("This is token")
     console.log(token);
    console.log("This is jwt")
    console.log(jwt);
    const verifyToken=jwt.verify(token,process.env.SECRET_KEY);
    // console.log("Verify user")
    // console.log(verifyToken)
    //Now verify token has all details about present user if logged in
    const rootUser= await User.findById(verifyToken._id);
    // console.log("rootUser")
    // console.log(rootUser)
    //if no rootUser found
    if(!rootUser){throw new Error("User not found")}
    // console.log(rootUser);
    //if rootUser found
    //add to req whatever you want to return function which called authenticate function
    req.token=token;
    req.rootUser=rootUser;
    req.cartItems=rootUser.cart;
    req.wishlistItems=rootUser.wishlist;
    
    //next() should be written in every middleware method
    next();


  }catch(err){
    res.status(401).send("Unauthorized. No token provided")
    console.log(err);
  }

}


app.post("/addtocart",authenticate, async function(req,res){
  try{
    console.log("Heyy i am in add to cart");
    console.log(req.body);
    const addProduct=req.body;
    const user =req.rootUser;
    user.cart.push({product:addProduct});
    await user.save();
    console.log(user);
    res.status(200).json({message:"Added to cart"});
  }catch(err){
    res.status(500);
  }

})

app.post("/addtowishlist",authenticate, async function(req,res){
  try{
    console.log("Heyy i am in add to wishlist");
    console.log(req.body);
    const addProduct=req.body;
    const user =req.rootUser;
    user.wishlist.push({product:addProduct});
    await user.save();
    console.log(user);
    res.status(200).json({message:"Added to wishlist"});
  }catch(err){
    res.status(500);
  }

})

app.get("/getCartItems",authenticate,function(req,res){
  try{
    console.log("getCartItems route");
    //console.log(req.cartItems);
    const userCartItems = req.cartItems;    
    // console.log("This is cart array:");
    // console.log(userCartItems);
    res.json(userCartItems);
  }catch(error)
  {
    //console.log("Heyy i am going to error");
    res.status(500).json({ error: 'An error occurred' });
  }
})

app.get("/getWishlistItems",authenticate, function(req,res){  
  try{
    console.log("In getWishlistItems");
    //console.log(req.cartItems);
    const userWishlistItems = req.wishlistItems;    
    // console.log("This is cart array:");
    // console.log(userCartItems);
    res.json(userWishlistItems);
  }catch(error)
  {
    //console.log("Heyy i am going to error");
    res.status(500).json({ error: 'An error occurred' });
  }
})

app.post("/deleteFromCart",authenticate,async function(req,res){
  try{
        console.log("in deleting func")
        const user=req.rootUser;
        const prod_id = new mongoose.Types.ObjectId(req.body._id);
        console.log(req.body)
        console.log(prod_id)
        const cart = req.cartItems;  
        // Find the index of the product to be removed
        const itemIndex = user.cart.findIndex((item) => item._id.equals(prod_id));

        console.log("This is Item Index ",itemIndex)
        user.cart.splice(itemIndex , 1);
        await user.save();
        console.log("deleted")
        res.status(200).json({message:"Deleted from the cart successfully"});
    
    
      }catch(err){
        console.log(err)
        res.status(500)
      }
})

app.post("/deleteFromWishlist",authenticate,async function(req,res){
  try{
        console.log("in deleting wishlist")
        const user=req.rootUser;
        const prod_id = new mongoose.Types.ObjectId(req.body._id);
        console.log(req.body)
        console.log(prod_id)
        // const wishlist = req.wishlistItems;  
        // Find the index of the product to be removed
        const itemIndex = user.wishlist.findIndex((item) => item._id.equals(prod_id));

        console.log("This is Item Index ",itemIndex)
        user.wishlist.splice(itemIndex , 1);
        await user.save();
        console.log("deleted")
        res.status(200).json({message:"Deleted from the wishlist successfully"});
    
    
      }catch(err){
        console.log(err)
        res.status(500)
      }
})



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
  console.log("Iam in logout route");
  //LOGING OUT IS NOTHING BUT CLEAR THE COOKIE....
  res.clearCookie('jwtoken',{path: '/'})

  res.status(200).send("User logout")
  
})




app.listen(PORT,function(){
  console.log("Server started at port 3001");
})