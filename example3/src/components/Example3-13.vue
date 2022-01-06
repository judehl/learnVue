<template>
    <div>
        <button @click='run'>方法内部调用</button>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            msg: 'hello',
        })

        const alertMsg = ()=>{
            alert('调用函数成功！')
        }

        const run = ()=>{
            alertMsg()
        }
        return {
            ...toRefs(state),
            run,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>