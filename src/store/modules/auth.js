import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const state = { 
    spinner:false,

}
const getters = { 
    GET_SPINNER(state){
     
        return state.spinner;
    }

}
const mutations = {
    SET_SPINNER(state,status){
     state.spinner =  status;
    }
}
const actions = {
    setspinner({commit},status){
        commit("SET_SPINNER",status);
    }

}

export default {
    state,
    getters,
    mutations,
    actions
}