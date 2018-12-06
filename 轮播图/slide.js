window.onload = function() {
    var list = document.getElementById('list'); //图片列表
    var prev = document.getElementById('prev'); //上一个
    var next = document.getElementById('next'); //下一个

    function animate(offset) {
        //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
        //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
        var newLeft = parseInt(list.style.left) + offset;
        list.style.left = newLeft + 'px';
        if(newLeft<-3000){
            list.style.left = 0 + 'px';
        }
        if(newLeft>0){
            list.style.left = -3000 + 'px';
        }
    }
    //圆点
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var index = 1;

    function buttonsShow(){
        //这里需要清除之前的样式
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == 'on') {
                buttons[i].className = '';
            }
        }
        //数组从0开始，故index需要-1
        buttons[index - 1].className = 'on';
    }
    prev.onclick = function() {
        index -= 1;
        if (index < 1) {
            index = 4;
        }
        buttonsShow();
        animate(600);
    }
    next.onclick = function() {
        //由于上边定时器的作用，index会一直递增下去，我们只有5个小圆点，所以需要做出判断
        index += 1;
        if (index > 4) {
            index = 1;
        }
        buttonsShow();
        animate(-600);
    }
    //定时器播放
    var timer;
    function play(){
        timer = setInterval(function(){
            next.onclick()
        }, 1500);
    }
    play();
    //清除定时器，获取整个container
    var container = document.getElementById('container');
    //想要停下来看某张图片
    function stop() {
        clearInterval(timer);
    }
    container.onmouseover = stop; //鼠标在container里
    container.onmouseout = play; //鼠标不在
    //定位
    var setTranslateX = function(translateX){
        list.style.transform = "translateX("+translateX+"px)";
        list.style.webkitTransform = "translateX("+translateX+"px)";
    }
    
    var width = container.offsetWidth; //盒子宽度
    var startX = 0; //记录起始  刚刚触摸的点的位置 x的坐标
    var moveX = 0;  //滑动的时候x的位置
    var distanceX = 0;  //滑动的距离
    var isMove = false; //是否滑动过

    container.addEventListener('touchstart', function(e){
        clearInterval(timer);   //清除定时器
        startX = e.touches[0].clientX;  //记录起始X
    });
    container.addEventListener('touchmove',function(e){
        moveX = e.touches[0].clientX;   //滑动时候的X
        distanceX = moveX - startX; //计算移动的距离
        //计算当前定位  -index*width+distanceX
        setTranslateX(-index * width + distanceX);  //实时的定位
        isMove = true;  //证明滑动过
    });
    //在模拟器上模拟的滑动会有问题 丢失的情况  最后在模拟器的时候用window
    container.addEventListener('touchend', function(e){
        // 滑动超过 1/2即为滑动有效，否则即为无效
        if(isMove && Math.abs(distanceX) > width/2){
            //5.当滑动超过了一定的距离  需要 跳到 下一张或者上一张  （滑动的方向）*/
            if(distanceX > 0){  //上一张
                index --;
            }
            else{   //下一张
                index ++;
            }
        }
        setTranslateX(-index * width);    //定位
        if(index > 4 ){
            index = 1;
        }else if(index <= 0){
            index = 4;
        }
        buttonsShow(); //圆点位置
        //重置参数
        startX = 0;
        moveX = 0;
        distanceX = 0;
        isMove = false;
    });
}