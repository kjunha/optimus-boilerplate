<template>
  <div class="home">
    <p class="text-primary">{{mounted}}</p>

    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data: () => {
    return {
      mounted: 'mounted-Data',
    }
  },
  created() {
    axios.get('http://localhost:3000').then((res) => {
      this.mounted = res.data;
    })
  }
}
</script>
