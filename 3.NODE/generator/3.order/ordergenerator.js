import { v4 as uuidv4 } from 'uuid';
import * as fs from 'node:fs'
import { readFile } from 'node:fs';

//=================================

function randomDate() {
    const nowDay = new Date();
    const randomYear = nowDay.getFullYear()
    let randomMonth = Math.floor(Math.random() * nowDay.getMonth()) + 1;
    let randomDay = Math.floor(Math.random() * 31) + 1;
    let randomHour = Math.floor(Math.random() * 24) + 1;
    let randomMinute = Math.floor(Math.random() * 60);
    let randomSecond = Math.floor(Math.random() * 60);
    
    if (![10,11,12].includes(randomMonth)) {
        randomMonth = "0" + randomMonth
    };
    if ([1,2,3,4,5,6,7,8,9].includes(randomDay)) {
        randomDay = "0" + randomDay
    }
    if ([1,2,3,4,5,6,7,8,9].includes(randomHour)) {
        randomHour = "0" + randomHour
    }
    if ([1,2,3,4,5,6,7,8,9].includes(randomMinute)) {
        randomMinute = "0" + randomMinute
    }
    if ([1,2,3,4,5,6,7,8,9].includes(randomSecond)) {
        randomSecond = "0" + randomSecond
    }
    
    const randomDate = randomYear +"-"+ randomMonth +"-"+ randomDay +" "+ randomHour +":"+ randomMinute +":"+ randomSecond;
    return randomDate;
}

console.log(randomDate());
// //=====================

// fs.readFile("../2.store/Store.csv", "utf8", (err, data) => {
//     if (err) {
//       console.error("파일을 읽는데 오류가 발생했습니다.", err);
//       return;
//     }
//     console.log("파일내용", data);
//   });

//   //=================================

// fs.readFile("../1.user/User.csv", "utf8", (err, data) => {
//     if (err) {
//       console.error("파일을 읽는데 오류가 발생했습니다.", err);
//       return;
//     }
//     console.log("파일내용", data);
//   });

//   //==========================

// // const data = [];

// // for (let i = 0; i < 10000; i++) {
// //     const orderId = uuidv4();
// //     const orderAt = 
// //     const storeId = 
// //     const userId = 

// //     data.push(`${orderId},${orderAt},${storeId},${userId}`);
// // }

// // //===============================

// // const csvData = data.join('\n');

// // fs.writeFile('Order.csv', csvData, (err) => {
// //     if (err) throw err;
// //     console.log('CSV 파일이 성공적으로 생성되었습니다.');
// // });