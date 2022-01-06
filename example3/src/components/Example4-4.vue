<template>
    <div>
        长度：<input type="text" v-model="height"><br>
        宽度：<input type="text" v-model="weight"><br>
        面积：{{area}} <br>
        <button @click="handleClick">计算周长</button>{{perimeter}}
    </div>
</template>

<script>
import { reactive, toRefs, computed } from 'vue'

export default {
    setup () {
        const state = reactive({
            height: '',
            weight: '',
            perimeter:0
        })
        const area = computed(()=>{
            return state.height*state.weight
        })
        const handleClick = ()=>{
            state.perimeter = 2* (state.height*1+state.weight*1)
        }
        return {
            ...toRefs(state),
            area,
            handleClick
        }
    }
}
</script>

<style lang="scss" scoped>

</style>