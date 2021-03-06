var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert(".user-frame {\n  margin: 5px 0 5px 0;\n  background: #000;\n  height: 35px;\n  padding: 5px;\n}\n.avatar-frame {\n  display: inline;\n  width: 30px;\n  height: 30px;\n}\n.avatar-frame img {\n  width: 30px;\n  height: 30px;\n  vertical-align: middle;\n  border-radius: 40px;\n  box-shadow: 0 0 10px rgba(255,255,255,0.4);\n}\n.name {\n  font-size: 14px;\n  font-weight: 100;\n  margin-left: 20px;\n  color: #fff;\n}\n")
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        user: {
            type: Object,
            required: true
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "<div class=\"user-frame\"><div class=\"avatar-frame\"><img :src=\"user.avatar\" :alt=\"user.name\"/></div><span class=\"name\">{{ user.name }}</span></div>"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache[".user-frame {\n  margin: 5px 0 5px 0;\n  background: #000;\n  height: 35px;\n  padding: 5px;\n}\n.avatar-frame {\n  display: inline;\n  width: 30px;\n  height: 30px;\n}\n.avatar-frame img {\n  width: 30px;\n  height: 30px;\n  vertical-align: middle;\n  border-radius: 40px;\n  box-shadow: 0 0 10px rgba(255,255,255,0.4);\n}\n.name {\n  font-size: 14px;\n  font-weight: 100;\n  margin-left: 20px;\n  color: #fff;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-711350b9", module.exports)
  } else {
    hotAPI.update("_v-711350b9", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}