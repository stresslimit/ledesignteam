/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typewriter = __webpack_require__(2);

var _typewriter2 = _interopRequireDefault(_typewriter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
  var element = document.getElementById('js-typewriter');
  if (element) (0, _typewriter2.default)(element);
};

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// import sample from 'lodash.sample'

exports.default = function (element) {

  /*
  blacklisted terms chez nous:
    low-hanging fruit
    MVP
    widget
  */

  /*
  var sayings = [
    'Responsible Design',
    'Ethical Solutions',
    'Human Centered Design',
    'Hardware / Software',
    'Good Marketing',
    'Data and Code',
    'Environmental Focus',
    'Renewable Energy',
    'Fearless',
    'Sustainable',
    'Upcycle',
    'Reuse',
    'The Future is here',
    'You still reading?',
    'Contact us'
  ]
  //*/

  var sayings = ['apps', 'maps', 'websites', 'logos', 'robots', 'installations', 'objects', 'fashion', 'products', 'stories'];

  init(element);

  /*
  while sayings
    foreach word
      print letter
      wait 100
    wait 3000
  */
  function init(j) {
    if ((typeof j === 'undefined' ? 'undefined' : _typeof(j)) === 'object') j = 0; // first time only
    var word_counter = j < sayings.length ? j : 0;
    // var text = sample(sayings)
    var text = sayings[word_counter];
    var letter_counter = 0;
    type(text, letter_counter, word_counter);
  }

  function type(text, letter_counter, word_counter) {
    // attention global
    // if ( !is_visible(element) ) // if element is offscreen, wait 2s and try again
    //   return setTimeout(type, 1000, text, letter_counter, word_counter)
    var new_text = text.substr(0, letter_counter);
    var last_counter = text.length > letter_counter;
    // attention global
    element.innerHTML = '' + new_text + (last_counter ? '|' : '');
    if (last_counter) setTimeout(type, 100, text, letter_counter + 1, word_counter);else setTimeout(init, 2000, word_counter + 1);
  }

  /* function is_visible(elm) {
    var rect = elm.getBoundingClientRect()
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight)
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0)
  } */
};

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);