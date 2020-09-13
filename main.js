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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dom */ \"./src/modules/dom.js\");\n\n\n\nconst {\n  render, todoForm, container, newTodo,\n} = _modules_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\nrender();\n\n\nnewTodo.addEventListener('click', () => {\n  container.appendChild(todoForm());\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/modules/elements.js\");\n\n\nconst { tag, formTag, radioTag } = _elements__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nconst container = document.getElementById('content');\nconst title = tag('h1', 'Todo List App', 'header', 'header');\nconst projects = tag('section', '', 'projects', 'projects');\nconst todos = tag('section', 'Todos', 'todos', 'todos');\nconst newTodo = tag('button', 'Add Todo', 'new-todo', 'new-todo');\n\nconst Dom = (() => {\n  const projectForm = () => {\n    const wrapper = tag('div', '', 'new-p', 'new-p');\n    const add = tag('button', 'Add Project', 'create-p', 'create-p');\n    const name = formTag(\n      'input',\n      '',\n      'project-name',\n      'project-name',\n      'text',\n      'Project Name here',\n    );\n\n    wrapper.appendChild(name);\n    wrapper.appendChild(add);\n    return wrapper;\n  };\n\n  const prioritySection = () => {\n    const labels = ['Low', 'Medium', 'High'];\n    const pContainer = tag('div');\n    for (let i = 0; i < labels.length; i += 1) {\n      const label = tag('label', labels[i]);\n      label.setAttribute('for', labels[i]);\n      const radio = radioTag('input', '', labels[i], 'priority', 'radio', 'priority', labels[i]);\n      pContainer.appendChild(radio);\n      pContainer.appendChild(label);\n    }\n    return pContainer;\n  };\n\n  const todoForm = () => {\n    const wrapper = tag('div', '', 'new-t', 'new-t');\n\n    const create = tag('button', 'Add Todo', 'create-t', 'create-t');\n    const title = formTag('input', '', 't-title', 't-title', 'text', 'title here');\n    const desc = formTag('textarea', '', 't-desc', 't-desc', '', 'description');\n    const dueDate = formTag('input', '', 't-date', 't-date', 'datetime-local', '');\n\n    wrapper.appendChild(title);\n    wrapper.appendChild(desc);\n    wrapper.appendChild(dueDate);\n    wrapper.appendChild(prioritySection());\n    wrapper.appendChild(create);\n\n    return wrapper;\n  };\n\n  const render = () => {\n    projects.appendChild(projectForm());\n    todos.appendChild(newTodo);\n    container.appendChild(title);\n    container.appendChild(projects);\n    container.appendChild(todos);\n  };\n\n  return {\n    render, todoForm, container, newTodo,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dom);\n\n\n//# sourceURL=webpack:///./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/elements.js":
/*!*********************************!*\
  !*** ./src/modules/elements.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Elements = (() => {\n  const tag = (name, text = '', id = '', classname = '') => {\n    const elem = document.createElement(name);\n    elem.innerText = text;\n    elem.className += classname;\n    elem.setAttribute('id', id);\n    return elem;\n  };\n\n  const formTag = (name, text = '', id = '', classname = '', type = '', holder = '') => {\n    const formElement = tag(name, text, id, classname);\n    formElement.setAttribute('type', type);\n    formElement.setAttribute('placeholder', holder);\n    return formElement;\n  };\n\n  const radioTag = (name, text = '', id = '', classname = '', type = '', rname = '', value = '') => {\n    const radioElement = tag(name, text, id, classname);\n    radioElement.setAttribute('type', type);\n    radioElement.setAttribute('name', rname);\n    radioElement.setAttribute('value', value);\n    return radioElement;\n  };\n\n  return { tag, formTag, radioTag };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Elements);\n\n//# sourceURL=webpack:///./src/modules/elements.js?");

/***/ })

/******/ });