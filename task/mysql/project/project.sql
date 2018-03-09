--9.合理性验证：合法的数据是否最终与数据库的数据匹配：搭建数据库环境
--创建数据库
create database project charset utf8;
--进入数据库
use project;
--增加表：管理员表
create table pr_admin (
id int primary key auto_increment,
username varchar(20) not null unique comment '用户名：具有唯一性',
password char(32) not null comment '用户密码：md5加密'
)charset utf8;

--插入数据
insert into pr_admin values(null,'admin',md5('admin'));

--设计学生表和班级表
create table pr_student like mydatabase.my_student;
create table pr_class like mydatabase.my_class;

--获取数据：蠕虫复制
inset into pr_student select * from 