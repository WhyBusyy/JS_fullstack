function externalAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = Math.random() >= 0.8;
      if (result) {
        resolve("결과왔음");
      } else {
        reject("응답없음");
      }
    }, 500); //네트워크 응답 시물레이션 0.5초
  });
}

async function waitForResult(retryCount = 0) {
  try {
    result = await externalAPI();
    console.log("결과도착:", result);
    return result;
  } catch (error) {
    console.log("에러:", error, ", 재시도", retryCount);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(waitForResult(retryCount + 1));
      }, 500); // 재시도를 하기 위한 딜레이 0.5초
    });
  }
}

waitForResult().then((finalResult)=>{
    console.log("최종 결과는?", finalResult);
});

console.log("동기코드 실행완료");
