
//功能模块:订单
//1:分页
function loadOrderByPage(pno){
    //发送ajax请求 data/orderlist.php
    $.ajax({
        type:"GET",
        url:"data/orderlist.php",
        date:{pno:pno},
        success:function(data){
           //a:拼接字符串 当前页数据
           var html = "";
            for(var o of data.data){
             html += `
              <tr>
                <td>
                    <input type="checkbox" class="olist">
                </td>
                <td>${o.aid}</td>
                <td>${o.uname}</td>
                <td>${o.status}</td>
                <td>${o.order_time}</td>
                <td>${o.pay_time}</td>
                <td>${o.received_time}</td>
                <td>
                    <a href="${o.aid}" class="btn_del">删除</a>
                    <a href="${o.aid}" class="btn_update">更新</a>
                    <a href="${o.aid}" class="btn_detail">详情</a>
                </td>
              </tr>
             `;
            }
            $("#tb1").html(html);
           //b:拼字符串   页码
            var html = "";

            //判断是否显示上上一页
            if(data.pno-2>0){
                html += `<li><a href="${data.pno-2}">${data.pno-2}</a></li>`;
            }
            //判断是否显示上一页
            if(data.pno-1>0){
                html += `<li><a href="${data.pno-1}">${data.pno-1}</a></li>`;
            }
            html += `<li class="active"><a href="${data.pno}">${data.pno}</a></li>`;
            //判断是否显示下一页
            if(data.pno+1<=data.pageCount){
                html += `<li><a href="${data.pno+1}">${data.pno+1}</a></li>`;
            }
            //判断是否显示下下一页
            if(data.pno+2<=data.pageCount){
                html += `<li><a href="${data.pno+2}">${data.pno+2}</a></li>`;
            }
            $("#pagination").html(html);



        },
        error:function(){
            alert("网络故障，请检测");//404 json
        }
    });
    //参数pno
    //接收服务器返回数据 拼字符创建 dom table tr
}
loadOrderByPage(1);



//全选
//复选框 ：     checked=true false
//属性比较特殊: prop
//1:获取全选按钮
//2:绑定点击事件
$("#all").click(function(){
    //3:获取全选按钮的 checked 状态
    var stat = $(this).prop("checked");
    //4:获取所有产品  复选框
    //5:复选框状态等同于全选按钮状态
    $(".olist").prop("checked",stat);
});
//删除: order_del.php   orderlist.js




