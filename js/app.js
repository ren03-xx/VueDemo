new Vue({
    el:"#vue-app",      //选择器名
    data:{              //属性
        name:"小轩",
        job:"Java 后端",
        website:"http://www.baidu.com",
        websiteTag:"<a href='http://www.baidu.com'>Baidu</a>"
    },
    methods:{           //方法名
        greet: function (time) {
            return 'good ' + time + this.name + " !";
        }
    }
});

new Vue({
    el:"#vue-event",
    data:{
        inputing:"",
        age: 30,
        sex:'',
        x:0,
        y:0,
        checked:'true',
        address:'',
    },
    methods:{
        dec1:function(){
            this.age--;
        },
        add:function(inc){
            this.age+=inc;
        },
        dec2:function(dec){
            this.age-=dec;
        },
        updateXY:function (event) {
           // console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        handleClick:function () {
            alert("hello")
        },
        logName:function () {
            console.log("正在输入姓名...");
            this.inputing="正在输入姓名...";
        },
        logAge:function () {
            console.log("正在输入年龄...")
        },
        getAddress:function () {
           // console.log(this.$refs.address.value)
            this.address = this.$refs.address.value     //$refs是一个对象，相当于ref的父级
        }
    }
});