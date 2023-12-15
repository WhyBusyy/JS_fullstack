function sendRandomCode() {
  const mailAddress = document.getElementById("mailAddress").value;
  console.log(mailAddress);

  if(mailAddress.includes("@" && ".")) {  
  fetch("/api/sendMail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mailAddress }),
  })
    .then((response) => response)
    .then((data) => {
      console.log("메일 전송 완료");
      displayCerForm();
    })
    .catch((error) => {
      console.log("메일 전송 실패", error);
    });
  } else {
    alert("유효한 이메일 값을 입력하세요!");
  }
}

function displayCerForm() {
  document.getElementById("emailIput").style.display = "none";
  document.getElementById("codeInput").style.display = "block";
}

function checkCode() {
  const code = document.getElementById("certificationCode").value;
  console.log(code);
  fetch("/api/checkCode", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code }),
  })
    .then((response) => response)
    .then((data) => {
      console.log(data.status);
      data.status == 200 ? Complete() : cerFail();
    })
    .catch((error) => {
      console.log("인증 실패", error);
    });
}

function Complete() {
  document.getElementById("done").innerText = "회원가입이 완료되었습니다.";
}

function cerFail() {
  document.getElementById("done").innerText = "인증이 실패하였습니다. 다시 시도하세요.";
}
