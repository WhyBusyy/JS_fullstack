const fs = require('fs');

// 현재 디렉토리의 파일 목록 읽기
fs.readdirSync('./').forEach(file => {
    console.log(file);
});

// fs.readdirSync('./').forEach(function(file) {
//     console.log(file);
// });