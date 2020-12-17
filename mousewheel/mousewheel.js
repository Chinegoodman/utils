// 默认配置项目算是
let chazhidefault = 350; //超过350毫秒的操作才会触发 滚轮事件(上下滚动)

let mousewheel_timstamp = '';
let current_chazhi = 0;
var scrollFunc = function(e) {
        if (mousewheel_timstamp) {
            let nexttimestamp = new Date().getTime();
            current_chazhi = nexttimestamp - mousewheel_timstamp;
            if (current_chazhi < chazhidefault) {
                return;
            }
        }
        console.log(current_chazhi);
        mousewheel_timstamp = new Date().getTime();
        e = e || window.event;
        if (e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件               
            if (e.wheelDelta > 0) { //当滑轮向上滚动时  
                //    alert('上滚')
                console.log('上滚')
            }
            if (e.wheelDelta < 0) { //当滑轮向下滚动时  
                //  alert('下滚')
                console.log('下滚')
            }
        } else if (e.detail) { //Firefox滑轮事件  
            if (e.detail > 0) { //当滑轮向下滚动时  
                //    alert('下滚')
                console.log('下滚')
            }
            if (e.detail < 0) { //当滑轮向上滚动时  
                // alert('上滚')  
                console.log('上滚')
            }
        }
    }
    /*IE、Opera注册事件*/
if (document.attachEvent) {
    document.attachEvent('onmousewheel', scrollFunc);

}
//Firefox使用addEventListener添加滚轮事件  
if (document.addEventListener) { //firefox  
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
}
//Safari与Chrome属于同一类型
window.onmousewheel = document.onmousewheel = scrollFunc;

// event.wheelDelta 滚动方向
// 上：120
// 下：-120
// Firefox：event.detail 滚动方向
// 上：-3
// 下:3