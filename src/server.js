const express = require('express')
const path = require('path')

const app = express()

// definindo o template engine 
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

// habilita o server parar receber dados via POST (formulário)
app.use(express.urlencoded({ extended: true }))

//rotas
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Titúlo teste'
    })
})

// 404 error (not found)
app.use((req, res) => { // middleware
    res.send('Página não encontrada!')
})

// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))

