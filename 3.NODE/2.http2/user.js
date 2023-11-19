document.addEventListener("DOMContentLoaded", async () => {
    const form = document.getElementById("form");
    const username = document.getElementById("username");
    const userTable = document.getElementById("userTable");


    await updateTable();
  
    form.addEventListener("submit", async (ev) => {
      ev.preventDefault();
  
      const name = username.value;
  
      if (!name) {
        alert("내용을 입력하세요.");
        return;
      }
  
      try {
        const response = await fetch("/user", {
          method: "POST",
          header: { "Content-Type": "application/json" },
          body: JSON.stringify({ name }),
        });
  
        if (response.ok) {
          alert("등록 성공");
          username.value = ''; // 입력필드 초기화
          
          // 등록 성공 시 테이블 갱신
          await updateTable();
        } else {
          const errorMessage = await response.text();
          alert("등록 실패:", errorMessage);
        }
      } catch (error) {
        console.error("등록 중 오류 발생:", error);
        alert("등록 중 오류발생");
      }
    });

  
    function displayUsers(users) {
      userTable.innerHTML = ""; //테이블 초기화
    
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
    
    async function updateTable() {
      await fetch("/user")
        .then((response) => response.json())
        .then((users) => displayUsers(users))
        .catch((error) => console.error("사용자 정보 불러오기 실패:", error));
    }
  });
  
  
  async function editUser(userID) {
      const newName = prompt('수정할 이름을 입력하세요.');
      if (newName) {
          const response = await fetch(`/user/${userID}`, {
              method: "PUT",
              header: { "Content-Type": "application/json" },
              body: JSON.stringify({ name : newName }),
            });
        
            if (response.ok) {
              alert("수정 성공");
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
    const confirmDelete = confirm(`[${userID}] 정말 삭제하시렵니까?`);
    if (confirmDelete) {
      const response = await fetch(`/user/${userID}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
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