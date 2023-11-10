import { v4 as uuidv4 } from "uuid";
import * as fs from "node:fs";
import { surname, maleFirstname, femaleFirstname, stateData } from "./UserData.js";
import { generateDate, selectRandomIndex, generateAddress } from "../functions.js";

function generateNameAndGender() {
  const gender = Math.random() < 0.4 ? "Male" : "Female"; // 비중조절 가능 0.n

  if (gender === "Male") {
    return [
      selectRandomIndex(surname) + selectRandomIndex(maleFirstname),
      gender,
    ];
  } else {
    return [
      selectRandomIndex(surname) + selectRandomIndex(femaleFirstname),
      gender,
    ];
  }
}

function generateBirth() {
  let year = Math.floor(Math.random() * 50) + 1960;
  let date = generateDate();
  const nowDay = new Date();
  const userAge = nowDay.getFullYear() - year + 1;

  return [userAge, `${year}-${date}`];
}

const data = [];
for (let i = 0; i < 1000; i++) {
  const userId = uuidv4();
  const userNameAndGender = generateNameAndGender();
  const userBirth = generateBirth();
  const userAddress = generateAddress();

  data.push(`${userId},${userNameAndGender},${userBirth},${userAddress}`);
}

// 데이터를 줄 단위로 연결하여 CSV 문자열로 만듭니다.
const csvData = data.join("\n");

// 파일에 데이터를 씁니다.
fs.writeFile("User.csv", csvData, (err) => {
  if (err) throw err;
  console.log("CSV 파일이 성공적으로 생성되었습니다.");
});