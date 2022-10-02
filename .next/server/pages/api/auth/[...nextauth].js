"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers");

/***/ }),

/***/ "(api)/./helpers/auth.js":
/*!*************************!*\
  !*** ./helpers/auth.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"passwordHasher\": () => (/* binding */ passwordHasher),\n/* harmony export */   \"verifyPassword\": () => (/* binding */ verifyPassword)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function passwordHasher(password) {\n    return (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.hash)(password, 12);\n}\nasync function verifyPassword(password, hashedPassword) {\n    return await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.compare)(password, hashedPassword);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9oZWxwZXJzL2F1dGguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QztBQUVqQyxlQUFlRSxjQUFjLENBQUNDLFFBQVEsRUFBRSxDQUFDO0lBQzVDLE1BQU0sQ0FBQ0gsOENBQUksQ0FBQ0csUUFBUSxFQUFFLEVBQUU7QUFDNUIsQ0FBQztBQUVNLGVBQWVDLGNBQWMsQ0FBQ0QsUUFBUSxFQUFFRSxjQUFjLEVBQUUsQ0FBQztJQUM1RCxNQUFNLENBQUMsS0FBSyxDQUFDSixpREFBTyxDQUFDRSxRQUFRLEVBQUVFLGNBQWM7QUFDakQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0ZXJraXQtbmV4dC8uL2hlbHBlcnMvYXV0aC5qcz8xYTUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhc2gsIGNvbXBhcmUgfSBmcm9tICdiY3J5cHRqcyc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGFzc3dvcmRIYXNoZXIocGFzc3dvcmQpIHtcclxuICAgIHJldHVybiBoYXNoKHBhc3N3b3JkLCAxMilcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeVBhc3N3b3JkKHBhc3N3b3JkLCBoYXNoZWRQYXNzd29yZCkge1xyXG4gICAgcmV0dXJuIGF3YWl0IGNvbXBhcmUocGFzc3dvcmQsIGhhc2hlZFBhc3N3b3JkKTtcclxufSJdLCJuYW1lcyI6WyJoYXNoIiwiY29tcGFyZSIsInBhc3N3b3JkSGFzaGVyIiwicGFzc3dvcmQiLCJ2ZXJpZnlQYXNzd29yZCIsImhhc2hlZFBhc3N3b3JkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./helpers/auth.js\n");

/***/ }),

/***/ "(api)/./helpers/mongodb.js":
/*!****************************!*\
  !*** ./helpers/mongodb.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectToDB\": () => (/* binding */ connectToDB)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectToDB() {\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(`mongodb+srv://${\"\"}:${\"\"}@cluster0.ybqjg.mongodb.net/${\"\"}?retryWrites=true&w=majority`);\n    return client;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9oZWxwZXJzL21vbmdvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFDO0FBRTlCLGVBQWVDLFdBQVcsR0FBRyxDQUFDO0lBQ2pDLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEtBQUssQ0FBQ0Ysd0RBQW1CLEVBQ25DLGNBQWMsRUFBRUksRUFBb0IsQ0FBQyxDQUFDLEVBQUVBLEVBQW9CLENBQUMsNEJBQTRCLEVBQUVBLEVBQWdCLENBQUMsNEJBQTRCO0lBRzdJLE1BQU0sQ0FBQ0YsTUFBTTtBQUNqQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcnRlcmtpdC1uZXh0Ly4vaGVscGVycy9tb25nb2RiLmpzPzdmOWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJ1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0RCKCkge1xyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgICAgICBgbW9uZ29kYitzcnY6Ly8ke3Byb2Nlc3MuZW52LnVzZXJuYW1lfToke3Byb2Nlc3MuZW52LnBhc3N3b3JkfUBjbHVzdGVyMC55YnFqZy5tb25nb2RiLm5ldC8ke3Byb2Nlc3MuZW52Lm5hbWV9P3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eWBcclxuICAgIClcclxuXHJcbiAgICByZXR1cm4gY2xpZW50XHJcbn0iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJjb25uZWN0VG9EQiIsImNsaWVudCIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./helpers/mongodb.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/mongodb */ \"(api)/./helpers/mongodb.js\");\n/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/auth */ \"(api)/./helpers/auth.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Credentials({\n            async authorize (credentials) {\n                const { email , password  } = credentials;\n                const clientMongoDB = await (0,_helpers_mongodb__WEBPACK_IMPORTED_MODULE_2__.connectToDB)();\n                const db = clientMongoDB.db();\n                const user = await db.collection('users').findOne({\n                    email: email\n                });\n                if (!user) {\n                    clientMongoDB.close();\n                    throw new Error('Utilisateur introuvable');\n                }\n                const valid = await (0,_helpers_auth__WEBPACK_IMPORTED_MODULE_3__.verifyPassword)(password, user.password);\n                if (!valid) {\n                    clientMongoDB.close();\n                    throw new Error('Mot de passe incorrect');\n                }\n                clientMongoDB.close();\n                return {\n                    email: user.email,\n                    name: user.pseudo,\n                    image: user.photo,\n                    id: user._id\n                };\n            }\n        })\n    ],\n    callbacks: {\n        jwt: async (token, user)=>{\n            user && (token.user = user);\n            return token;\n        },\n        session: (session, user)=>{\n            session.user = user.user;\n            return user;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0M7QUFDVztBQUNXO0FBQ0E7QUFFdEQsaUVBQWVBLGdEQUFRLENBQUMsQ0FBQztJQUNyQkksU0FBUyxFQUFFLENBQUM7UUFDUkgsc0VBQXFCLENBQUMsQ0FBQztrQkFDYkssU0FBUyxFQUFDQyxXQUFXLEVBQUUsQ0FBQztnQkFDMUIsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxHQUFFQyxRQUFRLEVBQUMsQ0FBQyxHQUFHRixXQUFXO2dCQUV2QyxLQUFLLENBQUNHLGFBQWEsR0FBRyxLQUFLLENBQUNSLDZEQUFXO2dCQUN2QyxLQUFLLENBQUNTLEVBQUUsR0FBR0QsYUFBYSxDQUFDQyxFQUFFO2dCQUUzQixLQUFLLENBQUNDLElBQUksR0FBRyxLQUFLLENBQUNELEVBQUUsQ0FBQ0UsVUFBVSxDQUFDLENBQU8sUUFBRUMsT0FBTyxDQUFDLENBQUM7b0JBQUNOLEtBQUssRUFBRUEsS0FBSztnQkFBQyxDQUFDO2dCQUVsRSxFQUFFLEdBQUdJLElBQUksRUFBRSxDQUFDO29CQUNSRixhQUFhLENBQUNLLEtBQUs7b0JBQ25CLEtBQUssQ0FBQyxHQUFHLENBQUNDLEtBQUssQ0FBQyxDQUF5QjtnQkFDN0MsQ0FBQztnQkFFRCxLQUFLLENBQUNDLEtBQUssR0FBRyxLQUFLLENBQUNkLDZEQUFjLENBQUNNLFFBQVEsRUFBRUcsSUFBSSxDQUFDSCxRQUFRO2dCQUUxRCxFQUFFLEdBQUdRLEtBQUssRUFBRSxDQUFDO29CQUNUUCxhQUFhLENBQUNLLEtBQUs7b0JBQ25CLEtBQUssQ0FBQyxHQUFHLENBQUNDLEtBQUssQ0FBQyxDQUF3QjtnQkFDNUMsQ0FBQztnQkFFRE4sYUFBYSxDQUFDSyxLQUFLO2dCQUNuQixNQUFNLENBQUMsQ0FBQztvQkFDSlAsS0FBSyxFQUFFSSxJQUFJLENBQUNKLEtBQUs7b0JBQ2pCVSxJQUFJLEVBQUVOLElBQUksQ0FBQ08sTUFBTTtvQkFDakJDLEtBQUssRUFBRVIsSUFBSSxDQUFDUyxLQUFLO29CQUNqQkMsRUFBRSxFQUFFVixJQUFJLENBQUNXLEdBQUc7Z0JBQ2hCLENBQUM7WUFFTCxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFDREMsU0FBUyxFQUFFLENBQUM7UUFDUkMsR0FBRyxTQUFTQyxLQUFLLEVBQUVkLElBQUksR0FBSyxDQUFDO1lBQ3pCQSxJQUFJLEtBQUtjLEtBQUssQ0FBQ2QsSUFBSSxHQUFHQSxJQUFJO1lBQzFCLE1BQU0sQ0FBQ2MsS0FBSztRQUNoQixDQUFDO1FBQ0RDLE9BQU8sR0FBR0EsT0FBTyxFQUFFZixJQUFJLEdBQUssQ0FBQztZQUN6QmUsT0FBTyxDQUFDZixJQUFJLEdBQUdBLElBQUksQ0FBQ0EsSUFBSTtZQUN4QixNQUFNLENBQUNBLElBQUk7UUFDZixDQUFDO0lBQ0wsQ0FBQztBQUNMLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0ZXJraXQtbmV4dC8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMnXHJcbmltcG9ydCB7IGNvbm5lY3RUb0RCIH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvbW9uZ29kYlwiO1xyXG5pbXBvcnQgeyB2ZXJpZnlQYXNzd29yZCB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvYXV0aCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIFByb3ZpZGVycy5DcmVkZW50aWFscyh7XHJcbiAgICAgICAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IGNyZWRlbnRpYWxzXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xpZW50TW9uZ29EQiA9IGF3YWl0IGNvbm5lY3RUb0RCKClcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRiID0gY2xpZW50TW9uZ29EQi5kYigpXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykuZmluZE9uZSh7IGVtYWlsOiBlbWFpbCB9KVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudE1vbmdvREIuY2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVXRpbGlzYXRldXIgaW50cm91dmFibGUnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkID0gYXdhaXQgdmVyaWZ5UGFzc3dvcmQocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF2YWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudE1vbmdvREIuY2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTW90IGRlIHBhc3NlIGluY29ycmVjdCcpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY2xpZW50TW9uZ29EQi5jbG9zZSgpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHVzZXIucHNldWRvLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiB1c2VyLnBob3RvLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB1c2VyLl9pZCxcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgXSxcclxuICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgIGp3dDogYXN5bmMgKHRva2VuLCB1c2VyKSA9PiB7XHJcbiAgICAgICAgICAgIHVzZXIgJiYgKHRva2VuLnVzZXIgPSB1c2VyKVxyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlc3Npb246IChzZXNzaW9uLCB1c2VyKSA9PiB7XHJcbiAgICAgICAgICAgIHNlc3Npb24udXNlciA9IHVzZXIudXNlclxyXG4gICAgICAgICAgICByZXR1cm4gdXNlclxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkgIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiUHJvdmlkZXJzIiwiY29ubmVjdFRvREIiLCJ2ZXJpZnlQYXNzd29yZCIsInByb3ZpZGVycyIsIkNyZWRlbnRpYWxzIiwiYXV0aG9yaXplIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsInBhc3N3b3JkIiwiY2xpZW50TW9uZ29EQiIsImRiIiwidXNlciIsImNvbGxlY3Rpb24iLCJmaW5kT25lIiwiY2xvc2UiLCJFcnJvciIsInZhbGlkIiwibmFtZSIsInBzZXVkbyIsImltYWdlIiwicGhvdG8iLCJpZCIsIl9pZCIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwic2Vzc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();