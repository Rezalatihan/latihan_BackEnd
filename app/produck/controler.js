const connection = require('../../config/mysql')
const path = require('path')
const fs = require('fs')

const index = (req, res) => {
    const { search } = req.query
    let cariData = {}
    if (search) {
        cariData = {
            sql: 'SELECT * FROM produck WHERE name LIKE ?',
            values: [`%${search}%`]
        }
    } else {
        cariData = { sql: 'SELECT * FROM produck', }
    }
    connection.query(cariData, _response(res))
}

const view = (req, res) => {
    connection.query({
        sql: 'SELECT * FROM produck WHERE id = ?',
        values: [req.params.id]
    }, _response(res))
}
const delet = (req, res) => {
    connection.query({
        sql: 'DELETE FROM produck WHERE id = ?',
        values: [req.params.id]
    }, _response(res))
}

const store = (req, res) => {
    const { id, name, price, stock, status } = req.body
    const image = req.file;
    // console.log(image)
    if (image) {
        const target = path.join(__dirname, '../../uploads', image.originalname)
        fs.renameSync(image.path, target)
        // res.sendFile(target)
        connection.query({
            sql: 'INSERT INTO produck ( id, name, price, stock, status, image_url) VALUES (?, ?, ?, ?, ?, ?)',
            values: [parseInt(id), name, price, stock, status, `http://localhost:3000/public/${image.originalname}`]
        }, _response(res))
    }
}

const update = (req, res) => {
    const { id, name, price, stock, status } = req.body
    const image = req.file;
    let sql = ''
    let values = []
    // console.log(image)
    if (image) {
        const target = path.join(__dirname, '../../uploads', image.originalname)
        fs.renameSync(image.path, target)
        // res.sendFile(target)
        sql = 'UPDATE produck SET id = ?, name = ?, price = ?, stock = ?, status = ?, image_url = ? WHERE id = ? ';
        values = [parseInt(id), name, price, stock, status, `http://localhost:3000/public/${image.originalname}`, req.params.id]
    } else {
        sql = 'UPDATE produck SET name = ?, price = ?, stock = ?, status = ?, WHERE id = ? ';
        values = [parseInt(id), name, price, stock, status, req.params.id]
    }
    connection.query({ sql, values }, _response(res))
}

const _response = (res) => {
    return (error, result) => {
        // console.log(result)
        if (error) {
            res.send({
                status: 'failed',
                respons: error
            })
        } else {
            res.send({
                status: 'sucsses',
                respons: result
            })
        }
    }
}

module.exports = {
    index,
    view,
    store,
    update,
    delet
}