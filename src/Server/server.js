const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = 4000
// const db = require('./Database/database.js')

const sqlite3 = require('sqlite3')
let db = new sqlite3.Database('./Database/sample.db', (err) => {
    if(err){
        console.log(err.message)
    }
    console.log('database found')
})

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('hello world')
})

function handleRegisterUser(req){
    var data = {
        name: req.body.fullName,
        userName: req.body.userName,
        userPassword: req.body.userPassword
    }
    db.run('create table users if not exists (userFullName text not null, userName text not null, password text not null')
    db.run(`insert into users value('${data.name}',${data.userName}','${data.userPassword}')`)
    console.log('Inside handle register function and registration succefull')
}

app.post('/register-user', async (req, res) => {
    // var data = {
    //     name: req.body.fullName,
    //     userName: req.body.userName,
    //     userPassword: req.body.userPassword
    // }
    // sayHello(data)
    // res.send('successful')

    const result = await handleRegisterUser(req)

})

app.get('/login-user', (req, res) => {
    console.log(req)
    res.send('Login successfully')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})