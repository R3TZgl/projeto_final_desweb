const express = require('express')
const app = express()
let c = 0

app.get('/', (req,res)=>{
    c += 1
    res.send("EU NÃO ACREDITO" + c)
})

app.listen(3000, ()=>{
    console.log('servidor online')
    console.log('http://localhost:3000/')
})
