<?php
	require("00-init.php");
	#1、接收前端请求的数据
	$uname=$_REQUEST["uname"];
	$upwd=$_REQUEST["upwd"];
	#2、拼SQL语句，执行
	$sql="select * from xz_user where uname='$uname' and upwd='$upwd'";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_row($result);
	if($row == null){
		echo "0";
	}else{
		echo "1";
	}
?>