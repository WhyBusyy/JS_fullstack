console.log(process.argv);
// argv[0] node 프로세스 위치
// argv[1]은 나 자신, 즉 내 실행파일을 의미
// argv[2] <-- 실제로 입력받은 인자
let numRecords = process.argv[2];
let displayFormat = process.argv[3];
// console.log(numRecords);

console.log(process.argv.length);
if(process.argv.length < 3) {
    numRecords = 100;
    displayFormat = 'csv';
}

for(let i = 0; i < numRecords; i++) {
    console.log(i);
}

if (displayFormat == 'csv') {
    console.log('Printing result to csv...')
} else if(displayFormat == 'html') {
    console.log('Printing result to <HTML>...')
} else {
    console.log('Printing to screen')
}