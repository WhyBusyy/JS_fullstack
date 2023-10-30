//함수 정의/선언(declear)
function greet() {
    console.log("안녕하세요!");
    // console.log("오류");
}

//함수 호출 = 실행
greet();

//매개변수{Parameter)
function greetByName(name) {
    console.log("안녕하세요!,", name);
    console.log(`안녕하세요!, ${name}님`);
}

greetByName("유병규");

//function은 키워드, add는 함수명, a/b는 함수의 파라미터(인자값)
function add(a, b) {
    // console.log({a, b});
    let sum = a + b;
    // console.log(sum);
    return sum;
}

add(2,3);
sum = add(2, 5); // 함수를 호출하면서 인수(argument)를 2개 받는 상황
console.log("더하기"+sum);



function multi(a, b) {
    let mul = a * b;
    return mul;
}
mul = multi(-2,5);
console.log("곱하기", mul);


function sub(a, b) {
    let min = a - b;
    return min;
}
min = sub(2,5);
console.log("빼기", min);


function div(a, b) {
    if (b == 0){
        return '0으로 나눌 수 없습니다.'
    } else {
    return a / b;
    }
}
let result = div(2, 3);
console.log("나누기", result)


//익명함수 (함수명 없이, 변수에 담아서 호출)
// function 함수명(파라1, 파라2, 파라3, ...)
let result2 = function (x,y) { return x * y };
console.log(result2(2,5));

//화살표 함수(Arrow Function) (function키워드도 없이..)
let result3 = (x, y) => {return x * y};
console.log(result3(3, 5));