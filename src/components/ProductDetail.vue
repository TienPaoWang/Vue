<template>
  <div class="main">
    <div class="more_info">
      <div class="img">
        <img :src="currentProduct.picture" />
      </div>
      <div class="product">
        <div class="productname">${{ currentProduct.name }}</div>
        <div> <h3> ${{ currentProduct.price }}  </h3></div>
          <div class="shopping_button"> <b-button href="#" pill variant="success" size="lg" class="addcart btn-large btn-block" @click="addcart(item)"> 
              Buy Now
            </b-button></div>
     
        <div class="shopping_button"> <b-button href="#"   pill variant="primary" size="lg" class="addcart btn-large btn-block" @click="addcart(item)"> 
              More Information
            </b-button></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      currentProduct: "GET_CURRENT_DETAIL"
    })
  },
  mounted() {
    const get = this.$store.getters.GET_CURRENT_DETAIL;
    console.log("getter mounted=", get);
    console.log("getter content=", get.content);
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
    width: 800px;
    height: 400px;
  display: flex;
  justify-content: center;
  border-style: solid;
  border-color: chartreuse;
}
img {
    border-style: solid;
  max-width: 400px;
  max-height: 400px;
}
.product{
    width: 400px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-content: center;
}
.productname{
    font-size: 48px;
}
.shopping_button{
    padding:  10px 20px;
}
</style>