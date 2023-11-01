const fs = require("fs");

//파일 읽기
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("파일을 읽는데 오류가 발생했습니다.", err);
    return;
  }
  console.log("파일내용", data);
});

// 위의 코드와 같은 기능
fs.readFile("example.txt", "utf8", readFileCallBack);
function readFileCallBack(err, data) {
  if (err) {
    console.error("파일을 읽는데 오류가 발생했습니다.", err);
    return;
  }
  console.log("파일내용", data);
}

// 파일쓰기
const content = '파일에 쓰고 싶은 내용, 이 내용이 복사가 되어야하는데, 왜 안되는거지';
fs.writeFile('newFile.txt',content,'utf8', (err) => {
if (err) {
    console.error("파일을 쓰는데 오류가 발생했습니다.", err);
    return;
  }
  console.log("파일에 결과가 성공적으로 기록되었습니다.");
});

// 파일복사
fs.copyFile('newFile.txt','newFile2.txt', (err) => {
    if (err) {
        console.error("파일을 복사 중 오류가 발생했습니다.", err);
        return;
      }
      console.log("파일이 성공적으로 복사되었습니다.");
    });