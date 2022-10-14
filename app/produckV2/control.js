const connectiont = require('../../config/sequelize')
const Product = require('./model')
const path = require('path')
const fs = require('fs')


const index = (async (req, res) => {
    try {
        await Product.sync();
        const result = await Product.findAll()
        if (result.length > 0) {
            res.status(200).json({
                message: 'data Latihan',
                data: result
            })
        } else {
            res.status(404).json({
                message: 'data tidak ada',
                data: result
            })
        }

    } catch (e) {
        res.send(e.message)
    }
})


const view = (async (req, res) => {
    try {
        let result = await Product.findAll({
            where: {
                id: req.params.id
            }
        })
        if (result.length > 0) {
            res.status(200).json({
                message: 'Berhasil get data',
                data: result
            })
        } else {
            res.status(404).json({
                message: 'gagal get data',
                data: result
            })
        }

    } catch (e) {
        res.send(e.message)
    }

})

const delet = (async (req, res) => {
    try {
        let result = await Product.destroy({
            where: { id: req.params.id }
        })
        if (result.length > 0) {
            res.status(200).json({
                message: 'Berhasil menghapus data'
            })
        } else {
            res.status(404).json({
                message: 'gagal menghapus data'
            })
        }

    } catch (e) {
        res.send(e.message)
    }

})

const tambah = (async (req, res) => {
    const { user_id, name, price, stock, status } = req.body;
    const image = req.file
    if (image) {
        const target = path.join(__dirname, '../../uploads', image.originalname)
        fs.renameSync(image.path, target)
        try {
            await Product.sync();
            const result = await Product.create({ user_id, name, price, stock, status, image_url: `http://localhost:3000/public/${image.originalname}` });
            res.send(result)
        } catch (e) {
            res.send(e)
        }
    }

})

const update = (async (req, res) => {
    const image = req.file
    if (image) {
        const target = path.join(__dirname, '../../uploads', image.originalname)
        fs.renameSync(image.path, target)
        try {
            await Product.sync()
            const result = await Product.update({
                user_id: req.body.user_id,
                name: req.body.name,
                price: req.body.price,
                stock: req.body.stock,
                status: req.body.status,
                image_url: req.body.image_url
            }, {
                where: { id: req.params.id }
            })
            res.status(200).json({
                message: 'berhasil menambahkan data'
            })
        } catch (e) {
            res.send(e)
        }
    }

})

module.exports = {
    index,
    view,
    tambah,
    update,
    delet
}