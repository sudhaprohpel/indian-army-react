const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = 4000

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('hello world')
})

app.post('/register-user', (req, res) => {
    // const ADD_QUERY = 'INSERT INTO Users'
    console.log(req)
    res.send('Details shown successfully')
})

app.get('/login-user', (req, res) => {
    console.log(req)
    res.send('Login successfully')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})