function perpormAsyncTask(callback) {
    setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber >= 0.5) {
            callback(null, '작업완료');
        } else{
            callback('작업실패', null);
        }
    }, 2000);
}

//작업 호출
function myJob() {
    perpormAsyncTask((err, result) => {
    if(err) {
        console.error('실패', err);
    } else {
        console.log('성공', result);
    }
});
}

for (let i = 0; i < 10; i++) {
    myJob();
}
