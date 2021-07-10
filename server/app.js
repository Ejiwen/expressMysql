const express = require('express');
var db = require('./db');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();


//const dbService = require('./dbService');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));


// create
app.post('/insert', (request, response) => {

});

// read
app.get('/getAll', (request, response) => {
  //db.messages.get()
  //  response.json({
  //    success: true
  //  });
  //response.send('hey');
  response.json('hey');
})

//app.get('/getAll', db.getAll);


app.listen(process.env.PORT, () => console.log('app is running'));