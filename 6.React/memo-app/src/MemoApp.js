import { useState } from "react";

const MemoApp = () => {
  const [memoList, setMemoList] = useState([]); //기존메모 리스트
  const [newMemo, setNewMemo] = useState(); //새로운 메모
  const addMemo = () => {
    setMemoList([...memoList, newMemo]);
    setNewMemo('') //추가 이후 해당폼 클리어
  };
  const deleteMemo = (index) => {
    // 삭제기능 구현
    const updatedMemoList = [...memoList];
    updatedMemoList.splice(index,1);
    setMemoList(updatedMemoList);
  };

  return (
    <div>
      <h2>Memo</h2>
      <div>
      <input
        type="text"
        value={newMemo}
        onChange={(e) => setNewMemo(e.target.value)}
        placeholder="메모를 입력하세요."
        id="memoInput"
      />
      <button onClick={addMemo}>추가</button>
      </div>

      <ul>
        {memoList.map((memo, index) => (
          <li key={index}>
            {memo}
            <button onClick={() => deleteMemo(index)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemoApp;
