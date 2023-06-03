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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   about: () => (/* binding */ about),\n/* harmony export */   body: () => (/* binding */ body),\n/* harmony export */   container: () => (/* binding */ container),\n/* harmony export */   content: () => (/* binding */ content),\n/* harmony export */   div: () => (/* binding */ div),\n/* harmony export */   footer: () => (/* binding */ footer),\n/* harmony export */   header: () => (/* binding */ header),\n/* harmony export */   main: () => (/* binding */ main),\n/* harmony export */   menu: () => (/* binding */ menu),\n/* harmony export */   nav: () => (/* binding */ nav),\n/* harmony export */   p: () => (/* binding */ p),\n/* harmony export */   span: () => (/* binding */ span),\n/* harmony export */   storeLocator: () => (/* binding */ storeLocator)\n/* harmony export */ });\n/* harmony import */ var _load_tab_one__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-tab-one */ \"./src/load-tab-one.js\");\n/* harmony import */ var _load_tab_two__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-tab-two */ \"./src/load-tab-two.js\");\n/* harmony import */ var _load_tab_three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load-tab-three */ \"./src/load-tab-three.js\");\n\n\n\n\nconst body = document.getElementsByTagName('body');\nconst header = document.getElementsByTagName('header');\nconst main = document.getElementsByTagName('main');\nconst footer = document.getElementsByTagName('footer');\nconst content = document.getElementById('content');\n\nconst div = document.createElement('div');\nconst p = document.createElement('p');\nconst span = document.createElement('span');\nconst nav = document.createElement('nav');\n\nconst menu = document.getElementById('menu');\nconst about = document.getElementById('about');\nconst storeLocator = document.getElementById('store-locator');\n\n\n\n// Generate Nav\nconst topNav = nav;\ntopNav.innerHTML = `\n<ul class=\"flex centered row px-20\">\n<li class=\"tab\"><button class=\"active-tab\" id=\"menu\" ontouchstart=\"\">Menu</button></li>\n<li class=\"tab\"><button class=\"\" id=\"about\" ontouchstart=\"\">About</button></li>\n<li class=\"tab\"><button class=\"\" id=\"store-locator\" ontouchstart=\"\">Store Locator</button></li>\n</ul>\n`;\ntopNav.classList = 'flex centered row';\ncontent.prepend(topNav);\n\n// Generate a Restaurant name\ntopNav.insertAdjacentHTML('beforebegin', '<h1 class=\"resto-name\">Spicy Amigos</h1>');\n\n// Build a container for whatever tab\nconst container = div;\ncontainer.classList = 'flex column centered full-height full-width';\ncontainer.setAttribute('id', 'contains');\ntopNav.insertAdjacentElement('afterend', container);\n\n// Logic for tab switching visual\nconst tabBtns = document.querySelectorAll('.tab button');\ntabBtns.forEach((tab) => {\n  tab.addEventListener('click', (e) => {\n    // Loop through again and remove all active-tab class\n    tabBtns.forEach((tabB) => {\n      tabB.classList.remove('active-tab');\n    });\n    // Exit the inner loop, and apply the good active-class.\n    if (tab['id'] === e.target['id']){\n    tab.classList.add('active-tab');\n    };\n  \n    // Clear Current container\n    container.innerHTML = '';\n    // Load page content into container based on active tab\n    if (tab['id'] === 'menu'){\n      _load_tab_one__WEBPACK_IMPORTED_MODULE_0__.pageOneLoad();\n    } else if (tab['id'] === 'about'){\n      _load_tab_two__WEBPACK_IMPORTED_MODULE_1__.pageTwoLoad();\n    } else if (tab['id'] === 'store-locator'){\n      _load_tab_three__WEBPACK_IMPORTED_MODULE_2__.pageThreeLoad();\n    }\n\n  });\n});\n\n// Make Tab 1 Focused/Active and load it's content\n_load_tab_one__WEBPACK_IMPORTED_MODULE_0__.pageOneLoad();\n\n\n\n//# sourceURL=webpack://generated-site-top/./src/index.js?");

/***/ }),

/***/ "./src/load-tab-one.js":
/*!*****************************!*\
  !*** ./src/load-tab-one.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageOneLoad: () => (/* binding */ pageOneLoad)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\nconst pageOneLoad = () => {\n\nconst appetizers = document.createElement('div');\nappetizers.classList = 'food-section';\nappetizers.innerHTML = `\n<p class=\"p__h2\">Appetizers</p>\n<ul class=\"flex__20gap column\">\n    <li class=\"grid\">\n    <span class=\"food-name\"><strong>Spring Rolls</strong></span>\n    <span class=\"description\">Shrimp, pork, carrots, bean sprouts. Wrapped tight and fried light. Served with fish sauce.</span>\n    <span class=\"price\">$5.<sup>99</sup></span>\n  </li>\n    <li class=\"grid\">\n    <span class=\"food-name\"><strong>French Onion Soup</strong></span>\n    <span class=\"description\">This dish should really be called French Cheese soup shouldn't it? Either way we promise there is still a melted mountain of onions. Served with toasted rye.</span>\n    <span class=\"price\">$6.<sup>99</sup></span>\n  </li>\n    <li class=\"grid\">\n    <span class=\"food-name\"><strong>Calamari</strong></span>\n    <span class=\"description\">You've tried other place's calamari plates... forget the rubber band seafood they pushed on you, this calamari will change your life. Served with fresh lemon.</span>\n    <span class=\"price\">$10.<sup>99</sup></span>\n  </li>\n    <li class=\"grid\">\n    <span class=\"food-name\"><strong>Popcorn Shrimp</strong></span>\n    <span class=\"description\">A light snack, but every bite pops with flavour. Served with fresh lemon butter.</span>\n    <span class=\"price\">$7.<sup>99</sup></span>\n  </li>\n</ul>\n`;\n\nconst mainCourses = document.createElement('div');\nmainCourses.classList = 'food-section';\nmainCourses.innerHTML = `\n<p class=\"p__h2\">Main Courses</p>\n<ul class=\"flex__20gap column\">\n    <li class=\"grid\">\n    <span class=\"food-name\"><strong>Roast Chicken</strong></span>\n    <span class=\"description\">Then everything about it that is both interesting and informative</span>\n    <span class=\"price\">$17.<sup>99</sup></span>\n  </li>\n    <li class=\"grid\">\n    <span class=\"food-name\"><strong>Braised Pork</strong></span>\n    <span class=\"description\">Then everything about it that is both interesting and informative</span>\n    <span class=\"price\">$18.<sup>99</sup></span>\n  </li>\n    <li class=\"grid\">\n    <span class=\"food-name\"><strong>House Burger</strong></span>\n    <span class=\"description\">Then everything about it that is both interesting and informative</span>\n    <span class=\"price\">$14.<sup>99</sup></span>\n  </li>\n    <li class=\"grid\">\n    <span class=\"food-name\"><strong>Fish & Chips</strong></span>\n    <span class=\"description\">Then everything about it that is both interesting and informative</span>\n    <span class=\"price\">$16.<sup>99</sup></span>\n  </li>\n</ul>\n`;\n\nconst desserts = document.createElement('div');\ndesserts.classList = 'food-section';\ndesserts.innerHTML = `\n<p class=\"p__h2\">Desserts</p>\n<ul class=\"flex__20gap column\">\n    <li class=\"grid\">\n    <span class=\"food-name\"><strong>Flan</strong></span>\n    <span class=\"description\">Then everything about it that is both interesting and informative</span>\n    <span class=\"price\">$5.<sup>99</sup></span>\n  </li>\n    <li class=\"grid\">\n    <span class=\"food-name\"><strong>Deep Fried Bananas</strong></span>\n    <span class=\"description\">Then everything about it that is both interesting and informative</span>\n    <span class=\"price\">$5.<sup>99</sup></span>\n  </li>\n</ul>\n`;\n\n_index_js__WEBPACK_IMPORTED_MODULE_0__.container.append(appetizers, mainCourses, desserts);\n\n}\n\n\n\n//# sourceURL=webpack://generated-site-top/./src/load-tab-one.js?");

/***/ }),

/***/ "./src/load-tab-three.js":
/*!*******************************!*\
  !*** ./src/load-tab-three.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageThreeLoad: () => (/* binding */ pageThreeLoad)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\nlet pageThreeLoad = () => {\n  \n  const storeLocator = document.createElement('div');\n  storeLocator.classList = 'food-section';\n  storeLocator.innerHTML = `\n  <p class=\"p__h2\">A random restaurant</p>\n  <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10032.74250261995!2d-114.09899731284182!3d51.049660200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716fe5a4baf6a3%3A0xf1317501e17b13df!2sSpicy%20Amigos!5e0!3m2!1sen!2s!4v1685801955593!5m2!1sen!2s\" width=\"100%\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\">\n  </iframe>\n  `\n\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.container.append(storeLocator);\n\n}\n\n\n\n//# sourceURL=webpack://generated-site-top/./src/load-tab-three.js?");

/***/ }),

/***/ "./src/load-tab-two.js":
/*!*****************************!*\
  !*** ./src/load-tab-two.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageTwoLoad: () => (/* binding */ pageTwoLoad)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\nlet pageTwoLoad = () => {\n\n  const aboutCard = document.createElement('div');\n  aboutCard.classList = 'food-section';\n  aboutCard.innerHTML = `\n  <p class=\"p__h2\">About Us</p>\n  <ul class=\"flex__20gap column\">\n      <li class=\"grid\">\n      <span class=\"food-name\"><strong>Mission</strong></span>\n      <span class=\"description\">\"Don't ever, for any reason, do anything, to anyone, for any reason, ever, no matter what, no matter where, or who, or who you are with, or where you are going, or where you've been, ever, for any reason whatsoever.\"</span>\n      <span class=\"phone\">&copy; 1990-2023</span>\n    </li>\n      <li class=\"grid\">\n      <span class=\"food-name\"><strong>Contact Us</strong></span>\n      <span class=\"description\">You can reach us toll free but not 24/7. Actually don't call on weekends. Or at lunch time. Or dinner time for that matter. Please call between 9am - 10am or 3pm - 5pm and we'll be happy to help.</span>\n      <span class=\"phone\">(123)<br>456-7890</span>\n    </li>\n  </ul>\n  `;\n\n  const ourFood = document.createElement('div');\n  ourFood.classList = 'food-section';\n  ourFood.innerHTML = `\n  <p class=\"p__h2\">Our Food</p>\n  <ul class=\"flex__20gap column\">\n      <li class=\"grid\">\n      <span class=\"food-name\"><strong>Locally Sourced</strong></span>\n      <span class=\"description\">We take pride in serving the highest quality food for the price. Your food will be the bluest of blues and the pinkest of pinks on the outside, and black in the middle. Yes, just like our hearts after a 12 hour shift. </span>\n      <span class=\"phone\">No Antibiotics</span>\n    </li>\n  </ul>\n  `;\n\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.container.append(aboutCard, ourFood);\n\n}\n\n\n\n//# sourceURL=webpack://generated-site-top/./src/load-tab-two.js?");

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