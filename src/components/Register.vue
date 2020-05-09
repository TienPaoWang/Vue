<template>
  <div>
    Register
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
      <button type="button" @click="register">Register</button>
    </form>
    <div class="error" v-if="error">{{ error.message }}</div>

    
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
}
button {
  width: 400px;
  height: 75px;
  font-size: 100%;
}
</style>