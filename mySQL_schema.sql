USE Project_3;

create table Login(
    id int  AUTO_INCREMENT NOT NULL,
    email varchar(255),
    password varchar(255),
    created_at DATETIME,
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);
INSERT INTO Login (email,password) VALUES ('John-Doe@gmail.com','123');