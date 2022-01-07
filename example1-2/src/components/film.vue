<template>
    <div class="film">
        <div class="filmLeft">
            <h3>屏幕</h3>
            <ul>
                <li v-for="(item,index) in seatflag" :key="index" class="seat"
                :class="{'seatActive':seatflag[index]==1,
                'seatSpace':seatflag[index]==0,
                'seatNoUse':seatflag[index]==2,
                'noSeat':seatflag[index]==-1}"
                @click="handleClick(index)"
                >

                </li>
            </ul>
        </div>
        <div class="filmRight">
            <div class="rightTop"></div>
            <div class="rightBottom">
                <p id="seatSelect">
                    座位：
                    <span v-for="(item,index) in curSeatDisp" :key="index">
                        {{item}}
                    </span><br>
                    <strong style="color:red;">{{count}}</strong>个座位<br>
                    <strong style="color:red;">
                        再次单击座位可以取消。
                        <span v-if="maxFlag">您最多只能买五张票！</span>
                    </strong>
                </p>
            </div>
        </div>

    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            seatflag:[
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 2, 2, 0, 0, 0, 0,
                0, 0, 0, 2, 2, 0, 2, 2, 0, 0,
                -1, 0, 0, 0, 0, 0, 0, 0, 0, -1,
                -1, -1, 0, 0, 0, 0, 0, 0, -1, -1
            ],
            count: 0,
            curSeat:[],
            curSeatDisp:[],
            seatCol:10,
            maxFlag:false
        })

        const handleClick = (index) =>{
            if(state.seatflag[index]==1){
                state.seatflag[index]=0
                state.curSeat.splice(state.curSeat.findIndex(x=>x==index),1)
            }
            else{
                if(state.seatflag[index]==0&&state.curSeat.length<5){
                    state.seatflag[index]=1
                    state.curSeat.push(index) 
                }
            }
            state.curSeatDisp=[]
            for(const data of state.curSeat){
                state.curSeatDisp.push((Math.floor(data/state.seatCol)+1)+'行'+((data%state.seatCol)+1)+'列')
            }
            var mySeat = state.seatflag.filter(item=>item==1)
            state.count = mySeat.length
            if(mySeat.length>=5) state.maxFlag=true
            else state.maxFlag=false

        }

        return {
            ...toRefs(state),
            handleClick,

        }
    }
}
</script>

<style lang="scss" scoped>
    .film{
        margin: 0 auto;
        border: 1px solid grey;
        width: 1050px;
        height: 550px;
    }
    .filmLeft{
        width: 550px;
        height: 500px;
        float: left;
    }
    .filmLeft h3{
        text-align: center;
    }
    .filmLeft ul{
        list-style: none;
    }
    .filmRight{
        width: 500px;
        height: 550px;
        float: left;
        background-color: bisque;
    }
    .rightTop{
        float: left;
        margin: 0px 0px 5px 5px;
    }
    .rightBottom{
        clear: both;
        margin: 0px 10px;
    }
    .rightBottom p{
        line-height: 12px;
    }
    .seat{
        float: left;
        width: 30px;
        height: 30px;
        margin: 5px 10px;
        cursor: pointer;
    }
    .seatActive{
        /*选中座位*/
        background:url('../assets/bg.png') no-repeat 1px 0px;
    }
    .seatSpace{
        /*可选座位*/
        background:url("../assets/bg.png") no-repeat 1px -29px;
    }
    .seatNoUse{
        /*已被选座位*/
        background: url("../assets/bg.png") no-repeat 1px -56px;
    }
    .noSeat{
        /*该位置无座位*/
        background: url("../assets/bg.png") no-repeat 1px -84px;
    }
</style>