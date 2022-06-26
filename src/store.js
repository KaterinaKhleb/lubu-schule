import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        language: 'de',
        welcome: '',
        campName: '',
        campMotto: ' ',
        camDescPartOne: '',
        campDescription: '',
        campSubname: '',
        ourActivities: '',
        activity1Name: '',
        activity1Desc: '',
        activity2Name: '',
        activity2Desc: '',
        activity3Name: '',
        activity3Desc: '',
        activity4Name: '',
        activity4Desc: '',
        activity5Name: '',
        activity5Desc: '',
        formTitle: '',
        formSubtitle: '',
        where: '',
        when: '',
        ageGroup: '',
        weSpeak: '',
        price: '',
        places: '',
        name: '',
        email: '',
        phone: '',
        message: '',
        optional: '',
        send: '',
        langs: '',
        registerNow: '',
        success: '',
        ourChannelCamp: '',
        registration: '',
        registrTextPart1: '',
        formLink: '',
        registrTextPart2: '',
        regSchoolDesc: "",
        regSchoolDesc2: '',
        regSchoolDesc3: '',
        regSchoolDesc4: '',
        ourChannel: '',
        address: '',
        coursesName: '',
        english: '',
        german: '',
        additionalCourses: '',
        desc: '',
        groups: '',
        engDesc: '',
        deutschDesc: "",
        youngGroup: '',
        middleGroup: '',
        parents: '',
        saturday: '',
        extraCoursesDesc: '',
        forAll: '',
        schoolAboutUs: '',
        schoolMotiv: '',
        schoolMotivText: '',
        schoolOffers: "",
        schoolOffersText: ""


    },
    mutations: {
        setLanguage(state, lan) {
            state.language = lan;
        }
    },
    actions: {
        async getContent({
            state
        }, lang) {
            const data = await axios.get(`/json/${lang}.json`);
            const c = data.data;
            Object.assign(state, c)
            this.commit('setLanguage', lang);
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
        campSubname: state => state.campSubname,
        langs: state => state.langs,
        registerNow: state => state.registerNow,
        success: state => state.success,
        ourChannelCamp: state => state.ourChannelCamp,
        registration: state => state.registration,
        registrTextPart1: state => state.registrTextPart1,
        formLink: state => state.formLink,
        registrTextPart2: state => state.registrTextPart2,
        regSchoolDesc: state => state.regSchoolDesc,
        regSchoolDesc2: state => state.regSchoolDesc2,
        regSchoolDesc3: state => state.regSchoolDesc3,
        regSchoolDesc4: state => state.regSchoolDesc4,
        ourChannel: state => state.ourChannel,
        address: state => state.address,
        coursesName: state => state.coursesName,
        english: state => state.english,
        german: state => state.german,
        additionalCourses: state => state.additionalCourses,
        desc: state => state.desc,
        groups: state => state.groups,
        engDesc: state => state.engDesc,
        youngGroup: state => state.youngGroup,
        middleGroup: state => state.middleGroup,
        parents: state => state.parents,
        saturday: state => state.saturday,
        deutschDesc: state => state.deutschDesc,
        extraCoursesDesc: state => state.extraCoursesDesc,
        forAll: state => state.forAll,
        schoolAboutUs: state => state.schoolAboutUs,
        schoolMotiv: state => state.schoolMotiv,
        schoolMotivText: state => state.schoolMotivText,
        schoolOffers: state => state.schoolOffers,
        schoolOffersText: state => state.schoolOffersText,
    }
});