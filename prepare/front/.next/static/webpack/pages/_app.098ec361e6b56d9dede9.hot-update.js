webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logIn),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logOut),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogIn),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogOut),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSaga);


 // import { 
//     LOG_IN_REQUSET,
//     LOG_IN_SUCCESS,
//     LOG_IN_FAILURE,
// } from '../reducers/user'
// LogIn

function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/login', data);
}

function logIn(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logIn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          console.log('saga login'); // const result = yield call(logInAPI, action.data);
          // yield delay(1000),

          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'LOG_IN_SUCCESS',
            data: action.data
          });

        case 4:
          _context.next = 10;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          _context.next = 10;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'LOG_IN_FAILURE',
            data: _context.t0.response.data
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 6]]);
} // LogOut


function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/logout');
}

function logOut() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logOut$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 3:
          _context2.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'LOG_OUT_SUCCESS'
          });

        case 5:
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: "LOG_OUT_FAILURE",
            data: _context2.t0.response.data
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 7]]);
}

function watchLogIn() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogIn$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log('saga watchLogin');
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])('LOG_IN_REQUSET', logIn);

        case 3:
          console.log('saga watchLogin');

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

function watchLogOut() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogOut$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])('LOG_OUT_REQUSET', logOut);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function userSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogOut)]);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJsb2dJbiIsImxvZ091dCIsIndhdGNoTG9nSW4iLCJ3YXRjaExvZ091dCIsInVzZXJTYWdhIiwibG9nSW5BUEkiLCJkYXRhIiwiYXhpb3MiLCJwb3N0IiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInB1dCIsInR5cGUiLCJyZXNwb25zZSIsImxvZ091dEFQSSIsImRlbGF5IiwidGFrZUxhdGVzdCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBY1VBLEs7bUdBc0JBQyxNO21HQWlCQUMsVTttR0FNQUMsVzttR0FJZUMsUTs7QUEvRHpCO0NBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBLFNBQVNDLFFBQVQsQ0FBa0JDLElBQWxCLEVBQXdCO0FBQ3BCLFNBQU9DLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxZQUFYLEVBQXlCRixJQUF6QixDQUFQO0FBQ0g7O0FBRUQsU0FBVU4sS0FBVixDQUFnQlMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUlDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBRkosQ0FHTTtBQUNGOztBQUpKO0FBS0ksaUJBQU1DLDhEQUFHLENBQUM7QUFDTkMsZ0JBQUksRUFBRSxnQkFEQTtBQUVOUCxnQkFBSSxFQUFFRyxNQUFNLENBQUNIO0FBRlAsV0FBRCxDQUFUOztBQUxKO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVNLGlCQUFNTSw4REFBRyxDQUFDO0FBQ05DLGdCQUFJLEVBQUUsZ0JBREE7QUFFTlAsZ0JBQUksRUFBRSxZQUFJUSxRQUFKLENBQWFSO0FBRmIsV0FBRCxDQUFUOztBQVZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEMsQ0FpQkE7OztBQUNBLFNBQVNTLFNBQVQsR0FBcUI7QUFDakIsU0FBT1IsNENBQUssQ0FBQ0MsSUFBTixDQUFXLGFBQVgsQ0FBUDtBQUNIOztBQUVELFNBQVVQLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHSSxpQkFBTWUsZ0VBQUssQ0FBQyxJQUFELENBQVg7O0FBSEo7QUFBQTtBQUtNLGlCQUFNSiw4REFBRyxDQUFDO0FBQ05DLGdCQUFJLEVBQUU7QUFEQSxXQUFELENBQVQ7O0FBTE47QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU1EsaUJBQU1ELDhEQUFHLENBQUM7QUFDTkMsZ0JBQUksRUFBRSxpQkFEQTtBQUVOUCxnQkFBSSxFQUFFLGFBQUlRLFFBQUosQ0FBYVI7QUFGYixXQUFELENBQVQ7O0FBVFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBaUJBLFNBQVVKLFVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJUSxpQkFBTyxDQUFDQyxHQUFSLENBQVksaUJBQVo7QUFESjtBQUVJLGlCQUFNTSxxRUFBVSxDQUFDLGdCQUFELEVBQW1CakIsS0FBbkIsQ0FBaEI7O0FBRko7QUFHSVUsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaOztBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1BLFNBQVVSLFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0ksaUJBQU1jLHFFQUFVLENBQUMsaUJBQUQsRUFBb0JoQixNQUFwQixDQUFoQjs7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJZSxTQUFVRyxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNYLGlCQUFNYyw4REFBRyxDQUFDLENBQ05DLCtEQUFJLENBQUNqQixVQUFELENBREUsRUFFTmlCLCtEQUFJLENBQUNoQixXQUFELENBRkUsQ0FBRCxDQUFUOztBQURXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMDk4ZWMzNjFlNmI1NmQ5ZGVkZTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgZm9yaywgdGFrZUxhdGVzdCwgZGVsYXksIHB1dCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG4vLyBpbXBvcnQgeyBcclxuLy8gICAgIExPR19JTl9SRVFVU0VULFxyXG4vLyAgICAgTE9HX0lOX1NVQ0NFU1MsXHJcbi8vICAgICBMT0dfSU5fRkFJTFVSRSxcclxuLy8gfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJ1xyXG5cclxuLy8gTG9nSW5cclxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nLCBkYXRhKVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XHJcbiAgdHJ5e1xyXG4gICAgY29uc29sZS5sb2coJ3NhZ2EgbG9naW4nKTtcclxuICAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgLy8geWllbGQgZGVsYXkoMTAwMCksXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgIHR5cGU6ICdMT0dfSU5fU1VDQ0VTUycsXHJcbiAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgIHR5cGU6ICdMT0dfSU5fRkFJTFVSRScsXHJcbiAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBMb2dPdXRcclxuZnVuY3Rpb24gbG9nT3V0QVBJKCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9nb3V0JylcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ091dCgpIHtcclxuICAgIHRyeXtcclxuICAgIC8vICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dPdXRBUEkpO1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICBcclxuICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgIHR5cGU6ICdMT0dfT1VUX1NVQ0NFU1MnLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiTE9HX09VVF9GQUlMVVJFXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcclxuICAgIGNvbnNvbGUubG9nKCdzYWdhIHdhdGNoTG9naW4nKTtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoJ0xPR19JTl9SRVFVU0VUJywgbG9nSW4pO1xyXG4gICAgY29uc29sZS5sb2coJ3NhZ2Egd2F0Y2hMb2dpbicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KCdMT0dfT1VUX1JFUVVTRVQnLCBsb2dPdXQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICBdKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==