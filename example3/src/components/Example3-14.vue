<template>
    <div>
        {{msg}}
        <button data-aid='world' data-hello='!' @click="handleclick('vue',$event)">事件对象按钮</button>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            msg: 'hello',
        })
        const handleclick = (argp,e)=>{
            state.msg += argp+e.srcElement.dataset.aid+ e.srcElement.dataset.hello
            e.srcElement.style.background = 'pink'
        }

        return {
            ...toRefs(state),
            handleclick
        }
    }
}
</script>

<style lang="scss" scoped>

</style>