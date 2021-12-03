webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, SIGN_UP, SIGN_UP_SUCCESS, LOG_IN_REQUSET, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUSET, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, loginRequsetAction, signUpAction, signUpSuccess, logoutRequsetAction, signUp, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP", function() { return SIGN_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUSET", function() { return LOG_IN_REQUSET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUSET", function() { return LOG_OUT_REQUSET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequsetAction", function() { return loginRequsetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpAction", function() { return signUpAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpSuccess", function() { return signUpSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequsetAction", function() { return logoutRequsetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUp", function() { return signUp; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// const dummyUser = {
//   id: 1,
//   nickname: 'supercoder',
//   Posts: [],
//   Followings: [],
//   Followers: [],
// };
var initialState = {
  isLoggingIn: false,
  // 로그인 시도중
  isLoggedIn: false,
  isLoggingOut: false,
  // 로그아웃 시도중
  me: null,
  signUpData: {},
  loginData: {}
};
var SIGN_UP = 'SIGN_UP';
var SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
var LOG_IN_REQUSET = 'LOG_IN_REQUSET'; // 액션의 이름

var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; // 액션의 이름

var LOG_IN_FAILURE = 'LOG_IN_FAILURE'; // 액션의 이름

var LOG_OUT_REQUSET = 'LOG_OUT_REQUSET';
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
var LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
var loginRequsetAction = function loginRequsetAction(data) {
  return {
    type: 'LOG_IN_REQUSET',
    data: data
  };
};
var signUpAction = function signUpAction(data) {
  return {
    type: SIGN_UP,
    data: data
  };
};
var signUpSuccess = {
  type: 'SIGN_UP_SUCCESS'
};
var logoutRequsetAction = function logoutRequsetAction(data) {
  return {
    type: 'LOG_OUT_REQUSET',
    data: data
  };
};
var signUp = function signUp(data) {
  return {
    type: SIGN_UP,
    data: data
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'LOG_IN_REQUSET':
      {
        console.log('reducer login');
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoggingIn: true
        });
      }

    case 'LOG_IN_SUCCES':
      {
        console.log('login success');
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoggingIn: false,
          isLoggedIn: true,
          me: _objectSpread(_objectSpread({}, action.data), {}, {
            nickname: 'supercoder'
          })
        });
      }

    case 'LOG_IN_FAILURE':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoggingIn: false,
          isLoggedIn: false
        });
      }

    case 'LOG_OUT_REQUSET':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoggingOut: true,
          isLoggedIn: false
        });
      }

    case 'LOG_OUT_SUCCESS':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoggingOut: false,
          isLoggedIn: false,
          me: null
        });
      }

    case 'LOG_OUT_FAILURE':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoggingOut: false,
          isLoggedIn: false
        });
      }

    case SIGN_UP:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          signUpData: action.data
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJpc0xvZ2dpbmdJbiIsImlzTG9nZ2VkSW4iLCJpc0xvZ2dpbmdPdXQiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJTSUdOX1VQIiwiU0lHTl9VUF9TVUNDRVNTIiwiTE9HX0lOX1JFUVVTRVQiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVU0VUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwibG9naW5SZXF1c2V0QWN0aW9uIiwiZGF0YSIsInR5cGUiLCJzaWduVXBBY3Rpb24iLCJzaWduVXBTdWNjZXNzIiwibG9nb3V0UmVxdXNldEFjdGlvbiIsInNpZ25VcCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJuaWNrbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFlBQVksR0FBRztBQUMxQkMsYUFBVyxFQUFFLEtBRGE7QUFDTjtBQUNwQkMsWUFBVSxFQUFFLEtBRmM7QUFHMUJDLGNBQVksRUFBRSxLQUhZO0FBR0w7QUFDckJDLElBQUUsRUFBRSxJQUpzQjtBQUsxQkMsWUFBVSxFQUFFLEVBTGM7QUFNMUJDLFdBQVMsRUFBRTtBQU5lLENBQXJCO0FBU0EsSUFBTUMsT0FBTyxHQUFHLFNBQWhCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUVBLElBQU1DLGNBQWMsR0FBRyxnQkFBdkIsQyxDQUF5Qzs7QUFDekMsSUFBTUMsY0FBYyxHQUFHLGdCQUF2QixDLENBQXlDOztBQUN6QyxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCLEMsQ0FBeUM7O0FBRXpDLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUVBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsSUFBRCxFQUFVO0FBQzFDLFNBQU87QUFDTEMsUUFBSSxFQUFFLGdCQUREO0FBRUxELFFBQUksRUFBSkE7QUFGSyxHQUFQO0FBSUQsQ0FMTTtBQU9BLElBQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNGLElBQUQsRUFBVTtBQUNwQyxTQUFPO0FBQ0xDLFFBQUksRUFBRVYsT0FERDtBQUVMUyxRQUFJLEVBQUpBO0FBRkssR0FBUDtBQUlELENBTE07QUFPQSxJQUFNRyxhQUFhLEdBQUc7QUFDM0JGLE1BQUksRUFBRTtBQURxQixDQUF0QjtBQUlBLElBQU1HLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0osSUFBRCxFQUFVO0FBQzNDLFNBQU87QUFDTEMsUUFBSSxFQUFFLGlCQUREO0FBRUxELFFBQUksRUFBSkE7QUFGSyxHQUFQO0FBSUQsQ0FMTTtBQVFBLElBQU1LLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNMLElBQUQsRUFBVTtBQUM5QixTQUFPO0FBQ0xDLFFBQUksRUFBRVYsT0FERDtBQUVMUyxRQUFJLEVBQUpBO0FBRkssR0FBUDtBQUlELENBTE07O0FBT1AsSUFBTU0sT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBa0M7QUFBQSxNQUFqQ0MsS0FBaUMsdUVBQXpCdkIsWUFBeUI7QUFBQSxNQUFYd0IsTUFBVzs7QUFDaEQsVUFBUUEsTUFBTSxDQUFDUCxJQUFmO0FBQ0UsU0FBSyxnQkFBTDtBQUF1QjtBQUNyQlEsZUFBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUNBLCtDQUNLSCxLQURMO0FBRUV0QixxQkFBVyxFQUFFO0FBRmY7QUFJRDs7QUFDRCxTQUFLLGVBQUw7QUFBc0I7QUFDcEJ3QixlQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBQ0EsK0NBQ0tILEtBREw7QUFFRXRCLHFCQUFXLEVBQUUsS0FGZjtBQUdFQyxvQkFBVSxFQUFFLElBSGQ7QUFJRUUsWUFBRSxrQ0FBT29CLE1BQU0sQ0FBQ1IsSUFBZDtBQUFvQlcsb0JBQVEsRUFBRTtBQUE5QjtBQUpKO0FBTUQ7O0FBQ0QsU0FBSyxnQkFBTDtBQUF1QjtBQUNyQiwrQ0FDS0osS0FETDtBQUVFdEIscUJBQVcsRUFBRSxLQUZmO0FBR0VDLG9CQUFVLEVBQUU7QUFIZDtBQUtEOztBQUNELFNBQUssaUJBQUw7QUFBd0I7QUFDdEIsK0NBQ0txQixLQURMO0FBRUVwQixzQkFBWSxFQUFFLElBRmhCO0FBR0VELG9CQUFVLEVBQUU7QUFIZDtBQUtEOztBQUNELFNBQUssaUJBQUw7QUFBd0I7QUFDdEIsK0NBQ0txQixLQURMO0FBRUVwQixzQkFBWSxFQUFFLEtBRmhCO0FBR0VELG9CQUFVLEVBQUUsS0FIZDtBQUlFRSxZQUFFLEVBQUU7QUFKTjtBQU1EOztBQUNELFNBQUssaUJBQUw7QUFBd0I7QUFDdEIsK0NBQ0ttQixLQURMO0FBRUVwQixzQkFBWSxFQUFFLEtBRmhCO0FBR0VELG9CQUFVLEVBQUU7QUFIZDtBQUtEOztBQUNELFNBQUtLLE9BQUw7QUFBYztBQUNaLCtDQUNLZ0IsS0FETDtBQUVFbEIsb0JBQVUsRUFBRW1CLE1BQU0sQ0FBQ1I7QUFGckI7QUFJRDs7QUFDRDtBQUFTO0FBQ1AsaUNBQ0tPLEtBREw7QUFHRDtBQXhESDtBQTBERCxDQTNERDs7QUE2RGVELHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNTRiNDJhNWEwYmJjMmMxMTVmYmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IGR1bW15VXNlciA9IHtcclxuLy8gICBpZDogMSxcclxuLy8gICBuaWNrbmFtZTogJ3N1cGVyY29kZXInLFxyXG4vLyAgIFBvc3RzOiBbXSxcclxuLy8gICBGb2xsb3dpbmdzOiBbXSxcclxuLy8gICBGb2xsb3dlcnM6IFtdLFxyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBpc0xvZ2dpbmdJbjogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcclxuICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgbWU6IG51bGwsXHJcbiAgc2lnblVwRGF0YToge30sXHJcbiAgbG9naW5EYXRhOiB7fSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQID0gJ1NJR05fVVAnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVTRVQgPSAnTE9HX0lOX1JFUVVTRVQnOyAvLyDslaHshZjsnZgg7J2066aEXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7IC8vIOyVoeyFmOydmCDsnbTrpoRcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJzsgLy8g7JWh7IWY7J2YIOydtOumhFxyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVVNFVCA9ICdMT0dfT1VUX1JFUVVTRVQnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVzZXRBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiAnTE9HX0lOX1JFUVVTRVQnLFxyXG4gICAgZGF0YSxcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnblVwQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0lHTl9VUCxcclxuICAgIGRhdGEsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaWduVXBTdWNjZXNzID0ge1xyXG4gIHR5cGU6ICdTSUdOX1VQX1NVQ0NFU1MnLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVzZXRBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiAnTE9HX09VVF9SRVFVU0VUJyxcclxuICAgIGRhdGEsXHJcbiAgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzaWduVXAgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSUdOX1VQLFxyXG4gICAgZGF0YSxcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdMT0dfSU5fUkVRVVNFVCc6IHtcclxuICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgbG9naW4nKVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9nZ2luZ0luOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSAnTE9HX0lOX1NVQ0NFUyc6IHtcclxuICAgICAgY29uc29sZS5sb2coJ2xvZ2luIHN1Y2Nlc3MnKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xvZ2dpbmdJbjogZmFsc2UsXHJcbiAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcclxuICAgICAgICBtZTogeyAuLi5hY3Rpb24uZGF0YSwgbmlja25hbWU6ICdzdXBlcmNvZGVyJyB9LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSAnTE9HX0lOX0ZBSUxVUkUnOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMb2dnaW5nSW46IGZhbHNlLFxyXG4gICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSAnTE9HX09VVF9SRVFVU0VUJzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9nZ2luZ091dDogdHJ1ZSxcclxuICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgJ0xPR19PVVRfU1VDQ0VTUyc6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLFxyXG4gICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgIG1lOiBudWxsLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSAnTE9HX09VVF9GQUlMVVJFJzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9nZ2luZ091dDogZmFsc2UsXHJcbiAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlIFNJR05fVVA6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzaWduVXBEYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==