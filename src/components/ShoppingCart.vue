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
          <i class="fa fa-times-circle fa-3x" @click="remove(index)"></i> 
          <!-- <button @click="remove(index)"> <i class="fa fa-times-circle fa-3x" @click="remove(index)"></i></button> -->
        </li>
      </transition-group>
    </ul>
        <!-- Coupon and Price block -->
    <div class="cart-page-footer">
      <!-- Coupon option -->
      <div class="d-flex justify-content-end p-3">
        <a href="#" @click.prevent="showmode()">
          選擇折價券或輸入折扣碼
        </a>
      </div>
      <hr class="style-one">  
      <!-- Total Price -->
      <div>
        <div class="d-flex justify-content-end py-3">
          <div class="total_price  mr-2" v-if="GET_TOTAL_NUMBER_PRODUCTS > 0">
            <h3>Total price: ${{ totalprice() }}</h3>
          </div>
          <div class="mr-2" v-else> <h3>Total price: $0</h3>  </div>
          <div>
           
            <button tyue="button" class="btn btn-primary"> Buy it</button>
          </div>
        </div>
      </div>
    </div>

    <shopmodal></shopmodal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import shopmodal from "./ShoppingModal.vue";
export default {
  components: {
    shopmodal
  },
  data() {
    return {
      totalitemprice: 0,
      totalproducts: []
    };
  },
  mounted() {
    this.totalprice();
  },
  computed: {
    ...mapGetters(["GET_PRODUCTS", "GET_TOTAL_NUMBER_PRODUCTS"])
  },

  methods: {
    ...mapActions(["removeitemcart", "showshoppingmodal"]),
    totalprice() {
      console.log("totalprice");
      this.totalproducts = this.$store.getters.GET_PRODUCTS;
      this.totalnumber = this.totalproducts.length;
      this.totalitemprice = this.totalproducts.reduce((accumulator, item) => {
        return accumulator + item.price;
      }, 0);
      return this.totalitemprice;
    },
    remove(index) {
      console.log("removeitem item=", index);
      this.$store.dispatch("removeitemcart", index);
    },
    showmode() {
      console.log("showmode=");
      this.showshoppingmodal();
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
hr.style-one {
    border: 0;
    height: 1px;
    background: #333;
    /* background-image: linear-gradient(to right, #ccc, #333, #ccc); */
}
.cart-page-footer{
  background-color: rgb(245, 245, 245);
}
.product-price {
  place-self: center;
  font-size: 2rem;
}
.product-name {
  box-sizing: border-box;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}

.fade-enter,
.fade-leave-to {
  transform: translateX(-40px);
  opacity: 0;
}
.fa-times-circle:hover {
  cursor: pointer;
}

.fa-times-circle:active {
  color: white;
}
</style>