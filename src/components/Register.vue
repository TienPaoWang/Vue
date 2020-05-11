<template>
  <div class="main">
    <head>
            <meta
        name="viewport"
        content="width=device-width, initial-scale=1 ,shrink-to-fit=no"
      />
    </head>
    <div class="container my-5">
      <img src="../assets/Apple_logo_black.svg" class="my-3" alt="" />
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
        <button type="button" class="btn btn-primary" @click="register">Register</button>
      </form>
      <div class="error" v-if="error">{{ error.message }}</div>
    </div>
  </div>
</template>



<script>
import * as firebase from "firebase/app";

import "firebase/auth";

// import firebase from 'firebase'
export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
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
  border-radius: 15px;
}
button {
  width: 400px;
  height: 75px;
  font-size: 100%;
    border-radius: 15px;
}
.container img {
  width: 100%;
  height: 50px;
}
@media all and (min-width: 768px) {
    /* .main{
      background-color: #f00;
    } */
}
</style>