const express = require('express')
const path = require('path')
const mongoose = require('mongoose')

const db = require('./database')
const routes = require('./routes')

const app = express()

// coneção com o banco de dados
db.connect()

const schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
})

// definindo o template engine 
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

// habilita o server parar receber dados via POST (formulário)
app.use(express.urlencoded({ extended: true }))

//rotas
app.use('/', routes)

// 404 error (not found)
app.use((req, res) => { // middleware
    res.send('Página não encontrada!')
})

// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))

