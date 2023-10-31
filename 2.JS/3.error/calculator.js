// 예외처리를 할 수 있는 exception이라는 기능
// 모던 언어들에서는.. try..catch (try..except)

function divide(a, b) {
    // if (b==0) {
    //     return '0으로 나눌 수 없습니다.'
    // } else {
    //     return a / b;
    // }
    try {
        if (b ===0) {
            throw "0으로 나눌 수 없습니다."
        }
        res = a / b; // 오류가 발생할 소지가 있는 구문
    } catch(error) {
        console.log('오류발생', error) // 오류를 핸들링할 수 있는 표현(statement)
    }
    return res;
}

console.log(divide(10,0));

// try..catch를 쓰기 좋지 않은 유형: syntax, logic 에러
// 올바른 유형 : 입출력 관련, 나의 손을 벗어난 형태의 오류(네트워크)