function move(obj,attr,target,speed,callback){
    var oldValue = parseInt(getStyle(obj,attr));
    clearInterval(obj.timer);
    /*判断速度的正负值，往左还是右边*/
    var current = parseInt(getStyle(obj,"left"));
    if(current>target){
        speed = -speed;
    }
    console.log(current);
    obj.timer = setInterval(function () {

        var oldValue = parseInt(getStyle(obj,attr));
        var newValue = oldValue +speed;

        if((speed<0&&newValue<target)||(speed>0&&newValue>target)){
            newValue = target;
        }
        console.log(oldValue);
        console.log(newValue);
        console.log(target);
        obj.style[attr] = newValue +"px";
        if(newValue ==target){
            clearInterval(obj.timer);
            callback &&callback();
        }

    },30)
}
//获取元素
function getStyle(obj,name) {
    if(window.getComputedStyle){
        return getComputedStyle(obj,null)[name];
    }else {
        return obj.currentStyle[name];
    }
}



/*
* 可以通过修改元素的class属性来间接的修改样式
* 这样只需要修改一次即可修改多个样式
* 浏览器只需要重新渲染页面一次，性能不叫好
* 并且这种方式，可以使得表现和行为进一步的分离
*
* box.className = "b2";//覆盖
* box.className += " b2";//注意空格
*
* */
/*
* 参数：
* obj 要添加class属性的元素
* cn
*
* */
function addClass(obj,cn) {
    if(!hasClass(obj,cn)){
        obj.className += " "+cn;
    }
}
/*
* 判断一个元素中是否含有指定的class属性值
* */
function hasClass(obj,cn) {
    /*  /!*单词边界：\b*!/
      var reg = /\bb2\b/;*/
    var reg = new RegExp("\\b"+cn+"\\b");
}

/*
* 删除一个类
*
* */

function removeClass(obj,cn) {
    var reg = new RegExp("\\b"+cn+"\\b");
    //    删除class
    obj.className = obj.className.replace(reg,"");
}

/*
* 切换一个类
* 如果有该类，则删除
* 如果没有则添加
* */
function toggleClass() {
    if(hasClass(obj,cn)){
        removeClass(obj,cn);
    }else{
        addClass(obj,cn);
    }
}