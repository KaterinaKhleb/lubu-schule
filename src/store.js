import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
const BASE_URL = 'http://localhost:8080';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        language: 'de',
        welcome: "",
        campName: "",
        campMotto: " ",
        camDescPartOne: "",
        campDescription: "",
        ourActivities: "",
        activity1Name: "",
        activity1Desc: "",
        activity2Name: "",
        activity2Desc: "",
        activity3Name: "",
        activity3Desc: "",
        activity4Name: "",
        activity4Desc: "",
        activity5Name: "",
        activity5Desc: "",
        formTitle: "",
        formSubtitle: "",
        where: "",
        when: "",
        ageGroup: "",
        weSpeak: "",
        price: "",
        places: "",
        name: "",
        email: "",
        phone: "",
        message: "",
        optional: "",
        send: ""

    },
    mutations: {
        setLanguage(state, lan) {
            state.language = lan;
        }
    },
    actions: {
        async getContent({ state }, lang) {
            const data = await axios.get(`/json/${lang}.json`)
            const c = data.data
            state.campName = c.campName,
                state.campMotto = c.campMotto,
                state.camDescPartOne = c.camDescPartOne,
                state.campDescription = c.campDescription,
                state.ourActivities = c.ourActivities,
                state.activity1Name = c.activity1Name,
                state.activity1Desc = c.activity1Desc,
                state.activity2Name = c.activity2Name,
                state.activity2Desc = c.activity2Desc,
                state.activity3Name = c.activity3Name,
                state.activity3Desc = c.activity3Desc,
                state.activity4Name = c.activity4Name,
                state.activity4Desc = c.activity4Desc,
                state.activity5Name = c.activity5Name,
                state.activity5Desc = c.activity5Desc,
                state.formTitle = c.formTitle,
                state.formSubtitle = c.formSubtitle,
                state.where = c.where,
                state.when = c.when,
                state.ageGroup = c.ageGroup,
                state.weSpeak = c.weSpeak,
                state.price = c.price,
                state.places = c.places,
                state.name = c.name,
                state.email = c.email,
                state.phone = c.phone,
                state.message = c.message,
                state.optional = c.optional,
                state.send = c.send
                // })
            this.commit('setLanguage', lang);
            //get content here
        }
    },
    getters: {
        language: state => state.language,
        welcome: state => state.welcome,
        campName: state => state.campName,
        campMotto: state => state.campMotto,
        camDescPartOne: state => state.camDescPartOne,
        campDescription: state => state.campDescription,
        ourActivities: state => state.ourActivities,
        activity1Name: state => state.activity1Name,
        activity1Desc: state => state.activity1Desc,
        activity2Name: state => state.activity2Name,
        activity2Desc: state => state.activity2Desc,
        activity3Name: state => state.activity3Name,
        activity3Desc: state => state.activity3Desc,
        activity4Name: state => state.activity4Name,
        activity4Desc: state => state.activity4Desc,
        activity5Name: state => state.activity5Name,
        activity5Desc: state => state.activity5Desc,
        formTitle: state => state.formTitle,
        formSubtitle: state => state.formSubtitle,
        where: state => state.where,
        when: state => state.when,
        ageGroup: state => state.ageGroup,
        weSpeak: state => state.weSpeak,
        price: state => state.price,
        places: state => state.places,
        name: state => state.name,
        email: state => state.email,
        phone: state => state.phone,
        message: state => state.message,
        optional: state => state.optional,
        send: state => state.send,
    }
});