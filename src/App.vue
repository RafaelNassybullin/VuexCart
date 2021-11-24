<template>
  <main-wrapper/>
</template>

<script>
import mainWrapper from './components/main-wrapper';
export default {
  props:{},
  data(){},
  mounted() {},
  methods:{},
  components:{
    mainWrapper
  }
}
</script>
|====================================>styles
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background: black;
  color: white;
  font-family: Roboto, sans-serif;
}
*::selection{
  background: #E83148;
}

</style>
