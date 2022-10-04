//inisialisasi
const express = require('express')
const app = express()

//import dari file yang diexport
const router = require('./routes')
const user = require('./user')

//penggunaan data yang diimport
app.use(router)
app.use(user)

app.listen(3000, () => console.log('localhost:3000'))