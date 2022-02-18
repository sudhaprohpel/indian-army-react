const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = 4000
const sqlite3 = require('sqlite3')

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('hello world')
})

let db = new sqlite3.Database('./Database/sample.db', (err) => {
    if(err) {
        console.log(err.message)
    }
    console.log("connected to sample db")
})

app.post('/register-user', async (req, res) => {
    var data = {
                name: req.body.fullName,
                userName: req.body.userName,
                userPassword: req.body.userPassword
            }

    db.run(`insert into users values('${data.name}', '${data.userName}', '${data.userPassword}')`, (err) => {
        if(err){
            console.log(err.message)
        }
        console.log('inserted data successful')
    })

    res.send()

})

app.get('/login-user', async (req, res) => {
    var data = {
        name: req.body.userName,
        password: req.body.password
    }
    console.log(data.name)
    db.run(`select * from users where userName = '${data.name}' and password = '${data.password}'`, (err) => {
        if(err){
            console.log(err.message)
        }
    })
    res.send()
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})