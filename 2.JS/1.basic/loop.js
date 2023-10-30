// for (시작값; 실행조건; 시작값의 증감조건;) {}
// for(i=0; i < 5; i++) {
//     console.log(i);
//     console.log("HELLO");
// }

// for(j=0; j < 5; j++) {
//     console.log(j);
// }

// for(i=0; i<5; i++) {
//     console.log("i=" + i);
//     for(j=0; j<5; j++) {
//         console.log("j=" + j);
//     }
// }

// for(let i=1; i<=9; i++) {
//     console.log();
//     console.log(i+"단");
//     console.log();
//     for(let j=1; j<=9; j++) {
//     console.log(i + "x" + j + '=' + (i*j));}
// }

let n = 0;
while ( n < 10 ) {     // ()안은 true/false의 조건문 입력
    console.log(n);
    n=n+1;
}

n=0;
while (true) {
    if (n==10) {
        n=n+1;
        continue;
    } else if (n==20){
        break;
    }
    console.log(n);
    n=n+1;
}

// do {

// } while()

n=0;
do {
    console.log(n)
    n=n+1;
} while( n < 3 );