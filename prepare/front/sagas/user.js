import { all, fork, takeLatest, delay, put } from 'redux-saga/effects';
import axios from 'axios';

// import { 
//     LOG_IN_REQUSET,
//     LOG_IN_SUCCESS,
//     LOG_IN_FAILURE,
// } from '../reducers/user'

// LogIn
function logInAPI(data) {
    return axios.post('/api/login', data)
}

function* logIn(action) {
  try{
    console.log('saga login');
      // const result = yield call(logInAPI, action.data);
    // yield delay(1000),
    yield put({
        type: 'LOG_IN_SUCCESS',
        data: action.data,
    });
  } catch (err) {
      yield put({
          type: 'LOG_IN_FAILURE',
          data: err.response.data,
      });
  }
}

// LogOut
function logOutAPI() {
    return axios.post('/api/logout')
}

function* logOut() {
    try{
    //   const result = yield call(logOutAPI);
    yield delay(1000);
    
      yield put({
          type: 'LOG_OUT_SUCCESS',
      });
    } catch (err) {
        yield put({
            type: "LOG_OUT_FAILURE",
            data: err.response.data,
        });
    }
  }


function* watchLogIn() {
    console.log('saga watchLogin');
    yield takeLatest('LOG_IN_REQUSET', logIn);
    console.log('saga watchLogin');
}

function* watchLogOut() {
    yield takeLatest('LOG_OUT_REQUSET', logOut);
}

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
    ])
}