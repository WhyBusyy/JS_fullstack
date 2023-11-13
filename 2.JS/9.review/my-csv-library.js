const fs = require('fs');

function readCSV(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('파일을 읽는중에 오류가 발생했습니다.', err);
            return callback(err, null);
        }
        rows = data.split('\n');

        rows.map((row, i) => {
            const columns = row.split(',');
            console.log(`행 ${i + 1}:`, columns);
        });
    });
}

const dataToWrite = [
    ['column1', 'column2'],
    ['value1', 'value2'],
    ['value3', 'value4'],
];

function writeCSV(filePath, dataToWrite, callback) {
    const csvContent = dataToWrite.map((row) => row.join(',')).join('\n');
    fs.writeFile(filePath, csvContent, 'utf8', (err) => {
        if (err) {
            console.error('파일을 쓰는도중에 에러가 발생하였습니다.', err);
            return callback(err);
        }

        console.log('csv에 성공적으로 작성되었습니다');
    });

};

module.exports = { readCSV, writeCSV }