const fs = require("fs");
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
    path: 'example.csv',
    header: [
        {id: 'column1', title: 'Column1'},
        {id: 'column2', title: 'Column2'},
    ],
})

const data = [
    { column1: '값1', column2: '값2'},
    { column1: '값3', column2: '값4'}
];

csvWriter.writeRecords(data)
.then(()=>console.log('완료'));