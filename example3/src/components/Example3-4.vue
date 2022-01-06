<template>
    <p>{{msg}}</p>
    <p v-once>{{msg}}</p>
    <input type="text" v-model="msg">
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            msg:'hello'
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>