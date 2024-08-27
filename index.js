const express=require('express');
const bodyparser=require('body-parser')
// const { default: mongoose } = require('mongoose');
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/lat_task').then(()=>{
    console.log("Connect");
})
const app = express();
app.use(bodyparser.json())


//    const istscheema=new mongoose.Schema({
//     name:String,
//     age:Number,
//     mobile:String,
//     //date:{type:date,default:date.now}
//    })

// const creteSchema=new mongooes.model("ist_task",istscheema)
// async function creatfun() {
    
//     const values=new creteSchema({
//          name:'ali',
//          age:11,
//          mobile:'apple',
    
//     })
    // app.get('/',(req,res)=>{
    //     res.send('lst task check api')
    // })

    const coursesrouter=require("./routs/rout")
    app.use("/c",coursesrouter);
    //const result=await values.save(); 
    //console.log(result);
//}
//creatfun();
// const prdt_routes=require("../routes/products");
// app.use("/api/products")
//lt_task.collection.find
app.listen(3000,()=>{
    console.log("server is working http://localhost//3000")
})