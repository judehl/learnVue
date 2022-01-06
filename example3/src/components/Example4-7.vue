<template>
    请输入查询关键字：
    <input type="text" v-model="keyword"><br>
    查询结果：
    <ul> 
        <li v-for="(item,index) in book_lists1" :key="index">
            {{item}}
        </li>
    </ul>
</template>

<script>
import { onMounted, reactive, toRefs, watch } from 'vue'

export default {
    setup () {
        const state = reactive({
            keyword: '',
            book_lists:[],
            book_lists1:[] // 解决数组变量覆盖问题
        })
        onMounted(()=>{
            fetch('book.json')
            .then(res=>res.json())
            .then(res=>{
                state.book_lists = res.book_lists,
                state.book_lists1 = res.book_lists
            })
        })

        watch(()=>state.keyword,()=>{
            state.book_lists1 = state.book_lists.filter(item=>item.includes(state.keyword))
        })

        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>