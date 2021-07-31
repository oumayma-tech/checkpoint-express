const express=require('express')
const app=express()


let data=[
    {
        name:"oumayma",
        email:"oumayma@gmail.com",
        id:1
    },
    {
        name:"john",
        email:"john@gmail.com",
        id:2
    }
]
app.get('/data',(req,res)=>{
    res.send({msg:"list of data",data})
})

const port=5000
app.listen(port,()=>console.log(`server running on port ${port}`))