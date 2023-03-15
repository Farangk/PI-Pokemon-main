const {Router} = require('express'); 
const router = Router(); 
const {getTypes} =require('../Controller/type.controller');


router.get("/", getTypes); 


module.exports = router; 