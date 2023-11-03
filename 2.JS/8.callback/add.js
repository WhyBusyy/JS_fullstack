// 이 함수는 a,b,c를 받아 덧셈 결과를
//당신이 개발한 callback함수를 통해서,
//인자값으로 결과를 반환합니다.
function add(a,b,c,callback){
    const sum = a + b + c;
    callback(sum);
}

//--------------- 원작자가 만들어둔 인터페이스를 맞춰서 작성해야함 ex.콜백함수의 인자 양식..
function displayCallback(result) {
    console.log(`결과: ${result}`)
}

res = add(2,5,6,displayCallback);