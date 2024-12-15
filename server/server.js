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

db.insertNewPatient('Pessoa', 27, 'password');
db.insertNewEvent('Consulta com Doutor', 27, 9, 1);
db.insertNewEvent('Analise de Sangue', 2, 9, 1);

// Handle all other routes by sending back the React index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/dadosEvent',(req,res) => {
  const response = db.getAllDataEvent(1);
  res.json(response);
})

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
  const formData = req.fields;
  console.log('Request Body:', formData);

  const person = db.searchPersonByName(formData.fullName);

  if(person == undefined) {
    res.sendStatus(404);
  }

  if(person.password != formData.password) {
    res.sendStatus(401);
  }

  if(db.searchDoctorByID(person.id) != undefined) {
    console.log("Redirecionando para a página do paciente");
    res.json({ path: "/doctor/home"});
  } else {
    console.log("Redirecionando para a página do médico");
    res.json({ path: "/patient/home"});
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});