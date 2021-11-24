<template>
  <div class="cart-wrapp">
    <transition name="cart_anim">
      <div class="wrap" v-if="TOGGLE">
        <div>
          <h3>Корзина</h3>
          <transition name="contain">
            <p v-if="CART<=0">пуста🥺</p>
          </transition>
          <div class="scrolling-wrapper">
            <div class="div">
              <transition-group name="contain">
                <cartItem
                    v-for="(item,i) in cart_data"
                    :key="item.article"
                    :cart_item_data="item"
                    :index="i"
                />
              </transition-group>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import cartItem from "@/components/cartItem";
import {mapGetters} from 'vuex'

export default {
  name: "cart",
  components: {
    cartItem
  },
  props: {
    cart_data: Array
  },
  computed: {
    ...mapGetters(['TOGGLE', 'CART'])
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  background: rgba(41, 45, 62, 0.24);
  backdrop-filter: blur(15px);
  width: 396px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 15px;
  @media(max-width: 430px) {
    width: 105%;
  }
}

.cart-wrapp {
  position: fixed;
  top: 90px;
  right: 30px;
  @media(max-width: 430px) {
    top: 82px;
    right: 19px;
  }
}

p {
  text-align: center;
  font-size: 50px;
  font-weight: 700;

  @media(max-width: 430px) {
    font-size: 66px;
    text-align: center;
  }
}

h3 {
  font-size: 89px;
  @media(max-width: 430px) {
    font-size: 66px;
    text-align: center;
  }
}

.scrolling-wrapper {
  overflow-x: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  -webkit-overflow-scrolling: touch;
  max-height: 250px;
  overflow-y: auto;

  .card {
    width: 300px;
    height: 120px;
    background: darkseagreen;
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    flex-direction: column;
  }
}

.scrolling-wrapper::-webkit-scrollbar {
  overflow-x: hidden;
  overflow-y: scroll;
  height: 9px;
  @media(max-width: 430px) {
    height: 4px;
  }
}

.scrolling-wrapper::-webkit-scrollbar-thumb {
  backdrop-filter: blur(10px);
  background-color: rgba(142, 141, 141, 0.33);
  border-radius: 15px;
}

.cart_anim-enter-active {
  animation: bounce-in .5s;
}

.cart_anim-leave-active {
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.contain-enter-active {
  animation: bounce-in .5s;
}

.contain-leave-active {
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

</style>