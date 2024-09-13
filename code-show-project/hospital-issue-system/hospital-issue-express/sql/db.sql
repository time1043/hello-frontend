-- ---------------------------------------------------
-- table
-- ---------------------------------------------------
-- staff
DROP TABLE IF EXISTS `staff`;
CREATE TABLE `staff` (
  `id` int NOT NULL AUTO_INCREMENT,
  `staff_name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `staff_role` enum('admin','staff') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'staff',
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- issue
DROP TABLE IF EXISTS `issue`;
CREATE TABLE `issue` (
  `id` int NOT NULL AUTO_INCREMENT,
  `poster` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `create_date` datetime NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `state` enum('wait','fixing','complete') COLLATE utf8mb4_unicode_ci DEFAULT 'wait',
  `fixed_date` datetime DEFAULT NULL,
  `staff_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------
-- data
-- ---------------------------------------------------
-- staff
insert into staff (staff_name, staff_role, password) values 
('张三', 'admin', 'password123'),
('李四', 'staff', 'password456'),
('王五', 'staff', 'password789'),
('赵六', 'admin', 'password000');

-- issue
insert into issue (poster, create_date, description, image, state, fixed_date, staff_id) values 
('张三', '2023-10-01 10:00:00', '厕所水龙头漏水', 'image1.jpg', 'wait', null, null),
('李四', '2023-10-22 11:00:00', '病房空调不制冷', 'image2.jpg', 'fixing', null, 101),
('王五', '2023-10-30 22:00:00', '走廊灯泡损坏', 'image3.jpg', 'complete', '2023-10-04 14:00:00', 102),
('赵六', '2023-11-04 13:00:00', '电梯按钮失灵', 'image4.jpg', 'wait', null, null);
