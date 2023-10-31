class Shape {
    constructor(type) {
        this.type = type;
    }
    getArea() {
        return 0;
    }

    getInfo() {
        return "객체의 정보를 입력해주세요"
    }

    toString() {
        return `${this.type} - Area: ${this.getArea()}`
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super("Square"); // 부모 클래스를 호출해야 함수 재정의 가능
        this.sideLength = sideLength;
    }

    getArea() {
        return this.sideLength ** 2;
    }

    getInfo() {
        return `정사각형, 변수의 길이는: ${this.sideLength}`
    }
}

class Triangle extends Shape {
    constructor(sideLength, height) {
        super('Triangle'); // 부모 클래스를 호출해야 함수 재정의 가능
        this.sideLength = sideLength;
        this.height = height;
    }

    getArea() {
        return this.sideLength * this.height;
    }

    getInfo() {
        return `삼각형, 변수의 길이는: ${this.sideLength},${this.height}`
    }
}

class Trapezium extends Shape {
    constructor(topLength, bottomLenght, height) {
        super('Trapezium'); // 부모 클래스를 호출해야 함수 재정의 가능
        this.topLength = topLength;
        this.bottomLenght = bottomLenght;
        this.height = height;
    }

    getArea() {
        return this.topLength * this.bottomLenght * this.height / 2;
    }

    getInfo() {
        return `마름모, 변수의 길이는: ${this.topLength},${this.bottomLenght},${this.height}`
    }
}

class Circle extends Shape {
    constructor(radius) {
        super('Circle'); // 부모 클래스를 호출해야 함수 재정의 가능
        this.radius = radius;
    }

    getArea() {
        return this.radius ** 2 * Math.PI;
    }

    getInfo() {
        return `원, 변수의 길이는: ${this.radius}`
    }
}

// 객체 생성 및 활용
const square = new Square(5);
const triangle = new Triangle(3,3);
const trapezium = new Trapezium(5,6,3);
const circle = new Circle(6);

console.log('Square Area:', square.getArea());
console.log('Square Info:', square.getInfo());
console.log('Square:', square.toString());

console.log('Triangle Area:', triangle.getArea());
console.log('Triangle Info:', triangle.getInfo());
console.log('Triangle:', triangle.toString());

console.log('Trapezium Area:', trapezium.getArea());
console.log('Trapezium Info:', trapezium.getInfo());
console.log('Trapezium:', trapezium.toString());

console.log('Circle Area:', circle.getArea());
console.log('Circle Info:', circle.getInfo());
console.log('Circle:', circle.toString());