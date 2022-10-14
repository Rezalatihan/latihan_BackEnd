const express = require('express')
const path = require('path')
const app = express()
const produckRouter = require('./app/produck/routes')
const produckRouterV2 = require('./app/produckV2/routes')
const user = require('./app/users/user')
const logger = require('morgan')

app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/public', express.static(path.join(__dirname, 'uploads')))
app.use('/api/v1', produckRouter)
app.use('/api/v2', produckRouterV2)
app.use(user)
app.use((req, res) => {
    res.send({
        status: 'failed',
        message: 'resourc' + req.originalUrl + 'not found'
    })
})
app.listen(3000, () => console.log('localhost:3000'))