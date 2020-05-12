<template>
  <div class="main pt-5">
    <div class="more_info">
      <div class="img">
        <img :src="currentProduct.picture" />
      </div>
      <div class="product ">
        <div class="productname pt-5">${{ currentProduct.name }}</div>
        <div>
          <h3>${{ currentProduct.price }}</h3>
        </div>
        <div class="shopping_button">
          <b-button
            href="#"
            pill
            variant="success"
            size="lg"
            class="addcart btn-large px-4 py-2"
            @click="addcart(currentProduct)"
          >
            Buy Now
          </b-button>
        </div>

        <div class="shopping_button">
          <b-button
            href="#"
            pill
            variant="primary"
            size="lg"
            class="addcart btn-large px-4 py-2"
            @click="openModal()"
          >
            More Information
          </b-button>
        </div>
      </div>
    </div>
    <modal :content="currentProduct.content"></modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import modal from "./Modal";
export default {
  components: {
    modal
  },
  computed: {
    ...mapGetters({
      currentProduct: "GET_CURRENT_DETAIL"
    }),
    ...mapActions(["addshoppingcart", "showOrHiddenModal"])
  },
  mounted() {
    const get = this.$store.getters.GET_CURRENT_DETAIL;
  },
  methods: {
    addcart(currentProduct) {
      this.$store.dispatch("addshoppingcart", currentProduct);
    },
    openModal(currentProduct) {
      this.$store.dispatch("showOrHiddenModal");
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.more_info {
  margin: auto;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  /* border-style: solid;
  border-color: chartreuse; */
}
img {
  max-width: 400px;
  max-height: 380px;
}
.product {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-content: center;
}
.productname {
  font-size: 48px;
}
.shopping_button {
  padding: 10px 20px;
}
@media all and (max-width: 768px) {
  .more_info {
    margin: auto;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* border-style: solid;
  border-color: chartreuse; */
  }
}
</style>