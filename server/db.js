'use strict';

const { DatabaseSync } = require('node:sqlite');
const database = new DatabaseSync('carelink.sqlite');

function createTable() {
    // Execute SQL statements from strings.
    database.exec(`
    CREATE TABLE IF NOT EXISTS Person(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        age INTEGER
    ) STRICT
    `);
    database.exec(`
        CREATE TABLE IF NOT EXISTS Event(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject TEXT,
            day INTEGER,
            month INTEGER,
            person_id INTEGER,
            CONSTRAINT fk_event
                FOREIGN KEY (person_id)
                REFERENCES Person(id)
        )
        `);
}



function deleteTable() {
    // Execute SQL statements from strings.
    database.exec(`
    DROP TABLE IF EXISTS Person
    `);
}

function insertData(name, age) {
    // Execute a SQL statement.
    const insert = database.prepare(`INSERT INTO Person (name, age) VALUES (?, ?)`);
    insert.run(name, age);
}

function insertDataEvent(subject, day, month, pessoa_id) {
    // Execute a SQL statement.
    const insert = database.prepare(`INSERT INTO Event (subject, day, month, person_id) VALUES (?, ?, ?, ?)`);
    insert.run(subject, day, month, pessoa_id);
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

console.log("Testando o banco de dados");
createTable();
//insertData("João", 25);
//insertData("Maria", 30);
//insertData("Pedro", 20);
getAllData();
//insertDataEvent("consulta1", 15, 9, 1);
//insertDataEvent("consulta2", 10, 10, 2);
//insertDataEvent("consulta3", 12, 6, 3);
//insertDataEvent("consulta4", 16, 9, 1);
getAllDataEvent(1);
getAllDataEvent(2);
getAllDataEvent(3);