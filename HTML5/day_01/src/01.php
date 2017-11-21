<?php
  //10:35--10:41
  //功能:向web1706a库中stu表添加一条记录
  //1:创建数据库连接
  $conn = mysqli_connect("127.0.0.1","root","","web1706a",3306);
  //2:设置编码
  mysqli_query($conn,"SET NAMES UTF8");
  //3:创建一条SQL语句 (INSERT INTO ...)
  //4:发送SQL语句
  $sql = "INSERT INTO stu VALUES(null,'tom1','123',now())";
  $result = mysqli_query($conn,$sql);
  //5:获取返回结果并且判断
  //6:输出添加成功或者失败
  if($result==true){
    echo "success";
  }else{
    echo "error";
  }
?>