webpackHotUpdate_N_E("pages/projects",{

/***/ "./components/ProjectCard.jsx":
/*!************************************!*\
  !*** ./components/ProjectCard.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/ProjectCard.module.css */ \"./styles/ProjectCard.module.css\");\n/* harmony import */ var _styles_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/webbythien/portfolio/components/ProjectCard.jsx\",\n    _this = undefined;\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar ProjectCard = function ProjectCard(_ref) {\n  var project = _ref.project,\n      listImage = _ref.listImage;\n  return __jsx(\"div\", {\n    className: _styles_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    src: listImage,\n    height: 300,\n    width: 600,\n    alt: project.name,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _styles_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, project.name), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, project.description), __jsx(\"div\", {\n    className: _styles_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tags,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }, project.tags.map(function (tag) {\n    return __jsx(\"span\", {\n      key: tag,\n      className: tag,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 13\n      }\n    }, tag);\n  })), __jsx(\"div\", {\n    className: _styles_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cta,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, project.source_code && __jsx(\"a\", {\n    href: project.source_code,\n    target: \"_blank\",\n    rel: \"noopener\",\n    className: _styles_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.underline,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }\n  }, \"Source Code\"), project.demo && __jsx(\"a\", {\n    href: project.demo,\n    target: \"_blank\",\n    rel: \"noopener\",\n    className: _styles_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.underline,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  }, \"Live Demo\"))));\n};\n\n_c = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC5qc3g/NTM5MyJdLCJuYW1lcyI6WyJQcm9qZWN0Q2FyZCIsInByb2plY3QiLCJsaXN0SW1hZ2UiLCJzdHlsZXMiLCJjYXJkIiwibmFtZSIsImNvbnRlbnQiLCJkZXNjcmlwdGlvbiIsInRhZ3MiLCJtYXAiLCJ0YWciLCJjdGEiLCJzb3VyY2VfY29kZSIsInVuZGVybGluZSIsImRlbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBMkI7QUFBQSxNQUF4QkMsT0FBd0IsUUFBeEJBLE9BQXdCO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUM3QyxTQUNFO0FBQUssYUFBUyxFQUFFQyxxRUFBTSxDQUFDQyxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpREFBRDtBQUFPLE9BQUcsRUFBRUYsU0FBWjtBQUF1QixVQUFNLEVBQUUsR0FBL0I7QUFBb0MsU0FBSyxFQUFFLEdBQTNDO0FBQWdELE9BQUcsRUFBRUQsT0FBTyxDQUFDSSxJQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBRUYscUVBQU0sQ0FBQ0csT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0wsT0FBTyxDQUFDSSxJQUFiLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlKLE9BQU8sQ0FBQ00sV0FBWixDQUZGLEVBR0U7QUFBSyxhQUFTLEVBQUVKLHFFQUFNLENBQUNLLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1AsT0FBTyxDQUFDTyxJQUFSLENBQWFDLEdBQWIsQ0FBaUIsVUFBQ0MsR0FBRDtBQUFBLFdBQ2hCO0FBQU0sU0FBRyxFQUFFQSxHQUFYO0FBQWdCLGVBQVMsRUFBRUEsR0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHQSxHQURILENBRGdCO0FBQUEsR0FBakIsQ0FESCxDQUhGLEVBVUU7QUFBSyxhQUFTLEVBQUVQLHFFQUFNLENBQUNRLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1YsT0FBTyxDQUFDVyxXQUFSLElBQ0M7QUFDRSxRQUFJLEVBQUVYLE9BQU8sQ0FBQ1csV0FEaEI7QUFFRSxVQUFNLEVBQUMsUUFGVDtBQUdFLE9BQUcsRUFBQyxVQUhOO0FBSUUsYUFBUyxFQUFFVCxxRUFBTSxDQUFDVSxTQUpwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLEVBV0daLE9BQU8sQ0FBQ2EsSUFBUixJQUNEO0FBQ0UsUUFBSSxFQUFFYixPQUFPLENBQUNhLElBRGhCO0FBRUUsVUFBTSxFQUFDLFFBRlQ7QUFHRSxPQUFHLEVBQUMsVUFITjtBQUlFLGFBQVMsRUFBRVgscUVBQU0sQ0FBQ1UsU0FKcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaRixDQVZGLENBRkYsQ0FERjtBQXFDRCxDQXRDRDs7S0FBTWIsVztBQXdDU0EsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RDYXJkLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1Byb2plY3RDYXJkLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBQcm9qZWN0Q2FyZCA9ICh7IHByb2plY3QsbGlzdEltYWdlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgPEltYWdlIHNyYz17bGlzdEltYWdlfSBoZWlnaHQ9ezMwMH0gd2lkdGg9ezYwMH0gYWx0PXtwcm9qZWN0Lm5hbWV9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxuICAgICAgICA8aDM+e3Byb2plY3QubmFtZX08L2gzPlxuICAgICAgICA8cD57cHJvamVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFnc30+XG4gICAgICAgICAge3Byb2plY3QudGFncy5tYXAoKHRhZykgPT4gKFxuICAgICAgICAgICAgPHNwYW4ga2V5PXt0YWd9IGNsYXNzTmFtZT17dGFnfT5cbiAgICAgICAgICAgICAge3RhZ31cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3RhfT5cbiAgICAgICAgICB7cHJvamVjdC5zb3VyY2VfY29kZSAmJiAoXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPXtwcm9qZWN0LnNvdXJjZV9jb2RlfVxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lclwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnVuZGVybGluZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU291cmNlIENvZGVcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtwcm9qZWN0LmRlbW8gJiYgXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9e3Byb2plY3QuZGVtb31cbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy51bmRlcmxpbmV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTGl2ZSBEZW1vXG4gICAgICAgICAgPC9hPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RDYXJkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProjectCard.jsx\n");

/***/ })

})