/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst carMake = document.getElementById(\"car-make\");\nconst carModel = document.getElementById(\"car-model\");\nconst carYear = document.getElementById(\"car-year\");\nconst removeBtn = document.getElementsByClassName(\"removeBtn\")[0];\n\nclass Car {\n    constructor(id, make, model, year) {\n        this.id = id;\n        this.make = make;\n        this.model = model;\n        this.year = year;\n    } \n    info() {\n        carMake.textContent = this.make;\n        carModel.textContent = this.model;\n        carYear.textContent = this.year;\n        removeBtn.id = this.id;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Car);\n\n\n\n//# sourceURL=webpack://es6_modules/./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist */ \"./src/wishlist.js\");\n\n\nconst removeBtn = document.getElementsByClassName(\"removeBtn\")[0];\n\nconst form = document.getElementById(\"submitForm\");\n\nlet wishList = new _wishlist__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nform.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    wishList.add();\n})\n\nremoveBtn.addEventListener(\"click\", (e) => {\n    wishList.remove(e.target.id);\n})\n\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ }),

/***/ "./src/wishlist.js":
/*!*************************!*\
  !*** ./src/wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car */ \"./src/car.js\");\n\n\nconst make = document.getElementById(\"makeInput\");\nconst model = document.getElementById(\"modelInput\");\nconst year = document.getElementById(\"yearInput\");\nconst ul = document.getElementById(\"ul\");\n\nconst carMake = document.getElementById(\"car-make\");\nconst carModel = document.getElementById(\"car-model\");\nconst carYear = document.getElementById(\"car-year\");\n\nclass WishList {\n    constructor(){\n        this.cars = []\n        this.nextid = 1;\n    }\n    add() {\n        let car = new _car__WEBPACK_IMPORTED_MODULE_0__[\"default\"] (this.nextid++, make.value, model.value, year.value)\n        this.cars.push(car) \n        let li = document.createElement(\"li\")\n        li.textContent = make.value\n        li.id = car.id\n        li.addEventListener(\"click\", () => car.info());\n        ul.appendChild(li);\n    } \n    remove(id) {\n        this.cars = this.cars.filter((car) => {\n            if (car.id == id) {\n                return false;\n            } else {\n                return true;\n            }\n        })\n        carMake.textContent = \"\";\n        carModel.textContent = \"\";\n        carYear.textContent = \"\";\n        let li = document.getElementById(id);\n        ul.removeChild(li);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WishList);\n\n\n//# sourceURL=webpack://es6_modules/./src/wishlist.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;