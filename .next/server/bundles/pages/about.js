module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(3);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/Navbar.js



var Navbar_Navbar = function Navbar() {
  return external__react__default.a.createElement("nav", {
    className: "navbar navbar-expand navbar-dark bg-dark mb-4"
  }, external__react__default.a.createElement("div", {
    className: "container"
  }, external__react__default.a.createElement("a", {
    className: "navbar-brand",
    href: "https://johnfleurimond.com"
  }, "Fleurimond Crypto Watch"), external__react__default.a.createElement("div", {
    className: "collapse navbar-collapse"
  }, external__react__default.a.createElement("ul", {
    className: "navbar-nav ml-auto"
  }, external__react__default.a.createElement("li", {
    className: "nav-item"
  }, external__react__default.a.createElement(link__default.a, {
    href: "/"
  }, external__react__default.a.createElement("a", {
    className: "nav-link"
  }, "Home"))), external__react__default.a.createElement("li", {
    className: "nav-item"
  }, external__react__default.a.createElement(link__default.a, {
    href: "/about"
  }, external__react__default.a.createElement("a", {
    className: "nav-link"
  }, "About")))))));
};

/* harmony default export */ var components_Navbar = (Navbar_Navbar);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(4);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Layout.js




var Layout_Layout = function Layout(props) {
  return external__react__default.a.createElement("div", null, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("title", null, " Welcome To Fleurimond Crypto Watch"), external__react__default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://bootswatch.com/4/superhero/bootstrap.min.css"
  })), external__react__default.a.createElement(components_Navbar, null), external__react__default.a.createElement("div", {
    className: "container"
  }, props.children));
};

/* harmony default export */ var components_Layout = (Layout_Layout);
// CONCATENATED MODULE: ./pages/about.js




var about_About = function About() {
  return external__react__default.a.createElement("div", null, external__react__default.a.createElement(components_Layout, null, external__react__default.a.createElement("p", null, "Check out my portfolio at ", external__react__default.a.createElement("a", {
    href: "https://johnfleurimond.com"
  }, "Here")), external__react__default.a.createElement("p", null, "View my ", external__react__default.a.createElement("a", {
    href: "https://github.com/JOHNFLEURIMOND"
  }, "Github"), "account")));
};

/* harmony default export */ var about = __webpack_exports__["default"] = (about_About);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })
/******/ ]);