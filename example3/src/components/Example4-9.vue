<template>
    <div v-if="bookLists.length>0">
        <table border="1" align='center' width=600>
            <caption><h2>购物车</h2></caption>
            <thead>
                <tr>
                    <th></th>
                    <th>名称</th>
                    <th>价格</th>
                    <th>数量</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in bookLists" :key="index" align='center'> 
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{fiter(item.price)}}</td>
                    <td>
                        <button @click="dec(index)" v-bind:disabled="item.count<=0">-</button>
                        {{item.count}}
                        <button @click="add(index)">+</button>
                    </td>
                    <td>
                        <button @click="removeHandle(index)">移除</button>
                    </td>
                </tr>
                <tr align='center'>
                   <td colspan="2">
                        总价格
                    </td>
                    <td colspan="3">{{fiter(totalPrice)}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <h1 v-else>购物车为空</h1>
</template>

<script>
import { computed, reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            bookLists:[
                {
                    id:1,
                    name:'华为P40',
                    price:5200,
                    count:2
                }, 
                {
                    id:2,
                    name:'OPPO',
                    price:2200,
                    count:2
                },
                {
                    id:3,
                    name:'iPhone',
                    price:12200,
                    count:1
                },
                {
                    id:4,
                    name:'vivi',
                    price:3300,
                    count:2
                }
            ] 
        })

        const dec = (i)=>{
            state.bookLists[i].count--
        }

        const add = (i)=>{
            state.bookLists[i].count++
        }

        const removeHandle = (i)=>{
            state.bookLists.splice(i,1)
            //删除以后id重排
            for(let i =0;i<state.bookLists.length;i++){
                state.bookLists[i].id = i+1
            }
        }

        const totalPrice = computed(()=>{
            let total = 0
            for(let i = 0; i<state.bookLists.length;i++){
                total += state.bookLists[i].price * state.bookLists[i].count
            }
            return total
        })

        const fiter = (p)=>{
            return '￥'+ p.toFixed(2)
        }

        return {
            ...toRefs(state),
            dec,
            add,
            removeHandle,
            totalPrice,
            fiter
        }
    }
}
</script>

<style lang="scss" scoped>

</style>