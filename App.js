const express = require('express')
const app = express()
const router = require('./routes')
const user = require('./user')

app.use(router)
app.use(user)

app.listen(3000, () => console.log('localhost:3000'))