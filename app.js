const express=require('express');
const cors=require('cors'); 
const bodyParser=require('body-parser'); 

require('./config/db'); 
const userRouter=require('./routes/user.route'); 

const app=express(); 
app.use(cors()); 
app.use(bodyParser.urlencoded({extended:true})); 
app.use(bodyParser.json()); 

app.use('/api/users',userRouter); 

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/index.html')
})





app.use((req,res,next)=>{
    res.status(404).json({
        message:'404 Not Found!',
    })
}); 

app.use((req,res)=>{
    res.status(500).json({
        message:'SERVER ERROR!',
    })
}); 


module.exports=app; 

