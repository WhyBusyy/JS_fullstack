//setTimeout() 함수가 ..비동기로 처리를 해줄 수 있는 함수
//setTimeout(callback함수, 지연시간)

console.log('시작');
setTimeout(sayHello, 2000);
console.log('함수 호출 후');

function sayHello(){
     console.log('안녕, 콜백함수야!');
}

console.log('종료');

//============
setTimeout(() => {
console.log('비동기 코드 실행');
}, 1000);