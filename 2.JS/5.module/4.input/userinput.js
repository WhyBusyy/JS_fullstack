const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('구구단의 단을 입력하세요:', (input) => {
    const num = parseInt(input);

    if (!isNaN(num) && num > 0 && num < 10){
        console.log(`${num} 단 구구단을 출력합니다.`)
        for(let i = 0; i < 10; i++) {
            let result = num * i;
            console.log(num+'X'+i+'='+ result);
        }
    } else {
        console.log(`1~9까지의 숫자를 입력하세요.`);
    }
    rl. close();
});