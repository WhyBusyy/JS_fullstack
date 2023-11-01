const Person = require('./Person'); 

// Manager 객체 생성 및 활용
class Manager extends Person {
    constructor(name, age, gender, jobtitle, salary, team) {
        super(name, age, gender);
        this.jobtitle = jobtitle;
        this.salary = salary;
        this.team = team;
    }
    assignTasks() {
        console.log(`${this.name} ${this.jobtitle}이(가) ${this.team}에 업무를 배분하고 있습니다.`);
    }
  }

module.exports = Manager;