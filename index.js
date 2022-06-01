const express = require('express')
const app = express()
const mongoose = require('mongoose')



app.use(express.json())





mongoose.connect('mongodb+srv://Askhab:askhab622@cluster0.gutn8.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Успешно соединились с сервером MongoDB'))
.catch(() => console.log('Ошибка при соединении с сервером MongoDB'))


app.listen(4000, () => {
    console.log('Сервер запущен');
})