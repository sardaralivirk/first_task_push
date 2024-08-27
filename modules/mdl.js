const mongoose=require('mongoose')
const course=mongoose.Schema({
            name:String,
            age:Number,
            mobile:String,
});

module.exports=mongoose.model("class",course)
