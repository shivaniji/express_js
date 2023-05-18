const express=require('express')
const students=require('./students')




  

const app=express()
app.use(express.json())
app.listen(5000,()=>{
    console.log("listem this port 3000")
})

app.get('/',(req,res)=>{
    res.json({message:"api is working"})
    // console.log(students)

})
app.get('/students',(req,res)=>{
    res.json(students)
    // console.log(students)

})



app.post('/students',(req,res)=>{
    if(!req.body.email){
         res.status(400)
         return res.json({error:"email is resportion"})
    }
    // console.log(req.body)\
    const user ={
        id:students.length +1,
        first_name :req.body.first_name,
        last_name :req.body.last_name,
        email : req.body .email
    }
    students.push(user)
    res.json(user)
    // res.send('student port requirt')

})

app.put('/students/:id',(req,res)=>{
    const id =req .params.id
    console.log(id);
    res.json(id)
})