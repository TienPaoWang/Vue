<template>
 
    <div >
      <div class="main-card">
      <b-row align-content="center">
        <b-col offset-md="2">
          <!-- <b-card-img :src=url height="20rem" width="20rem"> 
          </b-card-img> -->
        <b-card
          :title="item.name"
          :img-src="item.picture"
          img-alt="Image"
          img-top
          img-height="300px"
          img-width="300px"
          tag="article"
          style="max-width: 20rem; "
          class="mb-2"
        >
        <div class="price_content">
          <h3>${{item.price}} </h3>
          <span>
            <b-button :cartIcon="true" href="#" variant="outline-success"  class="addcart" @click="addcart(item)"> 
              Add Cart
            </b-button>
          </span>
        </div>
          <b-card-text class="ellipsis">
           {{item.content}}
          </b-card-text>

        
            <router-link to="/productdetail"   >
                          <h2 @click="addcurrentproductdetail(item)">  More information </h2>
            </router-link>

     
        </b-card>
        </b-col>
      </b-row>
      </div>
    </div>

</template>

<script>

import {mapGetters,mapMutations, mapActions} from 'vuex'

export default {
      props:['item'],
  data(){
    return{
    }
  },
  computed: {
    ...mapActions(['addshoppingcart',"addcurrentdetail"]),
  },
  aftermounted() {

  },
  methods: {
    addcart(item){
      this.$store.dispatch("addshoppingcart",item);
      console.log("addshoppingcart");
      console.log(item)
    },
    addcurrentproductdetail(item){
      this.$store.dispatch("addcurrentdetail",item)
      console.log("addcurrentproductdetail item=",item);
    }

  }
};
</script>

<style>

.flex-container{
  display:flex;
  justify-content: space-around;
}
.ellipsis {
overflow:hidden;
white-space: nowrap;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 5;
-webkit-box-orient: vertical;
white-space: normal;
}
#main-card{
  padding: 100px;;
}
align-content{
  max-width: 1200px;
}
.addcart{
  margin: 0 10px;
}
.price_content{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>