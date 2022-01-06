<template>
    <div>
        <input type="text" v-model="msg">
        <span>{{msg}}</span> <br>
        <textarea v-model="msg1"></textarea>
        {{msg1}}
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            msg: '',
            msg1:''
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>