const express= require('express');
const app= express();

const reqfilter=((req,resp,next)=>{
    console.log('reqfilter')
   
    if (!req.query.age)
    {
        resp.send('please provide age')
    }
    else if (!req.query.age<=18)
    {
        resp.send('you are under the aged')
    }
    else 
    {
        next();

    }

   
})

app.use(reqfilter)

app .get ("/",(req,resp)=>{
    resp.send("welcome to home")
    })

app .get ("/users",(req,resp)=>{
    resp.send("welcome to users home")
    })
app .get ("/about",(req,resp)=>{
    
    resp.send("welcome to about  home")
    })
    
    

app .listen(3000)

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });


// app.listen(3000, () => {
//   console.log('Example app listening on port 3000!');
// });