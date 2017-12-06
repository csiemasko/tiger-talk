var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert(".app {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  margin: 0;\n}\n.header {\n  background: #fc0;\n  height: 33%;\n  width: 100%;\n  position: fixed;\n  opacity: 1;\n  margin-top: 0;\n  box-shadow: 0 10px 20px rgba(0,0,0,0.4);\n}\n.header a i.fa-github {\n  float: right;\n  top: 20;\n  right: 20;\n  position: absolute;\n  font-size: 36px;\n  transition: 0.3s all;\n}\n.header a i.fa-github:hover {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n  transition: 0.3s all;\n  text-shadow: 0 0 rgba(0,0,0,0.3);\n}\n.header h1 {\n  margin-left: 50px;\n  opacity: 1;\n  font-weight: 100;\n  font-family: 'Oswald';\n  font-size: 42px;\n}\n.login input {\n  padding: 5px;\n}\n.modal-label {\n  display: inline-block;\n  font-size: 9px;\n  margin-right: 10px;\n  vertical-align: middle;\n  width: 90px;\n  text-align: right;\n}\n.g-signin-button,\n.login-button {\n  width: 100%;\n  height: 30px;\n  font-size: 16px;\n  cursor: pointer;\n  display: block;\n  line-height: 30px;\n  font-weight: 100;\n  margin: 5px 0px 5px 0px;\n  border: 1px solid #888;\n  background: #fc0;\n  color: #000;\n  padding: 3px 0px 3px 0px;\n  transition: 0.25s all;\n}\n.g-signin-button:hover,\n.login-button:hover {\n  background: #ffdb4d;\n  transition: 0.25s all;\n  box-shadow: 0 0 10px rgba(0,0,0,0.3);\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n}\n.g-signin-button .fa,\n.login-button .fa {\n  float: left;\n  margin: 10px 0px 0px 10px;\n}\n.chat {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-left: 10px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  z-index: 2;\n  height: 100%;\n  border-radius: 2px;\n}\n.chat .room {\n  padding: 10px;\n  border: 1px solid #444;\n  margin-top: 100px;\n  background: #fff;\n  border: 1px solid #999;\n  box-shadow: 0 0 20px rgba(0,0,0,0.3);\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n.chat .entry {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  height: 50px;\n  width: 100%;\n  padding: 3px;\n}\n.chat .entry input {\n  width: 100%;\n  height: 100%;\n  border: 1px solid #999;\n  font-size: 30px;\n  padding: 20px;\n  border-radius: 10px;\n  box-sizing: border-box;\n}\n.chat .entry .fa-paper-plane {\n  margin-left: -30px;\n  color: #333;\n}\n.login-field {\n  display: block;\n}\n.userlist {\n  margin: 100px 10px 0px 10px;\n  width: 200px;\n  padding: 5px;\n  background: #333;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  z-index: 2;\n  transition: 0.25s all;\n  box-sizing: border-box;\n}\n.show-message-enter-active,\n.show-message-leave-active {\n  transition: 0.5s all;\n}\n.show-message-enter,\n.show-message-leave-to {\n  margin-left: -50px;\n  opacity: 0;\n}\n.header-enter-enter-active,\n.header-enter-leave-active {\n  transition: 1s all;\n}\n.header-enter-enter,\n.header-enter-leave-to {\n  margin-top: -200px;\n  opacity: 0;\n}\n.chat-enter-enter-active,\n.chat-enter-leave-active {\n  transition: 1s all;\n}\n.chat-enter-enter,\n.chat-enter-leave-to {\n  margin-top: 100%;\n}\n.users-enter-enter-active,\n.users-enter-leave-active {\n  transition: 1s all;\n}\n.users-enter-enter,\n.users-enter-leave-to {\n  margin-left: 400px;\n}\n.t-login-field-enter-active,\n.t-login-field-leave-active {\n  transition: 0.5s all;\n}\n.t-login-field-enter,\n.t-login-field-enter-leave-to {\n  margin-top: 50px;\n  opacity: 0;\n}\n.t-login-field-move {\n  transition: 0.5s all;\n}\n.modal-show-enter-active,\n.modal-show-leave-active {\n  transition: 0.5s all;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n.modal-show-enter,\n.modal-show-leave-to {\n  -webkit-transform: scale(2);\n          transform: scale(2);\n}\n#toast {\n  display: inline-block;\n  -webkit-animation: toast-show 1s ease-in-out;\n          animation: toast-show 1s ease-in-out;\n  padding: 10px 30px 10px 30px;\n  background: #fc0;\n  color: #000;\n  position: absolute;\n  bottom: 0;\n  text-align: center;\n  height: 30px;\n  transition: 1s all;\n  z-index: 101;\n  box-shadow: 0 0 20px rgba(0,0,0,0.5);\n}\n@-moz-keyframes toast-show {\n  0% {\n    opacity: 0;\n    margin-top: 30px;\n  }\n  100% {\n    opacity: 1;\n    margin-top: 0px;\n  }\n}\n@-webkit-keyframes toast-show {\n  0% {\n    opacity: 0;\n    margin-top: 30px;\n  }\n  100% {\n    opacity: 1;\n    margin-top: 0px;\n  }\n}\n@-o-keyframes toast-show {\n  0% {\n    opacity: 0;\n    margin-top: 30px;\n  }\n  100% {\n    opacity: 1;\n    margin-top: 0px;\n  }\n}\n@keyframes toast-show {\n  0% {\n    opacity: 0;\n    margin-top: 30px;\n  }\n  100% {\n    opacity: 1;\n    margin-top: 0px;\n  }\n}\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var message = require('./message.vue');
var user = require('./user.vue');
var modal = require('./modal.vue');
var gbutton = require('./gsignin.vue');
var debugUser = { avatar: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/7515761/doc_glasses_2.jpg', name: 'Doc' };
exports.default = {
    components: { message: message, user: user, modal: modal, gbutton: gbutton },
    data: function data() {
        return {
            uid: null,
            session: {
                currentUser: {},
                userLogin: null,
                userPass: null,
                userPassVerify: null,
                loggedIn: false,
                userAvatar: ''
            },
            ui: {
                newUser: false,
                title: 'Tiger Talk',
                toastMessage: '',
                toastVisible: false
            },
            entryBox: '',
            messages: [],
            users: []
        };
    },

    methods: {
        getSession: function getSession() {
            return null;
            return document.cookie ? document.cookie : null;
        },
        googleSignIn: function googleSignIn(e) {
            console.log(e);
            this.session.loggedIn = true;
            this.session.currentUser = e;
            this.connect(this.session.currentUser);
            this.toast('Signed in as ' + e.name + ' on Google');
        },
        toast: function toast(message) {
            var _this = this;

            this.ui.toastMessage = message;
            this.ui.toastVisible = true;
            setTimeout(function () {
                _this.ui.toastVisible = false;
            }, 5000);
        },
        login: function login() {
            var _this2 = this;

            //Redirect to create if create is active
            if (this.ui.newUser) {
                this.createUser();
                return;
            } else {
                var axios = require('axios');
                axios.post('/login', { type: 'tt', name: this.session.userLogin, pass: this.session.userPass }).then(function (r) {
                    console.log(r);
                    if (r != null) {
                        //User login success, return user object
                        if (r.data.result == 'success') {
                            _this2.session.loggedIn = true;
                            _this2.session.currentUser = r.data.user;
                            _this2.connect(r.data.user); //Connect to socket, valid login                        
                        } else if (r.result == 'fail') {
                            _this2.toast(r.data.message); //Make pretty later
                        }
                    }
                });
            }
        },
        loginEnter: function loginEnter(el, done) {
            var d = el.dataset.index * 150;
            setTimeout(function () {
                Velocity(el, { 'margin-top': '30px' }, { complete: done });
            }, d);
        },
        loginLeave: function loginLeave(el, done) {},
        createUser: function createUser() {
            var _this3 = this;

            if (this.session.userPass != this.session.userPassVerify) {
                this.toast('Passwords do not match!');
                this.session.userPass = '';
                this.session.userPassVerify = '';
            } else {
                var axios = require('axios');
                axios.post('/create', { name: this.session.userLogin, pass: this.session.userPass }).then(function (r) {
                    console.log(r);
                    if (r.data != null) {
                        //User login success, return user object            
                        if (r.data.result == 'success') {
                            _this3.session.loggedIn = true;
                            _this3.session.currentUser = r.data.user;
                            _this3.connect(_this3.session.currentUser);
                        } else if (r.data.result == 'fail') {
                            _this3.toast(r.data.message);
                        }
                    } else {
                        console.log('User creation failed');
                        _this3.toast('User creation failed');
                    }
                });
            }
        },
        connect: function connect(validUser) {
            var _this4 = this;

            window.socket = io('http://10.128.173.8:8082', { query: 'uid=' + validUser._id });
            window.socket.on('<<msg', function (m) {
                console.log(m);
                _this4.messages.push({ user: m.user, message: m.message });
            });
            window.socket.on('+users', function (u) {
                _this4.messages.push({ type: 'system', message: { type: 'system', text: u.name + ' has connected', timestamp: new Date() } });
                _this4.users = u.list;
            });
            window.socket.on('-users', function (u) {
                _this4.messages.push({ type: 'system', message: { type: 'system', text: u.name + ' has left', timestamp: new Date() } });
                _this4.users = u.list;
            });
        },
        postMessage: function postMessage() {
            window.socket.emit('msg>>', { text: this.entryBox, _id: this.session.currentUser._id, type: 'user-message' });
            this.entryBox = '';
        },
        authenticate: function authenticate() {}
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "<div class=\"app\"><transition name=\"modal-show\"><div class=\"login\" v-if=\"!session.loggedIn\"><modal header=\"Log In to Tiger Talk\"><transition-group name=\"t-login-field\" @enter=\"loginEnter\"><div class=\"login-field\" key=\"1\"><div class=\"modal-label\">User Name</div><input v-model=\"session.userLogin\" placeholder=\"Username\"/></div><div class=\"login-field\" key=\"2\"><div class=\"modal-label\">Password          </div><input v-model=\"session.userPass\" type=\"password\" placeholder=\"Password\"/></div><div class=\"login-field\" v-show=\"ui.newUser\" key=\"3\"><div class=\"modal-label\">Verify Password          </div><input v-show=\"ui.newUser\" v-model=\"session.userPassVerify\" type=\"password\" placeholder=\"Verify Password\"/></div><div class=\"login-button\" @click=\"login\" key=\"4\"><i class=\"fa fa-sign-in\"></i>{{ ui.newUser ? 'Create + Sign In' : 'Sign In' }}</div><gbutton @glogin=\"googleSignIn($event)\" key=\"5\">              </gbutton><div class=\"login-button\" v-show=\"!ui.newUser\" @click=\"ui.newUser = true\" value=\"Create Account\" key=\"6\"><i class=\"fa fa-plus\"></i>Create Account</div></transition-group></modal></div></transition><transition name=\"header-enter\"><div class=\"header\" v-show=\"session.loggedIn\"><h1>{{ ui.title }}</h1><a href=\"https://github.com/csiemasko/tiger-talk\" target=\"_blank\"><i class=\"fa fa-github\"></i></a></div></transition><transition name=\"chat-enter\"><div class=\"chat\" v-show=\"session.loggedIn\" key=\"1\"><div class=\"room\"><transition-group name=\"show-message\"><message v-for=\"m,i in messages\" :key=\"i\" :user=\"m.user\" :message=\"m.message\"></message></transition-group></div><div class=\"entry\"><input v-model=\"entryBox\" @keyup.enter=\"postMessage\" placeholder=\"Start Typing...\"/><i class=\"fa fa-paper-plane\"></i></div></div></transition><transition name=\"users-enter\"><div class=\"userlist\" v-show=\"session.loggedIn\"><user v-for=\"u in users\" :user=\"u\">       </user></div></transition><div id=\"toast\" v-show=\"ui.toastVisible\">{{ ui.toastMessage }}</div></div>"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache[".app {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  margin: 0;\n}\n.header {\n  background: #fc0;\n  height: 33%;\n  width: 100%;\n  position: fixed;\n  opacity: 1;\n  margin-top: 0;\n  box-shadow: 0 10px 20px rgba(0,0,0,0.4);\n}\n.header a i.fa-github {\n  float: right;\n  top: 20;\n  right: 20;\n  position: absolute;\n  font-size: 36px;\n  transition: 0.3s all;\n}\n.header a i.fa-github:hover {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n  transition: 0.3s all;\n  text-shadow: 0 0 rgba(0,0,0,0.3);\n}\n.header h1 {\n  margin-left: 50px;\n  opacity: 1;\n  font-weight: 100;\n  font-family: 'Oswald';\n  font-size: 42px;\n}\n.login input {\n  padding: 5px;\n}\n.modal-label {\n  display: inline-block;\n  font-size: 9px;\n  margin-right: 10px;\n  vertical-align: middle;\n  width: 90px;\n  text-align: right;\n}\n.g-signin-button,\n.login-button {\n  width: 100%;\n  height: 30px;\n  font-size: 16px;\n  cursor: pointer;\n  display: block;\n  line-height: 30px;\n  font-weight: 100;\n  margin: 5px 0px 5px 0px;\n  border: 1px solid #888;\n  background: #fc0;\n  color: #000;\n  padding: 3px 0px 3px 0px;\n  transition: 0.25s all;\n}\n.g-signin-button:hover,\n.login-button:hover {\n  background: #ffdb4d;\n  transition: 0.25s all;\n  box-shadow: 0 0 10px rgba(0,0,0,0.3);\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n}\n.g-signin-button .fa,\n.login-button .fa {\n  float: left;\n  margin: 10px 0px 0px 10px;\n}\n.chat {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-left: 10px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  z-index: 2;\n  height: 100%;\n  border-radius: 2px;\n}\n.chat .room {\n  padding: 10px;\n  border: 1px solid #444;\n  margin-top: 100px;\n  background: #fff;\n  border: 1px solid #999;\n  box-shadow: 0 0 20px rgba(0,0,0,0.3);\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n.chat .entry {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  height: 50px;\n  width: 100%;\n  padding: 3px;\n}\n.chat .entry input {\n  width: 100%;\n  height: 100%;\n  border: 1px solid #999;\n  font-size: 30px;\n  padding: 20px;\n  border-radius: 10px;\n  box-sizing: border-box;\n}\n.chat .entry .fa-paper-plane {\n  margin-left: -30px;\n  color: #333;\n}\n.login-field {\n  display: block;\n}\n.userlist {\n  margin: 100px 10px 0px 10px;\n  width: 200px;\n  padding: 5px;\n  background: #333;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  z-index: 2;\n  transition: 0.25s all;\n  box-sizing: border-box;\n}\n.show-message-enter-active,\n.show-message-leave-active {\n  transition: 0.5s all;\n}\n.show-message-enter,\n.show-message-leave-to {\n  margin-left: -50px;\n  opacity: 0;\n}\n.header-enter-enter-active,\n.header-enter-leave-active {\n  transition: 1s all;\n}\n.header-enter-enter,\n.header-enter-leave-to {\n  margin-top: -200px;\n  opacity: 0;\n}\n.chat-enter-enter-active,\n.chat-enter-leave-active {\n  transition: 1s all;\n}\n.chat-enter-enter,\n.chat-enter-leave-to {\n  margin-top: 100%;\n}\n.users-enter-enter-active,\n.users-enter-leave-active {\n  transition: 1s all;\n}\n.users-enter-enter,\n.users-enter-leave-to {\n  margin-left: 400px;\n}\n.t-login-field-enter-active,\n.t-login-field-leave-active {\n  transition: 0.5s all;\n}\n.t-login-field-enter,\n.t-login-field-enter-leave-to {\n  margin-top: 50px;\n  opacity: 0;\n}\n.t-login-field-move {\n  transition: 0.5s all;\n}\n.modal-show-enter-active,\n.modal-show-leave-active {\n  transition: 0.5s all;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n.modal-show-enter,\n.modal-show-leave-to {\n  -webkit-transform: scale(2);\n          transform: scale(2);\n}\n#toast {\n  display: inline-block;\n  -webkit-animation: toast-show 1s ease-in-out;\n          animation: toast-show 1s ease-in-out;\n  padding: 10px 30px 10px 30px;\n  background: #fc0;\n  color: #000;\n  position: absolute;\n  bottom: 0;\n  text-align: center;\n  height: 30px;\n  transition: 1s all;\n  z-index: 101;\n  box-shadow: 0 0 20px rgba(0,0,0,0.5);\n}\n@-moz-keyframes toast-show {\n  0% {\n    opacity: 0;\n    margin-top: 30px;\n  }\n  100% {\n    opacity: 1;\n    margin-top: 0px;\n  }\n}\n@-webkit-keyframes toast-show {\n  0% {\n    opacity: 0;\n    margin-top: 30px;\n  }\n  100% {\n    opacity: 1;\n    margin-top: 0px;\n  }\n}\n@-o-keyframes toast-show {\n  0% {\n    opacity: 0;\n    margin-top: 30px;\n  }\n  100% {\n    opacity: 1;\n    margin-top: 0px;\n  }\n}\n@keyframes toast-show {\n  0% {\n    opacity: 0;\n    margin-top: 30px;\n  }\n  100% {\n    opacity: 1;\n    margin-top: 0px;\n  }\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-b98d5cba", module.exports)
  } else {
    hotAPI.update("_v-b98d5cba", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}