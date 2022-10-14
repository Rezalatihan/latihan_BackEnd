const routes = require('express').Router();
const multer = require('multer')
const upload = multer({ dest: 'uploads' })
const controlerproduck = require('./control')

routes.get('/product', controlerproduck.index);
routes.get('/product/:id', controlerproduck.view);
routes.post('/product/', upload.single('image'), controlerproduck.tambah)
routes.put('/product/:id', upload.single('image'), controlerproduck.update)
routes.delete('/product/:id', upload.single('image'), controlerproduck.delet)

module.exports = routes