const router = require('express').Router();

router.get('/', (req, res) => {
    res.send({
        status: 'Succesfully',
        message: 'welcome express '
    })
})

router.get('/about', (req, res) => {
    res.send('<h1> About express <h1>')
})

router.get('/eduwork', (req, res) => {
    res.redirect('https://eduwork.id/')
})



module.exports = router