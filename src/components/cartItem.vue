<template>
  <transition name="contain">
    <div class="container">
      <div class="image-cart-item">
        <img :src="require('@/assets/img/' + cart_item_data.image)" alt="">
      </div>
      <div class="cart_info">
        <p>{{ cart_item_data.name }}</p>
        <div class="cart_quantity">{{ cart_item_data.quantity }}</div>
      </div>
      <p>{{ cart_item_data.price }} $</p>
      <button class="button" @click="deleteFromCarrt">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 277.79 277.79">
          <path fill="#292d3e"
                d="M192.17,138.89l74.58-74.58a37.66,37.66,0,0,0,0-53.28h0a37.67,37.67,0,0,0-53.27,0L138.89,85.62,64.31,11A37.68,37.68,0,0,0,11,11h0a37.68,37.68,0,0,0,0,53.28l74.59,74.58L11,213.48a37.67,37.67,0,0,0,0,53.27h0a37.66,37.66,0,0,0,53.28,0l74.58-74.58,74.59,74.58a37.65,37.65,0,0,0,53.27,0h0a37.65,37.65,0,0,0,0-53.27Z"/>
        </svg>
      </button>
    </div>
  </transition>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "cartItem",
  props: {
    cart_item_data: Object,
    index: Number
  },
  mounted() {
    this.cart_item_data.quantity = 1
  },
  methods: {
    ...mapActions(['DELETE_FROM_CART']),
    deleteFromCarrt(index) {
      this.DELETE_FROM_CART(this.index)
    }
  },
  computed: {
    ...mapGetters(['CART', 'TOGGLE'])
  }
}
</script>

<style scoped lang="scss">
.image-cart-item {
  width: 90px;
  height: 90px;
  overflow: hidden;
  border-radius: 50%;
  @media(max-width: 430px) {
    width: 72px;
    height: 72px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(232, 49, 72, 0.24);
  backdrop-filter: blur(10px);
  width: 340px;
  height: 120px;
  margin: 5px;
  padding: 0 10px;
  border-radius: 15px;
  @media(max-width: 430px) {
    width: 275px;
    height: 92px;
  }
}

.cart_info {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.button {
  width: 26px;
  height: 26px;
  background: #41476a;
  color: #fff;
  border-radius: 50%;
  outline: none;
  border: none;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 300ms transform ease-in-out;
  transform: translateY(-36px);
  @media(max-width: 430px) {
    width: 21px;
    height: 21px;
    background: #E83148;
    transform: translateY(-27px);
  }

  &:hover {
    transform: translateY(-36px) rotate(180deg);
    background: #E83148;
    @media(max-width: 430px) {
      transform: translateY(-27px) rotate(180deg);

    }
  }

  svg {
    width: 10px;
  }
}

p {
  font-size: 23px;
  @media(max-width: 430px) {
    font-size: 18px;
    text-align: center;
  }
}


</style>