<?php 
	#3、增加一个 响应消息头
	header("Content-Type:application/json");
	#1、数据库连接
	require("00-init.php");
	#2、拼SQL语句并且执行，执行结果最终以JSON字符串响应给客户端
	$sql="select * from xz_user";
	$result=mysqli_query($conn,$sql);
	$array = mysqli_fetch_all($result,MYSQLI_ASSOC);
	echo json_encode($array);
?>