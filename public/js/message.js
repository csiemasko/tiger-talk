var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert(".message {\n  margin: 5px 0 5px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  height: auto;\n  border-radius: 5px;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  box-sizing: border-box;\n  padding: 5px 30px 5px 5px;\n}\n.message:hover {\n  background: rgba(51,51,51,0.2);\n  transition: 0.25s all;\n}\n.message-profile {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n}\n.message-profile img {\n  width: 50px;\n  height: 50px;\n  border: 1px solid #888;\n  border-radius: 50px;\n}\n.message-profile .name {\n  display: inline-block;\n  margin: 0 10px 0 10px;\n  font-size: 16px;\n  font-weight: 100;\n  color: #666;\n}\n.message-content {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n")
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        user: {
            type: Object,
            required: true
        },
        message: {
            type: String,
            required: true
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "<div class=\"message\"><div class=\"message-profile\"><img :src=\"user.avatar\" alt=\"user.name\"/><div class=\"name\">{{ user.name }}</div></div><div class=\"message-content\">{{ message }}</div></div>"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache[".message {\n  margin: 5px 0 5px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  height: auto;\n  border-radius: 5px;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  box-sizing: border-box;\n  padding: 5px 30px 5px 5px;\n}\n.message:hover {\n  background: rgba(51,51,51,0.2);\n  transition: 0.25s all;\n}\n.message-profile {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n}\n.message-profile img {\n  width: 50px;\n  height: 50px;\n  border: 1px solid #888;\n  border-radius: 50px;\n}\n.message-profile .name {\n  display: inline-block;\n  margin: 0 10px 0 10px;\n  font-size: 16px;\n  font-weight: 100;\n  color: #666;\n}\n.message-content {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-a67cc6ac", module.exports)
  } else {
    hotAPI.update("_v-a67cc6ac", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}