//函数1：初次查找某个元素时使用
//调用方法： $("d1>div:nth-child(2)");
function $(selector){
  return document.querySelectorAll(selector);
}
//函数2：已知父元素时，用父元素查找相关子元素，返回的是一个集合，要通过[]取出自己要的元素
//调用方法 d1.find("div>p");
HTMLElement.prototype.find=function(selector){
  return this.querySelectorAll(selector)
}
