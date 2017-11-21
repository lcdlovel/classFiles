/**
 * 根据ID返回页面中的指定元素
 */
function $(id){
	return document.getElementById(id);
}
/**
 * 获取 AJAX 核心对象 XMLHttpRequest
 */
function getXhr(){
	if(window.XMLHttpRequest){
		return new XMLHttpRequest();
	}else{
		return new ActiveXObject("Microsoft.XMLHttp");
	}
}