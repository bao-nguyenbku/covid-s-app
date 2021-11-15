CREATE DATABASE covid_support;
USE covid_support;

CREATE TABLE `order` (
	idOrder INT AUTO_INCREMENT,
    address varchar(70) not null,
    createAt varchar(50) not null,
    `status` varchar(20) not null,
	items varchar(50),
    gotTime  varchar(50) default null,
    nameVol varchar(50),
    phoneNumVol varchar(10),
    primary key (idOrder, createAt)
);

DELIMITER $$
CREATE TRIGGER formatDateTime
    BEFORE INSERT
    ON `order` FOR EACH ROW
BEGIN
	set new.createAt = DATE_FORMAT(new.createAt, '%H:%i %e/%c/%Y');
    set new.gotTime = DATE_FORMAT(new.gotTime, '%H:%i %e/%c/%Y');
END $$    
DELIMITER ;

CREATE TABLE item(
	idItem INT AUTO_INCREMENT,
    idOrder INT references `order` (idOrder),
    `name` VARCHAR (50) not null,
    quantity VARCHAR (50) not null,
    note VARCHAR(50),
    primary key (idItem, idOrder)
);

DELIMITER $$
CREATE TRIGGER addItems
    AFTER INSERT
    ON item FOR EACH ROW
BEGIN
	if (new.idOrder in (select idOrder from `order`)) then
		if ((select items from `order` where idOrder = new.idOrder) IS NULL) then
			UPDATE `order`
			SET items = new.`name`
			WHERE idOrder = new.idOrder;
		else 
			if (length((select items from `order` where idOrder = new.idOrder)) < 50) then
				UPDATE `order`
				SET items = CONCAT(items, ', ',new.`name`)
				WHERE idOrder = new.idOrder;
			end if;
		end if;
	end if;
    -- statements
END $$    
DELIMITER ;


insert into `order`(address, createAt, `status`) values ('HCM', current_timestamp(), 'sent');
insert into `order`(address, createAt, `status`) values ('Q1 HCM', current_timestamp(), 'sent');
insert into `order`(address, createAt, `status`) values ('Q2 HCM', current_timestamp(), 'sent');
insert into `order`(address, createAt, `status`) values ('Q3 HCM', current_timestamp(), 'sent');
insert into `order`(address, createAt, `status`) values ('Q4 HCM', current_timestamp(), 'sent');
insert into `order`(address, createAt, `status`) values ('Q5 HCM', current_timestamp(), 'sent');
insert into `order`(address, createAt, `status`, gotTime) values ('Q6 HCM', current_timestamp(), 'sent', current_timestamp());
insert into `order`(address, createAt, `status`) values ('Q7 HCM', current_timestamp(), 'sent');
insert into `order`(address, createAt, `status`) values ('Q8 HCM', current_timestamp(), 'sent');
insert into `order`(address, createAt, `status`, gotTime, nameVol, phoneNumVol) 
	values ('Q6 HCM', current_timestamp(), 'sent', current_timestamp(), 'Thúy Ngân', '0987612345');

insert into item (idOrder, `name`, quantity, note) values (1, 'Bông lan trứng muối', '1 hộp size nhỏ', '');
insert into item (idOrder, `name`, quantity, note) values (1, 'Sữa tươi TH 220ml', '3 lóc', '');
insert into item (idOrder, `name`, quantity, note) values (1, 'Trứng gà', '12 quả', '');
insert into item (idOrder, `name`, quantity, note) values (1, 'Dầu đậu nành 1 lít', '1 chai', '');
insert into item (idOrder, `name`, quantity, note) values (2, 'Bắp cải', '1 kg', '');
insert into item (idOrder, `name`, quantity, note) values (2, 'Chanh', '0.5 kg', '');
insert into item (idOrder, `name`, quantity, note) values (8, 'Bắp cải', '1 kg', '');
insert into item (idOrder, `name`, quantity, note) values (8, 'Chanh', '0.5 kg', '');
insert into item (idItem, idOrder, `name`, quantity, note) values (10,7, 'Dầu đậu nành 1 lít', '1 chai', '');
