const Person = require('./Person'); 

// Student 객체 생성 및 활용
class Student extends Person {
    constructor(name, age, gender, studentNumber, major) {
        super(name, age, gender);
        this.studentNumber = studentNumber;
        this.major = major;
    }
    study() {
        console.log(`${this.name} 학생이 ${this.major}을(를) 공부하고 있습니다.`);
    }
  }
  
  module.exports = Student;
  