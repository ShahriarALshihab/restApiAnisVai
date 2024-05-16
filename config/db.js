const mongoose=require('mongoose'); 
const config=require('./config'); 

 const DBurl=config.db.url; 

 mongoose.connect(DBurl)
 .then(()=>{
    console.log(`mongodb atlas is connected`); 
 }) 
 .catch(()=>{
    console.log(error); 
    process.exit(1); 
 })