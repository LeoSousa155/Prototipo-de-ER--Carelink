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
db.insertNewDoctor('Doutor', 30, 'password');
db.insertNewPatient('Paciente', 27, 'password');
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

  if(formData.isDoctor === 'true') {
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

  if(db.searchDoctorByID(person.id) == undefined) {
    console.log("Redirecionando para a página do paciente");
    res.json({ path: "/doctor/profile"});
  } else {
    console.log("Redirecionando para a página do médico");
    res.json({ path: "/patient/profile"});
  }
});




app.post("/calendar/add-event", (req,res) => {
    function parseDate(dateString) {
    // Split the input string by the "-" delimiter
    const [year, month, day] = dateString.split('-');

    // Convert the string values to integers (optional)
    const parsedDay = parseInt(day, 10);
    const parsedMonth = parseInt(month, 10);
    const parsedYear = parseInt(year, 10);

    return { day: parsedDay, month: parsedMonth, year: parsedYear };
  }

  const formData = req.fields;
  console.log("Post Body: ", formData);
  const parsedDate = parseDate(formData.date);


  db.insertNewEvent(formData.subject, parsedDate.day, parsedDate.month, 1);
  res.json({ path: "/calendar"});
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});