(()=>{
	/*
	*此部分代码为轮播图部分
	**/
  var bannerImgs=$("[data-load=bannerImgs]")[0],//图片区域的ul
      bannerInds=$("[data-load=bannerInds]")[0],//小圆点的ul
			//LIWIDTH:一个图片的宽度;TRANS:轮播图过渡的时间;INTERVAL:时间间隔
      LIWIDTH=960,TRANS=300,INTERVAL=2000,
      n=0,timer=null;//n:保存图片序号;timer:定时器的名称，用于清空或者启动定时器
  ajax("get","data/01-index/banners.php")//将数据库中的图片通过ajax请求过来
    .then(resText=>{
			//此部分代码功能：将请求过来的数据拼接在图片区域，并通过图片的个数确定小圆点的个数
			//并设置他们的样式
      var banners=eval("("+resText+")");//eval将json字符串转换为js对象
			//var banners = JSON.parse(resText);//此处JSON.parse功能和eval功能相同
      banners.push(banners[0]);//将第一张图片追加在数组末尾，用作伪装
      var str="";//声明空字符串，用于拼接li
      for(var b of banners)
        str+=`<li>
								<a href="${b.href}"><img src="${b.img}"></a>
							</li>`;
      bannerImgs.innerHTML=str;//将拼接好的字符串放入图片区域的ul中
			//设置图片区域的ul的宽度=>li都可以在一行中显示
      bannerImgs.style.width=LIWIDTH*banners.length+"px";
			//根据图片的个数，自动生成相应数量的小圆点
			//str.repeat(n);=>原理
			/*
				String.prototype.repeat=function(n){
					return new Array( num + 1 ).join( str );//[,,,]
				}
			*/ 
      bannerInds.innerHTML="<li></li>".repeat(banners.length-1);//-1:因为最后一张图片是用作伪装的
			//页面刚加载后，轮播图第一张图片显示，所以对应的第一个小圆点叫上样式
			bannerInds.children[0].className="hover";
			//此处使用promise的原因：轮播图片和小圆点都加载完之后才能进行轮播动画=>即先画图，再轮播
			return new Promise(resolve=>resolve());//=>function(resolve){resolve()}
    })
    .then(()=>{
			//此处定义轮播图移动一次时的函数
      function moveOnce(){
        n++;//移动一次，图片序号加1
        var left=-n*LIWIDTH;//定义left变量，保存图片区域ul的left值:ul已经根据大框绝对定位了
        bannerImgs.style.left=left+"px";//将修改后的值设置到ul的left属性上
        bannerInds.children[n-1].className="";//前一个小圆点的样式需要去掉
        if(n==bannerImgs.children.length-1){//如果图片序号n(即当前图片)  已经是最后一个图片时
					//立刻把第一张图片对应的小圆点加上样式(因为最后一张图片和第一张图片是一样的)
          bannerInds.children[0].className="hover";
					//此处设置一次性定时器原因
					//=>在过渡时间内，消除最后一张图片过渡
					//不然小圆点已经到第一个了，图片还在过渡最后一张图片
          setTimeout(()=>{
            bannerImgs.style.transition="";//清除图片区域过渡
            bannerImgs.style.left=0;//left值改为0
            n=0;//图片序号该为0
						//修正后再次用一次性定时器启动图片区域过渡属性
            setTimeout(()=>
              bannerImgs.style.transition=
                "all ."+TRANS/100+"s linear"
            ,10)
          },TRANS);
        }else{//如果图片序号n(即当前图片) 不是最后一张时
          bannerInds.children[n].className="hover";//把当前图片对应的小圆点加上样式
        }
      }
			//用周期性定时器启动图片轮播=>即每隔固定时间调用一次moveOnce函数
      timer=setInterval(moveOnce,INTERVAL+TRANS);//时间间隔要加上图片过渡的时间
			//轮播图正常运行后，处理鼠标移入和移出的效果，放在另一个函数中
			//并返回moveOnce函数供外面函数使用
      return new Promise(resolve=>resolve(moveOnce))
    })
    .then((moveOnce)=>{
			//此处处理三个事件：
			//鼠标移入，轮播图停止;
      bannerImgs.parentNode.onmouseover=function(){
        clearInterval(timer);
        timer=null;
      };
			//鼠标移出，轮播图启动;
      bannerImgs.parentNode.onmouseout=function(){
        timer=setInterval(moveOnce,INTERVAL+TRANS);
      };
			//点击小圆点，跳到小圆点对应的图片并修改小圆点的样式
			//for循环，用let处理匿名函数中变量i不是想要的i的问题=>形成闭包
      for(let i=0;i<bannerInds.children.length;i++){
        bannerInds.children[i].onclick=function(){//点击小圆点
          n=i;//将图片的序号n的值设置为i
          bannerImgs.style.left=-n*LIWIDTH+"px";//修改图片区域ul的left
          bannerInds.find(".hover")[0].className="";//删掉有样式的小圆点的样式
          bannerInds.children[n].className="hover";//将点中的小圆点设置样式
        }
      }
      return new Promise(resolve=>resolve());//处理好三个事件之后，处理左移按钮函数和右移按钮函数
    })
    .then(()=>{
			//左移按钮函数
      $("[data-move=left]")[0].onclick=function(e){
        e.preventDefault();//按钮是a，a标签的href有默认行为,会在地址栏生成#=>消除a的默认行为
				//判断当前图片n是不是第一张
        if(n>0){//如果不是第一张
          n--;//n减1
          bannerImgs.style.left=-n*LIWIDTH+"px";//修改ul的left
          bannerInds.children[n+1].className="";//去掉之前的小圆点样式
          bannerInds.children[n].className="hover";//给当前图片对应的小圆点加上样式
        }else{//否则=>说明是第一张图片
          bannerImgs.style.transition="";//清除ul过渡
          n=bannerImgs.children.length-1;//图片的序号n为最后一张，即length-1
          bannerImgs.style.left=-n*LIWIDTH+"px";//设置ul的left值
					//用一次性定时器：加上过渡/序号--/ul的left和小圆点的样式
          setTimeout(()=>{
            bannerImgs.style.transition="all ."+TRANS/100+"s linear";//过渡
            n--;//序号--，因为最后一张照片是伪装
            bannerImgs.style.left=-n*LIWIDTH+"px";//ul的left
            bannerInds.children[0].className="";//第一个小圆点去掉样式
            bannerInds.children[n].className="hover";//最后一个小圆点加上样式
          },10)
        }
      }
			//右移按钮函数
      $("[data-move=right]")[0].onclick=function(e){
        
      }
    })
    .catch(err=>console.log(String(err)))
})();