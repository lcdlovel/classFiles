DROP DATABASE IF EXISTS web1706a;
CREATE DATABASE web1706a CHARSET=UTF8;
USE web1706a;
CREATE table stu(
	uid INT primary key auto_increment,
	uname VARCHAR(16),
	upwd  VARCHAR(32),
	time  DATE
);
INSERT INTO stu VALUES
	(1,'tom','123',now()),
	(null,'大旭','2222',now()),
	(null,'东哥','1111',now());
update stu set upwd='999' where  uid=1;
select uid,uname,time from stu;
delete from stu where uid=3;
select * from stu where uname='tom' and upwd='123';
