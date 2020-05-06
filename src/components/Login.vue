<template>
  <div>
    Login
    <form action="">
      <div class="email">
        <input type="email" v-model="email" placeholder="Login" />
      </div>
      <div class="password">
        <input
          type="password"
          v-model="password"
          placeholder="Please input password"
        />
      </div>
      <button type="button" @click="login">Login</button>
    </form>
    <div class="error" v-if="error">{{ error.message }}</div>
    <span
      >Do you need a account? Plase clcik
      <router-link to="/register">here</router-link> to register your
      account</span
    >
  </div>
</template>

<script>
// import firebase from 'firebase'
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  mounted() {
    console.log("mounted checking");
    // this.checkingstatus();
  },
  methods: {
    // async login() {
    //   console.log(this.email);
    //   console.log(this.password);
    //   await firebase
    //     .auth()
    //     .signInWithEmailAndPassword(this.email, this.password)
    //     .then(data => {
    //       console.log(data);
    //      this.$router.replace({ name: "Home" });
    //     })
    //     .catch(error => {
    //       this.error = error;
    //     });
    // },
    //  login() {
    //   console.log("this.email", this.email);
    //   console.log("this.password", this.password);
    //    firebase
    //     .auth()
    //     .signInWithEmailAndPassword(this.email, this.password)
    //     .then(data => {
    //       console.log(data);
    //       const isAuthenticated = firebase.auth().currentUser;
    //       alert("isAuthenticated", isAuthenticated);
    //       this.$router.replace({ path: "shopping" });
    //     })
    //     .catch(error => {
    //       this.error = error;
    //     });
    //   console.log("error");

    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(token => {
          console.log("tokenuser=", token.user);
          console.log("this.email=", this.email);
          console.log("this.password=", this.password);
          this.$router.push("/shopping");
        })
        .catch(error => {
          console.log("error=", error);
          this.error = error;
        });
    }
  },

  computed: {}
};
</script>

<style scoped>
.error {
  color: red;
  font-size: 18px;
}
input {
  width: 400px;
  padding: 20px;
  margin: 20px;
  font-size: 21px;
}
button {
  width: 400px;
  height: 75px;
  font-size: 100%;
}
</style>