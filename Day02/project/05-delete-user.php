<?php 
	#1、接收前端传递过来的要删除的用户uid
	$uid=$_REQUEST["uid"];
	#2、连接数据库
	require("00-init.php");
	#3、根据uid，构建sql语句并执行，再响应结果
	$sql="delete from xz_user where uid=$uid";
	$result=mysqli_query($conn,$sql);
	if($result == false){
		echo "0";
	}else{
		echo "1";
	}
?>