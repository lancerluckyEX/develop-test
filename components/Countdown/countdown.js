//components/Countdown/countdown.js
Component({
    options: {
        multipleSlots: true
    },
    properties: {
        seconds: {
            type: Number,
            value: 5
        },
        text: {
            type: String,
            value: '发送短信'
        },
        interval: {
            type: String,
            value: ''
        },
        toggle: {
            type: Boolean,
            value: false
        }
    },

    //私有数据,组件的初始数据,可用于模版渲染
    data: {

    },
    //组件的方法列表,更新属性和数据的方法与更新页面数据的方法类似
    methods: {
        //公有方法

        //倒计时开始
        setTimeStart: function() {
            var that = this
            if ( !that.data.toggle && that.data.seconds != 0 ) {
                var a  = setInterval(function() {
                    var timer = String(that.data.seconds)
                    that.setData({
                        seconds: that.data.seconds - 1
                    })
                    that.setData({
                        text: timer + "秒后重发短信",
                    })
                    if ( that.data.seconds < 0 ) {
                        setTimeout( function() {
                            clearInterval(that.data.interval)
                            that.setData({
                                text: "重发短信",
                                toggle: false,
                                seconds: 5
                            })
                        }, 1000)
                    }
                }, 1000)
                that.setData({
                    interval: a,
                    toggle: true
                })
            }
        }
        //内部私有方法建议以下划线开头

    }
})