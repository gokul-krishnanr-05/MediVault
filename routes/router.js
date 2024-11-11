const express=require('express');
const router=express.Router();
const Hmodel=require("../models/models");

const bodyParser=require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.post('/health', async (req, res) => {
    const health= new Hmodel({
        Name:req.body.Name,
        Age:req.body.Age,
        Photo:req.body.Photo,
        Medicines:req.body.Medicines,
        LVisit:req.body.LVisit,
        NVisit:req.body.NVisit


    });
    try{
        const Nhealth=await health.save();
        res.status(200).json(Nhealth);
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
})
router.get('/health',async (req,res) =>{
    try{

        const Nhealth=await Hmodel.find().sort({Age:1});
        res.json(Nhealth)
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
})

router.put('/health/:id',async (req,res) =>{
    try{
    const Hupdate=await Hmodel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json(Hupdate)
    }
    catch(error){
        res.status(400).json({message:error.message});
    }

});

router.delete('/health/:id',async (req, res) =>{
    try{
        await Hmodel.findByIdAndDelete(req.params.id,req.body);
        res.json({message :"USER DELETED"});

    }
    catch(error){
        res.status(400).json({message:error.message});
    }
})
 
module.exports=router;

