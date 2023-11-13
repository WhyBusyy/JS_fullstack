function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("함수1완료");
      resolve("결과1");
    }, 1000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("함수2완료");
      resolve("결과2");
    }, 1000);
  });
}

//콜백헬 프로미스의 요청(콜)로 해결하는 방법
asyncFunc1()
  .then((response1) => asyncFunc2(response1))
  .then((response2) => asyncFunc1(response2))
  .then((response3) => asyncFunc2(response3))
  .then((response4) => {
    console.log("최종결과:", response4);
  })
  .catch((error) => {
    console.log("에러발생", reject);
  });
