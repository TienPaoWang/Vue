
<template>
  <div id="app">
    <div>
      <b-navbar-brand v-if="userstatus">Username</b-navbar-brand>
      <b-navbar-brand v-else>Nousername</b-navbar-brand>
    </div>
    <div class="wraper">
      <section>
        <header>
          <h1>
            Header
          </h1>
          <p>
            small words
          </p>
        </header>
        <main id="main">
          <article>
            Main content
          </article>
          <nav>
            Side bar
          </nav>
          <aside>
            Aside bar
          </aside>
        </main>
        <footer>Footer</footer>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Header from "@/components/Header.vue";
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "Home",
  components: {
  },
  data() {
    return {
      userstatus: false
    };
  },
  mounted() {
    console.log("mounted22222222");
    this.CheckUserStatus();
  },
  methods: {
    CheckUserStatus() {
      console.log("CheckUserStatus222222222222222222222");
      const user = firebase.auth().onAuthStateChanged(user => {
        console.log("user", user);
        if (user) {
          this.userstatus = true;
        } else {
          this.userstatus = false;
        }
      });
      console.log("userstatus", this.userstatus);
      const isAuthenticated = firebase.auth().currentUser;
      console.log("isAuthenticated222222222=", isAuthenticated);
    }
  }
};
</script>

<style  scoped>
.wraper{
  padding:30px;
}
section {
  background-color: azure;
}
header {
  background-color: #66a8f3;
}

#main {
  min-height: 800px;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row;
}
#main > article {
  flex-basis: 40%;
  background-color: #df7437;
  flex-grow: 2;
}
#main > aside {
  flex-basis: 30%;
  background-color: #3061a1;
  flex-grow: 1;
}
#main > nav {
  flex-basis: 30%;
  background-color: #c25050;
  order: -1;
  flex-grow: 1;
}
footer {
  background-color: #eeeeee;
  height: 100px;
}
@media all and (max-width: 640px) {
  #main{
    flex-direction: column;
  }
  #main > article {
    order : -1;
    flex-basis: 30;
  }
  #main > nav, aside{
    order: 0;
  }
}
</style>
