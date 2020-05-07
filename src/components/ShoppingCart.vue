<template>
  <div class="checkout-box">
    <ul class="total_products">
      <transition-group name="fade">
        <li
          v-for="(item, index) in GET_PRODUCTS"
          :key="index"
          class="checkout-product"
        >
          <img :src="item.picture" alt="" class="product-image" />
          <h1 class="product-name">{{ item.name }}</h1>
          <span class="product-price">${{ item.price }}</span>
          <button @click="remove(index)">X</button>
           
        </li>
      </transition-group>
    </ul>
    <div class="total_price" v-if="GET_TOTAL_NUMBER_PRODUCTS > 0">
      <h1>Total price: ${{ totalprice() }} </h1>
    </div>
    <div v-else>No product</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      totalitemprice: 0,
      totalproducts: [],
    };
  },
    mounted(){
        this.totalprice();
  },
  computed: {
    ...mapGetters(["GET_PRODUCTS","GET_TOTAL_NUMBER_PRODUCTS"])
    
  },

  methods: {
      ...mapActions(["removeitemcart"]),
    totalprice() {
         console.log("totalprice");
      this.totalproducts = this.$store.getters.GET_PRODUCTS;
      this.totalnumber = this.totalproducts.length;
      this.totalitemprice = this.totalproducts.reduce((accumulator, item) => {
        return accumulator + item.price;
      }, 0);
      return this.totalitemprice;
    },
    remove(index){
        console.log("removeitem item=",index);
        this.$store.dispatch("removeitemcart",index);
    }
  }
};
</script>

<style scoped>
.checkout-box {
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  box-sizing: border-box;
  padding: 1em;
}
.product-image {
  /* grid-column: 1/2; */
  width: 50%;
  /* max-width: 200px;
    min-width: 200px; */
}
.checkout-product {
  display: grid;
  grid-template-columns: 1fr 3fr 2fr 0.5fr;
  background-color: #efe9e0;
  box-shadow: 0px 0px 10px rgba(73, 74, 78, 0.1);
  border-radius: 5px;
  list-style: none;
  box-sizing: border-box;
  padding: 0.8em;
  margin: 1em 0;
}
.product-price {
  place-self: center;
}
.product-name {
  box-sizing: border-box;
}
 .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }

  .fade-enter, .fade-leave-to {
    transform: translateX(-40px);
    opacity: 0;
  }
</style>