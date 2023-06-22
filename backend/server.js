const express = require('express')
const app = express()
const port = 3000

app.post('/signup', (req, res) => {
  res.send('Hello World!')
})


app.post('/login', (req, res) =>{
    res.json( {
            name:'Ayush Jha',
            age: 20
        })
})


app.get('/questions', (req, res) => {
    res.send(`<html>
        <body>
            <h1 style="color: red">
                Chat
            </h1>
        </body>
    </html`)
  })

 app.get('/submissions', (req, res) =>{
    res.json( {
            name:'Ayush Jha',
            age: 20
        })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  