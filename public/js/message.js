var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert(".message {\n  margin: 5px 0 5px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  height: auto;\n  border-radius: 5px;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  box-sizing: border-box;\n  padding: 5px 30px 5px 5px;\n}\n.message:hover {\n  background: rgba(51,51,51,0.2);\n  transition: 0.25s all;\n}\n.message-profile {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n}\n.message-profile img {\n  width: 30px;\n  height: 30px;\n  border: 1px solid #888;\n  border-radius: 30px;\n}\n.message-profile .info-frame {\n  display: inline-block;\n}\n.message-profile .info-frame .name,\n.message-profile .info-frame .timestamp {\n  display: block;\n  margin: 0 10px 0 10px;\n  font-size: 12px;\n  font-weight: 100;\n  color: #666;\n}\n.message-profile .info-frame .timestamp {\n  font-style: italic;\n}\n.message-profile .message-frame,\n.message-profile flex: 1 1 auto,\n.message-profile font-size: 12px,\n.message-profile padding: 2px,\n.message-profile box-sizing: border-box,\n.message-profile .message-content {\n  vertical-align: middle;\n}\n.message-profile .system_message {\n  vertical-align: middle;\n  color: #999;\n}\n")
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        user: {
            type: Object,
            required: false
        },
        message: {
            type: Object,
            required: true
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "<div class=\"message\"><div class=\"message-profile\" v-if=\"message.type != 'system'\"><img :src=\"user.avatar\" alt=\"user.name\"/><div class=\"info-frame\"><div class=\"name\">{{ user.name }}</div><div class=\"timestamp\">{{ `@${moment(new Date(), 'M/D/YYYY')}`` }}</div></div></div><div class=\"message-frame\"><div class=\"message-content\" :class=\"{system_message: message.type == 'system'}\">{{ message.text }}</div></div></div>"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache[".message {\n  margin: 5px 0 5px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  height: auto;\n  border-radius: 5px;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  box-sizing: border-box;\n  padding: 5px 30px 5px 5px;\n}\n.message:hover {\n  background: rgba(51,51,51,0.2);\n  transition: 0.25s all;\n}\n.message-profile {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n}\n.message-profile img {\n  width: 30px;\n  height: 30px;\n  border: 1px solid #888;\n  border-radius: 30px;\n}\n.message-profile .info-frame {\n  display: inline-block;\n}\n.message-profile .info-frame .name,\n.message-profile .info-frame .timestamp {\n  display: block;\n  margin: 0 10px 0 10px;\n  font-size: 12px;\n  font-weight: 100;\n  color: #666;\n}\n.message-profile .info-frame .timestamp {\n  font-style: italic;\n}\n.message-profile .message-frame,\n.message-profile flex: 1 1 auto,\n.message-profile font-size: 12px,\n.message-profile padding: 2px,\n.message-profile box-sizing: border-box,\n.message-profile .message-content {\n  vertical-align: middle;\n}\n.message-profile .system_message {\n  vertical-align: middle;\n  color: #999;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-23a26875", module.exports)
  } else {
    hotAPI.update("_v-23a26875", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}