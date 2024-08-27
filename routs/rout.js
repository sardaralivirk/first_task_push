const express= require('express')
const router= express.Router();
const course=require("../modules/mdl");
const {objectId}= require("mongodb" )
const { connection } = require('mongoose');
// const {
//     futn
// }=reuire("../controllers/products");

router.get('/courses',async(req,res)=>{
    //res.send('check ist api')
    console.log("Entered")

   try{
    console.log("Entered Try cathc")
     const courses=await course.find({})
     console.log("Fetched")
     console.log(courses)
     res.status(200).json(courses);
   }catch (err){
         res.status(500).json(err);
   }
});

router.get('/courses/:courseId',async(req,res)=>{
    const courseId=req.params.courseId
  try{
    const c=await course.findById(courseId);
    res.json(c);
  }catch (err){
        res.json(error);
    }
});




router.post("/",async(req,res)=>{
    const courses=await course.create(req.body)
    res.json(courses) 
})
router.delete('/dlt/:id',async(req,res)=>{
    console.log(req.params.id)
    const dlt= await course.deleteOne({ _id: req.params.id });
         res.json(dlt)
})

 router.put('/upd/:id',async(req,res)=>{
   console.log(req.params.id)
   const cour=await course.findOneAndUpdate(
     { 
       _id: req.params.id
     },
      {
  mobile:"abc"     
     }
 )

 res.json({cour})
 }
 )
module.exports = router



// mongoose.connect(process.env.DB_CONNECTION_URL,()=>{
//     console.log('connected to')
// })
// app .listion(process.env.PORT,()=>{
//     console.log('server is running');
// });