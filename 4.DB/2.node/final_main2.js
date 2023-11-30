const database = require('./final_database2')

async function main() {
  db = new database('mydb4.db');

  try {
  await db.createTable();

  const newUserA = { username: 'bgyu', email: 'bgyu@sesac.com'};
  const newUserB = { username: 'bgyu2', email: 'bgyu2@sesac.com'};
  await db.insertUser(newUserA);
  await db.insertUser(newUserB);

  const changeUser = {
    id: 2,
    username: 'bgyu222',
    email: 'bgyu222@sesac.com'
  }

  await db.updateUser(changeUser);

  const delUser = { id: 7 }
  const delUser2 = { id: 8 }
  await db.deleteUser(delUser);
  await db.deleteUser(delUser2);
  await db.readUser();
} catch(error) {
  console.error('에러발생: ', error);
} finally{
  //데이터베이스 연결 종료
  db.close();}
}

main();

