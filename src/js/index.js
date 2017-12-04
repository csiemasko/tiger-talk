var Vue = require('vue')
var App = require('../views/app.vue')

window.onload = () => {
    window._v = new Vue({
        el: '#root',
        render: (element) => element(App),
        mounted () {
          
        }
    });   
}
