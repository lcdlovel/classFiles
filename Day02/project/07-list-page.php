<?php 
	#1、接收前端传递过来的数据
		#1.1 接收 pageSize ，表示每页显示的条数，如果没有传递进来的话，默认为 10
		@$pageSize=$_REQUEST["pageSize"];
		if($pageSize == null){
			$pageSize = 10;
		}
		#1.2 接收 currentPage，表示用户想看的页数，如果没有传递进来的话，默认为 1
		@$currentPage = $_REQUEST["currentPage"];
		if($currentPage == null){
			$currentPage = 1;
		}

	#2、计算数据表中的总记录数

		#2.1 数据库连接
		require("00-init.php");
		#2.2 拼SQL语句 select count(*) from xz_user
		$sql="select count(*) from xz_user";
		#2.3 查询结果保存在 $result
		$result=mysqli_query($conn,$sql);
		#2.4 读取 $result 中的一行数据 保存在 $row
		$row=mysqli_fetch_row($result);
		#2.5 将 $row 中的数值，取出来保存在 $total 中
		$total = $row[0];

	#3、根据总记录数去计算总页数
		#3.1 如果 总记录数($total)与每页显示的条数($pageSize)能整除的话，那么整除的结果就是总页数，否则，将除后的结果取整加1(或向上取整),将结果保存在 $totalPage
		/*if($total % $pageSize == 0){
			$totalPage = $total / $pageSize;
		}else{
			#ceil : 将参数转换为比当前数值大的最小整数
			#ceil(58.5) : 结果：59
			$totalPage=ceil($total / $pageSize);
		}*/
		$totalPage = $total % $pageSize == 0 ? $total / $pageSize : ceil($total / $pageSize);

	#4、计算要显示的首条数据的下标(想看页数-1)*条数，将结果保存在 $start 变量中
	$start=($currentPage-1)*$pageSize;

	#5、拼分页查询的SQL语句去数据库中查询数据
		#5.1 通过 $start ，$pageSize 拼 SQL语句
		$sql="select * from xz_user limit $start,$pageSize";
		#5.2 执行查询将结果保存在 $result
		$result=mysqli_query($conn,$sql);
		#5.3 将$result转换为二维数组保存在$array中
		$array=mysqli_fetch_all($result,MYSQLI_ASSOC);
		

	#6、计算 上一页 下一页 
		#6.0 计算 上一页 ，通过 $currentPage 进行计算
		#6.1 如果 $currentPage 是 1的话，上一页 还是1，将结果保存在 $prePage 变量中
		#6.2 如果 $currentPage 大于 1的话，上一页 就是 $currentPage - 1 ,将结果保存在 $prePage

		/*if($currentPage == 1){
			$prePage = 1;
		}else{
			$prePage = $currentPage - 1;
		}*/
		
		$prePage=1;
		if($currentPage > 1){
			$prePage = $currentPage - 1;
		}

		#6.0 计算 下一页 ，通过 $currentPage 进行计算
		#6.3 如果 $currentPage 是最后一页（$totalPage）的话，那么下一页就是 最后一页,将结果保存在 $nextPage
		#6.4 如果 $currentPage 小于 最后一页($totalPage)的话,那么下一页就是 $currentPage +1，将结果保存在 $nextPage

		$nextPage = $totalPage;
		if($currentPage < $totalPage){
			$nextPage = $currentPage + 1;
		}
		#echo "当前页：$currentPage,上一页：$prePage,下一页：$nextPage,总页数：$totalPage";

		#6.5 将 prePage,nextPage,totalPage的数据 拼成一个 JSON格式的字符串，追加到 $array 中
		$str="{\"prePage\":$prePage,\"nextPage\":$nextPage,\"totalPage\":$totalPage}";
		Array_push($array,$str);
		#6.6 将 $array 转换成JSON格式字符串，进行响应
		echo json_encode($array);
?>