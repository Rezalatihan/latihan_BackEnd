const users = require('express')
const user = users.Router();
// const path = require('path')
// const fs = require('fs')


user.get('/user', (req, res) => {
    res.send({
        status: 'success',
        message: 'WELCOME TO MERN'
    })
})

// user.post('/user/', upload.single('image', (req, res) => {
//     const { id, nama } = req.body
//     const image = req.file
//     if (image) {
//         const target = path.join(__dirname, 'uploads', image.originalname)
//         fs.renameSync(image.path, target)
//         res.json({
//             id,
//             nama,
//             image
//         })
//         res.sendFile(target)
//     }
// }))

user.put('/user/:id', (req, res) => {
    const id = req.params
    res.send(id)
})

user.delete('/user/:userId', (req, res) => {
    res.json(req.params)
})


module.exports = user