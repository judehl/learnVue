<template>
    <div>
        <a href="https://www.baidu.com" @click="handlerclick($event)">百度一下</a><br>
        <a href="https://www.baidu.com">百度一下</a><br>
        <a href="https://www.baidu.com" @click.prevent='handlerclick1()'>百度一下</a>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 0,
        })
        const handlerclick = (e)=>{
            e.preventDefault();
        }
        
        const handlerclick1 = ()=>{

        }
        return {
            ...toRefs(state),
            handlerclick,
            handlerclick1
        }
    }
}
</script>

<style lang="scss" scoped>

</style>