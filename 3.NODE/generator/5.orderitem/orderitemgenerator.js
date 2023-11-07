import { v4 as uuidv4 } from "uuid";
import * as fs from "node:fs";

//=====================


let orderRawData = "";

function getOrderData() {
  try {
    const orderData = fs.readFileSync("../3.order/Order.csv", "utf8");
    return orderRawData = orderData;
  } catch (err) {
    console.error("파일을 읽는데 오류가 발생했습니다.", err);
  }
}
getOrderData();

function getOrderId() {
    let num = Math.floor(Math.random() * orderRawData.split("\n").length);
    const orderSplit = orderRawData.split("\n")[num];
    const orderId = orderSplit.split(",")[0];
    return orderId;
}

//=================================

let itemRawData = "";

function getItemData() {
  try {
    const itemData = fs.readFileSync("../4.item/item.csv", "utf8");
    return itemRawData = itemData;
  } catch (err) {
    console.error("파일을 읽는데 오류가 발생했습니다.", err);
  }
}
getItemData();

function getItemId() {
    let num = Math.floor(Math.random() * itemRawData.split("\n").length);
    const itemSplit = itemRawData.split("\n")[num];
    const itemId = itemSplit.split(",")[0];
    return itemId;
}


//==========================

const data = [];

for (let i = 0; i < 50000; i++) {
    const orderitemId = uuidv4();
    const orderId = getOrderId();
    const itemId = getItemId();

    data.push(`${orderitemId},${orderId},${itemId}`);
}

//===============================

const csvData = data.join('\n');

fs.writeFile('Orderitem.csv', csvData, (err) => {
    if (err) throw err;
    console.log('CSV 파일이 성공적으로 생성되었습니다.');
});
