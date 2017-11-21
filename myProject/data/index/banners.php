<?php
header("Content-Type:application/json;charset=UTF-8");
	require("../init.php");
	echo json_encode(sql_execute("select img,title From yam_index_carousel"));
?>