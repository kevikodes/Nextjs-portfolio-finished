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

/***/ "./components/work/company-details.js":
/*!********************************************!*\
  !*** ./components/work/company-details.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar CompanyDetails = function(param) {\n    var activeCompany = param.activeCompany;\n    _s();\n    var style = {\n        wrapper: \"bg-violet rounded-2xl px-10 py-10 w-60 sm:w-72 mx-16 sm:mx-16 md:mx-32 md:w-80 lg4:w-96 xl:min-w-full xl:min-h-full\",\n        company: \"font-bold mb-2 text-7xl lg:text-6xl cursor-auto\",\n        position: \"mb-1 text-lg\",\n        dates: \"italic text-sm lg:text-7xl\",\n        list: \"text-sm lg:text-7xl mt-8 list-disc ml-5 z-30 cursor-auto\"\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined), company = ref[0], setCompany = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setCompany(activeCompany);\n    }, [\n        activeCompany\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: style.wrapper,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: style.company,\n                children: company === null || company === void 0 ? void 0 : company.name\n            }, void 0, false, {\n                fileName: \"/Users/kevin/github/nextjs-portfolio-youtube/components/work/company-details.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: style.position,\n                children: company === null || company === void 0 ? void 0 : company.position\n            }, void 0, false, {\n                fileName: \"/Users/kevin/github/nextjs-portfolio-youtube/components/work/company-details.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: style.dates,\n                children: [\n                    company === null || company === void 0 ? void 0 : company.startDate,\n                    \" - \",\n                    (company === null || company === void 0 ? void 0 : company.endDate) ? company === null || company === void 0 ? void 0 : company.endDate : \"Present\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevin/github/nextjs-portfolio-youtube/components/work/company-details.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevin/github/nextjs-portfolio-youtube/components/work/company-details.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this);\n};\n_s(CompanyDetails, \"jJZmbdFnZFNs6vZQXRn5ZO2Uq34=\");\n_c = CompanyDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CompanyDetails);\nvar _c;\n$RefreshReg$(_c, \"CompanyDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3dvcmsvY29tcGFueS1kZXRhaWxzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7OztBQUEyQztBQUUzQyxJQUFNRSxjQUFjLEdBQUcsZ0JBQXVCO1FBQXBCQyxhQUFhLFNBQWJBLGFBQWE7O0lBQ3JDLElBQU1DLEtBQUssR0FBRztRQUNaQyxPQUFPLEVBQUcscUhBQW1IO1FBQzdIQyxPQUFPLEVBQUcsaURBQStDO1FBQ3pEQyxRQUFRLEVBQUcsY0FBWTtRQUN2QkMsS0FBSyxFQUFHLDRCQUEwQjtRQUNsQ0MsSUFBSSxFQUFHLDBEQUF3RDtLQUNoRTtJQUVELElBQThCUixHQUFtQixHQUFuQkEsK0NBQVEsQ0FBQ1MsU0FBUyxDQUFDLEVBQTFDSixPQUFPLEdBQWdCTCxHQUFtQixHQUFuQyxFQUFFVSxVQUFVLEdBQUlWLEdBQW1CLEdBQXZCO0lBQzFCRCxnREFBUyxDQUFDLFdBQU07UUFDZFcsVUFBVSxDQUFDUixhQUFhLENBQUM7S0FDMUIsRUFBRTtRQUFDQSxhQUFhO0tBQUMsQ0FBQztJQUNuQixxQkFDRSw4REFBQ1MsS0FBRztRQUFDQyxTQUFTLEVBQUVULEtBQUssQ0FBQ0MsT0FBTzs7MEJBQzNCLDhEQUFDUyxHQUFDO2dCQUFDRCxTQUFTLEVBQUVULEtBQUssQ0FBQ0UsT0FBTzswQkFBR0EsT0FBTyxhQUFQQSxPQUFPLFdBQU0sR0FBYkEsS0FBQUEsQ0FBYSxHQUFiQSxPQUFPLENBQUVTLElBQUk7Ozs7O3FCQUFLOzBCQUNoRCw4REFBQ0QsR0FBQztnQkFBQ0QsU0FBUyxFQUFFVCxLQUFLLENBQUNHLFFBQVE7MEJBQUdELE9BQU8sYUFBUEEsT0FBTyxXQUFVLEdBQWpCQSxLQUFBQSxDQUFpQixHQUFqQkEsT0FBTyxDQUFFQyxRQUFROzs7OztxQkFBSzswQkFDckQsOERBQUNPLEdBQUM7Z0JBQUNELFNBQVMsRUFBRVQsS0FBSyxDQUFDSSxLQUFLOztvQkFDdEJGLE9BQU8sYUFBUEEsT0FBTyxXQUFXLEdBQWxCQSxLQUFBQSxDQUFrQixHQUFsQkEsT0FBTyxDQUFFVSxTQUFTO29CQUFDLEtBQUc7b0JBQUNWLENBQUFBLE9BQU8sYUFBUEEsT0FBTyxXQUFTLEdBQWhCQSxLQUFBQSxDQUFnQixHQUFoQkEsT0FBTyxDQUFFVyxPQUFPLElBQUdYLE9BQU8sYUFBUEEsT0FBTyxXQUFTLEdBQWhCQSxLQUFBQSxDQUFnQixHQUFoQkEsT0FBTyxDQUFFVyxPQUFPLEdBQUcsU0FBUzs7Ozs7O3FCQUNyRTs7Ozs7O2FBQ0EsQ0FDUDtDQUNGO0dBdEJLZixjQUFjO0FBQWRBLEtBQUFBLGNBQWM7QUF3QnBCLCtEQUFlQSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvd29yay9jb21wYW55LWRldGFpbHMuanM/ZTY4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IENvbXBhbnlEZXRhaWxzID0gKHsgYWN0aXZlQ29tcGFueSB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIHdyYXBwZXI6IGBiZy12aW9sZXQgcm91bmRlZC0yeGwgcHgtMTAgcHktMTAgdy02MCBzbTp3LTcyIG14LTE2IHNtOm14LTE2IG1kOm14LTMyIG1kOnctODAgbGc0OnctOTYgeGw6bWluLXctZnVsbCB4bDptaW4taC1mdWxsYCxcbiAgICBjb21wYW55OiBgZm9udC1ib2xkIG1iLTIgdGV4dC03eGwgbGc6dGV4dC02eGwgY3Vyc29yLWF1dG9gLFxuICAgIHBvc2l0aW9uOiBgbWItMSB0ZXh0LWxnYCxcbiAgICBkYXRlczogYGl0YWxpYyB0ZXh0LXNtIGxnOnRleHQtN3hsYCxcbiAgICBsaXN0OiBgdGV4dC1zbSBsZzp0ZXh0LTd4bCBtdC04IGxpc3QtZGlzYyBtbC01IHotMzAgY3Vyc29yLWF1dG9gLFxuICB9XG5cbiAgY29uc3QgW2NvbXBhbnksIHNldENvbXBhbnldID0gdXNlU3RhdGUodW5kZWZpbmVkKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldENvbXBhbnkoYWN0aXZlQ29tcGFueSlcbiAgfSwgW2FjdGl2ZUNvbXBhbnldKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS53cmFwcGVyfT5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUuY29tcGFueX0+e2NvbXBhbnk/Lm5hbWV9PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZS5wb3NpdGlvbn0+e2NvbXBhbnk/LnBvc2l0aW9ufTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUuZGF0ZXN9PlxuICAgICAgICB7Y29tcGFueT8uc3RhcnREYXRlfSAtIHtjb21wYW55Py5lbmREYXRlID8gY29tcGFueT8uZW5kRGF0ZSA6ICdQcmVzZW50J31cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wYW55RGV0YWlsc1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29tcGFueURldGFpbHMiLCJhY3RpdmVDb21wYW55Iiwic3R5bGUiLCJ3cmFwcGVyIiwiY29tcGFueSIsInBvc2l0aW9uIiwiZGF0ZXMiLCJsaXN0IiwidW5kZWZpbmVkIiwic2V0Q29tcGFueSIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJuYW1lIiwic3RhcnREYXRlIiwiZW5kRGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/work/company-details.js\n"));

/***/ })

});