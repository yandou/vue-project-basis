//扩展功能函数
module.exports = {
    //返回dom节点
    getNode: {
        win: window,
        doc: document,
        docEle: document.documentElement
    },
    //根据键名获取rul地址参数值
    getQueryString: function (name) {
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", 'i');
        let r = this.getNode.win.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        } else {
            return null;
        }
    },
    //获取设备宽高
    getDeviceInfo: function () {
        return {
            deviceWidth: this.getNode.docEle.clientWidth,
            deviceHeight: this.getNode.docEle.clientHeight
        }
    },
    //函数去抖
    debounce: function (fn, delay) {
        var timer;
        return function () {
            var ctx = this, args = arguments;
            clearTimeout(timer);
            timer = setTimeout(function () {
                fn.apply(ctx, args);
            }, delay);
        };
    },
    //窗口改变事件
    getWindowEvent: function () {
        return this.getNode.win.orientationchange ? 'orientationchange' : 'resize';
    },
    //响应式布局改变html字号
    changeHtmlFontSize: function () {
        //640像素
        // this.getNode.docEle.style.fontSize = this.getDeviceInfo().deviceWidth / (640 / 100) + 'px';
        //750像素
        this.getNode.docEle.style.fontSize = this.getDeviceInfo().deviceWidth / 375
    }
}