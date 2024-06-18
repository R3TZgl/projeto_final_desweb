const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.send("EU NAO ACREDITO")
})

app.listen(3000, ()=>{
    console.log('servidor online')
    console.log('http://localhost:3000/')
})