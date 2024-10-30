module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/contact.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ContactCode.jsx":
/*!************************************!*\
  !*** ./components/ContactCode.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_ContactCode_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/ContactCode.module.css */ \"./styles/ContactCode.module.css\");\n/* harmony import */ var _styles_ContactCode_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_ContactCode_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/webbythien/portfolio/components/ContactCode.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst ContactCode = () => {\n  return __jsx(\"div\", {\n    className: _styles_ContactCode_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.code,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, __jsx(\"p\", {\n    className: _styles_ContactCode_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.line,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    className: _styles_ContactCode_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.className,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }, \".socials\"), \" {\"), __jsx(\"p\", {\n    className: _styles_ContactCode_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.line,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, \"\\xA0\\xA0\\xA0email:\", \" \", __jsx(\"a\", {\n    href: \"mailto:hunhminhtam@=@gmail.com\",\n    target: \"_blank\",\n    rel: \"noopener\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, \"hunhminhtam@gmail.com\"), \";\"), __jsx(\"p\", {\n    className: _styles_ContactCode_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.line,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, \"\\xA0\\xA0\\xA0github:\", \" \", __jsx(\"a\", {\n    href: \"https://github.com/TamHM1410\",\n    target: \"_blank\",\n    rel: \"noopener\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, \"TamHM1410\"), \";\"), __jsx(\"p\", {\n    className: _styles_ContactCode_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.line,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, \"\\xA0\\xA0\\xA0facebook:\", \" \", __jsx(\"a\", {\n    href: \"https://www.facebook.com/toilatam1410/\",\n    target: \"_blank\",\n    rel: \"noopener\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, \"Huynh Minh Tam\"), \";\"), __jsx(\"p\", {\n    className: _styles_ContactCode_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.line,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }, \"\\xA0\\xA0\\xA0instagram:\", \" \", __jsx(\"a\", {\n    href: \"https://www.instagram.com/hunhmihtmmm/\",\n    target: \"_blank\",\n    rel: \"noopener\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, \"Huynh Minh Tam\"), \";\"), __jsx(\"p\", {\n    className: _styles_ContactCode_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.line,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }\n  }, \"}\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactCode);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRhY3RDb2RlLmpzeD8wM2Y4Il0sIm5hbWVzIjpbIkNvbnRhY3RDb2RlIiwic3R5bGVzIiwiY29kZSIsImxpbmUiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsV0FBVyxHQUFHLE1BQU07QUFDeEIsU0FDRTtBQUFLLGFBQVMsRUFBRUMscUVBQU0sQ0FBQ0MsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFFRCxxRUFBTSxDQUFDRSxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUVGLHFFQUFNLENBQUNHLFNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsT0FERixFQUtFO0FBQUcsYUFBUyxFQUFFSCxxRUFBTSxDQUFDRSxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUMyQixHQUQzQixFQUVFO0FBQ0UsUUFBSSxFQUFDLGdDQURQO0FBRUUsVUFBTSxFQUFDLFFBRlQ7QUFHRSxPQUFHLEVBQUMsVUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZGLE1BTEYsRUFnQkU7QUFBRyxhQUFTLEVBQUVGLHFFQUFNLENBQUNFLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQzRCLEdBRDVCLEVBRUU7QUFBRyxRQUFJLEVBQUMsOEJBQVI7QUFBdUMsVUFBTSxFQUFDLFFBQTlDO0FBQXVELE9BQUcsRUFBQyxVQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLE1BaEJGLEVBd0JFO0FBQUcsYUFBUyxFQUFFRixxRUFBTSxDQUFDRSxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUM4QixHQUQ5QixFQUVFO0FBQ0UsUUFBSSxFQUFDLHdDQURQO0FBRUUsVUFBTSxFQUFDLFFBRlQ7QUFHRSxPQUFHLEVBQUMsVUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGLE1BeEJGLEVBbUNFO0FBQUcsYUFBUyxFQUFFRixxRUFBTSxDQUFDRSxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUMrQixHQUQvQixFQUVFO0FBQ0UsUUFBSSxFQUFDLHdDQURQO0FBRUUsVUFBTSxFQUFDLFFBRlQ7QUFHRSxPQUFHLEVBQUMsVUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGLE1BbkNGLEVBMkVFO0FBQUcsYUFBUyxFQUFFRixxRUFBTSxDQUFDRSxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBM0VGLENBREY7QUErRUQsQ0FoRkQ7O0FBa0ZlSCwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ29udGFjdENvZGUuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0NvbnRhY3RDb2RlLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgQ29udGFjdENvZGUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2RlfT5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmxpbmV9PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jbGFzc05hbWV9Pi5zb2NpYWxzPC9zcGFuPiAmIzEyMztcbiAgICAgIDwvcD5cbiAgICBcbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmxpbmV9PlxuICAgICAgICAmbmJzcDsmbmJzcDsmbmJzcDtlbWFpbDp7XCIgXCJ9XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cIm1haWx0bzpodW5obWluaHRhbUA9QGdtYWlsLmNvbVwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lclwiXG4gICAgICAgID5cbiAgICAgICAgICBodW5obWluaHRhbUBnbWFpbC5jb21cbiAgICAgICAgPC9hPlxuICAgICAgICA7XG4gICAgICA8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5saW5lfT5cbiAgICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7Z2l0aHViOntcIiBcIn1cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9UYW1ITTE0MTBcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPlxuICAgICAgICAgIFRhbUhNMTQxMFxuICAgICAgICA8L2E+XG4gICAgICAgIDtcbiAgICAgIDwvcD5cbiAgICAgXG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5saW5lfT5cbiAgICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7ZmFjZWJvb2s6e1wiIFwifVxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vdG9pbGF0YW0xNDEwL1wiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lclwiXG4gICAgICAgID5cbiAgICAgICAgICBIdXluaCBNaW5oIFRhbVxuICAgICAgICA8L2E+XG4gICAgICAgIDtcbiAgICAgIDwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmxpbmV9PlxuICAgICAgICAmbmJzcDsmbmJzcDsmbmJzcDtpbnN0YWdyYW06e1wiIFwifVxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2h1bmhtaWh0bW1tL1wiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lclwiXG4gICAgICAgID5cbiAgICAgICAgICBIdXluaCBNaW5oIFRhbVxuICAgICAgICA8L2E+XG4gICAgICAgIDtcbiAgICAgIDwvcD5cbiAgICAgIHsvKiA8cCBjbGFzc05hbWU9e3N0eWxlcy5saW5lfT5cbiAgICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7aW5zdGFncmFtOntcIiBcIn1cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9oYW16YWphZmZhclwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lclwiXG4gICAgICAgID5cbiAgICAgICAgICBIYW16YSBKYWZmYXJcbiAgICAgICAgPC9hPlxuICAgICAgICA7XG4gICAgICA8L3A+ICovfVxuICAgICAgey8qIDxwIGNsYXNzTmFtZT17c3R5bGVzLmxpbmV9PlxuICAgICAgICAmbmJzcDsmbmJzcDtjb2RlcGVuOntcIiBcIn1cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vY29kZXBlbi5pby9oYW16YXphaWRpXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj5cbiAgICAgICAgICBIYW16YSBaYWlkaVxuICAgICAgICA8L2E+XG4gICAgICAgIDtcbiAgICAgIDwvcD4gKi99XG4gICAgICB7LyogPHAgY2xhc3NOYW1lPXtzdHlsZXMubGluZX0+XG4gICAgICAgICZuYnNwOyZuYnNwO2NvZGVzYW5kYm94OntcIiBcIn1cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby91L2hhbXphemFpZGlcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgSGFtemEgWmFpZGlcbiAgICAgICAgPC9hPlxuICAgICAgICA7XG4gICAgICA8L3A+ICovfVxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubGluZX0+JiMxMjU7PC9wPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdENvZGU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ContactCode.jsx\n");

/***/ }),

/***/ "./pages/contact.jsx":
/*!***************************!*\
  !*** ./pages/contact.jsx ***!
  \***************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ContactCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ContactCode */ \"./components/ContactCode.jsx\");\n/* harmony import */ var _styles_ContactPage_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/ContactPage.module.css */ \"./styles/ContactPage.module.css\");\n/* harmony import */ var _styles_ContactPage_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_ContactPage_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/webbythien/portfolio/pages/contact.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst ContactPage = () => {\n  const {\n    0: name,\n    1: setName\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: email,\n    1: setEmail\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: subject,\n    1: setSubject\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: message,\n    1: setMessage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n\n  const submitForm = async e => {\n    e.preventDefault();\n  };\n\n  return __jsx(\"div\", {\n    className: _styles_ContactPage_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, \"Reach Out Via Socials\"), __jsx(_components_ContactCode__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, \"Or Fill Out The Form\"), __jsx(\"form\", {\n    className: _styles_ContactPage_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.form,\n    onSubmit: submitForm,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _styles_ContactPage_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.flex,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"name\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 15\n    }\n  }, \"Name\"), __jsx(\"input\", {\n    type: \"text\",\n    name: \"name\",\n    id: \"name\",\n    value: name,\n    onChange: e => setName(e.target.value),\n    required: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 15\n    }\n  })), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"email\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 15\n    }\n  }, \"Email\"), __jsx(\"input\", {\n    type: \"email\",\n    name: \"email\",\n    id: \"email\",\n    value: email,\n    onChange: e => setEmail(e.target.value),\n    required: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 15\n    }\n  }))), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"name\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }, \"Subject\"), __jsx(\"input\", {\n    type: \"text\",\n    name: \"subject\",\n    id: \"subject\",\n    value: subject,\n    onChange: e => setSubject(e.target.value),\n    required: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"message\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }\n  }, \"Message\"), __jsx(\"textarea\", {\n    name: \"message\",\n    id: \"message\",\n    rows: \"5\",\n    value: message,\n    onChange: e => setMessage(e.target.value),\n    required: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }\n  })), __jsx(\"button\", {\n    type: \"submit\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 11\n    }\n  }, \"Submit\"))));\n};\n\nasync function getStaticProps() {\n  return {\n    props: {\n      title: 'Contact'\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWN0LmpzeD84NDAyIl0sIm5hbWVzIjpbIkNvbnRhY3RQYWdlIiwibmFtZSIsInNldE5hbWUiLCJ1c2VTdGF0ZSIsImVtYWlsIiwic2V0RW1haWwiLCJzdWJqZWN0Iiwic2V0U3ViamVjdCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwic3VibWl0Rm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0eWxlcyIsImNvbnRhaW5lciIsImZvcm0iLCJmbGV4IiwidGFyZ2V0IiwidmFsdWUiLCJnZXRTdGF0aWNQcm9wcyIsInByb3BzIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsV0FBVyxHQUFHLE1BQU07QUFDeEIsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQyxzREFBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JGLHNEQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDRyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3Qkosc0RBQVEsQ0FBQyxFQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCTixzREFBUSxDQUFDLEVBQUQsQ0FBdEM7O0FBRUEsUUFBTU8sVUFBVSxHQUFHLE1BQU9DLENBQVAsSUFBYTtBQUM5QkEsS0FBQyxDQUFDQyxjQUFGO0FBRUQsR0FIRDs7QUFLQSxTQUNFO0FBQUssYUFBUyxFQUFFQyxxRUFBTSxDQUFDQyxTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsRUFFRSxNQUFDLCtEQUFE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IjoiLi9wYWdlcy9jb250YWN0LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbnRhY3RDb2RlIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFjdENvZGUnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQ29udGFjdFBhZ2UubW9kdWxlLmNzcyc7XG5cbmNvbnN0IENvbnRhY3RQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc3ViamVjdCwgc2V0U3ViamVjdF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBzdWJtaXRGb3JtID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+UmVhY2ggT3V0IFZpYSBTb2NpYWxzPC9oMT5cbiAgICAgICAgPENvbnRhY3RDb2RlIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5PciBGaWxsIE91dCBUaGUgRm9ybTwvaDE+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmZvcm19IG9uU3VibWl0PXtzdWJtaXRGb3JtfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsZXh9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5TdWJqZWN0PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJzdWJqZWN0XCJcbiAgICAgICAgICAgICAgaWQ9XCJzdWJqZWN0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e3N1YmplY3R9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3ViamVjdChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIj5NZXNzYWdlPC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgIGlkPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgIHJvd3M9XCI1XCJcbiAgICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgdGl0bGU6ICdDb250YWN0JyB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0UGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/contact.jsx\n");

/***/ }),

/***/ "./styles/ContactCode.module.css":
/*!***************************************!*\
  !*** ./styles/ContactCode.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"code\": \"ContactCode_code__2-oxK\",\n\t\"line\": \"ContactCode_line__31dPs\",\n\t\"className\": \"ContactCode_className__35DJe\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvQ29udGFjdENvZGUubW9kdWxlLmNzcz85ZWI1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3N0eWxlcy9Db250YWN0Q29kZS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29kZVwiOiBcIkNvbnRhY3RDb2RlX2NvZGVfXzItb3hLXCIsXG5cdFwibGluZVwiOiBcIkNvbnRhY3RDb2RlX2xpbmVfXzMxZFBzXCIsXG5cdFwiY2xhc3NOYW1lXCI6IFwiQ29udGFjdENvZGVfY2xhc3NOYW1lX18zNURKZVwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/ContactCode.module.css\n");

/***/ }),

/***/ "./styles/ContactPage.module.css":
/*!***************************************!*\
  !*** ./styles/ContactPage.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"ContactPage_container__Fp6vi\",\n\t\"flex\": \"ContactPage_flex__24e_V\",\n\t\"form\": \"ContactPage_form__1sdBP\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvQ29udGFjdFBhZ2UubW9kdWxlLmNzcz9kYzUzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3N0eWxlcy9Db250YWN0UGFnZS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiQ29udGFjdFBhZ2VfY29udGFpbmVyX19GcDZ2aVwiLFxuXHRcImZsZXhcIjogXCJDb250YWN0UGFnZV9mbGV4X18yNGVfVlwiLFxuXHRcImZvcm1cIjogXCJDb250YWN0UGFnZV9mb3JtX18xc2RCUFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/ContactPage.module.css\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });