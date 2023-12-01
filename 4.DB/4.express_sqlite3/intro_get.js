const express = require("express");
const sqlite3 = require("sqlite3");
const fs = require("fs");

const app = express();
const port = 3010;
const dbFile = "mydb1.db";
const db = new sqlite3.Database(dbFile);

function init_database() {
  return new Promise((resolve, reject) => {
    //init ~~.db파일 불러와서 실행
    const sql = fs.readFileSync("init_database.sql", "utf8");

    db.exec(sql, (err) => {
      if (err) {
        if(err.code == 'SQLITE_CONSTRAINT') {
          resolve();
          console.warn('이미 초기화가 되어있습니다.');
        } else {
          reject(err);
          console.log("초기화 실패", err);
        }
      } else {
        resolve();
        console.log("초기화 성공");
      }
    });
  });
}

app.get("/users", (req, res) => {
  // const username = req.query.username;
  const { username } = req.query;

  let query;

  if(username) {
    query = `SELECT * FROM users WHERE username LIKE '%${username}%'`;
  } else {
    query = `SELECT * FROM users`;
  }

  db.all(query, (err, rows) => {
    res.json(rows);
  });

  //get방식으로 username 받아와서 사용자 검색하기
  //127.0.0.0:3010/users?username=user1
});

app.get("/users/:user_id", (req, res) => {
  const tableId = req.params.user_id;

  const query = `SELECT * FROM users WHERE id=?`;

  db.get(query, [tableId], (err, row) => {
    res.json(row);
  });
});

app.get("/products", (req, res) => {
  const { name, price } = req.query;
  
  let query ='';
  query += 'SELECT * FROM products';

  // if(name && price) {
    // query +=` WHERE name LIKE '${name} AND price = ${price}'`;}
  let condition = 0;

    if(name) {
      if (condition = 0) {query += 'WHERE'} else {query += 'AND';}
    query +=` name LIKE '${name}'`;  condition = 1;}
    if(price) {
      if (condition = 0) {query += 'WHERE'} else {query += 'AND';}
    query +=` price = ${price}`; condition = 1;}

  

  db.all(query, (err, rows) => {
    res.json(rows);
  });
});

app.get("/products/:products_id", (req, res) => {
  const tableId = req.params.products_id;

  const query = `SELECT * FROM products WHERE id=?`;

  db.get(query, [tableId], (err, row) => {
    res.json(row);
  });
});

app.get("/books", (req, res) => {
  const query = `SELECT * FROM books`;

  db.all(query, (err, rows) => {
    res.json(rows);
  });
});

app.get("/books/:books_id", (req, res) => {
  const tableId = req.params.books_id;

  const query = `SELECT * FROM books WHERE id=?`;

  db.get(query, [tableId], (err, row) => {
    res.json(row);
  });
});

async function serverReady() {
  await init_database();

  app.listen(port, () => {
    console.log("서버 레디:", port);
  });
}

serverReady();
