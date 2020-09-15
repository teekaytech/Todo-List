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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"*,\\n*::before,\\n*::after {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font-family: \\\"Trebuchet MS\\\", \\\"Lucida Sans Unicode\\\", \\\"Lucida Grande\\\", \\\"Lucida Sans\\\", Arial, sans-serif;\\n  vertical-align: baseline;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  background-color: #1b0e27;\\n}\\nbody h1 {\\n  color: #fff;\\n  font-size: 3em;\\n  padding: 0.5em 0;\\n  text-align: center;\\n}\\nbody .sub-container {\\n  display: flex;\\n  padding: 1em;\\n}\\nbody .projects {\\n  color: #1b0e27;\\n  width: 27%;\\n  min-height: 80vh;\\n  padding: 0.5em;\\n  background-color: #fff;\\n}\\nbody .projects .p-list {\\n  padding: 1em;\\n}\\nbody .projects .p-list .p {\\n  display: inline-block;\\n  padding: 0.5em 0;\\n  font-weight: bolder;\\n  font-size: 1.2em;\\n}\\nbody .projects .p-list .p:hover {\\n  cursor: pointer;\\n}\\nbody .projects .p-list .delete-p {\\n  padding: 0.4em 0.8em;\\n  background-color: red;\\n  color: #fff;\\n  cursor: pointer;\\n  border-radius: 0.25em;\\n  padding: 0.2em 0.6em;\\n}\\nbody .projects .p-list .add-todo {\\n  color: #fff;\\n  font-weight: bolder;\\n  font-size: x-large;\\n  background-color: blue;\\n  padding: 0.05em 0.4em;\\n  border-radius: 0.25em;\\n  font-size: large;\\n  margin: 0 0.5em;\\n  padding: 0.1em 0.5em;\\n}\\nbody .projects .p-list .add-todo:hover {\\n  cursor: pointer;\\n}\\nbody .projects .p-header {\\n  font-weight: bolder;\\n  font-size: x-large;\\n  padding-bottom: 0.5em;\\n}\\nbody .projects .new-p {\\n  display: flex;\\n  justify-content: center;\\n  padding: 0.7em;\\n  background-color: #1b0e27;\\n  border-radius: 0.4em;\\n}\\nbody .projects .new-p input[type=text] {\\n  padding: 0.4em 0.3em;\\n  margin-right: 1em;\\n}\\nbody .projects .new-p .create-p {\\n  color: #fff;\\n  font-weight: bolder;\\n  font-size: x-large;\\n  background-color: blue;\\n  padding: 0.05em 0.4em;\\n  border-radius: 0.25em;\\n}\\nbody .projects .new-p .create-p:hover {\\n  cursor: pointer;\\n}\\nbody .todos {\\n  color: #fff;\\n  width: 73%;\\n  margin: 2em;\\n}\\nbody .todos .todo-table {\\n  width: 100%;\\n}\\nbody .todos th,\\nbody .todos td {\\n  border: 1px solid #fff;\\n  padding: 0.5em;\\n  font-size: 1.2em;\\n}\\nbody .todos .edit-todo-button,\\nbody .todos .delete-todo-button {\\n  margin: 0 0.5em;\\n  cursor: pointer;\\n}\\nbody .todos .t-header {\\n  font-weight: bolder;\\n  font-size: x-large;\\n  padding-bottom: 0.5em;\\n}\\nbody .todos .new-todo {\\n  color: #fff;\\n  font-weight: bolder;\\n  font-size: x-large;\\n  background-color: blue;\\n  padding: 0.05em 0.4em;\\n  border-radius: 0.25em;\\n  margin-top: 1em;\\n}\\nbody .todos .new-todo:hover {\\n  cursor: pointer;\\n}\\nbody .todos .modal {\\n  display: none;\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  background-color: rgba(197, 196, 196, 0.5);\\n}\\nbody .todos .modal .new-t {\\n  width: 50%;\\n  background-color: #fff;\\n  color: #1b0e27;\\n  padding: 1.5em;\\n  position: absolute;\\n  top: 40%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n}\\nbody .todos .modal .new-t p {\\n  color: #fff;\\n  background-color: #1b0e27;\\n  font-weight: bolder;\\n  font-size: large;\\n  margin-bottom: 2em;\\n  padding: 0.4em 0.8em;\\n}\\nbody .todos .modal .new-t .t-title,\\nbody .todos .modal .new-t .t-desc,\\nbody .todos .modal .new-t .t-date,\\nbody .todos .modal .new-t div {\\n  display: block;\\n  width: 100%;\\n  color: #1b0e27;\\n  padding: 0.5em;\\n  margin: 2em 0;\\n  border-bottom: 0.15em solid #1b0e27;\\n  border-radius: 0.4em;\\n}\\nbody .todos .modal .new-t div {\\n  border-bottom: unset;\\n}\\nbody .todos .modal .new-t .t-title {\\n  margin: 1em 0;\\n}\\nbody .todos .modal .new-t .create-t {\\n  color: #fff;\\n  font-weight: bolder;\\n  font-size: x-large;\\n  background-color: blue;\\n  padding: 0.05em 0.4em;\\n  border-radius: 0.25em;\\n  font-weight: unset;\\n  font-size: unset;\\n  padding: 0.4em 0.8em;\\n  border-radius: unset;\\n}\\nbody .todos .modal .new-t .create-t:hover {\\n  cursor: pointer;\\n}\\nbody .todos .modal .new-t .close {\\n  position: absolute;\\n  right: 1.5em;\\n  bottom: 1.5em;\\n  padding: 0.4em 0.8em;\\n  background-color: red;\\n  color: #fff;\\n  cursor: pointer;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/assets/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/styles.scss":
/*!********************************!*\
  !*** ./src/assets/styles.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/assets/styles.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dom */ \"./src/modules/dom.js\");\n/* harmony import */ var _modules_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/default */ \"./src/modules/default.js\");\n/* harmony import */ var _modules_logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/logic */ \"./src/modules/logic.js\");\n/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/styles.scss */ \"./src/assets/styles.scss\");\n/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* eslint-disable no-alert */\n/* eslint-disable no-restricted-globals */\n\n\n\n\n\nconst {\n  todoTable,\n  todoForm,\n  render,\n  showForm,\n  hideForm,\n  closeButton,\n  newProjectButton,\n} = _modules_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n_modules_default__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dProject();\nrender();\n\nconst addNewTodo = (projectId) => {\n  const addTodo = document.querySelector('.create-t');\n  addTodo.addEventListener('click', () => {\n    const title = document.getElementById('t-title').value;\n    const desc = document.getElementById('t-desc').value;\n    const dueDate = document.getElementById('t-date').value;\n    const priority = document.querySelectorAll('.priority');\n    _modules_logic__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addTodo(title, desc, dueDate, priority, projectId);\n  });\n};\n\nconst newTodo = document.querySelectorAll('.add-todo');\nnewTodo.forEach((todoButton) => {\n  todoButton.addEventListener('click', () => {\n    const modal = document.getElementById('modal');\n    showForm(modal);\n    addNewTodo(todoButton.id);\n  });\n});\n\ncloseButton.addEventListener('click', (e) => {\n  e.preventDefault();\n  const modal = document.getElementById('modal');\n  hideForm(modal);\n});\n\nnewProjectButton.addEventListener('click', () => {\n  const name = document.getElementById('project-name').value;\n  if (name) {\n    _modules_logic__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addProject(name);\n    location.reload();\n  } else {\n    alert('Project name cannot be blank');\n  }\n});\n\nconst deleteProject = document.querySelectorAll('.delete-p');\ndeleteProject.forEach(project => {\n  project.addEventListener('click', () => {\n    _modules_logic__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deleteProject(project.id);\n    location.reload();\n  });\n});\n\nconst currentProjects = document.querySelectorAll('.p');\ncurrentProjects.forEach((project) => {\n  project.addEventListener('click', () => {\n    const todosContainer = document.getElementById('todos');\n    _modules_logic__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayTodos(project.id, todosContainer, todoTable(), todoForm());\n  });\n});\n\nconst editTodoButton = document.querySelectorAll('.edit-todo-button');\nconsole.log(editTodoButton);\neditTodoButton.forEach((button) => {\n  button.addEventListener('click', () => {\n    // const todosContainer = document.getElementById('todos');\n    console.log(button);\n    // Logic.editTodo(project.id, todosContainer, todoTable(), todoForm());\n  });\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/default.js":
/*!********************************!*\
  !*** ./src/modules/default.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/modules/todo.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n\n\n\nconst createDefault = (() => {\n  const dProject = () => {\n    if (localStorage.length === 0) {\n      const project = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](1, 'General');\n      const t1 = new _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](1, 'Concatenate Conference', 'With standup team', new Date('2020-10-1'), 'High');\n      const t2 = new _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2, 'Rails Meetup', 'With students', new Date('2020-9-25'), 'Medium');\n      project.todoList.push(t1);\n      project.todoList.push(t2);\n      localStorage.setItem(0, JSON.stringify(project));\n    }\n  };\n\n  return { dProject };\n})();\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createDefault);\n\n\n//# sourceURL=webpack:///./src/modules/default.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/modules/elements.js\");\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ \"./src/modules/logic.js\");\n\n\n\nconst { tag, formTag, radioTag } = _elements__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nconst container = document.getElementById('content');\nconst title = tag('h1', 'Todo List App', 'header', 'header');\nconst projects = tag('section', '', 'projects', 'projects');\nconst todos = tag('section', '', 'todos', 'todos');\nconst closeButton = tag('button', 'Close', 'close', 'close');\nconst newProjectButton = tag('button', '+', 'create-p', 'create-p');\n\nconst Dom = (() => {\n  const projectForm = addButton => {\n    const wrapper = tag('div', '', 'new-p', 'new-p');\n    const name = formTag(\n      'input',\n      '',\n      'project-name',\n      'project-name',\n      'text',\n      'Project Name here',\n    );\n\n    name.setAttribute('required', 'required');\n    wrapper.appendChild(name);\n    wrapper.appendChild(addButton);\n    return wrapper;\n  };\n\n  const prioritySection = () => {\n    const labels = [' Low ', ' Medium ', ' High '];\n    const pContainer = tag('div', 'Priority: ');\n    for (let i = 0; i < labels.length; i += 1) {\n      const label = tag('label', labels[i]);\n      label.setAttribute('for', labels[i]);\n      const radio = radioTag(\n        'input',\n        '',\n        labels[i],\n        'priority',\n        'radio',\n        'priority',\n        labels[i],\n      );\n      pContainer.appendChild(radio);\n      pContainer.appendChild(label);\n    }\n    return pContainer;\n  };\n\n  const todoForm = () => {\n    const wrapper = tag('div', '', 'modal', 'modal');\n    const form = tag('form', '', 'new-t', 'new-t');\n    const create = tag('button', 'Add Todo', 'create-t', 'create-t');\n    const title = formTag('input', '', 't-title', 't-title', 'text', 'title here');\n    const desc = formTag('textarea', '', 't-desc', 't-desc', '', 'description');\n    const dueDate = formTag('input', '', 't-date', 't-date', 'datetime-local', '');\n\n    form.appendChild(tag('p', 'New Todo'));\n    form.appendChild(title);\n    form.appendChild(desc);\n    form.appendChild(dueDate);\n    form.appendChild(prioritySection());\n    form.appendChild(create);\n    form.appendChild(closeButton);\n\n    wrapper.appendChild(form);\n\n    return wrapper;\n  };\n\n  const todoTable = () => {\n    const table = _elements__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tag('table', '', 'todo-table', 'todo-table');\n    const tr = _elements__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tag('tr');\n\n    tr.appendChild(_elements__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tag('th', '#'));\n    tr.appendChild(_elements__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tag('th', 'Title'));\n    tr.appendChild(_elements__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tag('th', 'Due Date'));\n    tr.appendChild(_elements__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tag('th', 'Action'));\n    table.appendChild(tr);\n\n    return table;\n  };\n\n  const todoSection = task => {\n    task.appendChild(tag('p', 'Click on a project to view tasks', 't-header', 't-header'));\n    task.appendChild(todoForm());\n    return task;\n  };\n\n  const render = () => {\n    const nextContainer = tag('div', '', 'sub-container', 'sub-container');\n\n    projects.appendChild(tag('p', 'All Projects', 'p-header', 'p-header'));\n    projects.appendChild(_logic__WEBPACK_IMPORTED_MODULE_1__[\"default\"].allProjects());\n    projects.appendChild(projectForm(newProjectButton));\n\n    nextContainer.appendChild(projects);\n    nextContainer.appendChild(todoSection(todos));\n\n    container.appendChild(title);\n    container.appendChild(nextContainer);\n  };\n\n\n  const showForm = modal => {\n    modal.style.display = 'block';\n  };\n\n  const hideForm = modal => {\n    modal.style.display = 'none';\n  };\n\n\n  return {\n    todos,\n    todoSection,\n    render,\n    todoForm,\n    showForm,\n    hideForm,\n    closeButton,\n    newProjectButton,\n    todoTable,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dom);\n\n\n//# sourceURL=webpack:///./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/elements.js":
/*!*********************************!*\
  !*** ./src/modules/elements.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Elements = (() => {\n  const tag = (name, text = '', id = '', classname = '') => {\n    const elem = document.createElement(name);\n    elem.innerText = text;\n    elem.className += classname;\n    elem.setAttribute('id', id);\n    return elem;\n  };\n\n  const formTag = (name, text = '', id = '', classname = '', type = '', holder = '') => {\n    const formElement = tag(name, text, id, classname);\n    formElement.setAttribute('type', type);\n    formElement.setAttribute('placeholder', holder);\n    return formElement;\n  };\n\n  const radioTag = (name, text = '', id = '', classname = '', type = '', rname = '', value = '') => {\n    const radioElement = tag(name, text, id, classname);\n    radioElement.setAttribute('type', type);\n    radioElement.setAttribute('name', rname);\n    radioElement.setAttribute('value', value);\n    return radioElement;\n  };\n\n  return { tag, formTag, radioTag };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Elements);\n\n//# sourceURL=webpack:///./src/modules/elements.js?");

/***/ }),

/***/ "./src/modules/logic.js":
/*!******************************!*\
  !*** ./src/modules/logic.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/modules/todo.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements */ \"./src/modules/elements.js\");\n/* eslint-disable no-restricted-globals */\n/* eslint-disable no-alert */\n\n\n\n\n\nconst Logic = (() => {\n  const validateProjectName = name => (name !== '');\n\n  const addProject = name => {\n    if (validateProjectName(name)) {\n      const nextprojectId = localStorage.length;\n      const project = JSON.stringify(new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](nextprojectId, name));\n      localStorage.setItem(nextprojectId, project);\n      return true;\n    }\n    return false;\n  };\n\n  const getProject = (id) => JSON.parse(localStorage.getItem(id));\n\n  const allProjects = () => {\n    const projectsSection = _elements__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tag('div', '', 'p-list', 'p-list');\n\n    for (let i = 0; i < localStorage.length; i += 1) {\n      const key = localStorage.key(i);\n      if ((typeof parseInt('key', 10)) === 'number') {\n        const project = _elements__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tag('div');\n        project.appendChild(_elements__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tag('p', `> ${getProject(key).name}`, `${key}`, 'p'));\n        project.appendChild(_elements__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tag('button', '+', key, 'add-todo'));\n        project.appendChild(_elements__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tag('button', 'x', key, 'delete-p'));\n\n        projectsSection.appendChild(project);\n      }\n    }\n    return projectsSection;\n  };\n\n  const deleteProject = id => {\n    let check;\n\n    if (id === '0') {\n      check = confirm('This is the default Project. Are you sure you want to delete?');\n    } else {\n      check = confirm('This project and its tasks (todo) will be deleted. Are you sure?');\n    }\n\n    if (check === true) {\n      localStorage.removeItem(id);\n      return true;\n    }\n    return false;\n  };\n\n  const checkTodo = (title, desc, date) => title !== ''\n  && desc !== ''\n  && date !== '';\n\n  const checkPriority = (priority) => {\n    const priorities = Array.from(priority);\n    let status = false;\n    priorities.forEach((p) => {\n      if (p.checked === true) {\n        status = p.id;\n      }\n    });\n    return status;\n  };\n\n  const storeTodo = (catId, title, desc, date, priority) => {\n    const todoProject = getProject(catId);\n    const newId = todoProject.todoList.length + 1;\n    const newTodo = new _todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"](newId, title, desc, date, priority);\n    todoProject.todoList.push(newTodo);\n    localStorage.setItem(catId, JSON.stringify(todoProject));\n    alert('Todo added successfully.');\n  };\n\n  const addTodo = (title, desc, date, priorities, catId) => {\n    const priority = checkPriority(priorities);\n    if (checkTodo(title, desc, date) && priority) {\n      storeTodo(catId, title, desc, date, priority);\n    } else {\n      alert('All fields are compulsory.');\n    }\n  };\n\n  const makeIcons = (id) => {\n    const td = _elements__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tag('td', '', 'todo-action', 'todo0action');\n    td.innerHTML = `\n      <span class=\"edit-todo-button\" id=\"edit-todo-button\" data-todo=\"${id}\">\n        &#128221;\n      </span>\n      <span class=\"delete-todo-button\" id=\"delete-todo-buttotdn\" data-todo=\"${id}\">\n        &#128686;\n      </span>\n      `;\n    return td;\n  };\n\n  const displayTodos = (id, todoContainer, table, form) => {\n    const thisProject = getProject(id);\n    const todos = thisProject.todoList;\n\n    todoContainer.innerHTML = '';\n    todoContainer.appendChild(_elements__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tag('p', `Current Project: ${thisProject.name}`, 't-header', 't-header'));\n\n    todos.forEach((todo) => {\n      const tr = _elements__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tag('tr');\n      tr.appendChild(_elements__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tag('td', todo.id));\n      tr.appendChild(_elements__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tag('td', todo.title));\n      tr.appendChild(_elements__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tag('td', new Date(todo.dueDate).toUTCString()));\n      tr.appendChild(makeIcons(todo.id));\n      table.appendChild(tr);\n    });\n\n    todoContainer.appendChild(table);\n    todoContainer.appendChild(form);\n  };\n\n  return {\n    addProject,\n    allProjects,\n    deleteProject,\n    getProject,\n    addTodo,\n    displayTodos,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Logic);\n\n//# sourceURL=webpack:///./src/modules/logic.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Project {\n  constructor(id, name) {\n    this.id = id;\n    this.name = name;\n    this.todoList = [];\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\n\n//# sourceURL=webpack:///./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Todo {\n  constructor(id, title, desc, dueDate, priority) {\n    this.id = id;\n    this.title = title;\n    this.desc = desc;\n    this.dueDate = dueDate;\n    this.priority = priority;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\n\n\n//# sourceURL=webpack:///./src/modules/todo.js?");

/***/ })

/******/ });