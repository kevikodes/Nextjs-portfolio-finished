"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/shared/ProjectCard.js":
/*!******************************************!*\
  !*** ./components/shared/ProjectCard.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_Technologies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/Technologies */ \"./data/Technologies.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar ProjectCard = function(param) {\n    var project = param.project;\n    var style = {\n        wrapper: \"flex justify-around my-[4rem] w-full px-[15rem] gap-[3rem] \",\n        imageContainer: \"flex-1 group relative rounded-2xl transition-all duration-300 transform hover:scale-105 \",\n        image: \"rounded-2xl p-[2rem] m-[10rem]\",\n        detailsContainer: \"flex-1\",\n        projectTitle: \"mb-[1.4rem] text-2xl font-extrabold text-white leading-none\",\n        projectDescription: \"sm:w-4/5 mb-3 mt-1 text-4xl font-normal tracking-wide text-white leading-normal lg:leading-7\",\n        techIconsContainer: \"flex gap-[2rem] flex-wrap w-full \",\n        iconContainer: \"flex flex-col justify-center items-center text-center my-4\",\n        icon: \"mb-2 h-12\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: style.wrapper,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: style.imageContainer,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                width: 518,\n                height: 257,\n                objectFit: \"cover\",\n                src: project.img,\n                alt: project.name,\n                className: style.image\n            }, void 0, false, {\n                fileName: \"/Users/kevin/github/nextjs-portfolio-youtube/components/shared/ProjectCard.js\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/kevin/github/nextjs-portfolio-youtube/components/shared/ProjectCard.js\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/kevin/github/nextjs-portfolio-youtube/components/shared/ProjectCard.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, _this);\n};\n_c = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCard);\nvar _c;\n$RefreshReg$(_c, \"ProjectCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NoYXJlZC9Qcm9qZWN0Q2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUF5QjtBQUM2QjtBQUN4QjtBQUU5QixJQUFNRyxXQUFXLEdBQUcsZ0JBQWlCO1FBQWRDLE9BQU8sU0FBUEEsT0FBTztJQUM1QixJQUFNQyxLQUFLLEdBQUc7UUFDWkMsT0FBTyxFQUFHLDZEQUEyRDtRQUNyRUMsY0FBYyxFQUFHLDBGQUF3RjtRQUN6R0MsS0FBSyxFQUFHLGdDQUE4QjtRQUN0Q0MsZ0JBQWdCLEVBQUcsUUFBTTtRQUN6QkMsWUFBWSxFQUFHLDZEQUEyRDtRQUMxRUMsa0JBQWtCLEVBQUcsOEZBQTRGO1FBQ2pIQyxrQkFBa0IsRUFBRyxtQ0FBaUM7UUFDdERDLGFBQWEsRUFBRyw0REFBMEQ7UUFDMUVDLElBQUksRUFBRyxXQUFTO0tBQ2pCO0lBQ0QscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFFWCxLQUFLLENBQUNDLE9BQU87a0JBQzNCLDRFQUFDUyxLQUFHO1lBQUNDLFNBQVMsRUFBRVgsS0FBSyxDQUFDRSxjQUFjO3NCQUNsQyw0RUFBQ0wsbURBQUs7Z0JBQ0plLEtBQUssRUFBRSxHQUFHO2dCQUNWQyxNQUFNLEVBQUUsR0FBRztnQkFDWEMsU0FBUyxFQUFDLE9BQU87Z0JBQ2pCQyxHQUFHLEVBQUVoQixPQUFPLENBQUNpQixHQUFHO2dCQUNoQkMsR0FBRyxFQUFFbEIsT0FBTyxDQUFDbUIsSUFBSTtnQkFDakJQLFNBQVMsRUFBRVgsS0FBSyxDQUFDRyxLQUFLOzs7OztxQkFDdEI7Ozs7O2lCQUNFOzs7OzthQUNGLENBQ1A7Q0FDRjtBQTFCS0wsS0FBQUEsV0FBVztBQTRCakIsK0RBQWVBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvUHJvamVjdENhcmQuanM/Y2M2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB0ZWNobm9sb2dpZXMgfSBmcm9tICcuLi8uLi9kYXRhL1RlY2hub2xvZ2llcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuXG5jb25zdCBQcm9qZWN0Q2FyZCA9ICh7IHByb2plY3QgfSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICB3cmFwcGVyOiBgZmxleCBqdXN0aWZ5LWFyb3VuZCBteS1bNHJlbV0gdy1mdWxsIHB4LVsxNXJlbV0gZ2FwLVszcmVtXSBgLFxuICAgIGltYWdlQ29udGFpbmVyOiBgZmxleC0xIGdyb3VwIHJlbGF0aXZlIHJvdW5kZWQtMnhsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1IGAsXG4gICAgaW1hZ2U6IGByb3VuZGVkLTJ4bCBwLVsycmVtXSBtLVsxMHJlbV1gLFxuICAgIGRldGFpbHNDb250YWluZXI6IGBmbGV4LTFgLFxuICAgIHByb2plY3RUaXRsZTogYG1iLVsxLjRyZW1dIHRleHQtMnhsIGZvbnQtZXh0cmFib2xkIHRleHQtd2hpdGUgbGVhZGluZy1ub25lYCxcbiAgICBwcm9qZWN0RGVzY3JpcHRpb246IGBzbTp3LTQvNSBtYi0zIG10LTEgdGV4dC00eGwgZm9udC1ub3JtYWwgdHJhY2tpbmctd2lkZSB0ZXh0LXdoaXRlIGxlYWRpbmctbm9ybWFsIGxnOmxlYWRpbmctN2AsXG4gICAgdGVjaEljb25zQ29udGFpbmVyOiBgZmxleCBnYXAtWzJyZW1dIGZsZXgtd3JhcCB3LWZ1bGwgYCxcbiAgICBpY29uQ29udGFpbmVyOiBgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgbXktNGAsXG4gICAgaWNvbjogYG1iLTIgaC0xMmAsXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUud3JhcHBlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaW1hZ2VDb250YWluZXJ9PlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICB3aWR0aD17NTE4fVxuICAgICAgICAgIGhlaWdodD17MjU3fVxuICAgICAgICAgIG9iamVjdEZpdD0nY292ZXInXG4gICAgICAgICAgc3JjPXtwcm9qZWN0LmltZ31cbiAgICAgICAgICBhbHQ9e3Byb2plY3QubmFtZX1cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmltYWdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENhcmRcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInRlY2hub2xvZ2llcyIsIkltYWdlIiwiUHJvamVjdENhcmQiLCJwcm9qZWN0Iiwic3R5bGUiLCJ3cmFwcGVyIiwiaW1hZ2VDb250YWluZXIiLCJpbWFnZSIsImRldGFpbHNDb250YWluZXIiLCJwcm9qZWN0VGl0bGUiLCJwcm9qZWN0RGVzY3JpcHRpb24iLCJ0ZWNoSWNvbnNDb250YWluZXIiLCJpY29uQ29udGFpbmVyIiwiaWNvbiIsImRpdiIsImNsYXNzTmFtZSIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0Rml0Iiwic3JjIiwiaW1nIiwiYWx0IiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/shared/ProjectCard.js\n"));

/***/ })

});