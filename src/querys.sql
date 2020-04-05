CREATE DATABASE restapitypescript;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email VARCHAR(20)
);

INSERT INTO users (id, name, email) 
VALUES (DEFAULT, 'acelas', 'andres@andres.com'),
       (DEFAULT, 'arevalo', 'mauricio@may.com');


SELECT * FROM users WHERE id = 2;