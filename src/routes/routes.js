
const express = require('express');
const router = express.Router();



const {createUser , getAllUsers , getOneUser , updateOne , deleteOne ,} = require ('../controllers/user');
const { createknowledge, getAllknowledge , getOneknowledge, updateOneknowledge, deleteOneknowledge} = require('../controllers/knowledge');


   

//user route

router.post('/user', createUser);
router.get('/user', getAllUsers);
router.get('/user/:id' , getOneUser );
router.put('/user/:id' , updateOne);
router.delete('/user/:id' , deleteOne);



//knowledge route
router.post('/knowledge' , createknowledge);
router.get('/knowlrdge' , getAllknowledge);
router.get('/knowledge/:id' , getOneknowledge);
router.put('/knowledge/:id', updateOneknowledge);
router.delete('/knowledge/:id', deleteOneknowledge);



module.exports = router;
