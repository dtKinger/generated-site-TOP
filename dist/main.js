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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   about: () => (/* binding */ about),\n/* harmony export */   body: () => (/* binding */ body),\n/* harmony export */   container: () => (/* binding */ container),\n/* harmony export */   content: () => (/* binding */ content),\n/* harmony export */   div: () => (/* binding */ div),\n/* harmony export */   footer: () => (/* binding */ footer),\n/* harmony export */   header: () => (/* binding */ header),\n/* harmony export */   main: () => (/* binding */ main),\n/* harmony export */   menu: () => (/* binding */ menu),\n/* harmony export */   nav: () => (/* binding */ nav),\n/* harmony export */   p: () => (/* binding */ p),\n/* harmony export */   span: () => (/* binding */ span),\n/* harmony export */   storeLocator: () => (/* binding */ storeLocator)\n/* harmony export */ });\n/* harmony import */ var _load_tab_one__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-tab-one */ \"./src/load-tab-one.js\");\n/* harmony import */ var _load_tab_two__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-tab-two */ \"./src/load-tab-two.js\");\n/* harmony import */ var _load_tab_three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load-tab-three */ \"./src/load-tab-three.js\");\n\n\n\n\nconst body = document.getElementsByTagName('body');\nconst header = document.getElementsByTagName('header');\nconst main = document.getElementsByTagName('main');\nconst footer = document.getElementsByTagName('footer');\nconst content = document.getElementById('content');\n\nconst div = document.createElement('div');\nconst p = document.createElement('p');\nconst span = document.createElement('span');\nconst nav = document.createElement('nav');\n\nconst menu = document.getElementById('menu');\nconst about = document.getElementById('about');\nconst storeLocator = document.getElementById('store-locator');\n\n// Generate Nav\nconst topNav = nav;\ntopNav.innerHTML = `\n<ul class=\"flex centered row px-20\">\n<li class=\"tab\"><button class=\"active-tab\" id=\"menu\" ontouchstart=\"\">Menu</button></li>\n<li class=\"tab\"><button class=\"\" id=\"about\" ontouchstart=\"\">About</button></li>\n<li class=\"tab\"><button class=\"\" id=\"store-locator\" ontouchstart=\"\">Store Locator</button></li>\n<ul>\n`;\ntopNav.classList = 'flex centered row';\ncontent.prepend(topNav);\n\n// Build a container for whatever tab\nconst container = div;\ncontainer.classList = 'flex centered full-height full-width';\ncontainer.setAttribute('id', 'contains');\ntopNav.insertAdjacentElement('afterend', container);\n\n// Logic for tab switching visual\nconst tabBtns = document.querySelectorAll('.tab button');\ntabBtns.forEach((tab) => {\n  tab.addEventListener('click', (e) => {\n    // Loop through again and remove all active-tab class\n    tabBtns.forEach((tabB) => {\n      tabB.classList.remove('active-tab');\n    });\n    // Exit the inner loop, and apply the good active-class.\n    if (tab['id'] === e.target['id']){\n    tab.classList.add('active-tab');\n    };\n    // Load page content based on active tab\n    if (tab['id'] === 'menu'){\n      _load_tab_one__WEBPACK_IMPORTED_MODULE_0__.pageOneLoad();\n    } else if (tab['id'] === 'about'){\n      _load_tab_two__WEBPACK_IMPORTED_MODULE_1__.pageTwoLoad();\n    } else if (tab['id'] === 'store-locator'){\n      _load_tab_three__WEBPACK_IMPORTED_MODULE_2__.pageThreeLoad();\n    }\n\n\n  });\n});\n\n\n\n// Make Tab 1 Focused/Active and load it's content\n_load_tab_one__WEBPACK_IMPORTED_MODULE_0__.pageOneLoad();\n\n\n\n\n\n//# sourceURL=webpack://generated-site-top/./src/index.js?");

/***/ }),

/***/ "./src/load-tab-one.js":
/*!*****************************!*\
  !*** ./src/load-tab-one.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageOneLoad: () => (/* binding */ pageOneLoad)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\nconst pageOneLoad = () => {\n\nconst appetizers = document.createElement('div');\nappetizers.classList = 'food-section';\nappetizers.innerHTML = `\n<p class=\"p__h2\">Appetizers</p>\n<ul class=\"flex__20gap column\">\n    <li class=\"grid\">\n    <span class=\"food-name\"><strong>Food Item 1</strong></span>\n    <span class=\"description\">Then everything about it that is both interesting and informative</span>\n    <span class=\"price\">$5.<sup>99</sup></span>\n  </li>\n    <li class=\"grid\">\n    <span class=\"food-name\"><strong>Food Item 2</strong></span>\n    <span class=\"description\">Then everything about it that is both interesting and informative</span>\n    <span class=\"price\">$6.<sup>99</sup></span>\n  </li>\n    <li class=\"grid\">\n    <span class=\"food-name\"><strong>Food Item 3</strong></span>\n    <span class=\"description\">Then everything about it that is both interesting and informative</span>\n    <span class=\"price\">$8.<sup>99</sup></span>\n  </li>\n    <li class=\"grid\">\n    <span class=\"food-name\"><strong>Food Item 4</strong></span>\n    <span class=\"description\">Then everything about it that is both interesting and informative</span>\n    <span class=\"price\">$7.<sup>99</sup></span>\n  </li>\n</ul>\n`;\n\nconst mainCourses = _index_js__WEBPACK_IMPORTED_MODULE_0__.div;\n\n\n\n_index_js__WEBPACK_IMPORTED_MODULE_0__.container.append(appetizers);\n\n}\n\n\n\n//# sourceURL=webpack://generated-site-top/./src/load-tab-one.js?");

/***/ }),

/***/ "./src/load-tab-three.js":
/*!*******************************!*\
  !*** ./src/load-tab-three.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageThreeLoad: () => (/* binding */ pageThreeLoad)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\nlet pageThreeLoad = () => {\n  \n}\n\n\n\n//# sourceURL=webpack://generated-site-top/./src/load-tab-three.js?");

/***/ }),

/***/ "./src/load-tab-two.js":
/*!*****************************!*\
  !*** ./src/load-tab-two.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageTwoLoad: () => (/* binding */ pageTwoLoad)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\nlet pageTwoLoad = () => {\n  \n}\n\n\n\n//# sourceURL=webpack://generated-site-top/./src/load-tab-two.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;