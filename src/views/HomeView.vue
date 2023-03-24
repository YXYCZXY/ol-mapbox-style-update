<!--
 * @Description: 
 * @Date: 2023-03-24 09:13:48
 * @LastEditors: Yuanxy
 * @LastEditTime: 2023-03-24 09:27:59
 * @FilePath: \ol-mapbox-style\src\views\HomeView.vue
 * @Author: Yuanxy 
-->
<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style>
.home{
  width: 100%;
  height: 100%;
  
}
</style>
