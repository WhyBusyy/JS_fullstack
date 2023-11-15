document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const username = document.getElementById("username");

  form.addEventListener("submit", async (ev) => {
    //폼의 본연 기능인 다른 페이지로 요청하는 것을 못하게 할 것....
    ev.preventDefault();

    const name = username.value;

    if (!name) {
      alert("내용을 입력하세요.");
      return;
    }

    //fetch를 통해서 내가 원하는 API의 정보를 불러온다...
    //POST요청..이름을 JSON요청으로 바디에 담아서..
    try {
      const response = await fetch("/user", {
        method: "POST",
        header: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });

      if (response.ok) {
        alert("등록 성공");
        //등록 성공시 화면 컴포넌트 추가
        if (document.getElementById("userTable").innerHTML.length === 0) {
          updateTable();
        } else {
          document.getElementById("userTable").innerHTML = "";
          updateTable();
        }
      } else {
        const errorMessage = await response.text();
        alert("등록 실패:", errorMessage);
      }
    } catch (error) {
      console.error("등록 중 오류 발생:", error);
      alert("등록 중 오류발생");
    }
  });
});

async function updateTable() {
  //갱신을 위해 최신 정보를 가져옴
  await fetch("/user")
    .then((response) => response.json())
    .then((users) => displayUsers(users))
    .catch((error) => console.error("사용자 정보 불러오기 실패:", error));
}

function displayUsers(users) {
  // users에는 json포맷의 사용자 데이터를 전부 가지고 있음..
  const userTable = document.getElementById("userTable");

  if (Object.keys(users).length === 0) {
    const messageRow = document.createElement("div");
    messageRow.textContent = "등록된 사용자가 없습니다.";
    userTable.appendChild(messageRow);
  } else if (Object.keys(users).length > 0) {
    for (const key in users) {
      const row = document.createElement("div");
      row.innerHTML = `ID: ${key}, Name: ${users[key].username}`;
      userTable.appendChild(row);
      const putBtn = document.createElement("button");
      putBtn.id = "modify";
      putBtn.innerHTML = `수정`;
      row.appendChild(putBtn);
      const delBtn = document.createElement("button");
      delBtn.id = "delete";
      delBtn.innerHTML = `삭제`;
      row.appendChild(delBtn);
    }
  }
}
