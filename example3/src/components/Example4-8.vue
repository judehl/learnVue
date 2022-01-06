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
import { onMounted, ref, watch } from 'vue'

export default {
    setup () {
        const keyword = ref('')
        const book_lists = ref([])
        const book_lists1 = ref([])

        onMounted(()=>{
            fetch('book.json')
            .then(res=>res.json())
            .then(res=>{
                book_lists.value = res.book_lists,
                book_lists1.value = res.book_lists
            })
        })

        watch(()=>keyword.value,()=>{
            book_lists1.value = book_lists.value.filter(item=>item.includes(keyword.value))
        })

        return {
            keyword,
            book_lists,
            book_lists1
        }
    }
}
</script>

<style lang="scss" scoped>

</style>