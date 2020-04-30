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
      <button type="submit" @click="login">Login</button>
       <button type="submit" @click="test">test</button>
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

        async login() {
        await firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          console.log("data=",data);
          this.$router.push('/shopping');
        })
        .catch(error => {
           console.log("error=",error);
          this.error = error;
        });
    },
    test(){
       this.$router.push('/shopping');
    }




    },
    //  checkingstatus(){
    // const isAuthenticated =  firebase.auth().currentUser;
    // alert("isAuthenticated", isAuthenticated);
    // }

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