// import Vue from "vue"
// import Vuex from "vuex"

// Vue.use(Vuex)

const state = {
    totoalitem: [],
    displayitem : [],
    totalpage: 1,
    perpage : 4,
    currentpage: 1,
    shoppingcart:[],
    productcurrentdetail:{},
    totalnumberproducts:0,
    showModal:false
}
const getters = {
    GET_TOTAL_ITEM(state){
        return state.totoalitem
    },
    GET_DISPLAY(state){
        return state.displayitem
    },
    GET_TOTAL_PAGE(state){
        return state.totalpage
    },
    GET_PRODUCTS(state){
        console.log("GET_PRODUCTS=",state.shoppingcart);
        return state.shoppingcart
    },
    GET_TOTAL_NUMBER_PRODUCTS(state){
        console.log("totalnumberproducts=",state.totalnumberproducts);
        return state.totalnumberproducts
    },
    GET_CURRENT_DETAIL(state){
        console.log("GET_CURRENT_DETAIL=",state.productcurrentdetail);
        return state.productcurrentdetail
    },
    GET_SHOW_MODEL(state){
        console.log("state.showModal=",state.showModal);
        return state.showModal;
    }

}
const mutations = {
    SET_TOTAL(state,valjson){
        state.totoalitem = valjson;
    },
    SET_DISPLAY(state,valjson){
        state.displayitem = valjson;
    },
    SET_PAGE(state,page){
        state.totalpage = page;
    },
    SET_SHOPPING_CART(state,item){
        state.shoppingcart.push(item);
    },
    SET_TOTAL_NUMBER_PRODUCTS(state){
        state.totalnumberproducts +=1
    },
    SET_PRODUCT_DETAIL(state,item){
       
        state.productcurrentdetail = item ;
        console.log("SET_PRODUCT_DETAIL=",item);
    },
    REMOVE_ITEM_CART(state,index){
        let currentproducts = state.shoppingcart;
        currentproducts.splice(index,1);
        state.shoppingcart = currentproducts
        console.log("state.shoppingcart =",state.shoppingcart);
        console.log("index index =",index);
    },
    REMOVE_PRODUCT_NUMBER(){
        state.totalnumberproducts -=1
    },
    SHOW_MODAL(){
        state.showModal = !state.showModal;
    }

}
const actions = {
    async fetchdata({commit,dispatch}){
        return new Promise((resolve)=>{

            setTimeout(async () => {
                const res = await fetch("job.json");
                const val = await res.json();
                console.log("fetchdata");
                resolve(val);
            }, 1000);
        })
      
    },
    async fetchtotaldata({commit,dispatch}){
      
        const value = await dispatch("fetchdata");
        dispatch("display",{val:value,currentpage: 1,perpage:state.perpage});
        commit("SET_TOTAL",value);
    },
    async display({commit,dispatch},{val,currentpage,perpage}){
        console.log("display");
        const start = (currentpage - 1)* perpage;
        const json = val.slice(start,perpage);
        commit("SET_DISPLAY",json);
        dispatch("getpage",val);
        
    },
    async pagination({commit,dispatch,state},currentpage){
        const start = (currentpage - 1)* state.perpage;
        console.log(state.totoalitem);
        console.log("start=",start,"state.perpage",state.perpage)
        const json = state.totoalitem.slice(start,start+state.perpage);
        console.log("json=",json);
        commit("SET_DISPLAY",json);
      
    },
    async reaschitem({dispatch,state,commit},text){
        const json = await dispatch("fetchdata");
        console.log("json=",json);
        const searcharray = json.filter(val => {
            return val.name.toLowerCase().includes(text.toLowerCase());
        });
        console.log("searcharray=",searcharray);
        dispatch("display",{val:searcharray,currentpage:1,perpage:state.perpage});
        commit("SET_TOTAL",searcharray);
        commit ("SET_PAGE", 1);
    },
    async getpage({commit},val){
        const page = await Math.ceil(val.length/state.perpage);
        console.log("page=",page)
        console.log("val=",val)
        commit("SET_PAGE",page);
    },
    // Add item into shopping cart function 
    addshoppingcart({commit},item){
        commit('SET_SHOPPING_CART',item);
        commit('SET_TOTAL_NUMBER_PRODUCTS');
        
    },
     addcurrentdetail({commit},item){
        console.log("addcurrentdetail");
         commit("SET_PRODUCT_DETAIL",item);
    },
    removeitemcart({commit},index){
        commit("REMOVE_ITEM_CART",index);
        commit("REMOVE_PRODUCT_NUMBER");
    },
    showOrHiddenModal({commit}){
        commit("SHOW_MODAL");
    }

}

export default {
    state,
    getters,
    mutations,
    actions
}