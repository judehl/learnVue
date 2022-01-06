<template>
    <div>
        <input type="checkbox" value="足球" v-model="checked">足球
        <input type="checkbox" value="篮球" v-model="checked">篮球
        <input type="checkbox" value="排球" v-model="checked">排球 
        <div>{{checked}}</div>
        
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            checked: [],
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>