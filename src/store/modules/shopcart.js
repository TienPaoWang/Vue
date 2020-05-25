// import Vue from "vue"
// import Vuex from "vuex"

// Vue.use(Vuex)

const state = {
    totoalitem: [],
    displayitem: [],
    totalpage: 1,
    perpage: 4,
    currentpage: 1,
    shoppingcart: [],
    productcurrentdetail: {},
    totalnumberproducts: 0,
    showModal: false,
    showShopModal: false
}
const getters = {
    GET_TOTAL_ITEM(state) {
        return state.totoalitem
    },
    GET_DISPLAY(state) {
        return state.displayitem
    },
    GET_TOTAL_PAGE(state) {
        return state.totalpage
    },
    GET_PRODUCTS(state) {

        return state.shoppingcart
    },
    GET_TOTAL_NUMBER_PRODUCTS(state) {

        return state.totalnumberproducts
    },
    GET_CURRENT_DETAIL(state) {

        return state.productcurrentdetail
    },
    GET_SHOW_MODEL(state) {

        return state.showModal;
    },
    GET_SHOW_SHOP_MODEL(state) {

        return state.showShopModal;
    }

}
const mutations = {
    SET_TOTAL(state, valjson) {
        state.totoalitem = valjson;
    },
    SET_DISPLAY(state, valjson) {
        state.displayitem = valjson;
    },
    SET_PAGE(state, page) {
        state.totalpage = page;
    },
    SET_SHOPPING_CART(state, item) {
        state.shoppingcart.push(item);
    },
    SET_TOTAL_NUMBER_PRODUCTS(state) {
        state.totalnumberproducts += 1
    },
    SET_PRODUCT_DETAIL(state, item) {

        state.productcurrentdetail = item;

    },
    REMOVE_ITEM_CART(state, index) {
        let currentproducts = state.shoppingcart;
        currentproducts.splice(index, 1);
        state.shoppingcart = currentproducts

    },
    REMOVE_PRODUCT_NUMBER(state) {
        state.totalnumberproducts -= 1
    },
    SHOW_MODAL(state) {
        state.showModal = !state.showModal;
    },
    SHOW_SHOP_MODAL(state) {
        state.showShopModal = !state.showShopModal;

    }

}
const actions = {
    async fetchdata({ commit, dispatch }) {
        return new Promise((resolve) => {

            setTimeout(async () => {
                const res = await fetch("job.json");
                const val = await res.json();
                console.log("val=",val);
                resolve(val);
            }, 1000);
        })

    },
    async fetchtotaldata({ commit, dispatch }) {

        const value = await dispatch("fetchdata");
        dispatch("display", { val: value, currentpage: 1, perpage: state.perpage });
        commit("SET_TOTAL", value);
    },
    async display({ commit, dispatch }, { val, currentpage, perpage }) {

        const start = (currentpage - 1) * perpage;
        const json = val.slice(start, perpage);
        commit("SET_DISPLAY", json);
        dispatch("getpage", val);

    },
    async pagination({ commit, dispatch, state }, currentpage) {
        const start = (currentpage - 1) * state.perpage;

        const json = state.totoalitem.slice(start, start + state.perpage);

        commit("SET_DISPLAY", json);

    },
    async reaschitem({ dispatch, state, commit }, text) {
        const json = await dispatch("fetchdata");

        const searcharray = json.filter(val => {
            return val.name.toLowerCase().includes(text.toLowerCase());
        });

        dispatch("display", { val: searcharray, currentpage: 1, perpage: state.perpage });
        commit("SET_TOTAL", searcharray);
    },
     getpage({ commit }, val) {
        const page =  Math.ceil(val.length / state.perpage);

        commit("SET_PAGE", page);
    },
    // Add item into shopping cart function 
    addshoppingcart({ commit }, item) {
        commit('SET_SHOPPING_CART', item);
        commit('SET_TOTAL_NUMBER_PRODUCTS');

    },
    addcurrentdetail({ commit }, item) {

        commit("SET_PRODUCT_DETAIL", item);
    },
    removeitemcart({ commit }, index) {
        commit("REMOVE_ITEM_CART", index);
        commit("REMOVE_PRODUCT_NUMBER");
    },
    showOrHiddenModal({ commit }) {
        commit("SHOW_MODAL");
    },
    showshoppingmodal({ commit }) {
        commit("SHOW_SHOP_MODAL");
    }

}

export default {
    state,
    getters,
    mutations,
    actions
}