'use strict';

const express = require('express');
const formidable = require('express-formidable');
const db = require('./db');
const cors = require('cors');
const path = require('path');
const app = express();



// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));
app.use(formidable());
app.use(express.json());
app.use(cors());


db.createDB();

// Handle all other routes by sending back the React index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});


app.post("/register", (req,res) => {
  const formData = req.fields;
  console.log("Post Body: ", formData);
 

  if(db.doesNameExist(formData.fullName)) {
    res.sendStatus(409); //código de conflito
    console.log("Tentando inserir um nome já existente");
    return;
  }

  if(formData.isDoctor === 'on') {
    db.insertNewDoctor(formData.fullName, null, formData.password);
  } else {
    db.insertNewPatient(formData.fullName, null, formData.password);
  }
  res.sendStatus(200);
});


app.post('/login', (req, res) => {
  console.log('Request Body:', req.fields);
  res.sendStatus(200);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});