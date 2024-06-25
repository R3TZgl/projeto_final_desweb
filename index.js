const express = require('express')
const app = express()

const { engine } = require('express-handlebars')
const path = require('path')

app.set('view engine', 'handlebars')
app.engine('handlebars', engine())

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

const dadosFalsos = [
    {
    id: 1,
    nome: "Gabriel Retzlaff",
    endereco: "Estrada Morro do Meio",
    telefone: "(47)98435-7555",
    dataNasc: "02/12/2004"
    },
    {
    id: 2,
    nome: "Lucas Giugno",
    endereco: "XV de Novembro",
    telefone: "(47)93115-1341",
    dataNasc: "12/01/2006"
    },
]

//let count = 0

app.get('/', (req,res) =>{
    //count += 1
    //res.send("EU NÃO ACREDITO" + count)
    res.render('index')
})

app.listen(3000, ()=>{
    console.log('servidor online')
    console.log('http://localhost:3000/')
})

app.get('/clientes', (req,res) =>{
    res.render('clientes/index', {listaclientes: dadosFalsos})
})

app.get('/clientes/novo', (req,res) =>{
    res.render('clientes/formCliente')
})