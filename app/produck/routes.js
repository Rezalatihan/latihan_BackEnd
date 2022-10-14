const router = require('express').Router();
const multer = require('multer')
const upload = multer({ dest: 'uploads' })
const controlerproduck = require('./controler')

router.get('/produck', controlerproduck.index);
router.get('/produck/:id', controlerproduck.view)
router.post('/produck/', upload.single('image'), controlerproduck.store)
router.put('/produck/:id', upload.single('image'), controlerproduck.update)
router.delete('/produck/:id', upload.single('image'), controlerproduck.delet)


module.exports = router