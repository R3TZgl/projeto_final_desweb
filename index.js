const express = require('express')
const app = express()

const { engine } = require('express-handlebars')
const path = require('path')

app.set('view engine', 'handlebars')
app.engine('hendlebars', engine())

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

let count = 0

app.get('/', (req,res)=>{
    count += 1
    res.send("EU NÃO ACREDITO" + count)
})

app.listen(3000, ()=>{
    console.log('servidor online')
    console.log('http://localhost:3000/')
})
