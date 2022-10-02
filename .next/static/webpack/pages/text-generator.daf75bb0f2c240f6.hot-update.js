"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/text-generator",{

/***/ "./pages/text-generator/index.js":
/*!***************************************!*\
  !*** ./pages/text-generator/index.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var speech_code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! speech-code */ \"./node_modules/speech-code/index.js\");\n/* harmony import */ var speech_code__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(speech_code__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Components_CopyButton_CopyButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Components/CopyButton/CopyButton */ \"./Components/CopyButton/CopyButton.js\");\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar idGenerator = function() {\n    _s();\n    var ref = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)(), register = ref.register, errors = ref.formState.errors, handleSubmit = ref.handleSubmit;\n    var submittedClickedHandler = function(data) {\n        var result = '';\n        if (data.type == 'Paragraphes') {\n            for(var i = 0; i < data.genNumber; i++){\n                result += \"\".concat((0,speech_code__WEBPACK_IMPORTED_MODULE_5__.getParagraph)(1 + Math.round(Math.random(0, 3)), 'en'), \" \\n\");\n            }\n        } else if (data.type == 'Textes') {\n            for(var i1 = 0; i1 < data.genNumber; i1++){\n                result += \"\".concat((0,speech_code__WEBPACK_IMPORTED_MODULE_5__.getText)(), \" \\n\");\n            }\n        } else if (data.type == 'Phrases') {\n            for(var i2 = 0; i2 < data.genNumber; i2++){\n                result += \"\".concat((0,speech_code__WEBPACK_IMPORTED_MODULE_5__.getSentence)('en'));\n            }\n        }\n        var result_input = document.getElementById('result');\n        result_input.value = result;\n    };\n    var copyClickedHandler = function() {\n        var editor = document.getElementById('result');\n        editor.select();\n        document.execCommand('copy', false, editor.value);\n        react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success('Resultat copi\\xe9 !');\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Generateur de texte\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\text-generator\\\\index.js\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\text-generator\\\\index.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pres\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"https://cdn-icons-png.flaticon.com/128/2911/2911230.png\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\text-generator\\\\index.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"title\",\n                                        children: \"Generateur de texte\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\text-generator\\\\index.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\text-generator\\\\index.js\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Un g\\xe9n\\xe9rateur de textes est tr\\xe8s pratique pour simuler du texte. Choisissez de g\\xe9n\\xe9rer des paragraphes, des phrases, ou des textes complets.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\text-generator\\\\index.js\",\n                                lineNumber: 57,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\text-generator\\\\index.js\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"arrow\",\n                        src: \"https://cdn-icons-png.flaticon.com/128/159/159694.png\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\text-generator\\\\index.js\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"block\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit(submittedClickedHandler),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            children: \"Nombre de generations\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\text-generator\\\\index.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 29\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({}, register('genNumber'), {\n                                            type: \"number\"\n                                        }), void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\text-generator\\\\index.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 29\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\text-generator\\\\index.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Type de generation\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\text-generator\\\\index.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 29\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\text-generator\\\\index.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", _objectSpread({}, register('type'), {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                children: \"Paragraphes\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\text-generator\\\\index.js\",\n                                                lineNumber: 71,\n                                                columnNumber: 33\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                children: \"Phrases\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\text-generator\\\\index.js\",\n                                                lineNumber: 72,\n                                                columnNumber: 33\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                children: \"Textes\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\text-generator\\\\index.js\",\n                                                lineNumber: 73,\n                                                columnNumber: 33\n                                            }, _this)\n                                        ]\n                                    }), void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\text-generator\\\\index.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 29\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\text-generator\\\\index.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"resultandvalidContainer\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"resultContainer\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    children: \"R\\xe9sultat\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\text-generator\\\\index.js\",\n                                                    lineNumber: 79,\n                                                    columnNumber: 33\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                                            id: \"result\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\text-generator\\\\index.js\",\n                                                            lineNumber: 81,\n                                                            columnNumber: 37\n                                                        }, _this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_CopyButton_CopyButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\text-generator\\\\index.js\",\n                                                            lineNumber: 82,\n                                                            columnNumber: 37\n                                                        }, _this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\text-generator\\\\index.js\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 33\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\text-generator\\\\index.js\",\n                                            lineNumber: 78,\n                                            columnNumber: 29\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            children: \"Valider\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\text-generator\\\\index.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 29\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\text-generator\\\\index.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\text-generator\\\\index.js\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\text-generator\\\\index.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mikal\\\\OneDrive\\\\Bureau\\\\Nice Pencil\\\\pages\\\\text-generator\\\\index.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(idGenerator, \"cfIGL1EANfnB8Hl0UkQs2uxLTPk=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (idGenerator);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0dBQ2pGSCxDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBTzs4R0FDakJLLENBQUk7NEJBQUNDLFFBQVEsRUFBRTVCLFlBQVksQ0FBQ0MsdUJBQXVCOzs0R0FDL0N5QixDQUFDOztvSEFDR0csQ0FBSztzREFBQyxDQUFxQjs7Ozs7O29IQUMzQkMsQ0FBSywwQkFBS2pDLFFBQVEsQ0FBQyxDQUFXOzRDQUFHTyxJQUFJLEVBQUMsQ0FBUTs7Ozs7Ozs7Ozs7OzRHQUVsRHNCLENBQUM7MEhBQ0dHLENBQUs7a0RBQUMsQ0FBa0I7Ozs7Ozs7Ozs7OzRHQUU1QkgsQ0FBQzswSEFDR1YsQ0FBTSwyQkFBS25CLFFBQVEsQ0FBQyxDQUFNOzt3SEFDdEJrQyxDQUFNOzBEQUFDLENBQVc7Ozs7Ozt3SEFDbEJBLENBQU07MERBQUMsQ0FBTzs7Ozs7O3dIQUNkQSxDQUFNOzBEQUFDLENBQU07Ozs7Ozs7Ozs7Ozs7Ozs7OzRHQUlyQlYsQ0FBRztvQ0FBQ0MsU0FBUyxFQUFDLENBQXlCOztvSEFDbkNELENBQUc7NENBQUNDLFNBQVMsRUFBQyxDQUFpQjs7NEhBQzNCTyxDQUFLOzhEQUFDLENBQVE7Ozs7Ozs0SEFDZFIsQ0FBRzs7b0lBQ0NXLENBQVE7NERBQUNDLEVBQUUsRUFBQyxDQUFROzs7Ozs7b0lBQ3BCdEMseUVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O29IQUlsQnVDLENBQU07c0RBQUMsQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8zQyxDQUFDO0dBckZLdEMsV0FBVzs7UUFFNkNQLG9EQUFPOzs7QUFxRnJFLCtEQUFlTyxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGV4dC1nZW5lcmF0b3IvaW5kZXguanM/NTFmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCB7IGdldFRleHQsIGdldFBhcmFncmFwaCwgZ2V0U2VudGVuY2UsIGdldENoYXJhY3RlcnMgfSBmcm9tICdzcGVlY2gtY29kZSdcclxuaW1wb3J0IENvcHlCdXR0b24gZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9Db3B5QnV0dG9uL0NvcHlCdXR0b24nO1xyXG5cclxuY29uc3QgaWRHZW5lcmF0b3IgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgeyByZWdpc3RlciwgZm9ybVN0YXRlOiB7IGVycm9ycyB9LCBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm0oKVxyXG5cclxuICAgIGNvbnN0IHN1Ym1pdHRlZENsaWNrZWRIYW5kbGVyID0gKGRhdGEpID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gJydcclxuXHJcbiAgICAgICAgaWYgKGRhdGEudHlwZSA9PSAnUGFyYWdyYXBoZXMnKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5nZW5OdW1iZXI7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IGAke2dldFBhcmFncmFwaCgxICsgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgwLCAzKSksICdlbicpfSBcXG5gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2UgaWYgKGRhdGEudHlwZSA9PSAnVGV4dGVzJykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuZ2VuTnVtYmVyOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBgJHtnZXRUZXh0KCl9IFxcbmBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSBpZiAoZGF0YS50eXBlID09ICdQaHJhc2VzJykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuZ2VuTnVtYmVyOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBgJHtnZXRTZW50ZW5jZSgnZW4nKX1gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdF9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnKVxyXG4gICAgICAgIHJlc3VsdF9pbnB1dC52YWx1ZSA9IHJlc3VsdFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvcHlDbGlja2VkSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBlZGl0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0JylcclxuXHJcbiAgICAgICAgZWRpdG9yLnNlbGVjdCgpXHJcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknLCBmYWxzZSwgZWRpdG9yLnZhbHVlKVxyXG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoJ1Jlc3VsdGF0IGNvcGnDqSAhJylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkdlbmVyYXRldXIgZGUgdGV4dGU8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcmVzJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4LzI5MTEvMjkxMTIzMC5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0aXRsZSc+R2VuZXJhdGV1ciBkZSB0ZXh0ZTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+VW4gZ8OpbsOpcmF0ZXVyIGRlIHRleHRlcyBlc3QgdHLDqHMgcHJhdGlxdWUgcG91ciBzaW11bGVyIGR1IHRleHRlLiBDaG9pc2lzc2V6IGRlIGfDqW7DqXJlciBkZXMgcGFyYWdyYXBoZXMsIGRlcyBwaHJhc2VzLCBvdSBkZXMgdGV4dGVzIGNvbXBsZXRzLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2Fycm93JyBzcmM9XCJodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC8xNTkvMTU5Njk0LnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvY2snPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoc3VibWl0dGVkQ2xpY2tlZEhhbmRsZXIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Tm9tYnJlIGRlIGdlbmVyYXRpb25zPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB7Li4ucmVnaXN0ZXIoJ2dlbk51bWJlcicpfSB0eXBlPSdudW1iZXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VHlwZSBkZSBnZW5lcmF0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgey4uLnJlZ2lzdGVyKCd0eXBlJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+UGFyYWdyYXBoZXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlBocmFzZXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlRleHRlczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZXN1bHRhbmR2YWxpZENvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVzdWx0Q29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UsOpc3VsdGF0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9J3Jlc3VsdCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvcHlCdXR0b24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+VmFsaWRlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlkR2VuZXJhdG9yOyJdLCJuYW1lcyI6WyJIZWFkIiwiUmVhY3QiLCJ1c2VGb3JtIiwidG9hc3QiLCJnZXRUZXh0IiwiZ2V0UGFyYWdyYXBoIiwiZ2V0U2VudGVuY2UiLCJnZXRDaGFyYWN0ZXJzIiwiQ29weUJ1dHRvbiIsImlkR2VuZXJhdG9yIiwicmVnaXN0ZXIiLCJlcnJvcnMiLCJmb3JtU3RhdGUiLCJoYW5kbGVTdWJtaXQiLCJzdWJtaXR0ZWRDbGlja2VkSGFuZGxlciIsImRhdGEiLCJyZXN1bHQiLCJ0eXBlIiwiaSIsImdlbk51bWJlciIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsInJlc3VsdF9pbnB1dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImNvcHlDbGlja2VkSGFuZGxlciIsImVkaXRvciIsInNlbGVjdCIsImV4ZWNDb21tYW5kIiwic3VjY2VzcyIsInRpdGxlIiwibWFpbiIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImgxIiwicCIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaW5wdXQiLCJvcHRpb24iLCJ0ZXh0YXJlYSIsImlkIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/text-generator/index.js\n");

/***/ })

});