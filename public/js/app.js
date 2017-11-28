var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert(".app {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  margin: 0;\n}\n.header {\n  background: #fc0;\n  height: 33%;\n  width: 100%;\n  position: fixed;\n}\n.header h1 {\n  margin-left: 50px;\n  opacity: 1;\n  font-weight: 100;\n  font-family: 'Oswald';\n  font-size: 36px;\n}\n.chat {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-left: 10px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  z-index: 2;\n  height: 100%;\n  border-radius: 2px;\n}\n.chat .room {\n  padding: 10px;\n  border: 1px solid #444;\n  margin-top: 100px;\n  background: #fff;\n  border: 1px solid #999;\n  box-shadow: 0 0 20px rgba(0,0,0,0.3);\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n.chat .entry {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  margin-top: 10px;\n  width: 100%;\n  height: 40px;\n  box-sizing: border-box;\n  padding: 3px;\n}\n.chat .entry input {\n  width: 100%;\n  height: 100%;\n  border: 1px solid #999;\n  font-size: 24px;\n  padding: 10px;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n.chat .entry .fa-paper-plane {\n  margin-left: -30px;\n  color: #333;\n}\n.userlist {\n  margin: 100px 10px 0px 10px;\n  width: 200px;\n  padding: 5px;\n  background: #333;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  z-index: 2;\n  transition: 0.25s all;\n  box-sizing: border-box;\n}\n.head-trans-enter-active,\n.head-trans-leave-active {\n  transition: margin 0.5s, opacity 0.5s;\n}\n.head-trans-enter,\n.head-trans-leave-top {\n  margin-left: 0;\n  opacity: 0;\n}\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var message = require('./message.vue');
var user = require('./user.vue');
var modal = require('./modal.vue');
var debugUser = { avatar: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/7515761/doc_glasses_2.jpg', name: 'Doc' };
exports.default = {
    components: { message: message, user: user, modal: modal },
    data: function data() {
        return {
            loggedIn: false,
            ui: {
                title: 'Tiger Talk'
            },
            entryBox: '',
            messages: [{ user: debugUser, message: 'Hello World!' }, { user: debugUser, message: 'Hello World!' }, { user: debugUser, message: 'Hello World!' }],
            users: [debugUser]
        };
    },

    methods: {
        getSession: function getSession() {
            return document.cookie && document.cookie.userId ? document.cookie.userId : null;
        }
    },
    ready: function ready() {
        var userId = this.getSession();
        if (userId != null) {
            this.uid = userId;
            alert('user cookie is present: ' + this.uid);
        } else {
            alert('creating uuid');
            var uuid = require('uuid/v4')();
            this.uid = uuid;
            document.cookie.userId = uuid;
            alert(uuid);
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "<div class=\"app\"><div class=\"login\" v-if=\"!loggedIn\"><modal header=\"Testing\"><input v-model=\"loginUserName\"/></modal></div><div class=\"header\"><transition name=\"head-trans\"><h1>{{ ui.title }}</h1></transition></div><div class=\"chat\"><div class=\"room\"><message v-for=\"m in messages\" :user=\"m.user\" :message=\"m.message\"></message></div><div class=\"entry\"><input v-model=\"entryBox\"/><i class=\"fa fa-user\"></i></div></div><div class=\"userlist\"><user v-for=\"u in users\" :user=\"u\"></user></div></div>"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache[".app {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  margin: 0;\n}\n.header {\n  background: #fc0;\n  height: 33%;\n  width: 100%;\n  position: fixed;\n}\n.header h1 {\n  margin-left: 50px;\n  opacity: 1;\n  font-weight: 100;\n  font-family: 'Oswald';\n  font-size: 36px;\n}\n.chat {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-left: 10px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  z-index: 2;\n  height: 100%;\n  border-radius: 2px;\n}\n.chat .room {\n  padding: 10px;\n  border: 1px solid #444;\n  margin-top: 100px;\n  background: #fff;\n  border: 1px solid #999;\n  box-shadow: 0 0 20px rgba(0,0,0,0.3);\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n.chat .entry {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  margin-top: 10px;\n  width: 100%;\n  height: 40px;\n  box-sizing: border-box;\n  padding: 3px;\n}\n.chat .entry input {\n  width: 100%;\n  height: 100%;\n  border: 1px solid #999;\n  font-size: 24px;\n  padding: 10px;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n.chat .entry .fa-paper-plane {\n  margin-left: -30px;\n  color: #333;\n}\n.userlist {\n  margin: 100px 10px 0px 10px;\n  width: 200px;\n  padding: 5px;\n  background: #333;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  z-index: 2;\n  transition: 0.25s all;\n  box-sizing: border-box;\n}\n.head-trans-enter-active,\n.head-trans-leave-active {\n  transition: margin 0.5s, opacity 0.5s;\n}\n.head-trans-enter,\n.head-trans-leave-top {\n  margin-left: 0;\n  opacity: 0;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-e46673c2", module.exports)
  } else {
    hotAPI.update("_v-e46673c2", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}