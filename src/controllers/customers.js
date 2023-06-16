const CustomersModel = require('../models/customers')
const { crypto } = require('../utils/password')

const defaultTitle = "Cadastro de Clientes"

const index =  (req, res) => {
    res.render('register', {
        title: defaultTitle
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
    res.render('register', {
        title: defaultTitle,
        message: "Cadastro realizado com sucesso!"
    })
}

const listUsers = async (req, res) => {
    const users = await CustomersModel.find()

    res.render('listUsers', {
        title: 'Listagem de usuários',
        users: users,
    })
}

module.exports = {
    index,
    add,
    listUsers,
}