import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
const BASE_URL = 'http://localhost:8080';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        language: 'de'
    },
    mutations: {
        setLanguage(state, lan) {
            state.language = lan;
        }
    },
    actions: {
        async getContent({ state }, lang) {
            console.log('GETCONTENT called');
            const data = await axios.get(`./json/${lang}.json`).then(r => {
                const langContent = r.data
                console.log(langContent.welcome)
            })
            this.commit('setLanguage', lang);
            //get content here
        }
    },
    getters: {
        language: state => state.language
    }
});