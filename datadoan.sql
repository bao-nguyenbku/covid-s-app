create database covid_support_app;
use covid_support_app;
ALTER USER 'Hoai_Nam07'@'localhost' IDENTIFIED WITH mysql_native_password BY 'nam07102001';

create table doctor (
	id int primary key auto_increment,
    Doctorname varchar(100),
	phone_number varchar(15),
    email varchar(80),
    descriptions varchar(200),
    experience int,
    major varchar(40),
    job_title varchar(100),
    support_zone varchar(30),
    work_hospital varchar(100)
);
SELECT * FROM doctor;
INSERT into doctor(Doctorname,phone_number,email,descriptions,experience,major,job_title,support_zone,work_hospital) 
value('Nguyễn Hoài Nam','0336227712','nam123@gmail.com',' Bác sĩ bảo có nhiều năm kinh nghiệm khám chữa bệnh với hàng ngàn ca phẫu thuật thành công. Ngoài ra, bác sĩ còn giành nhiều giải thưởng y học trong và ngoài nước.',5,'Ngoại','Trưởng khoa ngoại','TP Thủ Đức','Bệnh viện Đa Khoa Thủ Đức');
INSERT into doctor(Doctorname,phone_number,email,descriptions,experience,major,job_title,support_zone,work_hospital) 
value('Nguyễn Thiên Bảo','09734865473','baothien1028@gmail.com',' Bác sĩ bảo có nhiều năm kinh nghiệm khám chữa bệnh với hàng ngàn ca phẫu thuật thành công. Ngoài ra, bác sĩ còn giành nhiều giải thưởng y học trong và ngoài nước.',10,'Nội','Trưởng khoa nội','Quận 5','Bệnh viện Chợ Rẫy');
INSERT into doctor(Doctorname,phone_number,email,descriptions,experience,major,job_title,support_zone,work_hospital) 
value('Phạm Thị Thúy Ngân','0374732847','ngan1501@gmail.com',' Bác sĩ bảo có nhiều năm kinh nghiệm khám chữa bệnh với hàng ngàn ca phẫu thuật thành công. Ngoài ra, bác sĩ còn giành nhiều giải thưởng y học trong và ngoài nước.',6,'Phụ Sản','Bác sĩ phụ sản','Quận 1','Bệnh viện quận 1');
INSERT into doctor(Doctorname,phone_number,email,descriptions,experience,major,job_title,support_zone,work_hospital) 
value('Nguyễn Thị Như Ý','0281834724','nhuy2193@gmail.com',' Bác sĩ bảo có nhiều năm kinh nghiệm khám chữa bệnh với hàng ngàn ca phẫu thuật thành công. Ngoài ra, bác sĩ còn giành nhiều giải thưởng y học trong và ngoài nước.',8,'Răng-hàm-mặt','Bác sĩ răng hàm mặt','Quận 5','Bệnh viện An Bình');
INSERT into doctor(Doctorname,phone_number,email,descriptions,experience,major,job_title,support_zone,work_hospital) 
value('Lê Minh Chuẩn','02818437432','chuanle29831@gmail.com',' Bác sĩ bảo có nhiều năm kinh nghiệm khám chữa bệnh với hàng ngàn ca phẫu thuật thành công. Ngoài ra, bác sĩ còn giành nhiều giải thưởng y học trong và ngoài nước.',10,'Cấp cứu tổng hợp','Bác sĩ cấp cứu','Quận 6','Bệnh viện quận 6');


drop table doctor;
