<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#" to="/">Home</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-navbar-brand href="#" to="/shopping">Product</b-navbar-brand>
        </b-navbar-nav>
          <b-navbar-nav>
        <b-navbar-brand href="#" to="/chatroom">Chatroom</b-navbar-brand>
           </b-navbar-nav>
              <b-navbar-nav>
        <b-navbar-brand href="#" to="/logout">Logout</b-navbar-brand>
           </b-navbar-nav>
        <!-- Right aligned nav items -->
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

          <!-- <b-nav-item-dropdown right>
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Login</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
           -->
          <b-navbar-nav right>
            <b-navbar-brand href="#" to="/login">Login</b-navbar-brand>
            <b-navbar-brand href="#" to="/register">Sign out</b-navbar-brand>
            <!-- <b-navbar-brand v-if="userstatus">Username</b-navbar-brand>
            <b-navbar-brand v-else>Nousername</b-navbar-brand>
            <b-nav-form @submit.prevent="logout">
              <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Logout</b-button
              >
            </b-nav-form> -->
                <span>
            <b-button href="#" variant="primary"  to="/shoppingcart"> 
              
              Shopping Cart
              <span> {{GET_TOTAL_NUMBER_PRODUCTS}}</span>
            </b-button>
          </span>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import Login from "./Login";
import Register from "./Register.vue";
import Logout from "./Logout.vue";
import Shopping from "./Shopping.vue";
import Chatroom from "./Chatroom.vue";
import Home from "../views/Home.vue";
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      searchtext: "",
      userstatus: "",
    
    };
  },
  mounted() {
    this.CheckUserStatus();
  },
  computed:{
    ...mapGetters(['GET_TOTAL_NUMBER_PRODUCTS']),
  },
  methods: {
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
    logout() {
      console.log("Logout");
      firebase.auth().signOut();
      this.userstatus = false;
    }
  }
};
</script>

