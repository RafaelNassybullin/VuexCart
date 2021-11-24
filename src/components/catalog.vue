<template>
  <main>
    <h2>Корзина на VUEX</h2>
    <div class="flex-wrapper">
      <Loader v-if="Load"/>
      <catalog-item
          v-for="product in PRODUCTS"
          :key="product.article"
          :product_data="product"
          @addToCard="addToCard"
      />
    </div>
  </main>
  <p style="color: white">{{ product }}</p>
</template>
<script>
import catalogItem from './catalog-item';
import Loader from './Loader'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "catalog",
  components: {
    catalogItem,
    Loader
  },
  data() {
    return {
      cards: [],
      Load: true
    }
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),
    addToCard(data) {
      this.ADD_TO_CART(data)
    }
  },
  computed: {
    ...mapGetters(['PRODUCTS'])
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then(() => {
      this.Load = false
    })
  }
}
</script>
<!--|====================================>styles-->
<style scoped lang="scss">
h2 {
  font-size: 85px;
  text-align: center;
  padding-top: 90px;
}

.flex-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>