<?php 
	header("Content-Type:application/json");
	$array=[
				[
					"bookName"=>"《西游记》",
					"bookPrice"=>"35.8",
					"author"=>"吴承恩"
				],
				[
					"bookName"=>"《红楼梦》",
					"bookPrice"=>"35.8",
					"author"=>"曹雪芹"
				],
				[
					"bookName"=>"《水浒传》",
					"bookPrice"=>"35.8",
					"author"=>"施耐庵"
				],
				[
					"bookName"=>"《三国演义》",
					"bookPrice"=>"35.8",
					"author"=>"罗贯中"
				]
			];
	#将 $array 转换成 JSON格式的字符串，再响应
	echo json_encode($array);
?>