import express from 'express'


const app = express()

//Routes
app.get('/',(req,res)=>{
    res.json({message:"welcome to the Elib api"})
})

export default app;