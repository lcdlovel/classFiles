<?php
  //10:47--10:52
  //功能:查询所有学生记录并且将结果转换json格式输出
  //1:设置用户响应头数据格式为json
  header("Content-Type:application/json;charset=utf-8");
  //2:连接数据库
  $conn = mysqli_connect("127.0.0.1","root","","web1706a",3306);
  //3:设置编码格式为utf8
  mysqli_query($conn,"SET NAMES UTF8");
  //4:创建SQL语句并且发送SQL语句
  $sql = "SELECT * FROM stu";
  $result = mysqli_query($conn,$sql);
  //5:抓取多行记录
  $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
  //6:将多行记录转换json输出
  echo json_encode($rows);
?>