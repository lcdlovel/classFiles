/**********引入头部和尾部******************/
$("#header").load("myProject/data/head-foot/header.php");
$("#footer").load("myProject/data/head-foot/footer.php");

//noinspection JSAnnotator
/**********轮播图部分************/
(()=>{
	//加载及动态生成图片和图下方的横线及块
	var	$banners=$("div.banners"),
		$imgs=$("[data-load=bannerImgs]"),
		$lines=$("[data-load=bannerLine]"),
		$block=$("[data-load=bannerBlock]"),
        n=0,TRANS=400, INTERVAL=2500, time=null;
	LIWIDTH=1410;
	$.get("myProject/data/index/banners.php")
		.then(data=>{
			data[data.length]=data[0];
			var html="";
			for(var img of data){
				html+=
					`<li>
						<a>
							<img src="${img.img}">
						</a>
					</li>
					`
			}
			$imgs.html(html);
			$imgs.css("width",LIWIDTH*data.length);
			var html="";
			var str="";
			for(var i=0;i<data.length-1;i++){
				html +=`<li class="lf"></li>`;
				str +=`<li class="lf"><p>${data[i].title}</p></li>`
			}
			$lines.html(html);
			$block.html(str);
			$block.children().css({
				"width":LIWIDTH/(data.length-1)
			});
			$lines.children().css(
				{
				  "width":LIWIDTH/(data.length-1),
				  "height":3,
			});
			return new Promise(resolve=>resolve());
		})
		//对图片和横线进行轮播
		.then(()=>{
			function color(obj,num) {
				obj.children(":eq("+num+")").addClass("bannersOn")
                    .siblings().removeClass("bannersOn");
            };
            color($lines,0);
			color($block,0);
			function moveOnce(){
				n++;
				color($lines,n);color($block,n);
				var left=LIWIDTH*n;
				var N=$imgs.children().length-1;
						$imgs.css({"left":-left});
						if(n==N){
							setTimeout(()=>{
								$imgs.css({"left":0,"transition":""});
                                color($lines,0);color($block,n);
								n=0;
								setTimeout(()=>{
								$imgs.css("transition","all ."+TRANS/100+"s linear")
								},200)
							},TRANS)
						}
				}
			time=setInterval(moveOnce,INTERVAL+TRANS);
			return new Promise(resolve=>resolve([moveOnce,color]));
		})
		//鼠标进入轮播图和移出事件
		.then(([moveOnce,color])=>{
		$banners.mouseover(()=>{
			clearInterval(time);
			time=null;
			$(".block").css({
				bottom:0,
			})
		});
		$banners.mouseout(()=>{
            $imgs.css("transition","all .4s linear");
			time=setInterval(moveOnce,INTERVAL+TRANS);
			$(".block").css({
				bottom:-50,
			})
		});
		for(let i=0;i<$block.children().length;i++){
			$block.children(":eq("+i+")").children().mouseover(function(e){
                $this=$(e.target);
                $imgs.css({"left":-LIWIDTH*i,
					"transition":"all .4s linear"
				});
                n=i;
                $this.parent().addClass("bannersOn").siblings().removeClass("bannersOn");
                color($lines,i);
                });
		}
        //左右点击动图按钮
			$left=$("[data-load=bannerLeft]");
			$left.click(()=>{
				if(n>0){
				n--;
				color($block,n);color($lines,n);
				$imgs.css({"left":-n*LIWIDTH});
				}else {
					n=$imgs.children().length-1;
					$imgs.css({"transition":"",
						"left":-n*LIWIDTH
					});
                    color($block,n-1);color($lines,n-1);
					setTimeout(function () {
						$imgs.css("transition","all .3s linear");
						n--;
                        $imgs.css({"left":-n*LIWIDTH});
                    },100)
				}
			});
			$right=$("[data-load=bannerRight]");
			$right.click(()=>{
				if(n<$imgs.children().length-2) {
                    n++;
                    $imgs.css({"left": -n * LIWIDTH});
                    color($block, n);color($lines, n);
                }else{
					n++;
                    $imgs.css({"left": -n * LIWIDTH});
                    color($lines,0);color($block,0);
                    setTimeout(()=>{
                        $imgs.css({"left":0,"transition":""});
                        n=0;
                        setTimeout(()=>{
                            $imgs.css("transition","all ."+TRANS/100+"s linear")
                        },200)
                    },TRANS)
				}
			})
		})
})();


/***********楼层1************/
(()=>{

})();
/***链接登录注册页面************/
//(()=>{
	$("#login").click(()=>{
		location.href="login.html";
	});
//})()