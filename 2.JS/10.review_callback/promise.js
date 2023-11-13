const myPromise = new Promise((resolve, reject) => {
//비동기작업 여기에서 수행
//완료되면 resolve()호출
//실패하면 reject()호출
});

//Promise호출 사용
myPromise
.then((result)=>{
//성공
});
.catch((error)=>{
   //실패 
});

function asyncTask(callback) {
    return new Promise((resolve, reject)=>{
    setTimeout(() => {
      const rand = Math.random();
      if (rand >= 0.5) {
        callback("작업완료");
      } else {
        callback("작업실패");
      }
    }, 1000);
});
  }

  asyncTask()
.then((result)=>{
console.log('성공:',result);
});
.catch((error)=>{
    console.log('실패:',error);
});
