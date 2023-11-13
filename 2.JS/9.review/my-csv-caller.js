const { readCSV, writeCSV } = require('./my-csv-library2');

const sampleData = [
  ['이름','생년월일','성별'],
  ['이병헌','1990-01-01','Male'],
  ['송혜교','1890-01-01','Female'],
  ['원빈','1999-01-01','Male'],
]

const filePath = 'user.csv';

console.log('쓰기시작');
writeCSV(filePath, sampleData, (err)=>{
  if(err) {
    console.error('에러');
    return;
  }
  console.log('완료');
});
console.log('쓰기종료');

console.log('읽기시작');
readCSV(filePath, (err,data) => {
  if(err) {
    console.error('에러',err);
    return;
  }
  console.log('파일내용:',data);
});
console.log('읽기종료');

