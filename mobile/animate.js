function animate(obj, target, callback) {
    //当有点击事件时，点击多次会开启多个定时器，所以每次调用函数先清除一次，保证只有一个定时器
    clearInterval(obj.timer);
    obj.timer = setInterval(() => {
        var step = (target - obj.offsetLeft) / 10;
        //大于0 向上取整，小于0则向下取整
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            //结束后执行函数
            if (callback) {
                callback();
            }
        }
        //缓慢动画step
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}