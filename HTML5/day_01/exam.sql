#9:25--9:31
#1：创建库，库名称为 web1706a并且指定编码utf8;
CREATE DATABASE web1706a CHARSET=UTF8;
#2: 进入到we1706a库中
USE web1706a;
#3: 创建表, 表名为  stu 学生表
#   学生编号 学生名称  学生密码 学生入学时间
CREATE TABLE stu(
  id  INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(20),
  pwd  VARCHAR(32),
  rdate DATETIME
);
#4: 向学生表中添加3条记录
INSERT INTO stu VALUES(null,'tom','123',now());
INSERT INTO stu VALUES(null,'jerry','123',now());
INSERT INTO stu VALUES(null,'kaka','123',now());
#5: 更新学生密码为999 条件是学生编号为1
UPDATE stu SET pwd='999' WHERE id = 1;
#6: 查询所有学生编号，学生名称，学生入学时间
SELECT id,name,rdate FROM stu;
#7: 删除编号等于3的学生记录
DELETE FROM stu WHERE id=3;
#8: 查询用户名等于tom同时密码等于123用户信息
SELECT * FROM stu
WHERE name='tom' AND pwd='999';
