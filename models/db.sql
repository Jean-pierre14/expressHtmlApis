CREATE DATABASE node;
USE node;

CREATE TABLE department(
    Id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO department(name) VALUES('HR'), ('CTO'), ('CEO'), ('SIMPLE-USER');

CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    fullname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    pass VARCHAR(255) NOT NULL,
    salary INT NOT NULL,
    unique_id VARCHAR(255) NOT NULL,
    auth_id INT,
    department_id INT NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    FOREIGN KEY (auth_id) REFERENCES users(id),
    FOREIGN KEY (department_id) REFERENCES department(Id)
);

INSERT INTO users(username, fullname, email, pass, salary, unique_id, department_id) 
            VALUES('Grace', 'Bisimwa Jean-pierre', 'chiru@gmail.com', '12345678', 58500, 'ED2022', 2),
                    ('Adolf', 'Pierre', 'chiru2@gmail.com', '12005678', 10500, 'EG2022', 1),
                    ('Elena23', 'Elena', 'chiru3@gmail.com', '12005008', 1000, 'EA2022', 3);