create database burgers_db;

use burgers_db;

create table burgers (
    id integer(11) auto_increment not null,
    burger_name VARCHAR(50),
    devoured boolean DEFAULT false,
    PRIMARY key (id)
);

