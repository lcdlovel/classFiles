解答项目
问题一
1:为什么表单中input没有name属性
  用户名 <input type="text" id="uname" />
原因:ajax发送请求不需name

问题二
1:写项目没有思路,思想
原因:写，写，写



模块二:产品列表
1:检查数据库中数据是否正确(43)
 xz/xz_laptop
2:分析列
     lid
     family_id
     title
     subtitle
     price
     promise
     spec
     lname
     os
     memory
     resolution
     video_card
     cpu
     video_memory
     category
     disk
     details
3:data/xz_productlist.php
功能:查询所有产品信息
4:product_list.html
5:js/product.js

多表查询:
适用条件:如果查询表数量不是很多情况下要以使用如下解决方案
xz_laptop(笔记本)   xz_laptop_pic(笔记本对应图片)
lid                 sm
title
price
..
1：将所有表名保存from后面,用逗号分隔
FROM xz_laptop,xz_laptop_pic
2: 为每张表起一个别名
FROM xz_laptop l,xz_laptop_pic p
3: 查找二张表哪些列有关系 = < > !=
WHERE p.laptop_id = l.lid

SELECT l.lid,l.price,l.title,p.sm
FROM xz_laptop l,xz_laptop_pic p
WHERE p.laptop_id = l.lid;



//用户管理模块   9:45--10:00
1:添加20条数据
2:copy product_list.html--> userlist.html
3:创建php data/userlist.php   xz_user
4:创建js  js/userlist.js
//订单管理
order_list.html     分页显示订单
order_search.html   订单搜索
1:copy product_list.html--> order_list.html
2:创建php data/orderlist.php   xz_order   10:17--10:35
  xz_order[aid/uname/status/order_time]
  ALTER TABLE xz_order ADD isdel INT NOT NULL DEFAULT 0;
  SELECT o.aid,u.uname,o.status,o.order_time
  FROM xz_order o,xz_user u
  WHERE o.user_id = u.uid AND o.isdel = 0
  LIMIT 0,8;
3:创建js  js/orderlist.js
4:添加测试数据，向xz_order添加 20条数据...