const express=require('express')
const app=express();
const path=require('path')



const logger=(req,res,next)=>{
    const date=new date()
    if(date.getdate()===0 || date.getdate()===6 || date.gethours()<9 || date.gethours>16){
        res.senFile(__dirname+'folder/time.html')
    }else next()
}
app.use(logger)

app.use(express.static(path.join(__dirname, 'folder')))



const port=5000
app.listen(port,()=>console.log(`server running on port ${port}`))