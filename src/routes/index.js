const router = require('express').Router()

const CustomersController = require('../controllers/customers')

//rotas
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Titúlo teste'
    })
})

router.get('/register', (req, res) => {
    res.render('register', {
        title: 'Cadastro de clientes'
    })
})

router.post('/register/add', CustomersController.add)


module.exports = router