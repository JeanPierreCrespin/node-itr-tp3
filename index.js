const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const tareaRoutes = require('./routes/tareaRoutes');



const port = 3000;

mongoose.connect('mongodb+srv://user:password@cluster0.320jaqo.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(4000))
  .catch((err) => {
    console.error('Error al conectar a MongoDB:', err);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'))




app.get('/', (request, response) => {
    response.send('Task Manager')
  });
app.use(tareaRoutes)
