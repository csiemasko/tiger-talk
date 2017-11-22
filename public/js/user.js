var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert(".user-frame {\n  width: 100%;\n  margin: 5px 0 5px 0;\n  background: #000;\n  height: 50px;\n  padding: 5px;\n}\n.avatar-frame {\n  width: 40px;\n  height: 40px;\n  border-radius: 30px;\n  background: #fff;\n  border: 1px solid #000;\n}\n.avatar-frame img {\n  width: 25px;\n  height: 25px;\n}\n.name {\n  font-size: 20px;\n  font-weight: 100;\n  color: #fff;\n}\n")
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
    __vueify_insert__.cache[".user-frame {\n  width: 100%;\n  margin: 5px 0 5px 0;\n  background: #000;\n  height: 50px;\n  padding: 5px;\n}\n.avatar-frame {\n  width: 40px;\n  height: 40px;\n  border-radius: 30px;\n  background: #fff;\n  border: 1px solid #000;\n}\n.avatar-frame img {\n  width: 25px;\n  height: 25px;\n}\n.name {\n  font-size: 20px;\n  font-weight: 100;\n  color: #fff;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-bcad4190", module.exports)
  } else {
    hotAPI.update("_v-bcad4190", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}