<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" class="navbar">
      <b-navbar-brand href="#" to="/" class="nav_brand">Home</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-navbar-brand href="#" to="/shopping" class="nav_brand"
            >Product</b-navbar-brand
          >
        </b-navbar-nav>
        <b-navbar-nav>
          <b-navbar-brand href="#" to="/chatroom" class="nav_brand"
            >Chatroom</b-navbar-brand
          >
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form @submit.prevent="search">
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
              v-model="searchtext"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>
          <div class="authentication">
            <b-navbar-nav right>
              <b-navbar-brand
                href="#"
                to="/login"
                class="nav_brand"
                v-if="userstatus == false"
                >Login</b-navbar-brand
              >
              <b-navbar-brand
                href="#"
                class="nav_brand"
                v-else
                @click.prevent="logout"
              >
                Logout
              </b-navbar-brand>

              <b-navbar-brand href="#" to="/register" class="nav_brand"
                >Register</b-navbar-brand
              >
              <b-navbar-brand v-if="userstatus">Username</b-navbar-brand>
              <b-navbar-brand v-else>Nousername</b-navbar-brand>

              <span>
                <b-button href="#" variant="primary" to="/shoppingcart">
                  <i class="fa fa-shopping-cart"></i>
                  Cart
                  <span class="btn-circle">
                    {{ GET_TOTAL_NUMBER_PRODUCTS }}</span
                  >
                </b-button>
              </span>
            </b-navbar-nav>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- -->
   


  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Login from "./Login";
import Register from "./Register.vue";
import Logout from "./Logout.vue";
import Shopping from "./Shopping.vue";
import Chatroom from "./Chatroom.vue";
import Home from "../views/Home.vue";
import * as firebase from "firebase/app";
import "firebase/auth";
// import firebase from "firebase";
export default {
  data() {
    return {
      searchtext: "",
      userstatus: ""
    };
  },
  mounted() {
    this.CheckUserStatus();
  },
  computed: {
    ...mapGetters(["GET_TOTAL_NUMBER_PRODUCTS"])
  },
  methods: {
    ...mapActions(["setspinner"]),
    search() {
      console.log("this.searchtext=", this.searchtext);
      this.$store.dispatch("reaschitem", this.searchtext);
    },
    CheckUserStatus() {
      console.log("CheckUserStatus");
      const user = firebase.auth().onAuthStateChanged(user => {
        console.log("user", user);
        if (user) {
          this.userstatus = true;
        } else {
          this.userstatus = false;
        }
      });
      const isAuthenticated = firebase.auth().currentUser;
      console.log("isAuthenticated", isAuthenticated);
    },
    async logout() {
      this.$store.dispatch("setspinner", true);
      await firebase.auth().signOut();
      this.userstatus = false;
      this.$store.dispatch("setspinner", false);
    }
  }
};
</script>
<style >
.btn-circle {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #fff;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav_brand {
  color: white !important;
}
#nav a.router-link-exact-active {
  color: #c6ec1e !important;
}
.authentication {
  margin-left: 10px;
}
</style>
