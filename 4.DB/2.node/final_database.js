const sqlite3 = require("sqlite3");

function createTable() {
  return new Promise ((resolve, reject) => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT,
        email TEXT
    )`,  function (err) {
      if (err) {
        reject(err);
      } else { 
        resolve();
      }
    });
  })
}


//데이터 삽입(CREATE) >> INSERT
function insertUser(newUser){
  return new Promise ((resolve, reject) => {
    db.run('INSERT INTO users (username, email) VALUES (?, ?)',
    [newUser.username, newUser.email], function (err) {
      if (err) {
        reject(err);
      } else { 
        resolve();
      }
    })
  })
}


//데이터 수정 (UPDATE) >> UPDATE
function updateUser(changeUser) {
  return new Promise ((resolve, reject) => {
    db.run('UPDATE users SET username=?, email=? WHERE id=?',
    [changeUser.username, changeUser.email, changeUser.id], function (err) {
      if (err) {
        reject(err);
      } else { 
        resolve();
      }
    });
  })
}

function deleteUser(delUser) {
  return new Promise ((resolve, reject) => {
    //데이터 삭제 (DELETE) >> DELETE
    db.run('DELETE FROM users WHERE id=?',
    [delUser.id], function (err) {
      if (err) {
        reject(err);
      } else { 
        resolve();
      }
    });
  })
}

function readUser() {
  return new Promise ((resolve, reject) => {
    //데이터 조회 (READ) >> SELECT
    db.each("SELECT * FROM users", (err, row) => {
      if (err) {
        console.error("쿼리 실패");
        reject(err);
      }
      console.log("ALL users : ", row);
      resolve();
    });
  })
}

const db = new sqlite3.Database("mydb5.db");

module.exports = {createTable,insertUser,updateUser,deleteUser,readUser, close: () => db.close()};