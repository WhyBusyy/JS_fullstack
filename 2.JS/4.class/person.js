class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  greet() {
    console.log(`안녕, 나는 ${this.name}이고, ${this.age}살이야.`);
  }

  walk() {
    console.log(`${this.name}이(가) 걷고 있습니다.`);
  }

  eat() {
    console.log(`${this.name}이(가) 식사 중입니다.`);
  }
}

class Employee extends Person {
    constructor(name, age, gender, jobtitle, salary) {
        super(name, age, gender);
        this.jobtitle = jobtitle;
        this.salary = salary;
    }

    displayInfo() {
        console.log(`직원 ${this.name}의 직위는 ${this.jobtitle}이며, 급여는 ${this.salary}원 입니다.`)
    }

    work() {
        console.log(`${this.name}이(가) 업무 중입니다.`);
    }
}

// Employee 생성
const employee1 = new Employee("영희", 30, "여성", "매니저", 50000);
employee1.greet();
employee1.displayInfo();
employee1.walk();
employee1.work();

// Manager 객체 생성 및 활용
const manager1 = new Manager("영민", 35, "남성", "팀장", 60000, "개발팀");
manager1.assignTasks(); // "영민 매니저가 팀에 업무를 배분하고 있습니다." 출력

// Student 객체 생성 및 활용
const student1 = new Student("지연", 20, "여성", "2023001", "컴퓨터 공학");
student1.study(); // "지연 학생이 컴퓨터 공학을 공부하고 있습니다." 출력

// Customer 객체 생성 및 활용
const customer1 = new Customer("태식", 30, "남성", "C1001", ["주문1", "주문2"]);
customer1.placeOrder(); // "태식 고객이 주문을 완료했습니다." 출력