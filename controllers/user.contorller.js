const {v4:uuidV4}=require('uuid'); 

let users=require('./../models/userINFO.model'); 


const getAllUsers=async (req,res)=>{
try{
    const users= await users.find(); 
    res.status(200).json(users); 
}
catch(error){
    res.status(500).send(error.message); 
}
  
}; 

const getOneUser=async (req,res)=>{
   
  try{
    const user=await users.findOne({id:req.params.id})
    res.status(200).json({
        user
    })
  }catch(error){
    res.status(500).send(error.message); 
  }
}; 


const createUser=async (req,res)=>{
try{
    let newUser=new users({
        id: uuidV4(),
        name: req.body.name,
        age:Number(req.body.age),
    })

    await newUser.save(); 

    res.status(201).json(newUser)
}
catch(error){
    res.status(500).send(error.message); 
}
}; 


const updateUser= async (req,res)=>{
   try{
    const user=await users.findOne({id:req.params.id}); 
    user.name=req.params.name; 
      user.age=Number(req.params.age);

       await user.save(); 

       res.status(201).json(user); 

   }catch(error){
    res.status(500).send(error.message); 
   }
}

const deleteUser= async (req,res)=>{
    try{
        await users.deleteOne({id:req.params.id}) ;

        res.status(200).json({message:`User deleted`}); 
    }catch(error){
        res.status(500).send(error.message); 
    }
}; 


module.exports={getAllUsers,getOneUser,createUser,updateUser,deleteUser}; 