const index = (req, res) => {
    res.render('index', {
        title: 'Titúlo teste'
    })
}

module.exports = {
    index
}