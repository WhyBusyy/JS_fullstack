function divide(a, b) {
    try {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError('숫자를 입력하세요');
        }
        //길이제한 코드 만들기
        if (a.toString().length > 9 || b.toString().length > 9) {
            throw new RangeError('길이가 9글자 이상인 경우 지원되지 않습니다');
        }
        if (b === 0) {
            throw new Error('0으로 나눌 수 없습니다');
        }
        return a / b;
    } catch(error) {
        if (error instanceof TypeError) {
            console.error('타입오류가 발생했습니다', error.message);
        } else if (error instanceof RangeError) {
            console.error('범위 오류가 발생했습니다',error.message);
        } else {
            console.error('기타 오류가 발생했습니다',error.message);
        }
    }
}
console.log(divide(10,2));
console.log(divide(10,'문자'));
console.log(divide(10,0));
console.log(divide('문자',1));
console.log(divide(0,1));
console.log(divide(2321231222342213423242,3));