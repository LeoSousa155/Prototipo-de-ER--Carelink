'use strict';

const { DatabaseSync } = require('node:sqlite');
const database = new DatabaseSync('carelink.sqlite');


function createDB() {
    // Execute SQL statements from strings.
    database.exec(`
    CREATE TABLE IF NOT EXISTS Person(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        age INTEGER,
        password TEXT
    ) STRICT
    `);

    database.exec(`
    CREATE TABLE IF NOT EXISTS Patient(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        person_id INTEGER,
        FOREIGN KEY (person_id) REFERENCES Person(id)
    ) STRICT
    `);

    database.exec(`
    CREATE TABLE IF NOT EXISTS Doctor(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        person_id INTEGER,
        FOREIGN KEY (person_id) REFERENCES Person(id)
    ) STRICT
    `);

    database.exec(`
    CREATE TABLE IF NOT EXISTS Event(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        subject TEXT,
        day INTEGER,
        month INTEGER,
        person_id INTEGER,
        CONSTRAINT fk_event,
        FOREIGN KEY (person_id) REFERENCES Person(id)
    ) STRICT
    `);
}

function insertNewPatient(name, age, password) {
    const insertPerson  = database.prepare(`INSERT INTO Person (name, age, password) VALUES (?, ?, ?) RETURNING id`);
    const result        = insertPerson.get(name, age, password);
    const insertPatient = database.prepare(`INSERT INTO Patient (person_id) VALUES (?)`);
    insertPatient.run(result.id);
}


function insertNewDoctor(name, age, password) {
    const insertPerson  = database.prepare(`INSERT INTO Person (name, age, password) VALUES (?, ?, ?) RETURNING id`);
    const result        = insertPerson.get(name, age, password);
    const insertDoctor = database.prepare(`INSERT INTO Doctor (person_id) VALUES (?)`);
    insertDoctor.run(result.id);
}


function insertNewEvent(subject, day, month, pessoa_id) {
    const insert = database.prepare(`INSERT INTO Event (subject, day, month, person_id) VALUES (?, ?, ?, ?)`);
    insert.run(subject, day, month, pessoa_id);
}


function searchPatientByID(id) {
    const query = database.prepare(`SELECT * FROM Person WHERE id = ?`);
    console.log(query.get(id));
}


function searchDoctorByID(id) {
    const query = database.prepare(`SELECT * FROM Person WHERE id = ?`);
    console.log(query.get(id));
}


function searchEventByID(id) {
    const query = database.prepare(`SELECT * FROM Event WHERE id = ?`);
    console.log(query.get(id));
}


function getAllData() {
    // Execute a SQL statement.
    const query = database.prepare(`SELECT * FROM Person ORDER BY age`);
    console.log(query.all());
}


function getAllDataEvent(person_id) {
    // Execute a SQL statement.
    const query = database.prepare(`SELECT * FROM Event WHERE person_id = ? GROUP BY month, day `);
    query.run(person_id);
    console.log(query.all(person_id));
}


//export funcions
module.exports = {
    createDB,
    insertNewPatient,
    insertNewDoctor,
    insertNewEvent,
    searchPatientByID,
    searchDoctorByID,
    searchEventByID,
}

//este código é executado apenas quando o ficheiro é executado diretamente
if (typeof require !== 'undefined' && require.main === module) {
    testDB();
}

function testDB() {
    console.log("Testando o base de dados");
    createDB();
    insertNewPatient("João", 25, "1234");
    insertNewPatient("Maria", 30, "5678");
    insertNewPatient("Pedro", 35, "9012");
    getAllData();
}