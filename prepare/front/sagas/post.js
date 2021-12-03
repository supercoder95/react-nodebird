import { all, fork, delay, put, throttle } from 'redux-saga/effects'
import axios from 'axios';

function addPostAPI(data) {
    return axios.post('/api/post', data)
}

function* addPost(action) {
    try{
        yield delay(1000);
    //   const result = yield call(addPostAPI, action.data);
      yield put({
          type: 'ADD_POST_SUCCESS',
      });
    } catch (err) {
        yield put({
            type: "ADD_POST_FAILURE",
            data: err.response.data,
        });
    }
  }


function* watchAddPost() {
    yield throttle('ADD_POST_REQUSET', addPost, 2000);
}


export default function* postSaga() {
    yield all([
        fork(watchAddPost),
    ])
}