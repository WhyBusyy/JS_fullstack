const fs = require("fs");

const filePath = "sample.csv";

fs.readFile("./sample.csv", "utf8", (err, data) => {
  if (err) {
    console.error("에러", err);
    return;
  }
  let rows = data.split('\n');
  //console.log(data);

// 1. for loop 방식
//   for( let i = 0; i < rows.lenght; i++) {
//     const row = rows[i];
//     const columns = row.split('\n');
//     console.log(rows[i]);
//     console.log(`행 ${i+1}:`, columns);
//   }
// 2. forEach 방식
// rows.forEach(row,i) => {
//     const columns = row.split('\n');
//     console.log(`행 ${i+1}:`, columns);
// }
// 3. map방식
rows.map((row,i)=>{
    const columns = row.split('\n');
    console.log(`행 ${i+1}:`, columns);
})
});

