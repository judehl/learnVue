<template>
    <div>
        <select v-model="picked">
            <option disabled value="">请选择</option>
            <option value="football">足球</option>
            <option value="basketball">篮球</option>
            <option value="valleyball">排球</option>
            <option value="badminton">羽毛球</option>
        </select>
        <div>{{picked}}</div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            picked: 'football',
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>