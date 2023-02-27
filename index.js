require("dotenv").config();
const express= require("express");
const app=express();
const PORT=process.env.PORT || 5000;

const cors=require("cors");

const conn = require("./db");


// json middlewear
app.use(express.json());

// cors 
app.use(cors());
// ========================= db connection ==============================
conn.on("connected",(err)=>{
    if(err){
      console.log(err);
    }else{
      console.log( "mongodb connected");
    }
});

app.get("/",(req,res)=>{
   res.send("<h1>Welcome to home page</h1>")
});

app.use("/users",require("./routes/users"));


app.listen(PORT,()=>{
    console.log("server started",PORT);
})