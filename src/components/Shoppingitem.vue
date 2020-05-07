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
            <b-button :cartIcon="true" href="#" variant="outline-success"  class="addcart"  @click="addcart(item)"> 
              Add Cart
            </b-button>
          </span>
        </div>
          <b-card-text class="ellipsis">
           {{item.content}}
          </b-card-text>

        
           
              <button type="button" class="btn_moreinfo" @click.prevent="addcurrentproductdetail(item)">
                
               
                More information
     
                </button>
                  

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
    async addcurrentproductdetail(item){
      await this.$store.dispatch("addcurrentdetail",item)
      await this.$router.push("/productdetail");

 
      console.log("addcurrentproductdetail item=",item);
    }

  }
};
</script>

<style scoped>
.btn_moreinfo{
  padding: 10px 15px;
  background-color: rgb(78, 95, 240);
  border-radius: 10px;
  box-shadow: rgb(0, 0, 15px);
    color: white;
}
.btn_moreinfo:hover{
  cursor: pointer;

  font-weight: 200;
   box-shadow: 3px 3px rgb(10, 10, 0.4);
}
</style>
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