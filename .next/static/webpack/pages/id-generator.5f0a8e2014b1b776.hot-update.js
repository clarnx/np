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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var _Components_CopyButton_CopyButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Components/CopyButton/CopyButton */ \"./Components/CopyButton/CopyButton.js\");\n/* harmony import */ var _Components_Result_Input_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Components/Result/Input/Input */ \"./Components/Result/Input/Input.js\");\n\n\n\n\n\n//comp\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar idGenerator = function() {\n    _s();\n    var ref = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)(), register = ref.register, errors = ref.formState.errors, handleSubmit = ref.handleSubmit;\n    var codes = [\n        'a',\n        'b',\n        'c',\n        'd',\n        'e',\n        'f',\n        'g',\n        'h',\n        'i',\n        'j',\n        'k',\n        'l',\n        'm',\n        'n',\n        'o',\n        'p',\n        'q',\n        'r',\n        's',\n        't',\n        'u',\n        'v',\n        'w',\n        'x',\n        'y',\n        'z',\n        '0',\n        '1',\n        '2',\n        '3',\n        '4',\n        '5',\n        '5',\n        '6',\n        '7',\n        '8',\n        '9'\n    ];\n    var submittedClickedHandler = function(data) {\n        var result = '';\n        for(var i = 0; i < 16; i++){\n            var car = codes[Math.floor(Math.random() * codes.length)];\n            result += car;\n            if (data.hyphens) {\n                if (i == 3 || i == 7 || i == 11) {\n                    result += '-';\n                }\n            }\n        }\n        if (data.majs) {\n            result = result.toLocaleUpperCase();\n        }\n        var result_input = document.getElementById('result');\n        result_input.value = result;\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Generateur d'ID\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pres\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"https://cdn-icons-png.flaticon.com/128/338/338903.png\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"title\",\n                                        children: \"Generateur d'ID\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                lineNumber: 47,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Vous pouvez choisir de mettre des tirets et des majuscules ou non.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                lineNumber: 51,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"arrow\",\n                        src: \"https://cdn-icons-png.flaticon.com/128/159/159694.png\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"block\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit(submittedClickedHandler),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"switchContainer\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    className: \"switch\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({}, register('majs'), {\n                                                            type: \"checkbox\"\n                                                        }), void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                                            lineNumber: 59,\n                                                            columnNumber: 37\n                                                        }, _this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"slider round\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                                            lineNumber: 60,\n                                                            columnNumber: 37\n                                                        }, _this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 33\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    children: \"Majuscules\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 33\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                            lineNumber: 57,\n                                            columnNumber: 29\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    className: \"switch\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({}, register('hyphens'), {\n                                                            type: \"checkbox\"\n                                                        }), void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                                            lineNumber: 66,\n                                                            columnNumber: 37\n                                                        }, _this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"slider round\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                                            lineNumber: 67,\n                                                            columnNumber: 37\n                                                        }, _this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                                    lineNumber: 65,\n                                                    columnNumber: 33\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    children: \"Tirets\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 33\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 29\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"resultandvalidContainer\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Result_Input_Input__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 29\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            children: \"Valider\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                            lineNumber: 76,\n                                            columnNumber: 29\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\id-generator\\\\index.js\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(idGenerator, \"cfIGL1EANfnB8Hl0UkQs2uxLTPk=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (idGenerator);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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M0IsWUFBWSxDQUFDRSx1QkFBdUI7OzRHQUMvQ2tCLENBQUc7b0NBQUNDLFNBQVMsRUFBQyxDQUFpQjs7b0hBQzNCSSxDQUFDOzs0SEFDR0csQ0FBSztvREFBQ1AsU0FBUyxFQUFDLENBQVE7O29JQUNwQlEsQ0FBSywwQkFBS2hDLFFBQVEsQ0FBQyxDQUFNOzREQUFHaUMsSUFBSSxFQUFDLENBQVU7Ozs7OztvSUFDM0NDLENBQUk7NERBQUNWLFNBQVMsRUFBQyxDQUFjOzs7Ozs7Ozs7Ozs7NEhBRWpDTyxDQUFLOzhEQUFDLENBQVU7Ozs7Ozs7Ozs7OztvSEFFcEJILENBQUM7OzRIQUNHRyxDQUFLO29EQUFDUCxTQUFTLEVBQUMsQ0FBUTs7b0lBQ3BCUSxDQUFLLDBCQUFLaEMsUUFBUSxDQUFDLENBQVM7NERBQUdpQyxJQUFJLEVBQUMsQ0FBVTs7Ozs7O29JQUM5Q0MsQ0FBSTs0REFBQ1YsU0FBUyxFQUFDLENBQWM7Ozs7Ozs7Ozs7Ozs0SEFFakNPLENBQUs7OERBQUMsQ0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRHQUlwQlIsQ0FBRztvQ0FBQ0MsU0FBUyxFQUFDLENBQXlCOztvSEFDbkMxQixzRUFBSzs7Ozs7b0hBRUxxQyxDQUFNO3NEQUFDLENBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPM0MsQ0FBQztHQXpFS3BDLFdBQVc7O1FBRTZDSixvREFBTzs7O0FBeUVyRSwrREFBZUksV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2lkLWdlbmVyYXRvci9pbmRleC5qcz8wYTA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuXHJcbi8vY29tcFxyXG5pbXBvcnQgQ29weUJ1dHRvbiBmcm9tICcuLi8uLi9Db21wb25lbnRzL0NvcHlCdXR0b24vQ29weUJ1dHRvbic7XHJcbmltcG9ydCBJbnB1dCBmcm9tICcuLi8uLi9Db21wb25lbnRzL1Jlc3VsdC9JbnB1dC9JbnB1dCdcclxuXHJcbmNvbnN0IGlkR2VuZXJhdG9yID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgcmVnaXN0ZXIsIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtKClcclxuICAgIGNvbnN0IGNvZGVzID0gW1xyXG4gICAgICAgICdhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZicsICdnJywgJ2gnLCAnaScsICdqJywgJ2snLCAnbCcsICdtJywgJ24nLCAnbycsICdwJyxcclxuICAgICAgICAncScsICdyJywgJ3MnLCAndCcsICd1JywgJ3YnLCAndycsICd4JywgJ3knLCAneicsICcwJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc1JywgJzYnLCAnNycsICc4JywgJzknXVxyXG5cclxuICAgIGNvbnN0IHN1Ym1pdHRlZENsaWNrZWRIYW5kbGVyID0gKGRhdGEpID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gJydcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhciA9IGNvZGVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvZGVzLmxlbmd0aCldXHJcbiAgICAgICAgICAgIHJlc3VsdCArPSBjYXJcclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhLmh5cGhlbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpID09IDMgfHwgaSA9PSA3IHx8IGkgPT0gMTEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJy0nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkYXRhLm1hanMpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnRvTG9jYWxlVXBwZXJDYXNlKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdF9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnKVxyXG4gICAgICAgIHJlc3VsdF9pbnB1dC52YWx1ZSA9IHJlc3VsdFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+R2VuZXJhdGV1ciBkJ0lEPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJlcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC8zMzgvMzM4OTAzLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RpdGxlJz5HZW5lcmF0ZXVyIGQnSUQ8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlZvdXMgcG91dmV6IGNob2lzaXIgZGUgbWV0dHJlIGRlcyB0aXJldHMgZXQgZGVzIG1hanVzY3VsZXMgb3Ugbm9uLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2Fycm93JyBzcmM9XCJodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC8xNTkvMTU5Njk0LnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvY2snPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoc3VibWl0dGVkQ2xpY2tlZEhhbmRsZXIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N3aXRjaENvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3dpdGNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB7Li4ucmVnaXN0ZXIoJ21hanMnKX0gdHlwZT1cImNoZWNrYm94XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGVyIHJvdW5kXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1hanVzY3VsZXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInN3aXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgey4uLnJlZ2lzdGVyKCdoeXBoZW5zJyl9IHR5cGU9XCJjaGVja2JveFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlciByb3VuZFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5UaXJldHM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZXN1bHRhbmR2YWxpZENvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPlZhbGlkZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpZEdlbmVyYXRvcjsiXSwibmFtZXMiOlsiSGVhZCIsIlJlYWN0IiwidXNlRm9ybSIsInRvYXN0IiwiQ29weUJ1dHRvbiIsIklucHV0IiwiaWRHZW5lcmF0b3IiLCJyZWdpc3RlciIsImVycm9ycyIsImZvcm1TdGF0ZSIsImhhbmRsZVN1Ym1pdCIsImNvZGVzIiwic3VibWl0dGVkQ2xpY2tlZEhhbmRsZXIiLCJkYXRhIiwicmVzdWx0IiwiaSIsImNhciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImh5cGhlbnMiLCJtYWpzIiwidG9Mb2NhbGVVcHBlckNhc2UiLCJyZXN1bHRfaW5wdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJ0aXRsZSIsIm1haW4iLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJoMSIsInAiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInNwYW4iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/id-generator/index.js\n");

/***/ })

});