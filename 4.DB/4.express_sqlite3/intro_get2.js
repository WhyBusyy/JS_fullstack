const express = require("express");
const sqlite3 = require("sqlite3");
const fs = require("fs");

const app = express();
const port = 3010;
const dbFile = "mydb1.db";
const db = new sqlite3.Database(dbFile);

app.use(express.json()); //body 안에 있는 json형식을 파싱해서 보내줌
app.use(express.urlencoded({ extended: true })); //-d로 오는 key, value에 대해 파싱해서 보내줌

function init_database() {
  return new Promise((resolve, reject) => {
    //init ~~.db파일 불러와서 실행
    const sql = fs.readFileSync("init_database.sql", "utf8");

    db.exec(sql, (err) => {
      if (err) {
        if (err.code == "SQLITE_CONSTRAINT") {
          resolve();
          console.warn("이미 초기화가 되어있습니다.");
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

  if (username) {
    query = `SELECT * FROM users WHERE username LIKE '%${username}%'`;
  } else {
    query = `SELECT * FROM users`;
  }

  db.all(query, (err, rows) => {
    res.json(rows);
  });
});

// 새로운 사용자 생성
app.post("/users", (req, res) => {
  const { username, password } = req.body;
  const query = `INSERT INTO users(username, password) VALUES ( ?,? )`;

  db.run(query, [username, password], (err) => {
    if (err) {
      console.error(err.message);
      res.status(500).send("오류 발생");
      return;
    }
    res.send("생성 완료");
  });
});

// 사용자 정보 업데이트
app.put("/user/:id", (req, res) => {
  const userId = req.params.id;
  const { username, password } = req.body;

  db.run( 'UPDATE users SET username=?, password=? WHERE id=?', [username, password], (err) => {
    if(err) {
      res.status(500).send('오류');
      return;
    }

    res.send('사용자 정보 갱신 완료');
  })
});

// 사용자 삭제
app.delete("/user/:id", (req, res) => {
  const userId = req.params.id;

  db.run( 'DELETE users WHERE id=?', [userId], (err) => {
    if(err) {
      res.status(500).send('오류');
      return;
    }

    res.send('사용자 삭제 완료');
  })
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

  function buildQuery() {
    let query = "SELECT * FROM products";
    const conditions = [];

    if (name) {
      conditions.push(`name LIKE '%${name}'`);
    }
    if (price) {
      conditions.push(`price LIKE '%${price}'`);
    }

    if (conditions.length > 0) {
      query += `WHERE ${conditions.join(" AND ")}'`;
    }

    return query;
  }

  const query = buildQuery();

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
