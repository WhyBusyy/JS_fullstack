function number_inc() {
    console.log("버튼 클릭");
    result = document.getElementById('result').innerHTML;
    console.log("result=", result);
    new_result = parseInt(result) + 1;
    console.log("new_result=", new_result);
    document.getElementById('result').innerHTML = new_result;
}

function number_dec() {
    // console.log("버튼 클릭");
    result = document.getElementById('result').innerHTML; // result라는 id의 text영역의 글자를 읽어온다.
    // console.log("result=", result);
    new_result = parseInt(result) - 1; // 글자를 읽어왔으니, 숫자로 변환한다. 그리고 1을 뺀다.
    // console.log("new_result=", new_result);
    document.getElementById('result').innerHTML = new_result; // 결과값을 내가 원하는 곳 (result라는 id의 영역)에 출력한다.
}