<template>
    <div>
        <a href="path">百度一下</a><br>
        <a :href="path">百度一下</a><br>
        <a v-bind:href="path">百度一下</a>

    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            path: "https://www.baidu.com",
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>