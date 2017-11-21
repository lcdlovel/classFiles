<?php 
	#1、接收 前端传递过来的数据(uname,upwd,phone,email,user_name,gender,uid)
	$uname=$_REQUEST["uname"];
	$upwd=$_REQUEST["upwd"];
	$phone=$_REQUEST["phone"];
	$email=$_REQUEST["email"];
	$user_name=$_REQUEST["user_name"];
	$gender=$_REQUEST["gender"];
	$uid=$_REQUEST["uid"];
	#2、数据库连接
	require("00-init.php");
	#3、拼SQL语句 update xz_user set uname=$uname,... where uid=$uid
	$sql="update xz_user set upwd='$upwd',phone='$phone',email='$email',user_name='$user_name',gender=$gender where uid=$uid";
	#4、执行 SQL 语句，更新成功，直接响应 "修改成功" ,否则响应  "修改失败" (共10分钟)
	$result=mysqli_query($conn,$sql);
	if($result == true){
		echo "修改成功";
	}else{
		echo "修改失败";
	}
?>