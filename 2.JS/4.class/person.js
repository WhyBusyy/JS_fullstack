// 함수에서 다형성 활용
function introduce(people) {
  for (const person of people) {
    person.greet();
  }
  // for (let i = 0; i < people.length; i++){
  //  people[i].greet();
  //} 위와 동일한 함수를 for문으로 구현
}

const employee2 = new Employee('영희', 29, '매니저');
const student2 = new Student('철수', 55, '컴퓨터공학');
const people = [manager1, student1, customer1, employee2, student2];

introduce(people);