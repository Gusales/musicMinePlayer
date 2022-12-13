const app = require("./config/server");
const user = require('./routes/user')


app.get('/', (req, res) => {
    res.send({
        mensage: 'Hello World'
    })
})

app.use('/user', user)