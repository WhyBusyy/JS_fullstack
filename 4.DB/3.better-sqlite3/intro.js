const sqlite = require('better-sqlite3');

const db = new sqlite("mydb1.db");

db.exec(`CREATE TABLE IF NOT EXISTS greeting (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    message TEXT
)`);

//데이터 삽입
const msg1 = ["Hello, World4"];
const insert = db.prepare(`INSERT INTO greetings (message) VALUES (?)`);
const result = insert.run(msg1);
console.log('데이터 성공적으로 추가: ', result.lastInsertRowid);

const read = db.prepare('SELECT * FROM greetings');
const greetings = read.all();
greetings.forEach((row) => {
    console.log('Greeting:', row.message);
});

db.close();
