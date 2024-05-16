const app=require('./app') ; 
const config=require('./config/config'); 

const PORT=config.app.port|| 4000; 



app.listen(PORT,()=>{
    console.log(`Server is running at http://127.0.0.1:${PORT}`); 
})