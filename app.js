const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('This is home page')
})

app.get('/',(req,res)=>{
    res.json('This is Artem page')
})

if(random>0.5){
   res.status(200).json({message : 'This is artem page'})}
else {
    res.status
}

app.listen(3000,() =>{
    console.log('App listening on localhost:3000');
})
