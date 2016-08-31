var express=require('express');
var router=express.Router();

router.use('/',require('./home'));
router.use('/polls',require('./polls'));

module.exports=router;