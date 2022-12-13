const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('primeira rota do usuário')
})

module.exports = router