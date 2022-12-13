const express = require('express')
const app = express()
const port = 8081

app.listen(port, () => console.log(`Servidor Node.js rodando! Local: http://localhost:${port}`))

module.exports = app