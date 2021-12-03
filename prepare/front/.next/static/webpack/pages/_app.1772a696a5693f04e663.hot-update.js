webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, SIGN_UP, SIGN_UP_SUCCESS, LOG_IN_REQUSET, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUSET, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, loginAction, loginRequsetAction, signUpAction, signUpSuccess, logoutRequsetAction, signUp, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequsetAction", function() { return loginRequsetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpAction", function() { return signUpAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpSuccess", function() { return signUpSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequsetAction", function() { return logoutRequsetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUp", function() { return signUp; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import axios from 'axios';
var dummyUser = {
  id: 1,
  nickname: 'supercoder',
  Posts: [],
  Followings: [],
  Followers: []
};
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
var loginAction = function loginAction(data) {
  return function (dispatch) {
    var state = getState();
    dispatch(loginRequsetAction());
    axios.get('/api/login').then(function (res) {
      dispatch(loginSuccessAction(res.data));
    })["catch"](function (err) {
      dispatch(loginFailureAction(err));
    });
  };
};
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
}; // export const loginSuccessAction = (data) => {
//   return {
//     type: 'LOG_IN_Success',
//     data,
//   }
// };

var logoutRequsetAction = function logoutRequsetAction(data) {
  return {
    type: 'LOG_OUT_REQUSET',
    data: data
  };
}; // export const loginFailureAction = (data) => {
//   return {
//     type: 'LOG_IN_FAILURE',
//     data,
//   }
// };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJkdW1teVVzZXIiLCJpZCIsIm5pY2tuYW1lIiwiUG9zdHMiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwiaW5pdGlhbFN0YXRlIiwiaXNMb2dnaW5nSW4iLCJpc0xvZ2dlZEluIiwiaXNMb2dnaW5nT3V0IiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiU0lHTl9VUCIsIlNJR05fVVBfU1VDQ0VTUyIsIkxPR19JTl9SRVFVU0VUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVVNFVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsImxvZ2luQWN0aW9uIiwiZGF0YSIsImRpc3BhdGNoIiwic3RhdGUiLCJnZXRTdGF0ZSIsImxvZ2luUmVxdXNldEFjdGlvbiIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImxvZ2luU3VjY2Vzc0FjdGlvbiIsImVyciIsImxvZ2luRmFpbHVyZUFjdGlvbiIsInR5cGUiLCJzaWduVXBBY3Rpb24iLCJzaWduVXBTdWNjZXNzIiwibG9nb3V0UmVxdXNldEFjdGlvbiIsInNpZ25VcCIsInJlZHVjZXIiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLFNBQVMsR0FBRztBQUNoQkMsSUFBRSxFQUFFLENBRFk7QUFFaEJDLFVBQVEsRUFBRSxZQUZNO0FBR2hCQyxPQUFLLEVBQUUsRUFIUztBQUloQkMsWUFBVSxFQUFFLEVBSkk7QUFLaEJDLFdBQVMsRUFBRTtBQUxLLENBQWxCO0FBUU8sSUFBTUMsWUFBWSxHQUFHO0FBQzFCQyxhQUFXLEVBQUUsS0FEYTtBQUNOO0FBQ3BCQyxZQUFVLEVBQUUsS0FGYztBQUcxQkMsY0FBWSxFQUFFLEtBSFk7QUFHTDtBQUNyQkMsSUFBRSxF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aUJBQUw7QUFBd0I7QUFDdEIsK0NBQ0tnQixLQURMO0FBRUVmLHNCQUFZLEVBQUUsSUFGaEI7QUFHRUQsb0JBQVUsRUFBRTtBQUhkO0FBS0Q7O0FBQ0QsU0FBSyxpQkFBTDtBQUF3QjtBQUN0QiwrQ0FDS2dCLEtBREw7QUFFRWYsc0JBQVksRUFBRSxLQUZoQjtBQUdFRCxvQkFBVSxFQUFFLEtBSGQ7QUFJRUUsWUFBRSxFQUFFO0FBSk47QUFNRDs7QUFDRCxTQUFLLGlCQUFMO0FBQXdCO0FBQ3RCLCtDQUNLYyxLQURMO0FBRUVmLHNCQUFZLEVBQUUsS0FGaEI7QUFHRUQsb0JBQVUsRUFBRTtBQUhkO0FBS0Q7O0FBQ0QsU0FBS0ssT0FBTDtBQUFjO0FBQ1osK0NBQ0tXLEtBREw7QUFFRWIsb0JBQVUsRUFBRTZCLE1BQU0sQ0FBQ2xCO0FBRnJCO0FBSUQ7O0FBQ0Q7QUFBUztBQUNQLGlDQUNLRSxLQURMO0FBR0Q7QUF4REg7QUEwREQsQ0EzREQ7O0FBNkRlZSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjE3NzJhNjk2YTU2OTNmMDRlNjYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgZHVtbXlVc2VyID0ge1xyXG4gIGlkOiAxLFxyXG4gIG5pY2tuYW1lOiAnc3VwZXJjb2RlcicsXHJcbiAgUG9zdHM6IFtdLFxyXG4gIEZvbGxvd2luZ3M6IFtdLFxyXG4gIEZvbGxvd2VyczogW10sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGlzTG9nZ2luZ0luOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhOykkVxyXG4gIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gIGlzTG9nZ2luZ091dDogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICBtZTogbnVsbCxcclxuICBzaWduVXBEYXRhOiB7fSxcclxuICBsb2dpbkRhdGE6IHt9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVAgPSAnU0lHTl9VUCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVVNFVCA9ICdMT0dfSU5fUkVRVVNFVCc7IC8vIOyVoeyFmOydmCDsnbTrpoRcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJzsgLy8g7JWh7IWY7J2YIOydtOumhFxyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnOyAvLyDslaHshZjsnZgg7J2066aEXHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVU0VUID0gJ0xPR19PVVRfUkVRVVNFVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XHJcbiAgICBkaXNwYXRjaChsb2dpblJlcXVzZXRBY3Rpb24oKSlcclxuICAgIGF4aW9zLmdldCgnL2FwaS9sb2dpbicpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChsb2dpblN1Y2Nlc3NBY3Rpb24ocmVzLmRhdGEpKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChsb2dpbkZhaWx1cmVBY3Rpb24oZXJyKSk7XHJcbiAgICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1c2V0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogJ0xPR19JTl9SRVFVU0VUJyxcclxuICAgIGRhdGEsXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ25VcEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNJR05fVVAsXHJcbiAgICBkYXRhLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnblVwU3VjY2VzcyA9IHtcclxuICB0eXBlOiAnU0lHTl9VUF9TVUNDRVNTJyxcclxufTtcclxuXHJcblxyXG4vLyBleHBvcnQgY29uc3QgbG9naW5TdWNjZXNzQWN0aW9uID0gKGRhdGEpID0+IHtcclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgdHlwZTogJ0xPR19JTl9TdWNjZXNzJyxcclxuLy8gICAgIGRhdGEsXHJcbi8vICAgfVxyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVzZXRBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiAnTE9HX09VVF9SRVFVU0VUJyxcclxuICAgIGRhdGEsXHJcbiAgfVxyXG59O1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGxvZ2luRmFpbHVyZUFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHR5cGU6ICdMT0dfSU5fRkFJTFVSRScsXHJcbi8vICAgICBkYXRhLFxyXG4vLyAgIH1cclxuLy8gfTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaWduVXAgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSUdOX1VQLFxyXG4gICAgZGF0YSxcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdMT0dfSU5fUkVRVVNFVCc6IHtcclxuICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgbG9naW4nKVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9nZ2luZ0luOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSAnTE9HX0lOX1NVQ0NFUyc6IHtcclxuICAgICAgY29uc29sZS5sb2coJ2xvZ2luIHN1Y2Nlc3MnKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xvZ2dpbmdJbjogZmFsc2UsXHJcbiAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcclxuICAgICAgICBtZTogeyAuLi5hY3Rpb24uZGF0YSwgbmlja25hbWU6ICdzdXBlcmNvZGVyJyB9LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSAnTE9HX0lOX0ZBSUxVUkUnOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMb2dnaW5nSW46IGZhbHNlLFxyXG4gICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSAnTE9HX09VVF9SRVFVU0VUJzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9nZ2luZ091dDogdHJ1ZSxcclxuICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgJ0xPR19PVVRfU1VDQ0VTUyc6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLFxyXG4gICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgIG1lOiBudWxsLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSAnTE9HX09VVF9GQUlMVVJFJzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9nZ2luZ091dDogZmFsc2UsXHJcbiAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlIFNJR05fVVA6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzaWduVXBEYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==