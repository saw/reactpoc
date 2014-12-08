CREATE DATABASE IF NOT EXISTS assignments;
USE assignments;
DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id VARCHAR(128) NOT NULL,
    open_id VARCHAR(128) NOT NULL,
    created TIMESTAMP NOT NULL,
    PRIMARY KEY (id),
    INDEX (open_id)
) ENGINE=MyISAM;