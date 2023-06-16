const CustomersModel = require('../models/customers')
const { crypto } = require('../utils/password')

const index =  (req, res) => {
    res.render('register', {
        title: 'Cadastro de clientes'
    })
}

const add = async (req, res) => {
    const {
        name,
        age,
        email,
        password
    } = req.body

    const passwordCrypto = await crypto(password)

    const register = new CustomersModel({
        name,
        age,
        email,
        password: passwordCrypto,
    })

    register.save()
    res.send('Cadastro realizado!')
}

module.exports = {
    index,
    add,
}