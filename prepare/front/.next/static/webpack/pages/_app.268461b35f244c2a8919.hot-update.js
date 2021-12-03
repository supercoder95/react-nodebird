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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


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
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/login').then(function (res) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJkdW1teVVzZXIiLCJpZCIsIm5pY2tuYW1lIiwiUG9zdHMiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwiaW5pdGlhbFN0YXRlIiwiaXNMb2dnaW5nSW4iLCJpc0xvZ2dlZEluIiwiaXNMb2dnaW5nT3V0IiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiU0lHTl9VUCIsIlNJR05fVVBfU1VDQ0VTUyIsIkxPR19JTl9SRVFVU0VUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVVNFVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsImxvZ2luQWN0aW9uIiwiZGF0YSIsImRpc3BhdGNoIiwic3RhdGUiLCJnZXRTdGF0ZSIsImxvZ2luUmVxdXNldEFjdGlvbiIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImxvZ2luU3VjY2Vzc0FjdGlvbiIsImVyciIsImxvZ2luRmFpbHVyZUFjdGlvbiIsInR5cGUiLCJzaWduVXBBY3Rpb24iLCJzaWduVXBTdWNjZXNzIiwibG9nb3V0UmVxdXNldEFjdGlvbiIsInNpZ25VcCIsInJlZHVjZXIiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2hCQyxJQUFFLEVBQUUsQ0FEWTtBQUVoQkMsVUFBUSxFQUFFLFlBRk07QUFHaEJDLE9BQUssRUFBRSxFQUhTO0FBSWhCQyxZQUFVLEVBQUUsRUFKSTtBQUtoQkMsV0FBUyxFQUFFO0FBTEssQ0FBbEI7QUFRTyxJQUFNQyxZQUFZLEdBQUc7QUFDMUJDLGFBQVcsRUFBRSxLQURhO0FBQ047QUFDcEJDLFlBQVUsRUFBRSxLQUZjO0FBRzFCQyxjQUFZLEVBQUUsS0FIWTtBQUdMO0FBQ3JCQyxJQUFF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QUssaUJBQUw7QUFBd0I7QUFDdEIsK0NBQ0tnQixLQURMO0FBRUVmLHNCQUFZLEVBQUUsSUFGaEI7QUFHRUQsb0JBQVUsRUFBRTtBQUhkO0FBS0Q7O0FBQ0QsU0FBSyxpQkFBTDtBQUF3QjtBQUN0QiwrQ0FDS2dCLEtBREw7QUFFRWYsc0JBQVksRUFBRSxLQUZoQjtBQUdFRCxvQkFBVSxFQUFFLEtBSGQ7QUFJRUUsWUFBRSxFQUFFO0FBSk47QUFNRDs7QUFDRCxTQUFLLGlCQUFMO0FBQXdCO0FBQ3RCLCtDQUNLYyxLQURMO0FBRUVmLHNCQUFZLEVBQUUsS0FGaEI7QUFHRUQsb0JBQVUsRUFBRTtBQUhkO0FBS0Q7O0FBQ0QsU0FBS0ssT0FBTDtBQUFjO0FBQ1osK0NBQ0tXLEtBREw7QUFFRWIsb0JBQVUsRUFBRTZCLE1BQU0sQ0FBQ2xCO0FBRnJCO0FBSUQ7O0FBQ0Q7QUFBUztBQUNQLGlDQUNLRSxLQURMO0FBR0Q7QUF4REg7QUEwREQsQ0EzREQ7O0FBNkRlZSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjI2ODQ2MWIzNWYyNDRjMmE4OTE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgZHVtbXlVc2VyID0ge1xyXG4gIGlkOiAxLFxyXG4gIG5pY2tuYW1lOiAnc3VwZXJjb2RlcicsXHJcbiAgUG9zdHM6IFtdLFxyXG4gIEZvbGxvd2luZ3M6IFtdLFxyXG4gIEZvbGxvd2VyczogW10sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGlzTG9nZ2luZ0luOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhOykkVxyXG4gIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gIGlzTG9nZ2luZ091dDogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICBtZTogbnVsbCxcclxuICBzaWduVXBEYXRhOiB7fSxcclxuICBsb2dpbkRhdGE6IHt9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVAgPSAnU0lHTl9VUCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVU0VUID0gJ0xPR19JTl9SRVFVU0VUJzsgLy8g7JWh7IWY7J2YIOydtOumhFxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnOyAvLyDslaHshZjsnZgg7J2066aEXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7IC8vIOyVoeyFmOydmCDsnbTrpoRcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVVNFVCA9ICdMT0dfT1VUX1JFUVVTRVQnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xyXG4gICAgZGlzcGF0Y2gobG9naW5SZXF1c2V0QWN0aW9uKCkpXHJcbiAgICBheGlvcy5nZXQoJy9hcGkvbG9naW4nKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gobG9naW5TdWNjZXNzQWN0aW9uKHJlcy5kYXRhKSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gobG9naW5GYWlsdXJlQWN0aW9uKGVycikpO1xyXG4gICAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdXNldEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6ICdMT0dfSU5fUkVRVVNFVCcsXHJcbiAgICBkYXRhLFxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaWduVXBBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSUdOX1VQLFxyXG4gICAgZGF0YSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ25VcFN1Y2Nlc3MgPSB7XHJcbiAgdHlwZTogJ1NJR05fVVBfU1VDQ0VTUycsXHJcbn07XHJcblxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGxvZ2luU3VjY2Vzc0FjdGlvbiA9IChkYXRhKSA9PiB7XHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHR5cGU6ICdMT0dfSU5fU3VjY2VzcycsXHJcbi8vICAgICBkYXRhLFxyXG4vLyAgIH1cclxuLy8gfTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1c2V0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogJ0xPR19PVVRfUkVRVVNFVCcsXHJcbiAgICBkYXRhLFxyXG4gIH1cclxufTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBsb2dpbkZhaWx1cmVBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICB0eXBlOiAnTE9HX0lOX0ZBSUxVUkUnLFxyXG4vLyAgICAgZGF0YSxcclxuLy8gICB9XHJcbi8vIH07XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnblVwID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0lHTl9VUCxcclxuICAgIGRhdGEsXHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSAnTE9HX0lOX1JFUVVTRVQnOiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdyZWR1Y2VyIGxvZ2luJylcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xvZ2dpbmdJbjogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgJ0xPR19JTl9TVUNDRVMnOiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdsb2dpbiBzdWNjZXNzJyk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMb2dnaW5nSW46IGZhbHNlLFxyXG4gICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXHJcbiAgICAgICAgbWU6IHsgLi4uYWN0aW9uLmRhdGEsIG5pY2tuYW1lOiAnc3VwZXJjb2RlcicgfSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgJ0xPR19JTl9GQUlMVVJFJzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9nZ2luZ0luOiBmYWxzZSxcclxuICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgJ0xPR19PVVRfUkVRVVNFVCc6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xvZ2dpbmdPdXQ6IHRydWUsXHJcbiAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlICdMT0dfT1VUX1NVQ0NFU1MnOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMb2dnaW5nT3V0OiBmYWxzZSxcclxuICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgICAgICBtZTogbnVsbCxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgJ0xPR19PVVRfRkFJTFVSRSc6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLFxyXG4gICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSBTSUdOX1VQOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc2lnblVwRGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=