const fs = require("fs");
const path = require("path");
const directoryPath = "../";

function readDirOrFile(directoryPath, prefix = '') {
  const files = fs.readdirSync(directoryPath);
  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    const isDirectory = fs.statSync(filePath).isDirectory(); //참,거짓을 반환
    console.log(prefix,"└─", file);

    if (isDirectory) {
      const prefixForNextLevel = "  ";
      readDirOrFile(filePath, prefixForNextLevel); //재귀함수: 함수 내에서 함수 자신을 호출
    }
  });
}

readDirOrFile(directoryPath);


// 함수원형 readdir(path, option, callback: (err, files) => void):void

// 현재 디렉토리의 파일 목록 읽기
// fs.readdirSync('./').forEach(file => {
//     console.log(file);
// });
