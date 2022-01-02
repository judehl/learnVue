<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p class='date'>
    当前时间： {{ nowDate + ' ' + nowTime + ' ' + nowWeek }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
   data() {
        return {
            nowDate: "",    // 当前日期
            nowTime: "",    // 当前时间
            nowWeek: ""     // 当前星期
        };
    },
    methods: {
        currentTime() {
            setInterval(this.getDate, 500);
        },
        getDate: function() {
            var _this = this;
            let yy = new Date().getFullYear();
            let mm = new Date().getMonth() + 1;
            let dd = new Date().getDate();
            let week = new Date().getDay();
            let hh = new Date().getHours();
            let mf =
                new Date().getMinutes() < 10
                    ? "0" + new Date().getMinutes()
                    : new Date().getMinutes();
            if (week == 1) {
                this.nowWeek = "星期一";
            } else if (week == 2) {
                this.nowWeek = "星期二";
            } else if (week == 3) {
                this.nowWeek = "星期三";
            } else if (week == 4) {
                this.nowWeek = "星期四";
            } else if (week == 5) {
                this.nowWeek = "星期五";
            } else if (week == 6) {
                this.nowWeek = "星期六";
            } else {
                this.nowWeek = "星期日";
            }
            _this.nowTime = hh + ":" + mf;
            _this.nowDate = yy + "/" + mm + "/" + dd;
        }
    },
    mounted() {
        this.currentTime();
    },
    // 销毁定时器
    beforeUnmount: function() {
        if (this.getDate) {
            console.log("销毁定时器")
            clearInterval(this.getDate); // 在Vue实例销毁前，清除时间定时器
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
  border: 2px dashed rgb(8, 10, 126);
}
</style>
