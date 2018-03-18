import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.use(Vuetify, {
    theme: {
        primary: "#8BC34A", 
        secondary: "#9CCC65", 
        accent: "#6D4C41", 
        error: "#f44336", 
        warning: "#ffeb3b", 
        info: "#2196f3", 
        success: "#4caf50"
    }
});

import App from './app.vue';

new Vue({
    el: '#app',
    components: { App }
});