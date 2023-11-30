const sqlite = require('better-sqlite3');

const db = sqlite(':memory:');

db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    email TEXT
)`);

const allUsers = db.prepare('SELECT * FROM users').all();
console.log('모든 사용자: ', allUsers);

const newUser = {
    username : 'bgyu', email: 'bgyu@sesac.com'
}
const insert = db.prepare('INSERT INTO users (username, email) VALUES (?,?)');
const insertResult =  insert.run(newUser.username, newUser.email);
console.log('추가된 사용자: ', insertResult.lastInsertRowid);

const userId = 1;
const user = db.prepare('SELECT * FROM users WHERE id = ?')
const result = user.get(userId);
console.log(`사용자 ${userId}: ${result?.username}`); // ?는 없을떄는 참조하지 않음..


const updateUser =  {
    username: 'bgyu222', email: 'bgyu222@sesac.com'
}
const update = db.prepare('UPDATE users SET username=?, email=? WHERE id=?');
update.run(updateUser.username, updateUser.email, updateUser.id);
console.log('업데이트 성공');

const deleteUser =  {
    id: 1
}
const deleteQuery = db.prepare('DELETE FROM users WHERE id=?');
deleteQuery.run(deleteUser.id);
console.log('삭제 성공');

db.close();