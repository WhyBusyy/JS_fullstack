function asyncFunc1(response, callback) {
  setTimeout(() => {
    console.log("함수1완료");
    callback("결과1");
  }, 1000);
}
function asyncFunc2(response, callback) {
  setTimeout(() => {
    console.log("함수2완료");
    callback("결과2");
  }, 1000);
}

//콜백헬... 동작은 정상적이나 코드가 이쁘지않다..
asyncFunc1(null, function (response1) {
  asyncFunc2(response1, function (response2) {
    asyncFunc2(response2, function (response3) {
      asyncFunc2(response3, function (response4) {
        console.log("최종결과:", response4);
      });
    });
  });
});
