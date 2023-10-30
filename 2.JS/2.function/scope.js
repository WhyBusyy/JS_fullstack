var result = 20; // var는 global scope

function add(a,b) {
    let res = a + b; // block scope // 쉐도잉
    result = 10;
    console.log("result", result);
    console.log("res", res);
    return res;
}


// console.log("res", res);  res는 block scope 변수이므로 undefined var 오류 발생
console.log("result", result);
result = add(1,2);