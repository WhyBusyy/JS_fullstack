import { v4 as uuidv4 } from "uuid";
import * as fs from "node:fs";
import { generateDate } from "../functions.js";

function randomDate() {
  const nowDay = new Date();
  const randomYear = nowDay.getFullYear();
  const randomHour = Math.floor(Math.random() * 24) + 1;
  const randomMinute = Math.floor(Math.random() * 60);
  const randomSecond = Math.floor(Math.random() * 60);

  return `${randomYear}-${generateDate()} ${String(randomHour).padStart(
    2,
    0
  )}:${String(randomMinute).padStart(2, 0)}:${String(randomSecond).padStart(
    2,
    0
  )}`;
}

let storeRawData = "";

function getStoreData() {
  try {
    const storeData = fs.readFileSync("../2.store/Store.csv", "utf8");
    return (storeRawData = storeData);
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
    return (userRawData = userData);
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

const csvData = data.join("\n");

fs.writeFile("Order.csv", csvData, (err) => {
  if (err) throw err;
  console.log("CSV 파일이 성공적으로 생성되었습니다.");
});
