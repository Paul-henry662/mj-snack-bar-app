/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./resources/js/cashier.js ***!
  \*********************************/
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Mike & Julia Hotel Snack Bar App Project
 * cashier.js
 * 
 * @author Paul-henry NGOUNOU
 */
var toPrintList = document.getElementById("to-print-list");
var toValidateList = document.getElementById("to-validate-list");

function updatePrintList(infos) {
  toPrintList.innerHTML = "";
  var commands = infos.commands;
  var quantities = infos.quantities;
  var waiters = infos.waiters;

  var _iterator = _createForOfIteratorHelper(commands),
      _step;

  try {
    var _loop = function _loop() {
      var cmd = _step.value;
      var newLi = document.createElement("li");
      var newFacade = document.createElement("div");
      var newContent = document.createElement("div");
      var newPriceCard = document.createElement("div");
      var newFacadeList = document.createElement("div");
      var newContentList = document.createElement("div");
      var newFacadeName = document.createElement("div");
      var newContentName = document.createElement("div");
      var newTime = document.createElement("div");
      var newPrintBtn = document.createElement("button");
      var cmdQtities = quantities[cmd.id];
      newFacadeName.innerHTML = waiters[cmd.id].first_name;
      newContentName.innerHTML = waiters[cmd.id].first_name + " " + waiters[cmd.id].last_name;

      for (drink in cmdQtities) {
        newFacadeList.innerHTML += cmdQtities[drink] + " " + drink + ", ";
      }

      newContentList.innerHTML = newFacadeList.innerHTML;
      newFacade.appendChild(newFacadeList);
      newFacade.appendChild(newFacadeName);
      newPriceCard.innerHTML = cmd.amount;
      var date = new Date(cmd.created_at);
      var hh = date.getHours() >= 10 ? date.getHours() : "0" + date.getHours();
      var mm = date.getMinutes() >= 10 ? date.getMinutes() : "0" + date.getMinutes();
      newTime.innerHTML = hh + "h" + mm;
      newPrintBtn.innerHTML = "Imprimer";
      newPrintBtn.addEventListener("click", function () {
        updateCommandState(cmd.id);
      });
      newContent.appendChild(newContentList);
      newContent.appendChild(newPriceCard);
      newContent.appendChild(newContentName);
      newContent.appendChild(newTime);
      newContent.appendChild(newPrintBtn);
      newLi.appendChild(newFacade);
      newLi.appendChild(newContent);
      toPrintList.appendChild(newLi);
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function updateValidateList(infos) {
  toValidateList.innerHTML = "";
  var commands = infos.commands;
  var quantities = infos.quantities;
  var waiters = infos.waiters;

  var _iterator2 = _createForOfIteratorHelper(commands),
      _step2;

  try {
    var _loop2 = function _loop2() {
      var cmd = _step2.value;
      var newLi = document.createElement("li");
      var newFacade = document.createElement("div");
      var newContent = document.createElement("div");
      var newPriceCard = document.createElement("div");
      var newFacadeList = document.createElement("div");
      var newContentList = document.createElement("div");
      var newFacadeName = document.createElement("div");
      var newContentName = document.createElement("div");
      var newTime = document.createElement("div");
      var newPrintBtn = document.createElement("button");
      var cmdQtities = quantities[cmd.id];
      newFacadeName.innerHTML = waiters[cmd.id].first_name;
      newContentName.innerHTML = waiters[cmd.id].first_name + " " + waiters[cmd.id].last_name;

      for (drink in cmdQtities) {
        newFacadeList.innerHTML += cmdQtities[drink] + " " + drink + ", ";
      }

      newContentList.innerHTML = newFacadeList.innerHTML;
      newFacade.appendChild(newFacadeList);
      newFacade.appendChild(newFacadeName);
      newPriceCard.innerHTML = cmd.amount;
      var date = new Date(cmd.created_at);
      var hh = date.getHours() >= 10 ? date.getHours() : "0" + date.getHours();
      var mm = date.getMinutes() >= 10 ? date.getMinutes() : "0" + date.getMinutes();
      newTime.innerHTML = hh + "h" + mm;
      newPrintBtn.innerHTML = "Valider";
      newPrintBtn.addEventListener("click", function () {
        updateCommandState(cmd.id);
      });
      newContent.appendChild(newContentList);
      newContent.appendChild(newPriceCard);
      newContent.appendChild(newContentName);
      newContent.appendChild(newTime);
      newContent.appendChild(newPrintBtn);
      newLi.appendChild(newFacade);
      newLi.appendChild(newContent);
      toValidateList.appendChild(newLi);
    };

    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      _loop2();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

function updateCommandState(commandId) {
  $.ajax({
    "url": "http://localhost:8000/command/updateState/" + commandId,
    "method": "post",
    "headers": {
      "X-CSRF-TOKEN": localStorage.getItem("token")
    },
    "success": function success(result, status, xhr) {
      console.log(result, status, xhr);
    },
    "error": function error(xhr, status, _error) {
      console.error(_error, status, xhr);
    }
  });
}

function fetchNewCommands() {
  $.ajax({
    "url": "http://localhost:8000/commands/new",
    "method": "get",
    "headers": {
      "X-CSRF-TOKEN": localStorage.getItem("token")
    },
    "success": function success(result, status, xhr) {
      //console.log(result, status, xhr);
      updatePrintList(result);
    },
    "error": function error(xhr, status, _error2) {
      console.error(_error2, status, xhr);
    }
  }); //console.log("fetched");
}

function fetchPrintedCommands() {
  $.ajax({
    "url": "http://localhost:8000/commands/printed",
    "method": "get",
    "headers": {
      "X-CSRF-TOKEN": localStorage.getItem("token")
    },
    "success": function success(result, status, xhr) {
      //console.log(result, status, xhr);
      updateValidateList(result);
    },
    "error": function error(xhr, status, _error3) {
      console.error(_error3, status, xhr);
    }
  }); //console.log("fetched");
}

function main() {
  fetchNewCommands();
  fetchPrintedCommands();
  setInterval(fetchNewCommands, 2000);
  setInterval(fetchPrintedCommands, 1000);
}

main();
/******/ })()
;