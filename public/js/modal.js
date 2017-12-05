var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert(".modal {\n  z-index: 100;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  opacity: 1;\n  background: rgba(0,0,0,0.5);\n  margin: 0 auto;\n  vertical-align: middle;\n  text-align: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n.dialog {\n  margin: 0 auto;\n  margin-top: 100px;\n  box-sizing: border-box;\n  background: #fff;\n  border-radius: 20px;\n  box-shadow: 0 0 30px rgba(0,0,0,0.5);\n  position: relative;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.dialog .dialog-header {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  box-sizing: border-box;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  top: 0;\n  width: 100%;\n  padding: 5px;\n  text-align: center;\n  color: #fff;\n  background: #000;\n  font-weight: 100;\n  font-size: 16px;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n.dialog .dialog-header .close-button {\n  position: fixed;\n  float: right;\n  right: 20;\n  top: 10;\n}\n.dialog .dialog-header .close-button .fa.fa-times-circle-o {\n  position: fixed;\n  cursor: pointer;\n  float: right;\n  color: #ff0;\n}\n.dialog .dialog-body {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  margin: 20px;\n}\n.modal-trans-enter,\n.modal-trans-leave-to {\n  opacity: 0;\n}\n.modal-trans-enter-active,\n.modal-trans-leave-active {\n  transition: opacity 0.3s;\n}\n.dialog-trans-enter,\n.dialog-trans-leave-to {\n  -webkit-transform: scale(0.1);\n          transform: scale(0.1);\n}\n.dialog-trans-enter-active,\n.dialog-trans-leave-active {\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}\n")
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        header: {
            type: String,
            required: true
        }
    },
    data: function data() {
        return {
            closed: false
        };
    },

    methods: {
        close: function close() {
            this.closed = true;
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "<transition name=\"modal-trans\"><div class=\"modal\" v-if=\"!closed\"><transition name=\"dialog-trans\"><div class=\"dialog\"><div class=\"dialog-header\">{{ header}}<div class=\"close-button\"><i class=\"fa fa-times-circle-o\" @click=\"close\">       </i></div></div><div class=\"dialog-body\"><slot>      </slot></div></div></transition></div></transition>"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache[".modal {\n  z-index: 100;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  opacity: 1;\n  background: rgba(0,0,0,0.5);\n  margin: 0 auto;\n  vertical-align: middle;\n  text-align: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n.dialog {\n  margin: 0 auto;\n  margin-top: 100px;\n  box-sizing: border-box;\n  background: #fff;\n  border-radius: 20px;\n  box-shadow: 0 0 30px rgba(0,0,0,0.5);\n  position: relative;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.dialog .dialog-header {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  box-sizing: border-box;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  top: 0;\n  width: 100%;\n  padding: 5px;\n  text-align: center;\n  color: #fff;\n  background: #000;\n  font-weight: 100;\n  font-size: 16px;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n.dialog .dialog-header .close-button {\n  position: fixed;\n  float: right;\n  right: 20;\n  top: 10;\n}\n.dialog .dialog-header .close-button .fa.fa-times-circle-o {\n  position: fixed;\n  cursor: pointer;\n  float: right;\n  color: #ff0;\n}\n.dialog .dialog-body {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  margin: 20px;\n}\n.modal-trans-enter,\n.modal-trans-leave-to {\n  opacity: 0;\n}\n.modal-trans-enter-active,\n.modal-trans-leave-active {\n  transition: opacity 0.3s;\n}\n.dialog-trans-enter,\n.dialog-trans-leave-to {\n  -webkit-transform: scale(0.1);\n          transform: scale(0.1);\n}\n.dialog-trans-enter-active,\n.dialog-trans-leave-active {\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-687d0440", module.exports)
  } else {
    hotAPI.update("_v-687d0440", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}