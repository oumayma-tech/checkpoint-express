const express=require('express')
const app=express();
const path=require('path')

const date=new Date()

const logger=(req,res,next)=>{
    
    if(date.getDay()===0 || date.getDay()===6 || date.getHours()<10 || date.getHours()>16){
        res.sendFile(__dirname+'/folder/time.html')
    }else next()
}
app.use(logger)

app.use(express.static(path.join(__dirname, 'folder')))



const port=5000
app.listen(port,()=>console.log(`server running on port ${port}`))