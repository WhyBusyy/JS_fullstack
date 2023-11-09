import { v4 as uuidv4 } from "uuid";
import * as fs from "node:fs";
import { common, selectRandomIndex, generateDate } from "./common.js";

export class userGen extends common {
  constructor() {
    super();
    this.Name = this.generateNameAndGender(this.userNameData.surname, this.userNameData.maleFirstname, this.userNameData.femaleFirstname)[0];
    this.Gender = this.generateNameAndGender(this.userNameData.surname, this.userNameData.maleFirstname, this.userNameData.femaleFirstname)[1];
    this.Birthdate = this.generateBirth();
    this.Age = this.calculateAge();
    // this.Address = Address;
  }

  generateNameAndGender(sur, male, female) {
    const gender = Math.random() < 0.4 ? "Male" : "Female"; // 비중조절 가능 0.n

    if (gender === "Male") {
      return [selectRandomIndex(sur) + selectRandomIndex(male), gender];
    } else {
      return [selectRandomIndex(sur) + selectRandomIndex(female), gender];
    }
  }

  generateBirth() {
    let year = Math.floor(Math.random() * 50) + 1960;
    let date = generateDate();

    return new Date(`${year}-${date}`);
  }

  calculateAge(Birthdate) {
    const today = new Date();
    let age = today.getFullYear() - this.Birthdate.getFullYear();
    const m = today.getMonth() - this.Birthdate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < this.Birthdate.getDate())) {
      age--;
    }

    return age;
  }

//   generateAddress(arr1, arr2) {
//     const selectedState = selectRandomIndex(arr1);
//     const selectedCity = selectRandomIndex(arr2);

//     return `${selectedState} ${selectedCity}`;
//   }
}

let userData = new userGen();
console.log(userData);
