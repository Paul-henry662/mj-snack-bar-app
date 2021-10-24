/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/command.js":
/*!*********************************!*\
  !*** ./resources/js/command.js ***!
  \*********************************/
/***/ (() => {

/**
 * Mike & Julia Hotel Snack Bar App Project
 * command.js
 * 
 * @author Paul-henry NGOUNOU
 */
//Local storage
var storedQuantities = localStorage.getItem("quantities"); //Command objects

var quantities = storedQuantities != undefined ? JSON.parse(storedQuantities) : {};
var prices = {}; //DOM

var commandList = document.querySelector(".command__list");
var priceContainer = document.querySelector(".command__pricing").firstElementChild;
var cardCaptions = document.querySelectorAll(".card__caption");
var submitBtn = document.querySelector(".command__btn");
var catalogGrid = document.querySelector(".catalog__grid");
var searchBar = document.querySelector(".catalog__search");

function addToCommand(drinkName) {
  if (quantities[drinkName]) {
    quantities[drinkName]++;
  } else {
    quantities[drinkName] = 1;
  }

  localStorage.setItem("quantities", JSON.stringify(quantities));
}

function removeFromCommand(drinkName) {
  delete quantities[drinkName];
  localStorage.setItem("quantities", JSON.stringify(quantities));
}

function updateCommandList() {
  commandList.innerHTML = "";

  var _loop = function _loop(_drink) {
    var newLi = document.createElement("li");
    var newTextNode = document.createTextNode(_drink);
    var newSpan = document.createElement("span");
    var newDelIcon = document.createElement("span");
    newDelIcon.classList.add("item__del-icon");
    newDelIcon.innerHTML = "&times;";
    newDelIcon.addEventListener("click", function () {
      removeFromCommand(_drink);
      updateCommandList();
      updatePrice();
    });
    newSpan.classList.add("item__quantity");
    newSpan.innerHTML = quantities[_drink];
    newLi.classList.add("list__item");
    newLi.appendChild(newSpan);
    newLi.appendChild(newTextNode);
    newLi.appendChild(newDelIcon);
    commandList.appendChild(newLi);
  };

  for (var _drink in quantities) {
    _loop(_drink);
  }
}

function updatePrice() {
  var totalAmount = 0;

  for (drink in quantities) {
    totalAmount += quantities[drink] * prices[drink];
  }

  priceContainer.innerHTML = totalAmount;
}
/*function updateCatalogFromSearch(){
    if
}*/
//Functions


function main() {
  cardCaptions.forEach(function (caption) {
    var drinkName = caption.firstElementChild.innerHTML.toLowerCase();
    var drinkPrice = caption.firstElementChild.nextElementSibling.innerHTML.split(" ")[0];
    var addBtn = caption.lastElementChild;
    prices[drinkName] = parseInt(drinkPrice);
    addBtn.addEventListener("click", function () {
      addToCommand(drinkName);
      updateCommandList();
      updatePrice();
    });
  });
  updateCommandList();
  updatePrice();
  submitBtn.addEventListener("click", function () {
    var data = quantities;
    $.ajax({
      "url": "http://localhost:8000/command/create",
      "data": quantities,
      "method": "POST",
      "headers": {
        "X-CSRF-TOKEN": localStorage.getItem("token")
      },
      "success": function success(result, status, xhr) {
        console.log(quantities);
        localStorage.removeItem("quantities");
        quantities = {};
        updateCommandList();
        updatePrice();
      },
      "error": function error(xhr, status, _error) {
        console.error(_error, status, xhr);
      }
    });
  });
}

main();

/***/ }),

/***/ "./resources/scss/main.scss":
/*!**********************************!*\
  !*** ./resources/scss/main.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/command": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkapp"] = self["webpackChunkapp"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./resources/js/command.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./resources/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;