CREATE DATABASE node;
USE node;

CREATE TABLE department{
    Id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
}

CREATE TABLE users{
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    fullname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    pass VARCHAR(255) NOT NULL,
    unique_id VARCHAR(255) NOT NULL,
    auth_id INT,
    department_id INT NOT NULL,

    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    PRIMARY KEY(id)
    FOREIGN KEY (auth_id) REFERENCES users(id),
    FOREIGN KEY (department_id) REFERENCES department(Id)

}