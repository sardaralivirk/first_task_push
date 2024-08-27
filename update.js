const dbconnect=require('./router')
const updateData=async()=>{
    let data= await dbconnect();
    let result= await data.updateone
    {name:'max 5'}
    {$set:{name:'max'}

    }
    console.warn(result)
}