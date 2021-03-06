import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Chatroom from '../components/Chatroom'
import Logout from '../components/Logout'
import Register from '../components/Register.vue'

import Shopping from '../components/Shopping.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
import Home from '../views/Home.vue'
import ProductDetail from "../components/ProductDetail.vue"
import * as firebase from "firebase/app";
import "firebase/auth";
Vue.use(VueRouter)


import test from '../components/test.vue'
const routes = [
  {
    path: '/test',
    name: 'test',
    component: test
  },

  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/shopping',
    name: 'Shopping',
    component: Shopping
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom
  },
  {
    path: '/productdetail',
    name: "ProductDetail",
    component: ProductDetail
  },
  {
    path: '/shoppingcart',
    name: "ShoppingCart",
    component: ShoppingCart,
    meta: { requiresAuth: true }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;

  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router
