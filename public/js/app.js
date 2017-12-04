var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert(".app {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  margin: 0;\n}\n.header {\n  background: #fc0;\n  height: 33%;\n  width: 100%;\n  position: fixed;\n}\n.header h1 {\n  margin-left: 50px;\n  opacity: 1;\n  font-weight: 100;\n  font-family: 'Oswald';\n  font-size: 36px;\n}\n.modal-label {\n  display: inline-block;\n  font-size: 9px;\n  margin-right: 10px;\n  vertical-align: middle;\n}\n.chat {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-left: 10px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  z-index: 2;\n  height: 100%;\n  border-radius: 2px;\n}\n.chat .room {\n  padding: 10px;\n  border: 1px solid #444;\n  margin-top: 100px;\n  background: #fff;\n  border: 1px solid #999;\n  box-shadow: 0 0 20px rgba(0,0,0,0.3);\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n.chat .entry {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  margin-top: 10px;\n  width: 100%;\n  height: 40px;\n  box-sizing: border-box;\n  padding: 3px;\n}\n.chat .entry input {\n  width: 100%;\n  height: 100%;\n  border: 1px solid #999;\n  font-size: 24px;\n  padding: 10px;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n.chat .entry .fa-paper-plane {\n  margin-left: -30px;\n  color: #333;\n}\n.userlist {\n  margin: 100px 10px 0px 10px;\n  width: 200px;\n  padding: 5px;\n  background: #333;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  z-index: 2;\n  transition: 0.25s all;\n  box-sizing: border-box;\n}\n.head-trans-enter-active,\n.head-trans-leave-active {\n  transition: margin 0.5s, opacity 0.5s;\n}\n.head-trans-enter,\n.head-trans-leave-top {\n  margin-left: 0;\n  opacity: 0;\n}\n#toast {\n  display: none;\n  -webkit-animation: toast-show 1s ease-in-out;\n          animation: toast-show 1s ease-in-out;\n  padding: 10px 30px 10px 30px;\n  background: #fc0;\n  color: #000;\n  position: absolute;\n  bottom: 0;\n  text-align: center;\n  height: 30px;\n  transition: 1s all;\n}\n@-moz-keyframes toast-show {\n  from {\n    opacity: 0;\n    margin-top: 30px;\n  }\n  to {\n    opacity: 1;\n    margin-top: 0;\n  }\n}\n@-webkit-keyframes toast-show {\n  from {\n    opacity: 0;\n    margin-top: 30px;\n  }\n  to {\n    opacity: 1;\n    margin-top: 0;\n  }\n}\n@-o-keyframes toast-show {\n  from {\n    opacity: 0;\n    margin-top: 30px;\n  }\n  to {\n    opacity: 1;\n    margin-top: 0;\n  }\n}\n@keyframes toast-show {\n  from {\n    opacity: 0;\n    margin-top: 30px;\n  }\n  to {\n    opacity: 1;\n    margin-top: 0;\n  }\n}\n")
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
            users: [debugUser]
        };
    },

    methods: {
        getSession: function getSession() {
            return document.cookie ? document.cookie : null;
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
                axios.post('/login', { name: this.session.userLogin, pass: this.session.userPass }).then(function (r) {
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

            window.socket = io('http://localhost:7331', { query: 'uid=' + validUser._id });
            window.socket.on('<<msg', function (m) {
                _this4.messages.push({ user: m.user, message: m.text, timestamp: m.timestamp });
            });
            window.socket.on('+users', function (u) {
                _this4.messages.push({ type: 'system', message: u.name + ' has connected' });
                _this4.users = u.list;
            });
            window.socket.on('-users', function (u) {
                _this4.messages.push({ type: 'system', message: u.name + ' has left' });
                _this4.users = u.list;
            });
        },
        googleSignIn: function googleSignIn(gUser) {
            var profile = gUser.getBasicProfile();
            alert('ID: ' + profile.getId() + ' -- Name: ' + profile.getName());
        },
        postMessage: function postMessage() {
            window.socket.emit('message', { text: this.entryBox, userId: this.session.currentUser.uid });
        },
        authenticate: function authenticate() {}
    },
    mounted: function mounted() {}
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "<div class=\"app\"><div class=\"login\" v-if=\"!session.loggedIn\"><modal header=\"Log In to Tiger Talk\"><div class=\"modal-label\">User Name</div><input v-model=\"session.userLogin\" placeholder=\"Username\"/><div class=\"modal-label\">Password          </div><input v-model=\"session.userPass\" type=\"password\" placeholder=\"Password\"/><div class=\"modal-label\" v-show=\"ui.newUser\">Verify Password          </div><input v-show=\"ui.newUser\" v-model=\"session.userPassVerify\" type=\"password\" placeholder=\"Verify Password\"/><input type=\"button\" @click=\"login\" :value=\"ui.newUser ? 'Create &amp; Sign In' : 'Sign In'\"/><div class=\"g-signin2\" data-onsuccess=\"googleSignIn\"></div><input v-show=\"!ui.newUser\" type=\"button\" @click=\"ui.newUser = true\" value=\"Create Account\"/></modal></div><div class=\"header\"><transition name=\"head-trans\"><h1>{{ ui.title }}</h1></transition></div><div class=\"chat\"><div class=\"room\"><message v-for=\"m in messages\" :user=\"m.user\" :message=\"m.message\"></message></div><div class=\"entry\"><input v-model=\"entryBox\" @keyup.enter=\"postMessage\"/><i class=\"fa fa-user\"></i></div></div><div class=\"userlist\"><user v-for=\"u in users\" :user=\"u\">       </user></div><div id=\"toast\" v-if=\"ui.toastVisible\">{{ ui.toastMessage }}</div></div>"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache[".app {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  margin: 0;\n}\n.header {\n  background: #fc0;\n  height: 33%;\n  width: 100%;\n  position: fixed;\n}\n.header h1 {\n  margin-left: 50px;\n  opacity: 1;\n  font-weight: 100;\n  font-family: 'Oswald';\n  font-size: 36px;\n}\n.modal-label {\n  display: inline-block;\n  font-size: 9px;\n  margin-right: 10px;\n  vertical-align: middle;\n}\n.chat {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-left: 10px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  z-index: 2;\n  height: 100%;\n  border-radius: 2px;\n}\n.chat .room {\n  padding: 10px;\n  border: 1px solid #444;\n  margin-top: 100px;\n  background: #fff;\n  border: 1px solid #999;\n  box-shadow: 0 0 20px rgba(0,0,0,0.3);\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n.chat .entry {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  margin-top: 10px;\n  width: 100%;\n  height: 40px;\n  box-sizing: border-box;\n  padding: 3px;\n}\n.chat .entry input {\n  width: 100%;\n  height: 100%;\n  border: 1px solid #999;\n  font-size: 24px;\n  padding: 10px;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n.chat .entry .fa-paper-plane {\n  margin-left: -30px;\n  color: #333;\n}\n.userlist {\n  margin: 100px 10px 0px 10px;\n  width: 200px;\n  padding: 5px;\n  background: #333;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  z-index: 2;\n  transition: 0.25s all;\n  box-sizing: border-box;\n}\n.head-trans-enter-active,\n.head-trans-leave-active {\n  transition: margin 0.5s, opacity 0.5s;\n}\n.head-trans-enter,\n.head-trans-leave-top {\n  margin-left: 0;\n  opacity: 0;\n}\n#toast {\n  display: none;\n  -webkit-animation: toast-show 1s ease-in-out;\n          animation: toast-show 1s ease-in-out;\n  padding: 10px 30px 10px 30px;\n  background: #fc0;\n  color: #000;\n  position: absolute;\n  bottom: 0;\n  text-align: center;\n  height: 30px;\n  transition: 1s all;\n}\n@-moz-keyframes toast-show {\n  from {\n    opacity: 0;\n    margin-top: 30px;\n  }\n  to {\n    opacity: 1;\n    margin-top: 0;\n  }\n}\n@-webkit-keyframes toast-show {\n  from {\n    opacity: 0;\n    margin-top: 30px;\n  }\n  to {\n    opacity: 1;\n    margin-top: 0;\n  }\n}\n@-o-keyframes toast-show {\n  from {\n    opacity: 0;\n    margin-top: 30px;\n  }\n  to {\n    opacity: 1;\n    margin-top: 0;\n  }\n}\n@keyframes toast-show {\n  from {\n    opacity: 0;\n    margin-top: 30px;\n  }\n  to {\n    opacity: 1;\n    margin-top: 0;\n  }\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-871da3d8", module.exports)
  } else {
    hotAPI.update("_v-871da3d8", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}