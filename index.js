const express = require('express')
const app = express()
const bodyparser = require('body-parser')

const { engine } = require('express-handlebars')
const path = require('path')

app.use(bodyparser.urlencoded({extended:false}))
app.set('view engine', 'handlebars')
app.engine('handlebars', engine())

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

const dadosfalsos = [
  {
    id: 1, 
    nome: "Juh",
    endereco: "Rua Bla Bla Bla",
    telefone: "4002-8922",
    datanascimento: "04/10/2004"
  },
  {
    id: 2, 
    nome: "Mariazinha",
    endereco: "Outra rua",
    telefone: "5555-5555",
    datanascimento: "04/03/2024"
  }
] 

// let contador = 0

app.get('/', (req,res) =>{
   //contador = contador + 1
  //res.send("EU NAO ACREDITO!!!!" + contador)
  res.render('index')
})

app.get('/clientes', function(request, response){
  response.render('clientes/index', {listaclientes: dadosfalsos})
  
})

app.get('/clientes/novo', function(req,res){
  res.render('clientes/formcliente')
})

app.post('/clientes/save', function(req,res){
let maiorid = Math.max(...dadosfalsos.map(c => c.id))
if (maiorid == -Infinity) maiorid = 0
maiorid = maiorid + 1

  let novocliente ={
    id: maiorid,
    nome: req.body.nome,
    endereco: req.body.endereco,
    telefone: req.body.telefone,
    datanascimento: req.body.datanascimento
  }
  dadosfalsos.push(novocliente)
  res.redirect('/clientes')
})

app.get('/clientes/alterar/:id',function(req,res){
  let id = req.params['id']
  let cliente = dadosfalsos.find(c => c.id == id)
  res.render('clientes/formcliente', {cliente: cliente})
})

app.listen(3000, ()=>{
    console.log('Servidor online')
    console.log('http://localhost:3000/')
})

