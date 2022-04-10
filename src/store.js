import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        language: {}
    },
    mutations: {

    },
    actions: {
        async loadLanguage({ state }, langKey) {
            state.language = null; // load language here
        }
    },
    getters: {

    }
});