<template>
    <div>
        <input type="text" @keyup="handleKeyup($event)">
        <span v-if="count>0">您按了回车{{count}}次</span>

        <input type="text" @keyup.enter="handleKeyup1()">
        <span v-if="num>0">您按了回车{{num}}次</span>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 0,
            num:0
        })
        const handleKeyup = (e)=>{
            //回车键的键码值为13时
            if (e.keyCode ===13) state.count++
        }

        const handleKeyup1 = ()=>{
            state.num++
        }
        return {
            ...toRefs(state),
            handleKeyup,
            handleKeyup1
        }
    }
}
</script>

<style lang="scss" scoped>

</style>