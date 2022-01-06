<template>
    <div>
        <input type="text" v-model="num"><br>   
        <span>监听对象a的值变为：{{stra}}</span><br>
        <span>监听对象b的值变为：{{strA}}</span><br>
    </div>
</template>

<script>
import { reactive, toRefs, watch } from 'vue'

export default {
    setup () {
        const state = reactive({
            num: 0,
            stra:'a', 
            strA:'A'
        })
        watch(()=>state.num,()=>{
            state.stra = String.fromCharCode(97+parseInt(state.num%26))
            state.strA = String.fromCharCode(65+parseInt(state.num%26)) 
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>