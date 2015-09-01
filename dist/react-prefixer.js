(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["react-prefixer"] = factory();
	else
		root["react-prefixer"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _prefix = __webpack_require__(1);

	var _prefix2 = _interopRequireDefault(_prefix);

	var _properties = __webpack_require__(2);

	var _properties2 = _interopRequireDefault(_properties);

	var div = document.createElement("div");

	function isPropertySupported(prop, value, defaultValue) {
	    var temp = div.cloneNode();

	    temp.style[prop] = defaultValue;

	    try {
	        temp.style[prop] = value;
	    } catch (e) {}

	    return temp.style[prop] === value;
	}

	function applyPrefixes(obj) {
	    Object.keys(obj).forEach(function (key) {
	        if (typeof obj[key] === "object" && !!obj[key]) {
	            obj[key] = applyPrefixes(obj[key]);
	        } else if (_properties2["default"].indexOf(key) !== -1 && typeof div.style[key] !== "string") {
	            var value = obj[key],
	                prefixedKey = _prefix2["default"].js + key.charAt(0).toUpperCase() + key.slice(1);

	            if (key === "transition") {
	                value = value.replace(/transform/g, _prefix2["default"].css + "transform");
	            }

	            delete obj[key];
	            obj[prefixedKey] = value;
	        } else if (key === "display" && obj[key] === "flex" && !isPropertySupported("display", "flex", "block")) {
	            obj[key] = _prefix2["default"] === "ms" ? "-ms-flexbox" : _prefix2["default"].css + "flex";
	        }
	    });

	    return obj;
	}

	exports["default"] = applyPrefixes;
	module.exports = exports["default"];

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var styles = window.getComputedStyle(document.documentElement, ""),
	    prefix = Array.prototype.slice.call(styles).join("").match(/-(moz|webkit|ms)-/)[1] || styles.OLink === "" && ["", "o"],
	    ret = {
	    css: "-" + prefix + "-",
	    js: prefix
	};

	if (ret.js !== "ms") {
	    ret.js = ret.js.charAt(0).toUpperCase() + ret.js.slice(1);
	}

	exports["default"] = ret;
	module.exports = exports["default"];

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = ["alignContent", "alignItems", "alignSelf", "animation", "animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction", "appearance", "backfaceVisibility", "backgroundClip", "borderImage", "borderImageSlice", "boxShadow", "flex", "flexBasis", "flexDirection", "flexFlow", "flexGrow", "flexShrink", "flexWrap", "justifyContent", "perspective", "perspectiveOrigin", "transform", "transition", "transformOrigin", "transformStyle", "transitionProperty", "transitionDuration", "transitionTimingFunction", "transitionDelay", "userSelect"];
	module.exports = exports["default"];

/***/ }
/******/ ])
});
;