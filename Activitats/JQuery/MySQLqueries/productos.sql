drop database if exists producte ;
create database producte;
use producte;

create table marcas (
id int(10) auto_increment not null,
nom varchar(50) not null,
primary key(id));

create table producte (
ref varchar(6) not null,
model varchar(50) not null,
marca int(10) not null,
preu int(10) not null,
primary key(ref),
foreign key(marca) references marcas(id) on delete cascade on update cascade);

insert into marcas (nom) values ('Xiaomi'), ('Apple'), ('Huawei'), ('Motorola');
insert into producte (ref, model, marca, preu) values 
	('XZM568', 'Mix 3', '1', '750'),
    ('KUO995', 'Iphone 7', '2', '600'),
    ('UJF012', 'P30 Pro', '3', '687'),
    ('YTP212', 'Redmi 4A', '1', '130'),
    ('FNC123', 'Moto E4', '4', '250');