import { v4 as uuidv4 } from 'uuid';
import * as fs from 'node:fs'

//=================================

const surname = ['김','이','박','최','정','강','조','윤','장','한','유','황','임','전','신','오','문','심'];
const maleFirstname = ['민준','서준','도윤','예준','시우','하준','지호','주원','지후','지후','준우','준서','도현','건우','현우','우진','지훈','선우','유준','서진','연우','은우','민재','현준','시윤','정우','이준','승우','윤우','지환','지우'];
const femaleFirstname = ['서윤','서연','지우','서현','하윤','하은','민서','지유','윤서','채원','수아','지민','지아','지윤','다은','은서','예은','지안','소율','서아','예린','수빈','하린','소윤','예원','지원','유나','시은','채은','유진'];

function generateuserName(arr) {
    const nameRandomNumber = [Math.floor(Math.random() * arr.length)];
    return arr[nameRandomNumber];
}
//=================================

function generateNameAndGender() {
    // const gender = Math.floor(Math.random()*2);
    // if (gender == 1) {
    //     return 'Male'
    // } else {
    //     return 'Female'
    // }
    const gender = Math.random() < 0.4 ? "Male" : "Female"; // 비중조절 가능 0.n
    
    if (gender === "Male") {
        return[generateuserName(surname)+generateuserName(maleFirstname), gender];
    } else {
        return[generateuserName(surname)+generateuserName(femaleFirstname), gender];
    }
}
// generateNameAndGender();

//=================================

function generateBirth() {
    const minYear = 1960;
    const year = Math.floor(Math.random()*50) + minYear;
    let month = Math.floor(Math.random()*12) + 1; // 0~11까지 12개가 생성되니 +1을 하면 1-12가 나옴
    let day = Math.floor(Math.random()*31) + 1; // 0~30까지 31개가 생성되니 +1을 하면 1-31이 나옴
    const nowDay = new Date();
    const userAge = (nowDay.getFullYear()) - year + 1;

    if (![10,11,12].includes(month)) {
        month = "0" + month
    };

    if ([1,2,3,4,5,6,7,8,9].includes(day)) {
        day = "0" + day
    }

    return [userAge, `${year}-${month}-${day}`];
}
// console.log(generateBirth());

//=================================

const stateName = [
    "서울특별시", "부산광역시", "대구광역시", "인천광역시", "광주광역시",
    "대전광역시", "울산광역시", "세종특별자치시", "수원시", "용인시",
    "안성시", "전주시", "여수시", "목포시", "포항시",
    "경주시", "제주특별시"
];
const cityName = ['강남구', '강서구', '강동구', '강북구', '남구', '서구', '북구', '동구', '진구']

function generateAddress() {
    const stateIndex = Math.floor(Math.random()*stateName.length);
    const selectedState = stateName[stateIndex];
    const cityIndex = Math.floor(Math.random()*cityName.length);
    const selectedCity = cityName[cityIndex];

    return `${selectedState} ${selectedCity}`;
}
// generateAddress();

//=================================

const data = [];
for (let i = 0; i < 1000; i++) {
    const userId = uuidv4();
    const userNameAndGender = generateNameAndGender();
    const userBirth = generateBirth();
    const userAddress = generateAddress();

    data.push(`${userId},${userNameAndGender},${userBirth},${userAddress}`);
}

//===============================

// 데이터를 줄 단위로 연결하여 CSV 문자열로 만듭니다.
const csvData = data.join('\n');

// 파일에 데이터를 씁니다.
fs.writeFile('User2.csv', csvData, (err) => {
    if (err) throw err;
    console.log('CSV 파일이 성공적으로 생성되었습니다.');
});