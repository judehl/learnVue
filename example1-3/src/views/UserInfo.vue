<template>
    <table width='300' height='300' align='center' border="1">
         <caption><h3>用户详细信息</h3></caption>
        <tr align='center'>
             <td>编号</td>
             <td>{{userList[index].id}}</td>
         </tr>
        <tr align='center'>
             <td>姓名</td>
             <td>{{userList[index].name}}</td>
         </tr>
         <tr align='center'>
             <td>年龄</td>
             <td>{{userList[index].age}}</td>
         </tr>
          <tr align='center'>
             <td>性别</td>
             <td>{{userList[index].sex}}</td>
         </tr>  
         <tr align='center'>
             <td>生日</td>
             <td>{{userList[index].birthday}}</td>
         </tr> 
         <tr align='center'>
             <td>电话</td>
             <td>{{userList[index].telphone}}</td>
         </tr>  
         <tr>
             <td colspan="2" align='center'>
                 <button @click="goBack()">返回</button>
             </td>
        </tr>                             
    </table>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRoute, useRouter} from 'vue-router'

export default {
    setup () {
        const state = reactive({
            userList: [
                {
                    id: 1,
                    name: '王明',
                    age: 19,
                    sex: '男',
                    birthday: '1995.04.01',
                    telphone: '13712345678'
                },
                {
                    id: 2,
                    name: '张三',
                    age: 9,
                    sex: '女',
                    birthday: '2002.08.13',
                    telphone: '13787654321'
                },
                {
                    id: 3,
                    name: '李四',
                    age: 39,
                    sex: '女',
                    birthday: '2003.09.20',
                    telphone: '13712345678'
                },
                {
                    id: 4,
                    name: '宋小宝',
                    age: 49,
                    sex: '男',
                    birthday: '1981.09.20',
                    telphone: '18712345608'
                }
            ],
            index:0
        })

        const route = useRoute() //  创建接收路由
        state.index = route.query.id

        const router = useRouter()  //添加路由
        const goBack = ()=>router.go(-1) // 回退1
        return {
            ...toRefs(state),
            goBack
        }
    }
}
</script>

<style lang="scss" scoped>

</style>