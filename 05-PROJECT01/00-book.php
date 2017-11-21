<?php 
	#设置响应消息头
	header("Content-Type:application/xml");
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
	#将array 二维数组 转换成 XML 格式字符串
	$xml = "<?xml version='1.0' encoding='utf-8'?>";
	$xml .= "<list>";
	for($i=0;$i<count($array);$i++){
		$book=$array[$i];
		$xml.="<book>";
			$xml.="<name>$book[bookName]</name>";
			$xml.="<price>$book[bookPrice]</price>";
			$xml.="<author>$book[author]</author>";
		$xml.="</book>";
	}
	$xml .= "</list>";
	echo $xml;
?>