<template>
  <!-- <div>
    <transition name="fade">
      <div class="modal" v-show="showModal == true">
        <h3>Details</h3>
        <div class="modal-body"><slot name="body">123456</slot></div>
        <div class="modal-footer"><slot name="footer"></slot></div>
        <button  @click="closeModal()">
          Close
        </button>
      </div>
    </transition>
     <transition name="fade">
      <maskBg v-show="showModal == true" @click.native="closeModal()" />
    </transition> 
  </div> -->

  <div>
    <transition name="modal">
      <div class="modal-mask" v-show="showModal == true">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <slot name="header">
                <h1> Detail
                    </h1> 
              </slot>
            </div>

            <div class="modal-body">
              <slot name="body">
                {{ content }}
              </slot>
            </div>

            <div class="modal-footer" v-show="showModal == true">
              <slot name="footer">
                <button class="modal-default-button" @click="closeModal()">
                  Close
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
// import maskBg from "./Mask";
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["content"],
  components: {
    // maskBg
  },
  computed: {
    ...mapGetters({
      showModal: "GET_SHOW_MODEL"
    })
  },
  methods: {
    ...mapActions(["showOrHiddenModal"]),
    closeModal() {
      this.showOrHiddenModal();
    }
  }
};
</script>

<style scoped>
/* .modal {
  width: 100%;
  max-width: 500px;
  height: 300px;
  box-sizing: border-box;
  padding: 1em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 0 0 10px rgba(144, 144, 144, 0.2);
  border: 0;
  border-radius: 5px;
  line-height: 1.5em;
  opacity: 1;
  transition: all 0.5s;
  z-index: 1;
}

.modal button {
  position: absolute;
  bottom: 10px;
  right: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.7s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
} */

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

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #ffff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
  background-color: rgb(10, 10, 10);
  color: white;
  padding: 10px 30px;
  border-radius: 8px;
  box-shadow: 3px 3px rgb(10, 10, 0.4);
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
