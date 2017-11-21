<?php
  //功能:查询所有产品信息并且返回json数据
  //1：修改响应头格式json
  //2: 连接数据库
  //3: 设置编码
  require("init1.php");
  //4:获取参数pno 当前页码
  @$pno = $_REQUEST["pno"];
  //5:如果当前页码参数不存在则显示第一页
  if(!$pno){
    $pno = 1;
  }else{
    $pno = intval($pno);//将字符串数据转换整数js parseInt()
  }
  //6:创建数组  拼装返回结果
  //总记录数  总页数  当前页  当前页数据
  @$ps = $_REQUEST["pageSize"];   //10:45--10:50
  if(!$ps){
    $pageSize = 8;
  }else{
    $pageSize = intval($ps);//将字符串数据转换整数
  }
  $output = ["recodeCount"=>0,     //满足条件的总记录数
            "pageCount"=>0,        //总页数
            "pno"=>$pno,           //当前数据所有页码
            "data"=>null,          //当前页中的数据
            "pageSize"=>$pageSize, //每个页大小
            ];
 //7:查询总记录数与总页  10:42--10:45
 $sql = "SELECT COUNT(*) FROM xz_order WHERE isdel=0";
 $result = mysqli_query($conn,$sql);
 $row = mysqli_fetch_row($result);
 $output["recodeCount"]=intval($row[0]);
 $output["pageCount"]=ceil($output["recodeCount"]/$output["pageSize"]);
 //8:查询当前页的内容
 $start = ($output["pno"]-1)*$output["pageSize"];
 $count = $output["pageSize"];
 $sql = " SELECT o.aid,u.uname,o.status,o.order_time";
 $sql .=" ,o.pay_time,o.received_time";
 $sql .=" FROM xz_order o,xz_user u";
 $sql .=" WHERE o.user_id = u.uid AND o.isdel = 0";
 $sql .=" LIMIT $start,$count";
 $result = mysqli_query($conn,$sql);//10:55-11:00
 $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
 $output["data"]=$rows;
 //最后一步
 echo json_encode($output);
?>