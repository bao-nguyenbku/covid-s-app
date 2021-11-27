-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 19, 2021 lúc 11:54 AM
-- Phiên bản máy phục vụ: 10.4.21-MariaDB
-- Phiên bản PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `covid_support_app`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `account`
--

CREATE TABLE `account` (
  `id` varchar(255) NOT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `avatar` varchar(255) NOT NULL,
  `role` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `account`
--

INSERT INTO `account` (`id`, `last_name`, `first_name`, `date_of_birth`, `phone_number`, `password`, `create_time`, `avatar`, `role`) VALUES
('1', 'Nguyễn Hoài', 'Nam', NULL, '27438383892', 'x', '2021-11-19 07:44:24', 'avatar-default.jpg', 'V'),
('2', 'Thúy', 'Ngân', NULL, '24325543534', 'x', '2021-11-19 07:48:17', 'avatar-default.jpg', 'V'),
('3', 'Lê Minh', 'Chuẩn', NULL, '32432423', 'x', '2021-11-19 11:37:29', '', 'C'),
('a2a142f0-4825-11ec-a190-53e797f7b5e3', 'Như', 'Ý', NULL, '0936010094', '$2b$10$ckO9GLPczh1/BvkuAvigqeKI45zd1Fbi4flYXz9wMHtkCq3eFAkt2', '2021-11-18 11:11:42', 'avatar-default.jpg', 'C'),
('eba2abf0-4821-11ec-9406-5f1c56d68b4e', 'Nguyễn Thiên', 'Bảo', NULL, '0936010095', '$2b$10$3fn9nUf6YiH0RMoySY205u2NgD7G2FnEMs2MDBpvUGAJMIDYOCzmi', '2021-11-18 10:45:06', 'avatar-default.jpg', 'C');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `account_address`
--

CREATE TABLE `account_address` (
  `account_id` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `administrator`
--

CREATE TABLE `administrator` (
  `email` varchar(255) DEFAULT NULL,
  `account_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `customer`
--

CREATE TABLE `customer` (
  `account_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `customer`
--

INSERT INTO `customer` (`account_id`) VALUES
('3'),
('a2a142f0-4825-11ec-a190-53e797f7b5e3'),
('eba2abf0-4821-11ec-9406-5f1c56d68b4e');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `doctor`
--

CREATE TABLE `doctor` (
  `id` int(255) NOT NULL,
  `phone_number` int(255) DEFAULT NULL,
  `descriptions` varchar(1000) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `experience` varchar(255) DEFAULT NULL,
  `major` varchar(255) DEFAULT NULL,
  `job_title` varchar(255) DEFAULT NULL,
  `support_zone` varchar(255) DEFAULT NULL,
  `work_hospital` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `doctor`
--

INSERT INTO `doctor` (`id`, `phone_number`, `descriptions`, `name`, `experience`, `major`, `job_title`, `support_zone`, `work_hospital`) VALUES
(1, 336227712, ' Bác sĩ bảo có nhiều năm kinh nghiệm khám chữa bệnh với hàng ngàn ca phẫu thuật thành công. Ngoài ra, bác sĩ còn giành nhiều giải thưởng y học trong và ngoài nước.', 'Nguyễn Hoài Nam', '5', 'Ngoại', 'Trưởng khoa ngoại', 'TP Thủ Đức', 'Bệnh viện Đa Khoa Thủ Đức');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `manage`
--

CREATE TABLE `manage` (
  `order_id` int(255) NOT NULL,
  `customer_id` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order`
--

CREATE TABLE `order` (
  `id` int(255) NOT NULL,
  `create_time` datetime DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `order_status` varchar(255) DEFAULT NULL,
  `volunteer_id` varchar(255) DEFAULT NULL,
  `receive_time` datetime DEFAULT NULL,
  `cost` int(255) NOT NULL,
  `customer_id` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `order`
--

INSERT INTO `order` (`id`, `create_time`, `address`, `order_status`, `volunteer_id`, `receive_time`, `cost`, `customer_id`) VALUES
(1, '2021-11-17 11:12:30', '123, đường số 4, quận 1, TPHCM', 'Chờ tiếp nhận', NULL, NULL, 0, 'eba2abf0-4821-11ec-9406-5f1c56d68b4e'),
(2, '2021-11-19 07:55:53', '34, đường số 7, quận 2, TPHCM', 'Chờ giao hàng', '2', '2021-11-19 13:58:03', 0, 'eba2abf0-4821-11ec-9406-5f1c56d68b4e'),
(3, '2021-11-19 06:59:47', '63 Nguyễn Trãi, Quận 1, TPHCM', 'Chờ giao hàng', '1', '2021-11-19 06:59:47', 1200000, 'a2a142f0-4825-11ec-a190-53e797f7b5e3'),
(4, '2021-11-19 07:19:52', 'HCM', 'Đã hoàn thành', NULL, '2021-11-19 07:19:52', 450000, 'a2a142f0-4825-11ec-a190-53e797f7b5e3'),
(5, '2021-11-19 15:54:05', '75 Lê Lợi, Q3, TPHCM', 'Chờ giao hàng', '2', '2021-11-19 07:54:05', 0, '3'),
(6, '2021-11-19 07:55:53', '43 Trần Hưng Đạo, quận 2, TPHCM', 'Chờ giao hàng', '1', '2021-11-19 07:55:53', 0, 'eba2abf0-4821-11ec-9406-5f1c56d68b4e');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_item`
--

CREATE TABLE `order_item` (
  `order_id` int(255) NOT NULL,
  `item_name` varchar(255) NOT NULL,
  `quantity` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `order_item`
--

INSERT INTO `order_item` (`order_id`, `item_name`, `quantity`, `note`) VALUES
(1, 'Bột giặt', '2 bịt', 'Cảm ơn nhiều ạ'),
(1, 'Đường thốt nốt', '100g', NULL),
(2, 'Gạo', '1', NULL),
(2, 'Sữa Ông Thọ', '10 hộp', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `volunteer`
--

CREATE TABLE `volunteer` (
  `email` varchar(255) DEFAULT NULL,
  `account_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `volunteer`
--

INSERT INTO `volunteer` (`email`, `account_id`) VALUES
('hn@gmail.com', '1'),
('tn@gmail.com', '2');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `account_address`
--
ALTER TABLE `account_address`
  ADD PRIMARY KEY (`account_id`,`address`);

--
-- Chỉ mục cho bảng `administrator`
--
ALTER TABLE `administrator`
  ADD PRIMARY KEY (`account_id`);

--
-- Chỉ mục cho bảng `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`account_id`);

--
-- Chỉ mục cho bảng `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `manage`
--
ALTER TABLE `manage`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Chỉ mục cho bảng `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `volunteer_id` (`volunteer_id`);

--
-- Chỉ mục cho bảng `order_item`
--
ALTER TABLE `order_item`
  ADD PRIMARY KEY (`order_id`,`item_name`);

--
-- Chỉ mục cho bảng `volunteer`
--
ALTER TABLE `volunteer`
  ADD PRIMARY KEY (`account_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `doctor`
--
ALTER TABLE `doctor`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `order`
--
ALTER TABLE `order`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `account_address`
--
ALTER TABLE `account_address`
  ADD CONSTRAINT `account_address_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `account` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `administrator`
--
ALTER TABLE `administrator`
  ADD CONSTRAINT `administrator_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `account` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `customer`
--
ALTER TABLE `customer`
  ADD CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `account` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `manage`
--
ALTER TABLE `manage`
  ADD CONSTRAINT `manage_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`),
  ADD CONSTRAINT `manage_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`account_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`account_id`),
  ADD CONSTRAINT `order_ibfk_2` FOREIGN KEY (`volunteer_id`) REFERENCES `volunteer` (`account_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `order_item`
--
ALTER TABLE `order_item`
  ADD CONSTRAINT `order_item_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `volunteer`
--
ALTER TABLE `volunteer`
  ADD CONSTRAINT `volunteer_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `account` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
