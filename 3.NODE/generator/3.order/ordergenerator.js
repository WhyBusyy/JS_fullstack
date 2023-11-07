import { v4 as uuidv4 } from "uuid";
import * as fs from "node:fs";

//=================================

function randomDate() {
  const nowDay = new Date();
  const randomYear = nowDay.getFullYear();
  let randomMonth = Math.floor(Math.random() * nowDay.getMonth()) + 1;
  let randomDay = Math.floor(Math.random() * 31) + 1;
  let randomHour = Math.floor(Math.random() * 24) + 1;
  let randomMinute = Math.floor(Math.random() * 60);
  let randomSecond = Math.floor(Math.random() * 60);

  if (![10, 11, 12].includes(randomMonth)) {
    randomMonth = "0" + randomMonth;
  }
  if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(randomDay)) {
    randomDay = "0" + randomDay;
  }
  if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(randomHour)) {
    randomHour = "0" + randomHour;
  }
  if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(randomMinute)) {
    randomMinute = "0" + randomMinute;
  }
  if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(randomSecond)) {
    randomSecond = "0" + randomSecond;
  }

  const randomDate =
    randomYear +
    "-" +
    randomMonth +
    "-" +
    randomDay +
    " " +
    randomHour +
    ":" +
    randomMinute +
    ":" +
    randomSecond;
  return randomDate;
}

//=====================

let storeRawData = "";

function getStoreData() {
  try {
    const storeData = fs.readFileSync("../2.store/Store.csv", "utf8");
    return storeRawData = storeData;
  } catch (err) {
    console.error("파일을 읽는데 오류가 발생했습니다.", err);
  }
}
getStoreData();

function getStoreId() {
    let num = Math.floor(Math.random() * storeRawData.split("\n").length);
    const storeSplit = storeRawData.split("\n")[num];
    const storeId = storeSplit.split(",")[0];
    return storeId;
}

//=================================

let userRawData = "";

function getUserData() {
  try {
    const userData = fs.readFileSync("../1.user/User.csv", "utf8");
    return userRawData = userData;
  } catch (err) {
    console.error("파일을 읽는데 오류가 발생했습니다.", err);
  }
}
getUserData();

function getUserId() {
    let num = Math.floor(Math.random() * userRawData.split("\n").length);
    const userSplit = userRawData.split("\n")[num];
    const userId = userSplit.split(",")[0];
    return userId;
}

//==========================

const data = [];

for (let i = 0; i < 10000; i++) {
    const orderId = uuidv4();
    const orderAt = randomDate();
    const storeId = getStoreId();
    const userId = getUserId();

    data.push(`${orderId},${orderAt},${storeId},${userId}`);
}

//===============================

const csvData = data.join('\n');

fs.writeFile('Order.csv', csvData, (err) => {
    if (err) throw err;
    console.log('CSV 파일이 성공적으로 생성되었습니다.');
});
