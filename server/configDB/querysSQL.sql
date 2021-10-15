CREATE DATABASE todoreact;

CREATE TABLE todo(
    id SERIAL NOT NULL PRIMARY KEY,
    description VARCHAR NOT NULL,
    status VARCHAR(20) NOT NULL,
    inactive BOOLEAN NOT NULL,
    registration_date VARCHAR NOT NULL,
    inactive_task_date VARCHAR
);