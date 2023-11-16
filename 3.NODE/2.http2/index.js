document.addEventListener("DOMContentLoaded", async () => {
  const form = document.getElementById("form");
  const username = document.getElementById("username");

  //페이지 최초 로딩 시 백엔드에 사용자 데이터 요청
  await updateTable();

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
        updateTable();
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
  userTable.innerHTML = "";

  if (Object.keys(users).length === 0) {
    const messageRow = document.createElement("div");
    messageRow.textContent = "등록된 사용자가 없습니다.";
    userTable.appendChild(messageRow);
  } else {
    for (const key in users) {
      const row = document.createElement("div");
      row.innerHTML = `<strong>ID:</strong> ${key}, <strong>Name:</strong> ${users[key]}
      <button onclick = editUser(${key})>수정</button>
      <button onclick = deleteUser(${key})>삭제</button>`;
      userTable.appendChild(row);
    }
  }
}

async function editUser(userID) {
    const newName = window.prompt('수정할 이름을 입력하세요.', '');
    if (newName) {
        const response = await fetch(`/user/${userID}`, {
            method: "PUT",
            header: { "Content-Type": "application/json" },
            body: JSON.stringify({ name : newName }),
          });
      
          if (response.ok) {
            //화면갱신
            alert("수정 성공");
            username.value = ''; //수정 완료시 인풋 텍스트 초기화
            await updateTable();
          } else {
            const errorMessage = await response.text();
            throw new Error(`수정 실패: ${errorMessage}`);
          }
      } else {
        alert('수정 취소');
      }
}

async function deleteUser(userID) {
  //삭제 요청 확인
  const confirmDelete = confirm(`[${userID}] 정말 삭제하시렵니까?`);
  if (confirmDelete) {
    //삭제 요청 수행
    const response = await fetch(`/user/${userID}`, {
      method: "DELETE",
    });

    if (response.ok) {
      //화면갱신
      username.value = ''; 
      alert("삭제 성공");
      await updateTable();
    } else {
      const errorMessage = await response.text();
      throw new Error(`삭제실패: ${errorMessage}`);
    }
  } else {
    alert('삭제 안하렵니다.');
  }
}