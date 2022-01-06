 <template>
     <div>
         {{timeMsg}}
     </div>
 </template>
 
 <script>
 import { onMounted, reactive, toRefs } from 'vue'
 
 export default {
     setup () {
         const state = reactive({
             timeMsg: new Date() ,
         })
     
        // 钩子函数（生命周期函数）网页加载完成以后去运行的一些语句
        onMounted(()=>{
            // 不断去读取新的事件 ，与setTimeout区别，后者只运行一次
            setInterval(()=>{
                state.timeMsg = new Date();
            },1000)
            
        })

         return {
             ...toRefs(state),
         }
     }
 }
 </script>
 
 <style lang="scss" scoped>
 
 </style>