﻿//<div style="width : 200px;height: 200px;position: absolute;background: #99dd33;cursor: move;"></div>   
function xxxx(){
var disX = disY = 0;                         // 鼠标距离div的左距离和上距离
    var div1 = document.createElement("div");  // 得到div1对象
    div1.id="sdsdsdsdsdsdsd";
    div1.style ="width : 200px;height: 200px;position: absolute;background: #99dd33;cursor: move;";
    // 鼠标按下div1时
    div1.onmousedown = function(e) {
        var evnt = e || event;                   // 得到鼠标事件
        disX = evnt.clientX - div1.offsetLeft;   // 鼠标横坐标 - div1的left
        disY = evnt.clientY - div1.offsetTop;    // 鼠标纵坐标 - div1的top
         
        // 鼠标移动时
        document.onmousemove = function(e) {
            var evnt = e || event;
            var x = evnt.clientX - disX;
            var y = evnt.clientY - disY;
            var window_width  = document.documentElement.clientWidth  - div1.offsetWidth;
            var window_height = document.documentElement.clientHeight - div1.offsetHeight;
             
            x = ( x < 0 ) ? 0 : x;                          // 当div1到窗口最左边时
            x = ( x > window_width ) ? window_width : x;    // 当div1到窗口最右边时
            y = ( y < 0 ) ? 0 : y;                          // 当div1到窗口最上边时
            y = ( y > window_height ) ? window_height : y;  // 当div1到窗口最下边时
             
            div1.style.left = x + "px";
            div1.style.top  = y + "px";
        };
         
        // 鼠标抬起时
        document.onmouseup = function() {
            document.onmousemove =null;
            document.onmouup = null;
        };
         
        return false;
    };
    document.body.appendChild(div1);
    alert("加载撒大声地所");
    return div1;
}