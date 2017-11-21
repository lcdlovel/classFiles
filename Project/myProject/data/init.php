<?php
	$conn=mysqli_connect("127.0.0.1","root","","yams",3306);
	mysqli_query($conn,"set names utf8");
	function sql_execute($sql){
		global $conn;
		$result=mysqli_query($conn,$sql);
		if(!$result){
			return "查询失败！请检查sql语句:".$sql;
    }else{
    return  $rowList=mysqli_fetch_all($result,MYSQLI_ASSOC);
	 }
  }
?>