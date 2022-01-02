<template>
  <div class="home" style="border:4px dashed #0F0">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="欢迎您的光临！"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
