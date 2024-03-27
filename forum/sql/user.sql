CREATE DATABASE IF NOT EXISTS `forum`;
USE `forum`;

CREATE TABLE IF NOT EXISTS `users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `login` VARCHAR(255) NOT NULL,
  `password` CHAR(60) NOT NULL,
  `role` ENUM('admin', 'user') NOT NULL DEFAULT 'user'
);

CREATE TABLE IF NOT EXISTS `forums` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS `topics` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `content` TEXT NOT NULL,
  `forum_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`forum_id`) REFERENCES `forums` (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
);

CREATE TABLE IF NOT EXISTS `posts` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `content` TEXT NOT NULL,
  `topic_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`topic_id`) REFERENCES `topics` (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
);

INSERT INTO `users` (`login`, `password`, `role`) VALUES ('admin', 'admin', 'admin');

INSERT INTO `forums` (`name`, `description`) VALUES ('General', 'General discussion');

INSERT INTO `topics` (`title`, `content`, `forum_id`, `user_id`) VALUES ('Welcome', 'Welcome to the forum!', 1, 1);

INSERT INTO `posts` (`content`, `topic_id`, `user_id`) VALUES ('Hello!', 1, 1);