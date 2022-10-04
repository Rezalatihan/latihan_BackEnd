const users = require('express')
const user = users.Router();


user.route('/user')
    //Membuat route (Menggabungkan url)
    //Dengan syarat harus satu Url
    .get((req, res) => {
        //mengembalikan data JSON
        const kelas = {
            id: 1,
            nama: 'Reza Catria Akbar'
        }
        res.json(kelas)
    }).post((req, res) => {
        res.send({
            message: 'welcome express user post '
        })
    })

user.put('/user/:id', (req, res) => {
    const id = req.params
    res.send(id)
})

user.delete('/user/:userId', (req, res) => {
    res.json(req.params)
})

module.exports = user