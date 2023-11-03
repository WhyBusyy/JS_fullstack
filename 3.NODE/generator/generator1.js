const name = ['Jhon', 'Jane', 'Mike', 'Billy', 'Obane', 'Rice'];

function generateName() {
    const names = [Math.floor(Math.random()*name.lenght)];
    return names;
}
console.log(generateName());

// surname = ['김', '이', '박' ...];
// firstname = ['00','00','00','00', ...];

function generateBirth() {
    const year = Math.floor(Math.random()*2000);
    const month = Math.floor(Math.random()*12) + 1; // 0~11까지 12개가 생성되니 +1을 하면 1-12가 나옴
    const day = Math.floor(Math.random()*31) + 1; // 0~30까지 31개가 생성되니 +1을 하면 1-31이 나옴

    return `${year}-${month}-${day}`
}
console.log(generateBirth());

function generateGender() {
    // const gender = Math.floor(Math.random()*2);
    // if (gender == 1) {
    //     return 'Male'
    // } else {
    //     return 'Female'
    // }
    return Math.random() < 0.5 ? "Male" : " Female"; // 비중조절 가능 0.n
}
console.log('성별: ' + generateGender());

function generateAddress() {
    const stateName = [
        "서울특별시", "부산광역시", "대구광역시", "인천광역시", "광주광역시",
        "대전광역시", "울산광역시", "세종특별자치시", "경기도", "강원도",
        "충청북도", "충청남도", "전라북도", "전라남도", "경상북도",
        "경상남도", "제주특별자치도"
    ];
    const stateIndex = Math.floor(Math.random()*17);
    const selectedState = stateName[stateIndex];
//     const city = Math.floor(Math.random()*x) + 1;
// // x에 대한민국의 기초지방자치단체 수를 대입하고, 출력된 숫자에 따라 대한민국의 기초지방자치단체명을 각기 부여한다.
//     const address = Math.floor(Math.random()*9999) + 1;
// // 4자리 숫자의 2자리 사이에 "번길 "이라는 문구를 넣는다.

return `${selectedState}`
}
console.log(generateAddress());