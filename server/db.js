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

function getAllData() {
    // Execute a SQL statement.
    const query = database.prepare(`SELECT * FROM Person ORDER BY age`);
    console.log(query.all());
}

console.log("Testando o banco de dados");
createTable();
insertData("João", 25);
insertData("Maria", 30);
insertData("Pedro", 20);
getAllData();