import express,{Request,Response} from "express"

const app = express()
const port = 3000;
app.get('/',(req:Request,res:Response)=>{
    res.json({
        message:"health check",
        success:true
    })
})
app.listen(port,()=>{
    console.log(`server is ruuning on   http://localhost:${port}`)
})