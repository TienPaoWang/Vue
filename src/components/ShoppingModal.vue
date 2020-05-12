<template>
  <div class="main">
    <div class="modal-mask" v-show="showShopModal == true">
      <div class="container">
        <div class="header">
          <div class="d-flex justify-content-between py-2">
            <div class="pull-left font-size-b2">選擇全站折價券</div>
            <div class="pull-right">幫助中心</div>
          </div>
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

                 <div class="container d-flex content">
              <div class="col-sm-4 col-md-4 delivery_fee py-4">運費</div>
              <div
                class="col-sm-6 col-md-6 font-size-s1 d-flex align-items-center"
              >
                <div>
                  <div class=""><span>運費抵用券</span></div>
                  <div><span>有效日期</span></div>
                </div>
              </div>
              <div class="col-sm-2 col-md-2 ">
                  <div class="m-auto">
                        <input type="radio" name="coupon" value="1">
                  </div>
                  <div>
                        <span class="font-size-s2">使用規則</span>
                  </div>

              </div>
            </div>

          <div class="container d-flex content">
              <div class="col-sm-4 col-md-4 delivery_fee py-4">運費</div>
              <div
                class="col-sm-6 col-md-6 font-size-s1 d-flex align-items-center"
              >
                <div>
                  <div class=""><span>運費抵用券</span></div>
                  <div><span>有效日期</span></div>
                </div>
              </div>
              <div class="col-sm-2 col-md-2 ">
                  <div class="m-auto">
                         <input type="radio" name="coupon" value="2">
                  </div>
                  <div>
                        <span class="font-size-s2">使用規則</span>
                  </div>

              </div>
            </div>

            
                <div class="container d-flex content">
              <div class="col-sm-4 col-md-4 delivery_fee py-4">運費</div>
              <div
                class="col-sm-6 col-md-6 font-size-s1 d-flex align-items-center"
              >
                <div>
                  <div class=""><span>運費抵用券</span></div>
                  <div><span>有效日期</span></div>
                </div>
              </div>
              <div class="col-sm-2 col-md-2 ">
                <div class="m-auto">
                           <input type="radio" name="coupon" value="3">
                  </div>
                  <div>
                        <span class="font-size-s2">使用規則</span>
                  </div>

              </div>
            </div>
        
           
            <div class="container d-flex content">
              <div class="col-sm-4 col-md-4 delivery_fee py-4">運費</div>
              <div
                class="col-sm-6 col-md-6 font-size-s1 d-flex align-items-center"
              >
                <div>
                  <div class=""><span>運費抵用券</span></div>
                  <div><span>有效日期</span></div>
                </div>
              </div>
              <div class="col-sm-2 col-md-2 ">
                  <div class="m-auto">
                      <input type="radio" name="coupon" value="4">
                  </div>
                  <div>
                        <span class="font-size-s2">使用規則</span>
                  </div>

              </div>
            </div>
     
        </div>
        <div class="footer">
          <div v-show="showShopModal == true" class="d-flex justify-content-end">
             <button type="button"  class="btn btn-light mr-1" @click="closeshopmodal()">Cancel</button>
            <button type="button" class="btn btn-danger">OK</button>
          </div>
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
  max-width: 600px;
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
  overflow-y: scroll;
    overflow-x: hidden;
  width: 100%;
  height: 300px;
}
.content {
  padding: 10px 0;
}
.delivery_fee {
  background-color: rgb(187, 187, 187);
}
.rule {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
.font-size-b3 {
  font-size: 3rem;
}
.font-size-b2 {
  font-size: 2rem;
}
.font-size-b1 {
  font-size: 1.5rem;
}
.font-size-s3 {
  font-size: 0.25rem;
}
.font-size-s2 {
  font-size: 0.5rem;
}
.font-size-s1 {
  font-size: 0.75rem;
}
</style>