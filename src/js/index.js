var Vue = require('vue')
var App = require('../views/app.vue')
var GoogleSignIn = require('vue-google-signin-button');
//import GoogleSignIn from 'vue-google-signin-button';

window.onload = () => {    
    Vue.prototype.moment = require('moment');
    Vue.use(GoogleSignIn);
    window._v = new Vue({
        el: '#root',
        render: (element) => element(App)
    });   
}
