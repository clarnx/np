"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/id-generator",{

/***/ "./pages/id-generator/index.js":
/*!*************************************!*\
  !*** ./pages/id-generator/index.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar idGenerator = function() {\n    _s();\n    var ref = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)(), register = ref.register, errors = ref.formState.errors, handleSubmit = ref.handleSubmit;\n    var codes = [\n        'a',\n        'b',\n        'c',\n        'd',\n        'e',\n        'f',\n        'g',\n        'h',\n        'i',\n        'j',\n        'k',\n        'l',\n        'm',\n        'n',\n        'o',\n        'p',\n        'q',\n        'r',\n        's',\n        't',\n        'u',\n        'v',\n        'w',\n        'x',\n        'y',\n        'z',\n        '0',\n        '1',\n        '2',\n        '3',\n        '4',\n        '5',\n        '5',\n        '6',\n        '7',\n        '8',\n        '9'\n    ];\n    var submittedClickedHandler = function(data) {\n        var result = '';\n        for(var i = 0; i < 16; i++){\n            var car = codes[Math.floor(Math.random() * codes.length)];\n            result += car;\n            if (data.hyphens) {\n                if (i == 3 || i == 7 || i == 11) {\n                    result += '-';\n                }\n            }\n        }\n        if (data.majs) {\n            result = result.toLocaleUpperCase();\n        }\n        var result_input = document.getElementById('result');\n        result_input.value = result;\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Generateur d'ID\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pres\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"https://cdn-icons-png.flaticon.com/128/338/338903.png\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"title\",\n                                        children: \"Generateur d'ID\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                lineNumber: 43,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Vous pouvez choisir de mettre des tirets et des majuscules ou non.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                lineNumber: 47,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"arrow\",\n                        src: \"https://cdn-icons-png.flaticon.com/128/159/159694.png\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"block\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit(submittedClickedHandler),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"switchContainer\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    className: \"switch\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({}, register('majs'), {\n                                                            type: \"checkbox\"\n                                                        }), void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                                            lineNumber: 55,\n                                                            columnNumber: 37\n                                                        }, _this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"slider round\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                                            lineNumber: 56,\n                                                            columnNumber: 37\n                                                        }, _this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                                    lineNumber: 54,\n                                                    columnNumber: 33\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    children: \"Majuscules\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 33\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 29\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    className: \"switch\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({}, register('hyphens'), {\n                                                            type: \"checkbox\"\n                                                        }), void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                                            lineNumber: 62,\n                                                            columnNumber: 37\n                                                        }, _this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"slider round\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                                            lineNumber: 63,\n                                                            columnNumber: 37\n                                                        }, _this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 33\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    children: \"Tirets\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                                    lineNumber: 65,\n                                                    columnNumber: 33\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 29\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"resultandvalidContainer\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"resultContainer\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    children: \"R\\xe9sultat\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 33\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                            id: \"result\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                                            lineNumber: 73,\n                                                            columnNumber: 37\n                                                        }, _this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                            onClick: copyClickedHandler,\n                                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                                            height: \"32\",\n                                                            width: \"32\",\n                                                            fill: \"none\",\n                                                            viewBox: \"0 0 24 24\",\n                                                            stroke: \"currentColor\",\n                                                            strokeWidth: 2,\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                                strokeLinecap: \"round\",\n                                                                strokeLinejoin: \"round\",\n                                                                d: \"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z\"\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                                                lineNumber: 75,\n                                                                columnNumber: 41\n                                                            }, _this)\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                                            lineNumber: 74,\n                                                            columnNumber: 37\n                                                        }, _this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 33\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 29\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            children: \"Valider\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 29\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                            lineNumber: 51,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(idGenerator, \"cfIGL1EANfnB8Hl0UkQs2uxLTPk=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (idGenerator);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzNDLENBQUM7R0FqRktuRCxXQUFXOztRQUU2Q0Ysb0RBQU87OztBQWlGckUsK0RBQWVFLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pZC1nZW5lcmF0b3IvaW5kZXguanM/MGEwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcblxyXG5jb25zdCBpZEdlbmVyYXRvciA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB7IHJlZ2lzdGVyLCBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybSgpXHJcbiAgICBjb25zdCBjb2RlcyA9IFtcclxuICAgICAgICAnYScsICdiJywgJ2MnLCAnZCcsICdlJywgJ2YnLCAnZycsICdoJywgJ2knLCAnaicsICdrJywgJ2wnLCAnbScsICduJywgJ28nLCAncCcsXHJcbiAgICAgICAgJ3EnLCAncicsICdzJywgJ3QnLCAndScsICd2JywgJ3cnLCAneCcsICd5JywgJ3onLCAnMCcsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNScsICc2JywgJzcnLCAnOCcsICc5J11cclxuXHJcbiAgICBjb25zdCBzdWJtaXR0ZWRDbGlja2VkSGFuZGxlciA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9ICcnXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjYXIgPSBjb2Rlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2Rlcy5sZW5ndGgpXVxyXG4gICAgICAgICAgICByZXN1bHQgKz0gY2FyXHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YS5oeXBoZW5zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSAzIHx8IGkgPT0gNyB8fCBpID09IDExKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICctJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGF0YS5tYWpzKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC50b0xvY2FsZVVwcGVyQ2FzZSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZXN1bHRfaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0JylcclxuICAgICAgICByZXN1bHRfaW5wdXQudmFsdWUgPSByZXN1bHRcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkdlbmVyYXRldXIgZCdJRDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ByZXMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8xMjgvMzM4LzMzODkwMy5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0aXRsZSc+R2VuZXJhdGV1ciBkJ0lEPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5Wb3VzIHBvdXZleiBjaG9pc2lyIGRlIG1ldHRyZSBkZXMgdGlyZXRzIGV0IGRlcyBtYWp1c2N1bGVzIG91IG5vbi48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdhcnJvdycgc3JjPVwiaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8xMjgvMTU5LzE1OTY5NC5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2NrJz5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHN1Ym1pdHRlZENsaWNrZWRIYW5kbGVyKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzd2l0Y2hDb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInN3aXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgey4uLnJlZ2lzdGVyKCdtYWpzJyl9IHR5cGU9XCJjaGVja2JveFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlciByb3VuZFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5NYWp1c2N1bGVzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzd2l0Y2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHsuLi5yZWdpc3RlcignaHlwaGVucycpfSB0eXBlPVwiY2hlY2tib3hcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZXIgcm91bmRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VGlyZXRzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVzdWx0YW5kdmFsaWRDb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jlc3VsdENvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlLDqXN1bHRhdDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPSdyZXN1bHQnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgb25DbGljaz17Y29weUNsaWNrZWRIYW5kbGVyfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiMzJcIiB3aWR0aD0nMzInIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTggMTZINmEyIDIgMCAwMS0yLTJWNmEyIDIgMCAwMTItMmg4YTIgMiAwIDAxMiAydjJtLTYgMTJoOGEyIDIgMCAwMDItMnYtOGEyIDIgMCAwMC0yLTJoLThhMiAyIDAgMDAtMiAydjhhMiAyIDAgMDAyIDJ6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPlZhbGlkZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpZEdlbmVyYXRvcjsiXSwibmFtZXMiOlsiSGVhZCIsIlJlYWN0IiwidXNlRm9ybSIsInRvYXN0IiwiaWRHZW5lcmF0b3IiLCJyZWdpc3RlciIsImVycm9ycyIsImZvcm1TdGF0ZSIsImhhbmRsZVN1Ym1pdCIsImNvZGVzIiwic3VibWl0dGVkQ2xpY2tlZEhhbmRsZXIiLCJkYXRhIiwicmVzdWx0IiwiaSIsImNhciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImh5cGhlbnMiLCJtYWpzIiwidG9Mb2NhbGVVcHBlckNhc2UiLCJyZXN1bHRfaW5wdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJ0aXRsZSIsIm1haW4iLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJoMSIsInAiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInNwYW4iLCJpZCIsInN2ZyIsIm9uQ2xpY2siLCJjb3B5Q2xpY2tlZEhhbmRsZXIiLCJ4bWxucyIsImhlaWdodCIsIndpZHRoIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJkIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/id-generator/index.js\n");

/***/ })

});