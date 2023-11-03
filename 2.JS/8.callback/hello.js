//기본API 설계자가 만든것
// 디테일은 콜러 니가 알아서 해라
// 나는 그냥 니가 준 함수를 블러주겠다.. = callback함수
function greet(name, callback) {
    const message = `안녕, ${name}!`
    callback(message);
}
// 위 API를 호출하는 caller가 나머지 부분을 작성해 채워줌..
function displayGreeting(greeting) {
    console.log(`<H1>${greeting}</H!>`);
}
greet('예제', displayGreeting);