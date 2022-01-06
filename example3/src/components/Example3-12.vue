<template>
    <div>
        {{msg}}
        <button @click="setMsg('world')">修改msg的值</button>
    </div>
</template>

<script>
import { reactive, t    oRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            msg: 'hello'
        })
        const setMsg = (data)=>{
            state.msg = data
        }

        return {
            ...toRefs(state),
            setMsg
        }
    }
}
</script>

<style lang="scss" scoped>

</style>