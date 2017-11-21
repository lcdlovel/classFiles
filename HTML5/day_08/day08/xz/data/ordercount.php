<?php
  //1:修改响应头格式;
  require("init1.php");
  //2:创建数组保存统计数据
  $output = [
            "name"=>["一季度","二季度","三季度","四季度"],
            "data"=>[101,95,120,77]
           ];
  //3:转换json发送
  echo json_encode($output);
?>