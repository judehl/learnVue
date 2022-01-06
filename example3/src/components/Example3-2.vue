<template>
    <div>
        1.{{str}} <br>
        2.{{str + ' world'}} <br>
        3.{{str.split('ll').reverse().join('aa')}} <br>
        4.{{str.length}} <br>
        5.{{a+b}} <br>
        6.{{a<b}}<br>
        7.{{a<b?'是':'否'}}<br>
        8.{{flag}} <br>
        9.{{arr[2]}}<br>
        10.{{obj.age}}<br>
        11.{{a.toFixed(2)}} 
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            str: 'hello',
            a:22,
            b:33,
            flag:true,
            arr:[1,2,3],
            obj:{
                name:'jude',
                age:19
            }
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>