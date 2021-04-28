const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 5005



mongoose.connect('mongodb+srv://admin:1111@cluster.4wze8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => res.send('hello world!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

