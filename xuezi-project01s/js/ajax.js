//封装ajax方法，多次使用，简化ajax异步获取数据方法
function ajax(method,url){
  return new Promise((resolve,reject)=>{
    var xhr=new XMLHttpRequest();
    xhr.open(method,url,true);
    method=="post"&&xhr.setRequestHeader(
  "Content-Type","application/x-www-form-urlencoded"
    );
    xhr.onreadystatechange=function(){
      if(xhr.readyState==4)
        if(xhr.status==200)
          resolve(xhr.responseText);
        else reject("ajax出错!"+xhr.status)
    }
    xhr.send(null);
  });
}