
//var iframe = document.createElement('iframe');
//iframe.id="ssdsdssd";
//iframe.width=500;
//iframe.height=500;
//iframe.src="https://www.163.com"; 

//<div style="width : 200px;height: 200px;position: absolute;background: #99dd33;cursor: move;"></div>   
function xxxx(){
var disX = disY = 0;                         // 鼠标距离div的左距离和上距离
    var div1 = document.createElement("div");
    var title = document.createElement("div");
    title.style ="width : 500px;height: 50px;background:  #99dd33";
    div1.appendChild(title);
    var body = document.createElement("div");
    body.style ="width : 500px;height: 850px;background: #99dd33";
    div1.appendChild(body);
    //div1.innerHTML = '<div height="900"></iframe>'; 
    body.innerHTML = '<iframe id="optid" src="http://www.163.com" width="500" height="900"></iframe>'; 
    // 得到div1对象
    div1.id="sdsdsdsdsdsdsd";
    div1.style ="width : 500px;height: 900px;position: absolute;cursor: move;z-index: 99999";
    div1.style.left=1350;
    div1.style.top =0;
    // 鼠标按下div1时
   // alert("12121112");
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
    var iframe =  document.getElementById('optid');
    iframe.src="https://www.163.com"; 
//    alert("加载撒大声地所");
}


alert("121212");
xxxx();
alert("121213");