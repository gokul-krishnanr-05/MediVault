const mongoose = require('mongoose');

const healthSchema=new mongoose.Schema({
    Name:{type:String,required:true},
    Age:{type:Number,required:true},
    Photo:{type:String,required:true},
    Medicines:{type:String,required:true},
    LVisit:{type:Date,required:true},
    NVisit:{type:Date,required:true},
    Date:{type:Date,default:Date.now}
    
})
module.exports=mongoose.model('Health',healthSchema)