 const express=require('express');
 const mongoose=require('mongoose');
 const cors=require('cors');
 const bcrypt =require('bcryptjs')
 require('dotenv').config();

 //set up express
 const app=express();
 app.use(express.json());
 app.use(cors());

  const PORT=process.env.PORT || 5000

 app.listen(PORT,()=>console.log(`the server has started on port:${PORT}`))

 //set up mongoose
 mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{
     useNewUrlParser:true,
     useUnifiedTopology:true,
     useCreateIndex:true
 },(err)=>{
     if(err) throw err;
     console.log("MongoDB connection establish");
 })
    // set up routes

   app.use("/users",require('./routes/userRouter'));
