-- 사용자 테이블 생성

CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    username TEXT,
    password TEXT
);

CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY,
    name TEXT,
    price INTEGER
);

CREATE TABLE IF NOT EXISTS books (
    id INTEGER PRIMARY KEY,
    title TEXT,
    author TEXT,
    genre TEXT
);

--초기 사용자 추가
INSERT INTO users(id, username, password) VALUES
    (1, 'user1', 'password1'),
    (2, 'user2', 'password2');

INSERT INTO products (id, name, price) VALUES
    (1, 'Product1', 2000),
    (2, 'Product2', 3000),
    (3, 'Product3', 1500);

INSERT INTO books (id, title, author, genre) VALUES
    (1, 'Book1', 'Author1', 'Fiction'),
    (2, 'Book2', 'Author2', 'Non-Fiction'),
    (3, 'Book3', 'Author3', 'Mystery');
    