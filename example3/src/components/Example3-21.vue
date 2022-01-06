<template>
    <div>
        用户名:<input type="text" v-model="ipt">{{ipt}} <br>
        前端语言：
        <select v-model="selected">
            <option value="java">java</option>
            <option value="c">c</option>
            <option value="php">php</option>
            <option value="javascript">javascript</option>
        </select> <br>
        {{selected}} <br>
        <input type="radio" v-model="picked" value="man"> 男  
        <input type="radio" v-model="picked" value="woman"> 女
        {{picked}} <br>
        爱好：<input type="checkbox" value="羽毛球" v-model="liked">羽毛球
        <input type="checkbox" value="乒乓球" v-model="liked">乒乓球
        <input type="checkbox" value="音乐" v-model="liked">音乐
        <br>
        your choose is {{liked}}
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            ipt: '',
            selected:'javascript',
            picked:'',
            liked:[]
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>