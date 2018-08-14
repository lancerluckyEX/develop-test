//components/Timer/Countdown.js
Component({
    options: {
        multipleSlots: true
    },
    properties: {
        // 弹窗标题
        seconds: {
            type: Number,
            value: 0
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
        //计时开始
        setInterStart: function() {
            if ( !this.data.toggle ) {
                var that = this
                console.log('test click')
                var a  = setInterval(function() {
                    that.setData({
                        seconds: that.data.seconds + 1
                    })
                }, 1000)
                this.setData({
                    interval: a,
                    toggle: true
                })
            }

        },
        //结束计时
        setInterEnd: function(){
            console.log('end click')
            //清除计时器  即清除interval
            clearInterval(this.data.interval)
            this.setData({
                seconds: 0,
                toggle: false
            })
        }

        //内部私有方法建议以下划线开头
    }
})