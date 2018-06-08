const express = require('express')
const app = express()
const path = require('path');
//app.get('/', (req, res) => res.send('Hello World!'))

const fs = require('fs');
//global.secret = fs.readFileSync('./jwtToken.txt');


app.get('/', function (req,res){
    res.send('Hello World!');
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))