var express=require('express');
var router=express.Router();
var pollModel=require('../models/polls');

router.route('/')
	.get(function(req,res) {
		var pollObject=new pollModel();
		pollObject.getAllPolls(function(err,pollResponse) {
			if(err) {
				return res.json({"responseCode":1,"responseDesc":pollResponse})
			}
			res.json({"responseCode":0,"responseDesc":"success","data":pollResponse});
		});
	})
	.post(function(req,res) {
		var pollObject=new pollModel();
		pollObject.addNewPolls(req.body,function(err,pollResponse) {
			if(err) {
				return res.json({"responseCode":1,"responseDesc":pollResponse});
			}
			res.json({"responseCode":0,"responseDesc":"success","data":pollResponse});
		});
	})
	.put(function(req,res) {
		var pollObject=new pollModel();
		pollObject.votePollOption(req.body,function(err,pollResponse) {
			if(err) {
				return res.json({"responseCode":1,"responseDesc":pollResponse});
			}
			return res.json({"responseCode":0,"responseDesc":"success","data":pollResponse});
		});
	});

module.exports=router;