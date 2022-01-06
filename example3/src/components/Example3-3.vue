<template>
    <div>
    1.{{str}} <br>
    2.<p v-text='str'></p>
    3.<p v-html="str"></p>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            str: '<h1>hello world!</h1>',
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>