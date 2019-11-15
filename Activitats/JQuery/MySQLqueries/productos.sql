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
foto varchar(50) null,
primary key(ref),
foreign key(marca) references marcas(id) on delete cascade on update cascade);

insert into marcas (nom) values ('Xiaomi'), ('Apple'), ('Huawei'), ('Motorola');
insert into producte (ref, model, marca, preu, foto) values 
	('XZM568', 'Mix 3', '1', '750', 'mix3.png'),
    ('KUO995', 'Iphone 7', '2', '600', 'iphone7.png'),
    ('UJF012', 'P30 Pro', '3', '687', 'p30.png'),
    ('YTP212', 'Redmi 4A', '1', '130', 'redmi4a.png'),
    ('FNC123', 'Moto E4', '4', '250', 'motoe4.png');