const express=require('express'); 
const router=express.Router() ;

const { getAllUsers, createUser, getOneUser, deleteUser, updateUser } = require('../controllers/user.contorller');



//api/users: GET
//api/users/:id:GET
//api/users/ :POST
//api/users/:id :PATCH
//api/users/:id :DELETE

router.get('/',getAllUsers); 
router.post('/',createUser); 
router.get('/:id', getOneUser ); 
router.delete('/:id', deleteUser ); 
router.patch('/:id', updateUser ); 





module.exports=router; 