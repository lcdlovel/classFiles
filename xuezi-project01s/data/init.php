<?php
	#连接数据库并设置编码
  $conn=mysqli_connect("127.0.0.1","root","","xz",3306);
  mysqli_query($conn,"SET NAMES UTF8");
	#封装sql查找函数，简化操作
	function sql_execute($sql){
    global $conn;
    $result=mysqli_query($conn,$sql);
    if(!$result){	#应该是sql语句错误
      return "查询失败！请检查sql语句:".$sql;
    }else{
      $rowList=mysqli_fetch_all($result,MYSQLI_ASSOC);
      return json_encode($rowList);
    }
  }
	#封装sql注册登录函数，简化操作
	function sql_login($sql){
		global $conn;
		$result = mysqli_query($conn,$sql);
		if($result){
			return "登录成功！";
		}else{
			return "用户名或者密码错误";
		}
	}
	#php每一条语句结束，都要有;做结尾
	#在函数内部、对象中和类中定义的局部变量在函数外部是无法被访问到的；同理，在函数外部、对象外和类外定义的变量，如果没有被传入，也是无法被访问到的。用global将全局的$conn,引入到函数sql_execute中
