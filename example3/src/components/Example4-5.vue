<template>
    请输入书籍关键字:
    <input type="text" v-model="input_msg"><br>
    查询结果:
    <ul>
        <li v-for="(item,index) in computedName" :key="index">
            {{item}}
        </li>
    </ul>

</template>

<script>
import { computed, onMounted, reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            input_msg: '',
            book_lists:[]
        })
        onMounted(()=>{
            fetch('book.json')
            .then(res=>res.json())
            .then(res=>{
                state.book_lists = res.book_lists
            })
        })

        const computedName = computed(()=>{
            return state.book_lists.filter(item=>item.includes(state.input_msg))
        })

        return {
            ...toRefs(state),
            computedName
        }
    }
}
</script>

<style lang="scss" scoped>

</style>