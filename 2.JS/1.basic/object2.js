const array = [1,2,3];

// for ... of <-- 배열, 문자열 ...
for (const element of array) {
    console.log(element);
}

const obj = {a: 1, b: 2, c: 3}
console.log(obj.a);
console.log(obj.b);
console.log(obj.c);
// for ... in <-- 객체 ..
for (const key in obj) {
    console.log(key, obj[key])
}

const apple = ['iphone', 'mac', 'ipad'];
for (const product of apple) {
    console.log(product);
}
