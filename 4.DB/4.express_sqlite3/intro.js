const express = require("express");
const sqlite3 = require("sqlite3");
const fs = require("fs");

const app = express();
const port = 3010;
const dbFile = "mydb1.db";
const db = new sqlite3.Database(dbFile);

function createTable_database() {
  return new Promise((resolve, reject) => {
    const sql = fs.readFileSync("init_database.sql", "utf8");

    db.exec(sql, (err) => {
      if (err) {
        reject(err);
        console.log("초기화 실패", err);
      } else {
        resolve();
        console.log("초기화 성공");
      }
    });
  });
}

function insert_database() {
    return new Promise((resolve, reject) => {
      //init ~~.db파일 불러와서 실행
      const sql = fs.readFileSync("insert_database.sql", "utf8");
  
      db.exec(sql, (err) => {
        if (err) {
          resolve(err);
          console.log("이미 초기화가 되어있습니다.");
        } else {
          resolve();
          console.log("초기화 성공");
        }
      });
    });
  }

function serverReady() {
  return new Promise((resolve, reject) => {
    app.get("/:table", (req, res) => {
      //DB로부터 특정테이블 조회하는 코드
      const db_table = req.params.table;

      const query = `SELECT * FROM ${db_table}`;

      db.all(query, (err, rows) => {
        res.json(rows);
      });
    });

    app.get("/:table/:id", (req, res) => {
      //DB로부터 특정테이블 조회하는 코드
      const db_table = req.params.table;
      const tableId = req.params.id;

      const query = `SELECT * FROM ${db_table} WHERE id=?`;

      db.get(query, [tableId], (err, row) => {
        res.json(row);
      });
    });

    app.get("/:table/:id", (req, res) => {
        //DB로부터 특정테이블 조회하는 코드
        const db_table = req.params.table;
        const tableId = req.params.id;
  
        const query = `SELECT * FROM ${db_table} WHERE id=?`;
  
        db.get(query, [tableId], (err, row) => {
          res.json(row);
        });
      });

    app.listen(port, () => {
      console.log("서버 레디:", port);
    });
  });
}

async function main() {
  await createTable_database();
  await insert_database();
  await serverReady();
}

main();
