<template>
  <div class="catalog-item-card">
    <div class="image">
      <img :src="require('@/assets/img/' + product_data.image)" alt="">
      <div class="text">
        <h3 class="product-name"> T-shirt - {{product_data.name}}</h3>
        <p>Price: {{product_data.price}} $</p>
        <button
            @click="addToCard"
        >Добавить
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "catalog-item",
  props: {
    product_data: Object
  },
  methods: {
    addToCard() {
      this.$emit('addToCard', this.product_data)
    }
  }
}
</script>

<!--|====================================>styles-->
<style scoped lang="scss">
.catalog-item-card {
  margin: 30px;
}

.text {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  width: 100%;
  border-radius: 0 0 15px 15px;
  background: rgba(41, 45, 62, 0.24);
  backdrop-filter: blur(7px);
  bottom: -133px;
  left: 0;
  transition: 300ms bottom ease-in-out;
  @media(max-width: 430px){
    bottom: 0;
  }
  h3 {
    margin-top: 5px;
  }

  p {
    margin: 10px 0;
    font-size: 18px;
  }

  button {
    padding: 5px 15px;
    background: #E83148;
    color: white;
    border-radius: 15px;
    font-weight: 700;
    font-size: 18px;
    outline: none;
    margin-bottom: 15px;
    border: none;
    cursor: pointer;
    transition-property: color, background-color;
    transition: 250ms ease-in-out;

    &:hover {
      background: pink;
      color: black;
    }
  }
}

.image {
  width: 250px;
  height: 350px;
  overflow: hidden;
  border-radius: 15px;
  position: relative;
  cursor: pointer;

  &:hover .text {
    bottom: 0;

  }

  &:hover img {
    transform: scale(1.1);
    @media(max-width: 430px){
        transform: scale(1);
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 300ms;
    object-position: 0px -2px;
  }
}

</style>