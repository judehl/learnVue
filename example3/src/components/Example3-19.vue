<template>
    <div>
        <input type="radio" value="boy" v-model="picked">boy
        <input type="radio" value="girl" v-model="picked">girl<br>
        <input type="radio" value="boy" v-model="picked1">boy
        <input type="radio" value="girl" v-model="picked1">girl
        <br>
        {{picked}}<br>
        {{picked1}}
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            picked: '',
            picked1:''
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>