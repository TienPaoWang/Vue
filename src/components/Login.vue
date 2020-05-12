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
          <input type="email" v-model="email" placeholder="Login" />
        </div>
        <div class="password">
          <input
            type="password"
            v-model="password"
            placeholder="Please input password"
          />
        </div>
        <button type="button" class="btn btn-primary" @click="login">
          Login
        </button>
      </form>
      <div class="error" v-if="error">{{ error.message }}</div>
      <span
        >Do you need a account? Plase clcik
        <router-link to="/register">here</router-link> to register your
        account</span
      >
    </div>
    <hr size="10px" align="center" width="100%"  >
    <div class="more_infor">
      <div class="container ">
        <div class="py-3 text-left">
          需要進一步協助？立即與我們交流或致電 0800-020-021。
        </div>
        <div class="py-3">
          <div class="text-left">價格皆含稅與運送費用。</div>
          <div class="text-left"> Apple 使用行業標準加密來保護保密您提交的信息。</div>
          
        </div>
        <div class="py-3 text-left">
          更多選購方式：請前往 Apple 直營店, 致電 0800-020-021 或尋找經銷商。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import firebase from 'firebase'
import * as firebase from "firebase/app";
import "firebase/auth";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  mounted() {},
  methods: {
    ...mapActions(["setspinner"]),
    async login() {
      this.setspinner(true);
      await firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(token => {
          this.$router.push("/shopping");
        })
        .catch(error => {
          console.log("error=", error);
          this.error = error;
        });
      this.setspinner(false);
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
.btn-primary{
  font-size: 2rem;
}
text-align:left;
.main .container{
    border-width:3px;  

}
</style>