import { v4 as uuidv4 } from "uuid";
import * as fs from "node:fs";
const userNameFile = fs.readFileSync("../0.src/usernamesrc.json", "utf8");
const addressFile = fs.readFileSync("../0.src/addresssrc.json", "utf8");
const storeFile = fs.readFileSync("../0.src/addresssrc.json", "utf8");
const itemFile = fs.readFileSync("../0.src/addresssrc.json", "utf8");

export class common {
  constructor() {
    this.ID = uuidv4();
  }
  userNameData = JSON.parse(userNameFile);
  addressData = JSON.parse(addressFile);
  storeData = JSON.parse(storeFile);
  itemData = JSON.parse(itemFile);
}

let common1 = new common()
console.log(common1);

export function selectRandomIndex(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

export function generateDate() {
  let month = Math.floor(Math.random() * 12) + 1;
  let day = 0;

  [1, 3, 5, 7, 8, 10, 12].includes(month)
    ? (day = Math.floor(Math.random() * 31) + 1)
    : [4, 6, 9, 11].includes(month)
    ? (day = Math.floor(Math.random() * 30) + 1)
    : (day = Math.floor(Math.random() * 28) + 1);

  return `${String(month).padStart(2, 0)}-${String(day).padStart(2, 0)}`;
}
