<template>
    <div>
        <table class="table" width='60%'>
            <caption><h2>用户管理</h2></caption>
            <thead>
                <tr>
                    <th>编号</th>
                    <th>姓名</th>
                    <th>年龄</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody align='center'>
                <tr v-for="(item,index) in userList" :key="index">
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.age}}</td>
                    <td>
                        <button @click="goDetails(item.id-1)">详情</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
// import useRouter from 'vue-router'
import {useRouter} from 'vue-router'


export default {
    setup () {
        const state = reactive({
            userList: [
                {
                    id:1,
                    name:'王明',
                    age:19
                },
                {
                    id:2,
                    name:'张三',
                    age:9
                },
                {
                    id:3,
                    name:'李四',
                    age:39
                },
                {
                    id:4,
                    name:'宋小宝',
                    age:49
                }
            ],
        })
    
        const router=useRouter()  //创建一个路由器
        const goDetails = (index)=>{
            router.push({
                path:'/userInfo' ,//导航位置
                query:{
                    id:index
                }
            })
        }
        return {
            ...toRefs(state),
            goDetails
        }
    }
}
</script>

<style lang="scss" scoped>
    tr{
        height: 40px;
    }
</style>