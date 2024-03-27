CREATE DATABASE IF NOT EXISTS forum_db;
USE forum_db;

CREATE TABLE IF NOT EXISTS users (
                                     id INT AUTO_INCREMENT PRIMARY KEY,
                                     login VARCHAR(255) NOT NULL,
                                     password CHAR(60) NOT NULL
                                     role ENUM('admin', 'user') NOT NULL DEFAULT 'user'
);