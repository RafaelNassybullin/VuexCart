<template>
  <div>
    <navs></navs>
    <catalog></catalog>
    <cart
        :cart_data="CART"
    ></cart>
  </div>
</template>

<script>
import navs from './nav-s'
import catalog from './catalog';
import cart from './cart';
import {mapGetters} from 'vuex'
export default {
  name: "main-wrapper",
  data() {
    return {
      title: "it's working!!"
    }
  },
  components:{
    navs,
    catalog,
    cart
  },
  computed:{
    ...mapGetters(['CART'])
}
}
</script>

<style scoped lang="scss">
.main-wrapper {
  font-size: 97px;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: center;
  width: fit-content;
}
</style>