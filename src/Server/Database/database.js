const sqlite3 = require('sqlite3').verbose()
const path = require('path')

let db = new sqlite3.Database('./sample.db', (err) => {
    if(err){
        console.log(err.message)
    } 
    console.log('succesfully opened')
})

module.exports = db