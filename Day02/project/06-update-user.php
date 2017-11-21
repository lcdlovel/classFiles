<?php 
	//1、获取客户端传递过来的 uid
	$uid=$_REQUEST["uid"];
	//2、根据uid 查询指定用户的所有信息
	require("00-init.php");
	$sql="select * from xz_user where uid=$uid";
	$result = mysqli_query($conn,$sql);
	$row = mysqli_fetch_assoc($result);
?>
<!doctype html>
<html>
 <head>
  <meta charset="UTF-8">
  <title>Document</title>
 </head>
 <body>
  <form action="06-update.php" method="post">
		<p>
			登录名称：
			<input type="text" name="uname" value="<?php echo $row['uname']; ?>" readonly>
		</p>
		<p>
			用户密码：
			<input type="password" name="upwd" value="<?php echo $row['upwd']; ?>">
		</p>
		<p>
			电子邮箱：
			<input type="email" name="email" value="<?php echo $row['email']; ?>">
		</p>
		<p>
			电话号码：
			<input type="text" name="phone" value="<?php echo $row['phone']; ?>">
		</p>
		<p>
			用户名称：
			<input type="text" name="user_name" value="<?php echo $row['user_name']; ?>">
		</p>
		<p>
			用户性别：
			<select name="gender">
				<option value="0"
					<?php 
						if($row['gender'] == "0"){
							echo "selected";
						}
					?>
				>男</option>
				<option value="1"
					<?php 
						if($row['gender'] == "1"){
							echo "selected";
						}
					?>
				>女</option>
			</select>
		</p>
		<p>
			<input type="hidden" name="uid" value="<?php echo $row['uid']; ?>">
		</p>
		<p>
			<input type="submit" value="修改">
		</p>
	</form>
 </body>
</html>
