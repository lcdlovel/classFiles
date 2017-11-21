//  绘制销售统计图
//1: 初始化图表
var myChart = echarts.init(document.getElementById('main'));
//2: 发送ajax请求
$.ajax({
    type:"GET",
    url:"data/ordercount.php",
    success:function(data){
        var option = {
            title: {
                text: '学子商城销售统计'
            },
            tooltip: {},
            legend: {
                data:['销售统计']
            },
            xAxis: {
                data: data.name
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: data.data
            }]
        };
        myChart.setOption(option);
    },
    error:function(){
        alert("网络故障，请检查");
    }

});
//3: 创建参数数组
//4: 应用参数数组


