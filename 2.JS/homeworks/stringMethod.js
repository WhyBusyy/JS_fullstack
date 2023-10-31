const str = 'Hello';
console.log(str.charAt(0)); // 'H' 출력

const str1 = 'Hello';
const str2 = 'World';
console.log(str1.concat(' ', str2)); // Expected output: "Hello World"
console.log(str2.concat(', ', str1)); // Expected output: "World, Hello"

const str3 = 'Hello World';
console.log(str3.includes('World')); // true 출력

const str4 = 'Hello World';
console.log(str4.indexOf('o')); // 4 출력

const str5 = 'Hello';
console.log(str5.toUpperCase()); // 'HELLO' 출력
console.log(str5.toLowerCase()); // 'hello' 출력

const str6 = '  Hello World  ';
console.log(str6.trim()); // 'Hello World' 출력