<template>
  <div class="main">
    <div class="modal-mask" v-show="showShopModal == true">
      <div class="container">
        <div class="header">
          <div>選擇全站折價券 <span class="pull-right">幫助中心</span></div>
          <div class="input_coupon py-2 flex-container">
            <div class="my-auto">輸入折扣碼</div>
            <div>
              <div class="input-group ">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Coupon Code"
                  aria-label="Coupon Code"
                  aria-describedby="basic-addon2"
                />
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button">
                    Use
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="body">
          <div class="row">
            <div class="container-fluid d-flex content">
              <div class="col-sm-4 col-md-4">運費</div>
              <div class="col-sm-8 col-md-8">運費抵用眷</div>
            </div>
            
          </div>
               <div class="row">
            <div class="container-fluid d-flex content">
              <div class="col-sm-4 col-md-4">運費</div>
              <div class="col-sm-8 col-md-8">運費抵用眷</div>
            </div>
            
          </div>
               <div class="row">
            <div class="container-fluid d-flex content">
              <div class="col-sm-4 col-md-4">運費</div>
              <div class="col-sm-8 col-md-8">運費抵用眷</div>
            </div>
            
          </div>    
        </div>
        <div class="footer">
          <slot v-show="showShopModal == true">
            <button class="button" @click="closeshopmodal()">close</button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({ showShopModal: "GET_SHOW_SHOP_MODEL" })
  },
  methods: {
    ...mapActions(["showshoppingmodal"]),
    closeshopmodal() {
      this.showshoppingmodal();
    }
  }
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.container {
  width: 100%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #ffff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
.input_coupon {
  background-color: rgb(248, 248, 248);
}
.body {
  overflow: overflow-y;
  width: 100%;
    height: 300px;
}
.content{
    padding: 20px 0;
}
</style>