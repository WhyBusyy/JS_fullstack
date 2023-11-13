function asyncFunc1(input) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = input + 1;
      console.log(`함수1완료 input:${input}, result:${result}`);
      resolve(result);
    }, 1000);
  });
}

function asyncFunc2(input) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = input + 2;
      console.log(`함수2완료 input:${input}, result:${result}`);
      resolve(result);
    }, 1000);
  });
}

async function executeOperations(){
  let input = 100;

  try{
  const response1 = await asyncFunc1(input);
  const response2 = await asyncFunc2(response1);
  const response3 = await asyncFunc1(response2);
  const response4 = await asyncFunc2(response3);

  console.log('최종값: ',response4);
} catch(error) {
  console.log('에러 ',error);
}
}
executeOperations()