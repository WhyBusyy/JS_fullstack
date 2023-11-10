export function selectRandomIndex(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  
  export function generateDate() {
    let month = Math.floor(Math.random() * 12) + 1;
    let day = 0;
  
    [1, 3, 5, 7, 8, 10, 12].includes(month)
      ? (day = Math.floor(Math.random() * 31) + 1)
      : [4, 6, 9, 11].includes(month)
      ? (day = Math.floor(Math.random() * 30) + 1)
      : (day = Math.floor(Math.random() * 28) + 1);
  
    return `${String(month).padStart(2, 0)}-${String(day).padStart(2, 0)}`;
  }
  