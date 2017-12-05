var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {
      /**
       * The Auth2 parameters, as seen on
       * https://developers.google.com/identity/sign-in/web/reference#gapiauth2initparams.
       * As the very least, a valid client_id must present.
       * @type {Object}
       */
      googleSignInParams: {
        client_id: '637796729929-ituv77blbneefedj83l28uug9v0j9vn9.apps.googleusercontent.com'
      }
    };
  },

  methods: {
    onSignInSuccess: function onSignInSuccess(googleUser) {
      var _this = this;

      var profile = googleUser.getBasicProfile(); // etc etc 
      var axios = require('axios');
      axios.post('/login', { type: 'google', token: googleUser.getAuthResponse().id_token }).then(function (r) {
        if (r.data.result == 'success') {
          console.log(r.data.user);
          _this.$emit('glogin', r.data.user);
        } else {
          console.log(r);
          console.log('Google Login Failed');
        }
      });
    },
    onSignInError: function onSignInError(error) {}
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "<g-signin-button :params=\"googleSignInParams\" @success=\"onSignInSuccess\" @error=\"onSignInError\"><i class=\"fa fa-google\"></i>Sign In With Google    </g-signin-button>"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-57aa013c", module.exports)
  } else {
    hotAPI.update("_v-57aa013c", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}