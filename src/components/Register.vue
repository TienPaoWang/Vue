<template>
  <div>
    Login
    <form action="">
      <div class="email">
        <input type="email" v-model="email" placeholder="Register" />
      </div>
      <div class="password">
        <input
          type="password"
          v-model="password"
          placeholder="Please input password"
        />
      </div>
      <button type="submit" @click="register">Register</button>
    </form>
    <div class="error" v-if="error">{{ error.message }}</div>

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
  methods: {
    // register() {
    //   firebase
    //     .auth()
    //     .createUserWithEmailAndPassword(this.email, this.password)
    //     .then(data => {
    //       console.log("data=", data);
    //       this.$router.replace({ name: "Shopping" });
    //     })
    //     .catch(error => {
    //       this.error = error;
    //     });
    // },
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          console.log("here");
          this.$router.replace({ name: "Shopping" });
        })
        .catch(error => (this.error = error));
    }
  }
};
</script>

<style>
</style>