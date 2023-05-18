// const express=require("express")
// const jwt=require("jsonwebtoken")
// const aap=express();

// app.get('/',(req,res)=>{
//     res.json({message:"api is working"})
//     // console.log(students)

// })
// app.listen(5000,()=>{
//     console.log("aap is running 5000 port")
// })

const express = require('express')
const jwt = require("jsonwebtoken")
const secretkey = "secretkey";







const app = express()

app.listen(5000, () => {
    console.log("listem this port 3000")
})

app.get('/', (req, res) => {
    res.json({ message: "api is working" })

})
app.post('/login', (req, res) => {
    const user = {
        id: 1,
        usernme: "shivani",
        email: "shivanigorakhiya@nav.com"
    }
    jwt.sign({ user }, secretkey, { expiresIn: "300s" }, (err, token) => {
        res.json({
            token
        })

    })
})

app.post("/profile",verifytoken,(req,res)=>{

})
function verifytoken(req,res,next){
    const bearerHeader =req.Headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){

    }else{
        res.sent({
            result:"token is no vaild"
        })
    }

}