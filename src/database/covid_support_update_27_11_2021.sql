CREATE DATABASE  IF NOT EXISTS `covid_support` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `covid_support`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: covid_support
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account` (
  `id` varchar(255) NOT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `avatar` varchar(255) NOT NULL,
  `role` char(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES ('31d93240-4e0a-11ec-ab19-57d2fcbeb0ed','Lê Minh','Chuẩn','2001-01-01','1234567890','$2b$10$nytEFocvK7x2LqmVWKiC6OgQ8vhIY/ufT9AeinZWSpYPryx3C.Ase','2021-11-25 23:10:23','img_7229_1509dab752bf4f27a15ac210122b92df.jpg','V'),('869d0740-49bc-11ec-ad87-41acf4791c20','Nguyễn Hoài','Nam','2001-03-01','123456789','$2b$10$C0pkE.A6sNGwHs155PGrkOfbByJLdXaVNRJw7Ydi0.auuKzUIefkq','2021-11-20 11:44:20','360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg','V'),('904a3a50-4d32-11ec-9202-bb96320a7590','Phạm Thị Thúy','Ngân','2001-03-31','012345678','$2b$10$tTXB8D3LLIFawf4BoocgmubeM1QVEmTTddt/ngL/H/DpDXsSL7Nc.','2021-11-24 21:26:50','women-face-portrait-gray-eyes-wallpaper-preview.jpg','C'),('9fbe9870-4e93-11ec-bb3c-4b9e63704a49','NGUYỄN THIÊN','BẢO','2001-02-04','0936010095','$2b$10$.z8hYLUgHr4OU9vx1PhUReRYR/7J8CUZV0Ub6ANi10DZQULGrSyXG','2021-11-26 15:34:08','avatar-default.jpg','A'),('a2a142f0-4825-11ec-a190-53e797f7b5e3','Lê Thị Như','Ý','2001-07-31','0936010094','$2b$10$ckO9GLPczh1/BvkuAvigqeKI45zd1Fbi4flYXz9wMHtkCq3eFAkt2','2021-11-18 11:11:42','cac-mon-an-chinh-cua-nguoi-chau-au-01-min.jpg','C'),('d875dec0-4f89-11ec-8589-9be3d32681c6','Phạm Thị Thúy','Nam','2000-02-09','0123789456','$2b$10$WaXFmHctbetjEecJQnR9du2Ph8ECsm/65.9HCLzlIp/zVyacstD5u','2021-11-27 20:56:40','bacon-rings-103588-1.jpeg','V');
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `account_address`
--

DROP TABLE IF EXISTS `account_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account_address` (
  `account_id` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  PRIMARY KEY (`account_id`,`address`),
  CONSTRAINT `account_address_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `account` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_address`
--

LOCK TABLES `account_address` WRITE;
/*!40000 ALTER TABLE `account_address` DISABLE KEYS */;
INSERT INTO `account_address` VALUES ('869d0740-49bc-11ec-ad87-41acf4791c20','1, đường số 5, Phường 12, Quận 3, Thành phố Hồ Chí Minh'),('904a3a50-4d32-11ec-9202-bb96320a7590','12, đường 3, Phường Võ Thị Sáu, Quận 3, Thành phố Hồ Chí Minh'),('a2a142f0-4825-11ec-a190-53e797f7b5e3','12, đường số 4, Phường Bình Trị Đông, Quận Bình Tân, Thành phố Hồ Chí Minh'),('a2a142f0-4825-11ec-a190-53e797f7b5e3','245, đường Đinh Tiên Hoàng, Phường 03, Quận 8, Thành phố Hồ Chí Minh');
/*!40000 ALTER TABLE `account_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `administrator`
--

DROP TABLE IF EXISTS `administrator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `administrator` (
  `email` varchar(255) DEFAULT NULL,
  `account_id` varchar(255) NOT NULL,
  PRIMARY KEY (`account_id`),
  CONSTRAINT `administrator_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `account` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrator`
--

LOCK TABLES `administrator` WRITE;
/*!40000 ALTER TABLE `administrator` DISABLE KEYS */;
INSERT INTO `administrator` VALUES ('covidsupport@mail.com','9fbe9870-4e93-11ec-bb3c-4b9e63704a49');
/*!40000 ALTER TABLE `administrator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `account_id` varchar(255) NOT NULL,
  PRIMARY KEY (`account_id`),
  CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `account` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES ('904a3a50-4d32-11ec-9202-bb96320a7590'),('a2a142f0-4825-11ec-a190-53e797f7b5e3'),('eba2abf0-4821-11ec-9406-5f1c56d68b4e');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctor`
--

DROP TABLE IF EXISTS `doctor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `phone_number` varchar(255) DEFAULT NULL,
  `descriptions` varchar(1000) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `experience` varchar(255) DEFAULT NULL,
  `major` varchar(255) DEFAULT NULL,
  `support_zone` varchar(255) DEFAULT NULL,
  `work_hospital` varchar(255) DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor`
--

LOCK TABLES `doctor` WRITE;
/*!40000 ALTER TABLE `doctor` DISABLE KEYS */;
INSERT INTO `doctor` VALUES (1,'091234567','Bác sĩ Tai Mũi Họng đầu ngành\r\nTrưởng khoa Tai Mũi Họng - Bệnh viện Đại học Y dược TP HCM\r\nPhó Chủ nhiệm Bộ môn Tai Mũi Họng - Trường Đại học Y dược TP HCM\r\nPhó tổng biên tập Báo Tai Mũi Họng Việt Nam \r\nBác sĩ từng tu nghiệp tại North carolina, Mỹ (2009),tu nghiệp tại Hanhua Chistian Hospital, Đài loan (2010)\r\nỦy viên BCH hội Tai Mũi Họng Việt Nam\r\nThành viên Hội Tai mũi họng Hoa Kỳ','GS.TS.BS. Phạm Kiên Hữu','30','Trưởng khoa Tai Mũi Họng - Bệnh viện Đại học Y dược TP HCM','Quận 5','Phòng khám Bệnh viện Đại học Y dược 1','ezgif.com-gif-maker.jpg'),(2,'012340978','Bác sĩ Ánh có hơn 30 năm kinh nghiệm trong khám và điều trị chuyên sâu các vấn đề phổ biến về da liễu.\r\nBác sĩ Trần Ngọc Ánh được phản hồi tốt trên nhiều diễn đàn làm đẹp, chăm sóc da về hiệu quả thăm khám, hồi phục da nhanh chóng chỉ sau vài liệu trình điều trị cùng sự thăm khám cẩn thận cho bệnh nhân.','TS.BS Trần Ngọc Ánh','30','Da liễu','Quận 3','Bác sĩ tại Bệnh viện Da liễu TP HCM, Giảng viên Y khoa Đại học Y khoa Phạm Ngọc Thạch','bac-si-tran-ngoc-anh-1.jpg'),(4,'0134897564','Ngoài làm việc tại bệnh viện, bác sĩ còn là giảng viên của Khoa Y Đại học Quốc Gia TPHCM. Bác sĩ có chuyên môn cao và giỏi tay nghề trong điều trị các bệnh đường tai mũi họng. Bao gồm các bệnh như: Ù tai, nghe kém, điếc đột ngột; chảy mủ tai, viêm tai giữa; vá màng nhĩ nội soi. Các bệnh về họng thanh quản như: Viêm amidan, Viêm VA, viêm mũi họng mạn tính, nạo VA, cắt Amidan. Các bệnh về mũi xoang như: viêm mũi xoang dị ứng, viêm mũi vận mạch, viêm mũi ngạt tắc mũi mạn tính, viêm đa xoang mạn, nấm mũi xoang. ','Thạc sĩ, bác sĩ Nguyễn Thanh Vũ','20','Tai - mũi - họng','Quận 8','Khoa Tai Mũi Họng bệnh viện Bệnh viện chỉnh hình và phục hồi chức năng Thành Phố Hồ Chí Minh. ','bac-si-tai-mui-hong-gioi-tphcm-bac-si-nguyen-thanh-vu.jpg'),(5,'0967456342','Bác sĩ Liên đã từng công tác tại Bệnh viện Đa khoa Anh Minh, Bệnh viện đa khoa Phú Yên. Hiện tại, Bác sĩ đang làm việc tại Phòng khám Singapore Indochina Healthcare Group. Bác sĩ có chuyên môn khám những bệnh như: Ù tai, Điếc đột ngột, Viêm mũi họng mãn tính, Viêm thanh khí phế quản, Viêm amidan cấp, mãn tính','Bác sĩ CKI Đặng Thị Mỹ Liên','16','Tai - mũi - họng','Quận 7','Phòng Khám đa Khoa Singapore Indochina Healthcare Group','bac-si-tai-mui-hong-gioi-tphcm-bac-si-dang-thi-my-lien.jpg');
/*!40000 ALTER TABLE `doctor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `create_time` datetime DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `order_status` varchar(255) DEFAULT 'Chờ tiếp nhận',
  `volunteer_id` varchar(255) DEFAULT NULL,
  `receive_time` datetime DEFAULT NULL,
  `cost` int NOT NULL DEFAULT '0',
  `customer_id` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customer_id` (`customer_id`),
  KEY `volunteer_id` (`volunteer_id`),
  CONSTRAINT `order_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`account_id`),
  CONSTRAINT `order_ibfk_2` FOREIGN KEY (`volunteer_id`) REFERENCES `volunteer` (`account_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (10,'2021-11-19 22:37:06','quận Bình Tân, Hồ Chí Minh','Đã hoàn thành','869d0740-49bc-11ec-ad87-41acf4791c20','2021-11-20 12:03:37',120000,'a2a142f0-4825-11ec-a190-53e797f7b5e3','quận Bình Tân'),(12,'2021-11-26 11:28:50','36, đường 3C, phường An Lạc, quận Bình Tân','Chờ giao hàng','31d93240-4e0a-11ec-ab19-57d2fcbeb0ed','2021-11-26 11:59:10',0,'a2a142f0-4825-11ec-a190-53e797f7b5e3','quận Bình Tân'),(13,'2021-11-26 12:08:05','12, đường Đa Kao, quận 1','Đã hoàn thành','31d93240-4e0a-11ec-ab19-57d2fcbeb0ed','2021-11-26 15:27:29',560000,'904a3a50-4d32-11ec-9202-bb96320a7590','quận 1'),(14,'2021-11-26 12:19:20','12, đường 45, thành phố Thủ Đức','Chờ giao hàng','31d93240-4e0a-11ec-ab19-57d2fcbeb0ed','2021-11-27 18:54:36',0,'904a3a50-4d32-11ec-9202-bb96320a7590','thành phố Thủ Đức'),(15,'2021-11-26 12:20:44','456, đường Hồng Bàng, quận 5','Đã hoàn thành','31d93240-4e0a-11ec-ab19-57d2fcbeb0ed','2021-11-27 18:53:09',45000,'904a3a50-4d32-11ec-9202-bb96320a7590','quận 5'),(16,'2021-11-27 12:31:59','245, đường Đinh Tiên Hoàng, Phường 03, Quận 8, Thành phố Hồ Chí Minh','Chờ tiếp nhận',NULL,NULL,0,'a2a142f0-4825-11ec-a190-53e797f7b5e3','Quận 8'),(17,'2021-11-27 20:49:08','245, đường Đinh Tiên Hoàng, Phường 03, Quận 8, Thành phố Hồ Chí Minh','Chờ giao hàng','31d93240-4e0a-11ec-ab19-57d2fcbeb0ed','2021-11-27 20:49:54',0,'a2a142f0-4825-11ec-a190-53e797f7b5e3','Quận 8'),(18,'2021-11-27 21:02:28','12, đường số 4, Phường Bình Trị Đông, Quận Bình Tân, Thành phố Hồ Chí Minh','Chờ tiếp nhận',NULL,NULL,0,'a2a142f0-4825-11ec-a190-53e797f7b5e3','Quận Bình Tân'),(19,'2021-11-27 21:02:42','12, đường số 4, Phường Bình Trị Đông, Quận Bình Tân, Thành phố Hồ Chí Minh','Chờ tiếp nhận',NULL,NULL,0,'a2a142f0-4825-11ec-a190-53e797f7b5e3','Quận Bình Tân'),(20,'2021-11-27 21:02:59','245, đường Đinh Tiên Hoàng, Phường 03, Quận 8, Thành phố Hồ Chí Minh','Chờ tiếp nhận',NULL,NULL,0,'a2a142f0-4825-11ec-a190-53e797f7b5e3','Quận 8'),(21,'2021-11-27 21:03:37','245, đường Đinh Tiên Hoàng, Phường 03, Quận 8, Thành phố Hồ Chí Minh','Chờ tiếp nhận',NULL,NULL,0,'a2a142f0-4825-11ec-a190-53e797f7b5e3','Quận 8');
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_item`
--

DROP TABLE IF EXISTS `order_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_item` (
  `order_id` int NOT NULL,
  `item_name` varchar(255) NOT NULL,
  `quantity` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`order_id`,`item_name`),
  CONSTRAINT `order_item_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_item`
--

LOCK TABLES `order_item` WRITE;
/*!40000 ALTER TABLE `order_item` DISABLE KEYS */;
INSERT INTO `order_item` VALUES (10,'Cá hú','2 con',''),(10,'Sữa tươi','3 hộp','loại 2 Lít'),(10,'Tiêu','2kg','Con'),(12,'bếp gas','2 cái',''),(12,'lò vi sóng','2 cái','panasonic'),(13,'Bánh gạo','2 bịt',''),(13,'Máy sấy tóc','2 cái',''),(13,'Tương ớt chinsu','10 chai','chai nhỏ'),(14,'Bắp cải trắng','3 bắp',''),(14,'Cá hú','2 con',''),(14,'Cafe Trung Nguyên sáng tạo 4','5 bịt',''),(15,'Keo dán giấy','4 chai',''),(16,'Mỳ Hảo Hảo','2 thùng','Tôm chua cay'),(17,'Bò kho','3 tô','Thêm bánh mì'),(18,'Mỳ Omachi','1 thùng',''),(18,'Mỳ Ý','2 gói','Cảm ơn'),(19,'Mỳ Ý','4 thùng',''),(20,'Nước suối','2 thùng','Lavie'),(21,'Nước ngọt','2 ','Cocacola');
/*!40000 ALTER TABLE `order_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `volunteer`
--

DROP TABLE IF EXISTS `volunteer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `volunteer` (
  `email` varchar(255) DEFAULT NULL,
  `accept` char(1) NOT NULL DEFAULT 'F',
  `account_id` varchar(255) NOT NULL,
  PRIMARY KEY (`account_id`),
  CONSTRAINT `volunteer_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `account` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `volunteer`
--

LOCK TABLES `volunteer` WRITE;
/*!40000 ALTER TABLE `volunteer` DISABLE KEYS */;
INSERT INTO `volunteer` VALUES ('lechuan@gmail.com','T','31d93240-4e0a-11ec-ab19-57d2fcbeb0ed'),('namnguyen@gmail.com','T','869d0740-49bc-11ec-ad87-41acf4791c20'),('thuynam@gmail.com','T','d875dec0-4f89-11ec-8589-9be3d32681c6');
/*!40000 ALTER TABLE `volunteer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-27 21:08:49
